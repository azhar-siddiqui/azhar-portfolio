// Project type (extend as needed)
export type Project = {
  title: string;
  description: string;
  tech: string; // Main badge
  tags: string[]; // Bottom pills
  image?: string; // Placeholder or real path
  link?: string; // GitHub or visit
  isFeatured?: boolean;
  stars?: number;
  forks?: number;
  updated?: string;
};

export const projects: Project[] = [
  {
    title: "CashCounter Pro",
    description:
      "Developed CashCounter Pro, a professional precision currency counter application designed for financial professionals, banks, and businesses. The application supports 150+ currencies with real-time calculation and provides an intuitive interface for accurate cash counting. Features include multi-currency denomination input with automatic subtotal calculation, live grand total updates, and the ability to convert amounts to words. The platform includes comprehensive sharing and copying capabilities for generated summaries. Built with Next.js and TypeScript for type-safe development, styled with Tailwind CSS for responsive design across all devices. Implements advanced state management with React hooks, integrates country-specific currency data using country-data-list, and features dark/light theme support with next-themes. The application is fully SEO-optimized with structured data, meta tags, and XML sitemap for improved discoverability. Deployed as a Progressive Web App (PWA) enabling offline functionality and installation on mobile devices. Achieved Core Web Vitals optimization with 90+ Lighthouse scores across performance, accessibility, and SEO metrics.",
    tech: "Next.js",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "TailwindCSS",
      "Radix UI",
      "Framer Motion",
      "PWA",
    ],
    link: "https://cash-counter-pro-eta.vercel.app/", // Assuming your repo; update if different
    isFeatured: true,
  },
  {
    title: "Bussiness Card ",
    description:
      "A modern, responsive digital business card web application built with TypeScript, Vite, and Tailwind CSS. Features include a personal avatar, contact information, social media links, theme toggling (light/dark mode), and the ability to download a vCard or copy contact details to the clipboard. Designed for fast performance and a clean, professional user experience.",
    tech: "",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS"],
    link: "", // Assuming your repo; update if different
    isFeatured: true,
  },
  {
    title: "We Care",
    description:
      "Comprehensive SaaS-style healthcare platform to digitize laboratory operations. Automates patient lifecycle from registration to real-time tracking and reports.",
    tech: "Next.js",
    tags: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "TanStack Query",
      "RBAC",
      "PDF Generation",
      "PWA",
    ],
    link: "https://we-care-prisma-next-git-main-azhar-siddiquis-projects.vercel.app/",
    isFeatured: true,
  },
  {
    title: "Global Tanker Fleet Management System",
    description:
      "TypeScript-based React web app for maritime shipping. Features RBAC, interactive dashboards, maps (DeckGL), performance reporting, and more.",
    tech: "React",
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "Mapbox",
      "Ag Grid",
      "Highcharts",
      "Tailwind CSS",
      "TanStack Query",
      "SonarQube",
      "New Relic",
    ],
    link: "https://github.com/azhar-siddiqui/global-tanker-fleet", // Update with real link if exists
    isFeatured: true,
  },
  {
    title: "Omni Supply Chain Collaboration Platform",
    description:
      "Cloud-native platform for supply chain collaboration. Manages Purchase Orders, shipments, supplier performance, with real-time dashboards and RBAC.",
    tech: "React",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "NodeJS",
      "Express",
      "GraphQL",
      "Google Maps API",
      "Electron",
    ],
    link: "https://omni.quloi.com", // From resume "Visit: omni"
    isFeatured: true,
  },
  {
    title: "Casa Architect",
    description:
      "Architectural firm site with service offerings, portfolio showcase, pricing matrix, testimonials, and responsive design for conversions.",
    tech: "React",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    link: "https://casaarch.com", // From resume "Visit: Casa Arch"; adjust URL
    isFeatured: true,
  },
  {
    title: "Zomato Clone",
    description:
      "React Native app with user auth, home screen, restaurant listings, search, cart, ordering, and multiple payment options.",
    tech: "React Native",
    tags: ["React Native", "Firebase", "Auth", "Stripe", "Google Maps API"],
    link: "https://example.com/zomato-app-download", // From resume "Download: Zomato App"; update
    isFeatured: true,
  },
  {
    title: "Real-Time Data Updation Application",
    description: "App using Convex and LaunchDarkly.",
    tech: "Next.js",
    tags: ["Next.js", "Convex", "LaunchDarkly"],
    link: "https://github.com/azhar-siddiqui/todo-app-with-convex-launchdarkly",
    updated: "2026-01-11",
  },
  {
    title: "SonarQube Issues Exporter",
    description:
      "Enterprise-level SonarQube issues exporter with TypeScript support for generating shareable HTML reports. Available as npm package with CLI tools.",
    tech: "Handlebars",
    tags: ["Tools", "SonarQube", "CLI"],
    link: "https://github.com/azhar-siddiqui/sonarqube-issues-exporter",
    stars: 1,
    forks: 0,
    updated: "2025-11-26",
  },
  {
    title: "Medicare Pathology Software",
    description: "Medicare pathology software.",
    tech: "TypeScript",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/azhar-siddiqui/medicare-pathology-software",
    stars: 0,
    forks: 0,
    updated: "2025-10-13",
  },
];
