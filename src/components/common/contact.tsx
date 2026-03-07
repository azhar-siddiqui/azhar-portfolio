import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative bg-linear-to-b from-gray-950 via-gray-900 to-black py-20 md:py-32">
      {/* Optional subtle background texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.06),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Small top badge / pill */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-700/50 text-sm font-medium text-cyan-400 mb-8">
          <Mail className="h-4 w-4" />
          <span>Let's Talk</span>
        </div>

        {/* Main heading */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Get In Touch
        </h2>

        {/* Short description */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 md:mb-14">
          I'm always open to discussing new opportunities, innovative projects,{" "}
          <br className="hidden sm:block" />
          or partnerships. Feel free to reach out on{" "}
          <a
            href="https://www.linkedin.com/in/your-linkedin-username" // ← REPLACE WITH YOUR REAL LINKEDIN URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
          >
            LinkedIn ↗
          </a>{" "}
          for professional inquiries.
        </p>

        {/* Your contact info (small, subtle) */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-400 mb-12">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-cyan-400" />
            <span>+91 75583 80826</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-cyan-400" />
            <a
              href="mailto:azhartsiddiqui@gmail.com"
              className="hover:text-cyan-300 transition-colors"
            >
              azhartsiddiqui@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Github className="h-4 w-4 text-cyan-400" />
            <a
              href="https://github.com/azhar-siddiqui"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Two big CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* LinkedIn Button */}
          <Button
            size="lg"
            className={cn(
              "min-w-65 h-14 text-lg font-medium rounded-full",
              "bg-linear-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400",
              "shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all duration-300",
            )}
            asChild
          >
            <a
              href="https://www.linkedin.com/in/your-linkedin-username" // ← REPLACE WITH YOUR REAL LINKEDIN URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </a>
          </Button>

          {/* Email Button */}
          <Button
            variant="outline"
            size="lg"
            className={cn(
              "min-w-65 h-14 text-lg font-medium rounded-full",
              "border-cyan-500/60 text-cyan-400 hover:bg-cyan-950/50 hover:text-cyan-300",
              "transition-all duration-300",
            )}
            asChild
          >
            <a href="mailto:azhartsiddiqui@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
