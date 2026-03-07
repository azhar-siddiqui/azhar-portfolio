import { cn } from "@/lib/utils";
import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";
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
      // Add GPA or specific achievements if you have them
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
      // Add GPA or notable projects if available
    ],
  },
];

export default function Education() {
  return (
    <section className="relative bg-linear-to-b from-gray-950 to-black py-16 md:py-24 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.08),transparent_40%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900/60 backdrop-blur-md border border-cyan-500/20 rounded-full mb-6">
            <GraduationCap className="h-6 w-6 text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Education
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building a solid foundation in Computer Science to deliver scalable,
            high-quality software solutions
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative">
          {/* Decorative connecting line (subtle curve) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-0.5 bg-linear-to-r from-transparent via-cyan-500/30 to-transparent hidden md:block" />

          {education.map((edu, index) => (
            <div
              key={`${edu.degree}-${index}`}
              className={cn(
                "relative group",
                index === 0 ? "md:-translate-y-8" : "md:translate-y-8", // subtle asymmetry
              )}
            >
              {/* Floating Year Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-900 border-4 border-cyan-500/40 flex items-center justify-center shadow-xl shadow-cyan-900/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl md:text-2xl font-bold text-cyan-400">
                      {edu.period.split(" - ")[1]}
                    </span>
                  </div>
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                </div>
              </div>

              {/* Main Card */}
              <Card
                className={cn(
                  "bg-gray-900/70 backdrop-blur-md border border-gray-800/60 rounded-2xl overflow-hidden",
                  "hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/15 transition-all duration-300",
                  "pt-16 md:pt-20", // space for floating badge
                )}
              >
                <CardHeader className="pb-4 border-b border-gray-800/40">
                  <CardTitle className="text-2xl font-bold text-white">
                    {edu.degree}
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-gray-400">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-cyan-400" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 md:p-8 space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>

                  <ul className="space-y-3">
                    {edu.highlights.map((highlight, i) => (
                      <li
                        key={`${highlight}-${i}`}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-cyan-500 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
