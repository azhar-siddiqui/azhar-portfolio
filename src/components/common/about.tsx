"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Variants (no transition inside states)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      className={cn(
        "relative py-20 md:py-32 overflow-hidden",
        "bg-linear-to-br from-white via-gray-50 to-white",
        "dark:from-slate-950 dark:via-slate-900 dark:to-black",
        "text-gray-900 dark:text-white",
      )}
    >
      {/* Background overlays */}
      <div className="absolute inset-0 opacity-30 dark:opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.08),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.12),transparent_40%)]" />
      </div>

      <div className="absolute inset-0 opacity-20 dark:hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.08),transparent_40%)]" />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Left: Photo + Stats */}
        <motion.div
          className="relative mx-auto md:mx-0"
          variants={itemVariants}
        >
          <motion.div
            className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-full md:max-w-md rounded-3xl overflow-hidden border-2 md:border-4 dark:border-cyan-500/30 border-blue-300/50 shadow-2xl dark:shadow-cyan-500/20 shadow-blue-500/10"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Image
              src="/profile-img.png"
              alt="Sayyed Azhar Aminoddin"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
              sizes="(max-width: 768px) 80vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent dark:from-black/60 pointer-events-none" />
          </motion.div>

          {/* Stats pills */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-8">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "20+", label: "Projects Delivered" },
              { value: "10+", label: "Optimized Sites" },
              { value: "High", label: "Code Quality" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="dark:bg-slate-900/80 bg-white/80 backdrop-blur-sm dark:border-gray-700/50 border border-gray-300/50 rounded-2xl px-5 py-3 text-center dark:shadow-lg dark:shadow-black/40 shadow-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm dark:text-gray-400 text-gray-600 mt-1 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Text content */}
        <motion.div className="space-y-8 md:space-y-10">
          <motion.div className="space-y-3" variants={itemVariants}>
            <h2 className="uppercase text-sm md:text-base font-bold tracking-wider bg-linear-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              ABOUT SAYYED AZHAR
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight dark:text-white text-gray-900">
              Frontend Lead & Full-Stack Engineer
              <br />
              <span className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
                in Nagpur
              </span>
            </h1>
            <motion.p
              className="text-lg md:text-xl dark:text-gray-300 text-gray-700"
              variants={itemVariants}
            >
              Building scalable, performant web & mobile solutions for
              enterprise & logistics
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-6 text-base md:text-lg dark:text-gray-300 text-gray-700 leading-relaxed"
            variants={containerVariants}
          >
            {[
              "I'm a performance-driven Frontend Lead with hands-on experience turning complex business requirements into clean, scalable digital products. From global maritime fleet systems to logistics SaaS platforms, I specialize in React, Next.js, TypeScript, Tailwind CSS, Prisma, and modern stacks that deliver fast, reliable, and maintainable experiences.",
              "At Kiya.ai, I architected and developed the Global Tanker Fleet Management System — a TypeScript/React/Vite application with RBAC, interactive Deck.GL maps, AG Grid dashboards, real-time reporting, and Azure CI/CD pipelines. I mentored juniors, enforced code quality via SonarQube, and optimized performance in high-compliance environments.",
              "Previously at Quloi and Banatech, I collaborated on UX-driven interfaces that boosted engagement, reduced page load times by 30%+, and drove revenue through seamless third-party integrations and responsive design. I thrive on solving real problems with elegant, performant code — whether it's secure authentication, dynamic PDF generation, inventory tracking, or complex data visualization.",
            ].map((text, i) => (
              <motion.p key={`${text}-${i}`} variants={itemVariants}>
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Skills pills */}
          <motion.div
            className="flex flex-wrap gap-2 pt-4"
            variants={itemVariants}
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Prisma",
              "React Native",
              "Node.js",
              "Shadcn UI",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-3 py-1 text-sm dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-500/30 bg-blue-50 text-blue-700 border-blue-200"
              >
                {skill}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
