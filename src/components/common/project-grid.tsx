"use client";

import { projects } from "@/data/project";
import { cn } from "@/lib/utils";
import { ExternalLink, Star } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";

interface ProjectsGridProps {
  activeCategory: string;
  searchQuery: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProjectGrid({
  activeCategory,
  searchQuery,
}: Readonly<ProjectsGridProps>) {
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
    <section className="bg-linear-to-b from-background to-background py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              variants={itemVariants}
            >
              <Card
                className={cn(
                  "relative overflow-hidden rounded-2xl bg-card/60 border-border/50",
                  "hover:shadow-primary/10 hover:border-primary/40 hover:scale-[1.02] transition-all duration-300",
                )}
              >
                <motion.div
                  className="relative h-40 bg-linear-to-b from-card to-card flex items-center justify-center group"
                  whileHover={{ y: -5 }}
                >
                  {/* Placeholder - gradient icon */}
                  <motion.div
                    className="w-20 h-20 bg-linear-to-br from-primary to-secondary rounded-xl"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Star icon */}
                  <motion.div
                    className="absolute top-3 right-3"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-secondary"
                    >
                      <Star className="h-5 w-5" />
                    </Button>
                  </motion.div>
                </motion.div>

                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg md:text-xl font-bold text-foreground line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-card/70 text-muted-foreground border-border/50 whitespace-nowrap shrink-0 text-xs"
                    >
                      {project.tech}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex flex-wrap gap-2 items-center">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <Badge
                      key={`${tag}-${i}`}
                      variant="outline"
                      className="text-xs text-muted-foreground border-border/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.link && (
                    <motion.div className="ml-auto" whileHover={{ x: 5 }}>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-secondary hover:text-secondary/80 p-0 h-auto font-semibold text-xs"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 py-2"
                        >
                          View <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </motion.div>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            className="text-center text-muted-foreground mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No projects match your search or filter.
          </motion.p>
        )}
      </div>
    </section>
  );
}
