import Image from "next/image";
import { Badge } from "../ui/badge";

export default function About() {
  return (
    <section className="relative bg-linear-to-br from-gray-950 via-gray-900 to-black text-white py-20 md:py-32 overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.08),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Photo + Stats (mirroring Badhon's layout) */}
        <div className="relative mx-auto md:mx-0">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-125 md:h-125 lg:w-140 lg:h-140 rounded-3xl overflow-hidden border-4 border-cyan-500/20 shadow-2xl shadow-black/60">
            {/* Replace with your professional photo */}
            <Image
              src="/profile-img.png" // Put your photo in /public/images/
              alt="Sayyed Azhar Aminoddin"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
              sizes="(max-width: 768px) 80vw, 50vw"
            />
            {/* Optional overlay gradient for depth */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Stats pills at bottom (like Badhon's) */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "20+", label: "Projects Delivered" },
              { value: "10+", label: "Optimized Sites" },
              { value: "High", label: "Code Quality" },
            ].map((stat, i) => (
              <div
                key={`${stat.value}-${stat.label}-${i}`}
                className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-6 py-4 text-center min-w-35 shadow-lg shadow-black/40"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Text content */}
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-3">
            <h2 className="text-amber-400 uppercase text-sm md:text-base font-medium tracking-wider">
              ABOUT SAYYED AZHAR
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Frontend Lead & Full-Stack Engineer
              <br />
              <span className="text-cyan-400">in Aurangabad</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Building scalable, performant web & mobile solutions for
              enterprise & logistics
            </p>
          </div>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I'm a performance-driven Frontend Lead with hands-on experience
              turning complex business requirements into clean, scalable digital
              products. From global maritime fleet systems to logistics SaaS
              platforms, I specialize in React, Next.js, TypeScript, Tailwind
              CSS, Prisma, and modern stacks that deliver fast, reliable, and
              maintainable experiences.
            </p>

            <p>
              At Kiya.ai, I architected and developed the Global Tanker Fleet
              Management System — a TypeScript/React/Vite application with RBAC,
              interactive Deck.GL maps, AG Grid dashboards, real-time reporting,
              and Azure CI/CD pipelines. I mentored juniors, enforced code
              quality via SonarQube, and optimized performance in
              high-compliance environments.
            </p>

            <p>
              Previously at Quloi and Banatech, I collaborated on UX-driven
              interfaces that boosted engagement, reduced page load times by
              30%+, and drove revenue through seamless third-party integrations
              and responsive design. I thrive on solving real problems with
              elegant, performant code — whether it's secure authentication
              (NextAuth), dynamic PDF generation, inventory tracking, or complex
              data visualization.
            </p>

            <p>
              Outside coding, I'm passionate about mentoring emerging
              developers, refining workflows, exploring new tools like Convex &
              LaunchDarkly, and continuously improving both products and people.
              Driven by curiosity and results, I deliver solutions that scale
              and make an impact.
            </p>
          </div>

          {/* Optional skills pills or CTA */}
          <div className="flex flex-wrap gap-3 pt-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Prisma",
              "React Native",
              "Node.js",
              "Shadcn UI",
              "AG Grid",
              "SonarQube",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-4 py-2 text-base bg-gray-800/50 border-cyan-500/30 text-cyan-300 hover:bg-cyan-950/50"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
