"use client";

import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import * as SimpleIcons from "simple-icons";
import { BlurFade } from "../ui/blur-fade";

const BLUR_FADE_DELAY = 0.03;

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = Object.keys(DATA.skills);
  const allSkills =
    selectedCategory === "all"
      ? Object.entries(DATA.skills).flatMap(([cat, skills]) =>
          skills.map((skill) => ({ skill, category: cat })),
        )
      : DATA.skills[selectedCategory as keyof typeof DATA.skills]?.map(
          (skill) => ({ skill, category: selectedCategory }),
        ) || [];

  const getIcon = (iconSlug: string | null) => {
    if (!iconSlug) return null;
    const iconKey = `si${iconSlug.charAt(0).toUpperCase()}${iconSlug.slice(
      1,
    )}` as keyof typeof SimpleIcons;
    return SimpleIcons[iconKey] || null;
  };

  const getIconColor = (skill: any, icon: any) => {
    const isDark =
      theme === "dark" || (theme === "system" && systemTheme === "dark");
    return skill.color && isDark ? skill.color : `#${icon.hex}`;
  };

  return (
    <section id="skills">
      <div className="mx-auto w-full max-w-6xl">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <h2 className="section-heading mb-8">
            Skills
            <div className="section-heading-underline"></div>
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
            <Badge
              variant={selectedCategory === "all" ? "default" : "secondary"}
              className={`cursor-pointer px-4 py-2 text-sm sm:text-base font-semibold transition-all duration-300 rounded-lg ${
                selectedCategory === "all"
                  ? "bg-primary hover:bg-primary/90 text-white border-0"
                  : "hover:bg-primary/10"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </Badge>
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? "default" : "secondary"}
                className={`cursor-pointer px-4 py-2 text-sm sm:text-base font-semibold capitalize transition-all duration-300 rounded-lg ${
                  selectedCategory === cat
                    ? "bg-primary hover:bg-primary/90 text-white border-0"
                    : "hover:bg-primary/10"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </BlurFade>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {allSkills.map(({ skill, category }, id) => {
            const icon = getIcon(skill.icon);
            return (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 2 + id * 0.01} inView>
                <Badge
                  variant="outline"
                  className="px-3 py-2.5 text-sm sm:text-base font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary/40 flex items-center gap-2 cursor-default group"
                >
                  {icon ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
                      fill={
                        mounted ? getIconColor(skill, icon) : `#${icon.hex}`
                      }
                      suppressHydrationWarning
                    >
                      <path d={icon.path} />
                    </svg>
                  ) : null}
                  {skill.name}
                </Badge>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
