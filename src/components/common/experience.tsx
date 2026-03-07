"use client";

import { cn } from "@/lib/utils";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

const experiences = [
  {
    role: "Associate Consultant",
    company: "Kiya.ai",
    period: "Mar 2024 - Present",
    location: "Remote / India",
    description: [
      "Architected and developed the **Global Tanker Fleet Management System** — a TypeScript/React/Vite web application for maritime shipping pool participants.",
      "Implemented **RBAC**, interactive dashboards with global filters, Deck.GL maps, AG Grid data tables, real-time performance reporting, and pool point corrections.",
      "Integrated tools like Tailwind CSS, Vitest (unit testing), SonarQube (code quality), New Relic (monitoring), and Azure CI/CD pipelines.",
      "Mentored junior developers, enforced scalable architecture (modular components, custom hooks, context providers), and focused on high-compliance environments.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Deck.GL",
      "AG Grid",
      "SonarQube",
      "Azure Pipelines",
    ],
  },
  {
    role: "Jr. Full Stack Developer",
    company: "QULOI",
    period: "Jan 2023 - Sept 2023",
    location: "Remote",
    description: [
      "Contributed to a cloud-native logistics SaaS platform (spin-off of global freight forwarding leader) focused on nimble software strategies.",
      "Collaborated with UX designers to build user-friendly interfaces that improved engagement, conversion rates, and drove millions in additional revenue.",
      "Enabled secure third-party integrations, authentication, authorization, and data privacy controls.",
    ],
    tech: ["React", "Node.js", "REST APIs", "UI/UX Collaboration"],
  },
  {
    role: "Sr. Frontend Developer",
    company: "Banao Tech (ATG World)",
    period: "Jan 2021 - Dec 2022",
    location: "India",
    description: [
      "Led frontend development for 10+ web applications, delivering responsive, high-performance user interfaces.",
      "Reduced page load time by **30%** across 10 client websites through optimization techniques — became the company expert on Core Web Vitals and performance.",
      "Implemented responsive design and mobile-first improvements for enhanced user experience across devices.",
    ],
    tech: [
      "React",
      "HTML/CSS/JS",
      "Performance Optimization",
      "Responsive Design",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "RightBrain InfoTech",
    period: "Jan 2020 - Dec 2020",
    location: "Pune, India",
    description: [
      "Collaborated with teams to translate design mockups into responsive, interactive web applications using HTML, CSS, and JavaScript.",
      "Ensured seamless integration of UI/UX principles, conducted code reviews, and optimized application performance.",
      "Actively learned new technologies, troubleshot bugs, and contributed to innovative problem-solving discussions.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
  },
];

export default function Experience() {
  return (
    <section
      id="work"
      className="bg-linear-to-b from-background to-background py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center md:text-left mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            5+ years building scalable web & mobile solutions — from logistics
            SaaS to enterprise maritime systems
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-4 md:left-1/2 h-full w-0.5 bg-linear-to-b from-primary/40 via-primary/20 to-transparent md:transform md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.company}-${index}`}
              className={cn("relative mb-12 md:mb-16")}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 md:translate-x-[-50%] w-10 h-10 rounded-full bg-background border-4 border-primary/40 flex items-center justify-center shadow-lg shadow-primary/10 z-10"
                whileInView={{ scale: [0.8, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Briefcase className="size-5 text-primary" />
              </motion.div>

              {/* Card */}
              <Card
                className={cn(
                  "relative bg-card/60 backdrop-blur-sm border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg",
                  "hover:border-primary/40 hover:shadow-primary/10",
                )}
              >
                <CardContent className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-muted-foreground font-medium">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-secondary font-medium text-sm whitespace-nowrap">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description bullets */}
                  <ul className="space-y-3 text-muted-foreground">
                    {exp.description.map((point, i) => (
                      <motion.li
                        key={`${point}-${i}`}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <ChevronRight className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                        <span
                          dangerouslySetInnerHTML={{ __html: point }}
                          className="text-sm md:text-base"
                        />
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <motion.div
                    className="mt-6 flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {exp.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="px-3 py-1 text-xs md:text-sm"
                      >
                        {t}
                      </Badge>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
