"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

type ResumeDownloadButtonProps = {
  className?: string;
};

export default function ResumeDownloadButton({
  className,
}: Readonly<ResumeDownloadButtonProps>) {
  return (
    <Button
      asChild
      className={cn(
        "group relative h-10 w-10 overflow-hidden rounded-full bg-linear-to-r from-primary to-secondary px-0 text-primary-foreground transition-all duration-300 hover:w-52 hover:shadow-xl hover:shadow-primary/30",
        className,
      )}
    >
      <a href="/Sayyed Azhar.pdf" download aria-label="Download Resume">
        <span className="relative block h-5 w-full">
          <Download className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-8 whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:translate-y-[-50%] group-hover:opacity-100">
            Download Resume
          </span>
        </span>
      </a>
    </Button>
  );
}
