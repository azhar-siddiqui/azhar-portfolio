import { projects } from "@/data/project";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ProjectsGridProps {
  activeCategory: string;
  searchQuery: string;
}

export default function ProjectGrid({
  activeCategory,
  searchQuery,
}: Readonly<ProjectsGridProps>) {
  // Filter logic: by category (e.g., "Featured" shows isFeatured), tags, or search
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "Featured"
        ? project.isFeatured
        : project.tags.includes(activeCategory) ||
          project.tech === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-gray-950 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={`${project.title}-${index}`}
              className={cn(
                "relative overflow-hidden rounded-2xl bg-gray-900/80 border border-gray-800/50",
                "hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.02] transition-all duration-300",
              )}
            >
              <CardHeader className="p-0">
                <div className="relative h-40 bg-linear-to-b from-gray-800 to-gray-900 flex items-center justify-center">
                  {/* Placeholder image (brown rounded square) */}
                  <div className="w-20 h-20 bg-amber-900/80 rounded-xl" />
                  {/* Star icon top-right */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-gray-500 hover:text-amber-400"
                  >
                    <Star className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-white">
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="bg-amber-500/20 text-amber-300 border-amber-500/30"
                  >
                    {project.tech}
                  </Badge>
                </div>
                <p className="text-sm text-gray-400 line-clamp-3">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge
                    key={`${tag}-${i}`}
                    variant="outline"
                    className="text-xs text-gray-500 border-gray-700/50"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.link && (
                  <Button
                    variant="link"
                    asChild
                    className="ml-auto text-cyan-400"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No projects match your search or filter.
          </p>
        )}
      </div>
    </section>
  );
}
