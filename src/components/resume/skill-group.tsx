"use client";

import { getIcon } from "@/lib/utils";

interface SkillGroupProps {
  readonly title: string;
  readonly skills: ReadonlyArray<{
    readonly name: string;
    readonly icon: string | null;
  }>;
}

export function SkillGroup({ title, skills }: Readonly<SkillGroupProps>) {
  return (
    <div className="flex flex-wrap gap-2">
      <h6 className="text-sm font-semibold tracking-wide text-foreground w-full">
        {title}
      </h6>
      {skills.map((skill) => {
        const icon = getIcon(skill.icon);
        return (
          <span
            key={`${skill.name}-${skill.icon ?? "no-icon"}`}
            className="rounded-full py-1 px-2 text-xs text-muted-foreground flex items-center gap-x-2 bg-card-foreground/10"
          >
            {icon ? (
              <svg
                viewBox="0 0 24 24"
                className="size-3 transition-transform duration-300 group-hover:scale-110"
                fill={`#${icon.hex}`}
                suppressHydrationWarning
              >
                <path d={icon.path} />
              </svg>
            ) : null}
            {skill.name}
          </span>
        );
      })}
    </div>
  );
}
