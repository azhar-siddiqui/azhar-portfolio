import { Icons } from "@/components/common/icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-linear-to-b from-background to-background/95 py-20 md:py-32"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--color-primary)/0.06),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Small top badge / pill */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent/40 backdrop-blur-sm rounded-full border border-primary/30 text-sm font-medium text-primary mb-8">
          <Mail className="h-4 w-4" />
          <span>Let's Talk</span>
        </div>

        {/* Main heading */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
          Get In Touch
        </h2>

        {/* Short description */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10 md:mb-14">
          I'm always open to discussing new opportunities, innovative projects,{" "}
          <br className="hidden sm:block" />
          or partnerships. Feel free to reach out on{" "}
          <a
            href="https://www.linkedin.com/in/azhar-siddiqui-673147179/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary/80 underline underline-offset-4 transition-colors font-medium"
          >
            LinkedIn ↗
          </a>{" "}
          for professional inquiries.
        </p>

        {/* Your contact info (small, subtle) */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-muted-foreground mb-12">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-secondary" />
            <span>+91 7558380826</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-secondary" />
            <a
              href="mailto:azhartsiddiqui@gmail.com"
              className="hover:text-secondary/80 transition-colors"
            >
              azhartsiddiqui@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Icons.github className="h-4 w-4 text-secondary" />
            <a
              href="https://github.com/azhar-siddiqui"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary/80 transition-colors"
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
              "bg-linear-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/30",
              "transition-all duration-300",
            )}
            asChild
          >
            <a
              href="https://www.linkedin.com/in/azhar-siddiqui-673147179/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </a>
          </Button>

          {/* Email Button */}
          <Button
            variant="outline"
            size="lg"
            className={cn(
              "min-w-65 h-14 text-lg font-medium rounded-full",
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
