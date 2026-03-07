"use client";

import { cn } from "@/lib/utils";
import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const education = [
  {
    degree: "Master of Computer Science",
    institution: "Savitribai Phule Pune University",
    period: "2021 - 2023",
    location: "Pune, India",
    description:
      "Advanced studies in software engineering, algorithms, data structures, databases, cloud computing, and full-stack development principles. Focused on building scalable, performant systems through coursework projects and research.",
    highlights: [
      "Deepened expertise in modern web technologies and system design",
      "Completed projects involving responsive applications and performance optimization",
    ],
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Savitribai Phule Pune University",
    period: "2018 - 2021",
    location: "Pune, India",
    description:
      "Strong foundation in programming fundamentals, web development, computer systems, operating systems, and software engineering practices. Built core skills through hands-on projects and problem-solving.",
    highlights: [
      "Mastered HTML, CSS, JavaScript, and early frontend/backend concepts",
      "Developed understanding of responsive design and user-centric development",
    ],
  },
];

export default function Education() {
  return (
    <section className="relative dark:bg-linear-to-b dark:from-slate-950 dark:to-black bg-linear-to-b from-white to-gray-50 py-16 md:py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-30 dark:opacity-40 pointer-events-none dark:block hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.08),transparent_40%)]" />
      </div>

      <div className="absolute inset-0 opacity-20 dark:hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.08),transparent_40%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 dark:bg-slate-900/60 bg-white/60 backdrop-blur-md dark:border-blue-500/20 border border-blue-300/50 rounded-full mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GraduationCap className="h-6 w-6 dark:text-blue-400 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900 tracking-tight">
              Education
            </h2>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl dark:text-gray-400 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Building a solid foundation in Computer Science to deliver scalable,
            high-quality software solutions
          </motion.p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative">
          {/* Decorative connecting line */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-0.5 dark:bg-linear-to-r dark:from-transparent dark:via-blue-500/30 dark:to-transparent bg-linear-to-r from-transparent via-blue-300/30 to-transparent hidden md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          {education.map((edu, index) => (
            <motion.div
              key={`${edu.degree}-${index}`}
              className={cn(
                "relative group",
                index === 0 ? "md:-translate-y-8" : "md:translate-y-8",
              )}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: index === 0 ? -32 : 32 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Floating Year Badge */}
              <motion.div
                className="absolute -top-6 left-1/2 -translate-x-1/2 z-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              >
                <motion.div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full dark:bg-slate-900 bg-white dark:border-4 border-2 dark:border-blue-500/40 border-blue-400/50 flex items-center justify-center dark:shadow-xl dark:shadow-blue-900/20 shadow-blue-400/10"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xl md:text-2xl font-bold dark:text-blue-400 text-blue-600">
                    {edu.period.split(" - ")[1]}
                  </span>
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-full dark:bg-blue-500/20 bg-blue-400/10 blur-xl opacity-0"
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Main Card */}
              <Card
                className={cn(
                  "dark:bg-slate-900/60 bg-white/60 backdrop-blur-md dark:border-slate-700/60 border-gray-300/50 rounded-2xl overflow-hidden",
                  "dark:hover:border-blue-500/50 dark:hover:shadow-2xl dark:hover:shadow-blue-500/15 hover:shadow-blue-400/10 transition-all duration-300",
                  "pt-16 md:pt-20",
                )}
              >
                <CardHeader className="pb-4 dark:border-b dark:border-slate-700/40 border-b border-gray-200/40">
                  <CardTitle className="text-2xl font-bold dark:text-white text-gray-900">
                    {edu.degree}
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-3 dark:text-gray-400 text-gray-600 text-sm md:text-base">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 dark:text-blue-400 text-blue-600" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 dark:text-blue-400 text-blue-600" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 md:p-8 space-y-6">
                  <motion.p
                    className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {edu.description}
                  </motion.p>

                  <motion.ul
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {edu.highlights.map((highlight, i) => (
                      <motion.li
                        key={`${highlight}-${i}`}
                        className="flex items-start gap-3 dark:text-gray-300 text-gray-700 text-sm md:text-base"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <div className="mt-1.5 h-2 w-2 rounded-full dark:bg-blue-500 bg-blue-400 shrink-0" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
