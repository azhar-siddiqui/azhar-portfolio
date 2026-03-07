import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Optional subtle background texture / noise – remove if not wanted */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(34,211,238,0.08),transparent_25%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-0 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left – Text content */}
        <div className="space-y-8 md:space-y-10">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-700/50 text-sm font-medium text-emerald-400">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>{" "}
            Available for new projects
          </div>

          {/* Main heading */}
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Hello, I'm
              <br />
              <span className="text-primary">Azhar Sayyed</span>
            </h1>

            {/* Underline style – you can adjust thickness/color */}
            <div className="w-32 h-1 bg-linear-to-r from-primary to-primary/80 rounded-full md:w-52" />

            {/* Tagline / description */}
            <p className="text-xl sm:text-2xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Crafting beautiful, functional digital experiences that people
              love and businesses rely on.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 md:gap-16 pt-4">
            {[
              { value: "4+", label: "Years Learning" },
              { value: "15+", label: "Projects Built" },
              { value: "500+", label: "Hours Coding" },
            ].map((stat, i) => (
              <div
                key={`${stat.value}-${stat.label}-${i}`}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 pt-4">
            <Button
              variant="outline"
              size="lg"
              className={cn(
                "gap-2 border-border/60 hover:bg-accent/50 hover:text-accent-foreground",
                "rounded-full whitespace-nowrap px-6 text-sm font-medium",
              )}
            >
              View my work <ArrowDown className="h-4 w-4 animate-bounce" />
            </Button>
            <Button
              size="lg"
              className={cn(
                "gap-2 border-border/60 hover:bg-accent/50 hover:text-accent-foreground",
                "rounded-full whitespace-nowrap px-6 text-sm font-medium",
              )}
            >
              Learn more
            </Button>

            {/* <Button className="rounded-full"></Button> */}
          </div>
        </div>

        {/* Right – Profile photo */}
        <div className="relative mx-auto md:mx-0">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-120 md:h-120 lg:w-130 lg:h-130 rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-black/60">
            {/* Replace with your own photo */}
            <Image
              src="/profile-img.png" // ← put your photo in public/your-photo.jpg
              alt="Azhar"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              priority
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 520px"
            />

            {/* Optional subtle overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Optional decorative ring / glow */}
          <div className="absolute -inset-8 md:-inset-12 rounded-full border border-primary/20 animate-pulse-slow pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
