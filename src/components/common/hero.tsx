"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

// Define variants properly (no transition inside states)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export default function Hero() {
  return (
    <section
      id="home"
      className={cn(
        "relative min-h-screen flex items-center justify-center",
        "bg-linear-to-br from-background via-background to-background",
        "text-foreground overflow-hidden",
      )}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,hsl(var(--color-primary)/0.08),transparent_25%)]" />
      </div>

      {/* Accent gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,hsl(var(--color-primary)/0.06),transparent_35%)]" />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-0 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left – Text content */}
        <motion.div className="space-y-8 md:space-y-10">
          {/* Availability badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/40 backdrop-blur-sm rounded-full border border-primary/30 text-sm font-medium text-primary"
            variants={itemVariants}
            transition={{ duration: 0.7 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 dark:bg-emerald-500" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 dark:bg-emerald-600" />
            </span>{" "}
            Available for new projects
          </motion.div>

          {/* Main heading + underline + tagline */}
          <motion.div className="space-y-4 md:space-y-6">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight"
              variants={itemVariants}
              transition={{ duration: 0.9 }}
            >
              Hello, I'm
              <br />
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Azhar Sayyed
              </span>
            </motion.h1>

            <motion.div
              className="w-0 h-1.5 bg-linear-to-r from-primary to-secondary rounded-full origin-left"
              initial={{ width: 0 }}
              animate={{ width: "13rem" }}
              transition={{ delay: 0.7, duration: 1 }}
            />

            <motion.p
              className="text-xl sm:text-2xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
              variants={itemVariants}
              transition={{ duration: 0.9 }}
            >
              Crafting beautiful, functional digital experiences that people
              love and businesses rely on.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div className="flex flex-wrap gap-10 md:gap-16 pt-4">
            {[
              { value: "5+", label: "Years Learning" },
              { value: "20+", label: "Projects Built" },
              { value: "100%", label: "Happy Clients" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.7 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm md:text-base mt-1 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-5 pt-6"
            variants={itemVariants}
            transition={{ duration: 0.8 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="gap-2 rounded-full px-8 text-base font-semibold"
            >
              View my work
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </Button>

            <Button
              size="lg"
              className="gap-2 rounded-full px-8 text-base font-semibold bg-linear-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/30 text-primary-foreground"
            >
              Let's Talk
            </Button>
          </motion.div>
        </motion.div>

        {/* Right – Profile photo */}
        <motion.div
          className="relative mx-auto lg:mx-0"
          variants={imageVariants}
        >
          <motion.div
            className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-120 lg:h-120 rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/10"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/profile-img.png"
              alt="Azhar Sayyed"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 480px"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Decorative rotating glow ring */}
          <motion.div
            className="absolute -inset-10 lg:-inset-16 rounded-full border border-primary/20 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
