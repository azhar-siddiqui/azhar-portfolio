"use client";

import { useEffect, useState } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if page is already loaded
    if (document.readyState === "complete") {
      setIsVisible(false);
      return;
    }

    // Hide loader when page is fully loaded
    const handleLoad = () => {
      setIsVisible(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-9999 bg-background flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-secondary/10 to-primary/10 dark:from-primary/5 dark:via-secondary/5 dark:to-primary/5 animate-pulse" />

      {/* Loader content */}
      <div className="relative flex flex-col items-center gap-4">
        {/* Spinning circles loader */}
        <div className="relative w-16 h-16">
          {/* Outer circle */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-secondary animate-spin" />

          {/* Middle circle */}
          <div
            className="absolute inset-2 rounded-full border-2 border-transparent border-t-secondary border-r-primary animate-spin"
            style={{ animationDirection: "reverse" }}
          />

          {/* Inner circle */}
          <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-primary border-r-secondary animate-spin" />
        </div>

        {/* Loading text */}
        <div className="text-center">
          <p className="text-foreground font-semibold tracking-widest">
            LOADING
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Getting everything ready...
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex gap-2 mt-2">
          <div
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-secondary animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
