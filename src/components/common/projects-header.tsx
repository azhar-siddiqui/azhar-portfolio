"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils"; // ← shadcn has this utility for class merging
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import ProjectGrid from "./project-grid";

export default function ProjectsHeader() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Featured",
    "Web",
    "Mobile",
    "UI/UX",
    "Open Source",
    // Add more: "Design", "Experimental", etc.
  ];

  return (
    <section className="bg-gray-950/80 backdrop-blur-sm border-b border-gray-800/50 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Search + Filter row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-10">
          {/* Search Input with icon (shadcn Input + wrapper) */}
          <div className="relative flex-1 max-w-xl">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>

            <Input
              type="search"
              placeholder="Search projects, skills, or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                "pl-11 pr-5 py-5 text-base bg-background/70 border-border/60",
                "rounded-full focus-visible:ring-cyan-500/30 focus-visible:border-cyan-500/50",
                "placeholder:text-muted-foreground transition-all duration-200",
              )}
            />
          </div>

          {/* Filter Button (shadcn) */}
          <Button
            variant="outline"
            size="lg"
            className={cn(
              "gap-2 border-border/60 hover:bg-accent/50 hover:text-accent-foreground",
              "rounded-full whitespace-nowrap px-6 text-sm font-medium",
            )}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Category filters – using shadcn Button as chips/tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-3 scrollbar-hide">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={cat === activeCategory ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-all",
                cat !== activeCategory &&
                  "bg-background/50 border-border/50 hover:bg-accent/70 hover:border-border/80 text-muted-foreground hover:text-foreground",
              )}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Title section */}
        <div className="mt-12 md:mt-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            FEATURED PROJECTS
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Selected work by Azhar
          </p>
        </div>

        <ProjectGrid
          activeCategory={activeCategory}
          searchQuery={searchQuery}
        />
      </div>
    </section>
  );
}
