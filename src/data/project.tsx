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
    title: "We Care",
    description:
      "Comprehensive SaaS-style healthcare platform to digitize laboratory operations. Automates patient lifecycle from registration to real-time tracking and reports.",
    tech: "Next.js",
    tags: ["Healthcare", "Prisma", "PostgreSQL", "RBAC", "PDF Generation"],
    link: "https://github.com/azhar-siddiqui/we-care", // Assuming your repo; update if different
    isFeatured: true,
  },
  {
    title: "Global Tanker Fleet Management System",
    description:
      "TypeScript-based React web app for maritime shipping. Features RBAC, interactive dashboards, maps (DeckGL), performance reporting, and more.",
    tech: "React",
    tags: ["Maritime", "Vite", "Tailwind CSS", "AG Grid", "SonarQube"],
    link: "https://github.com/azhar-siddiqui/global-tanker-fleet", // Update with real link if exists
    isFeatured: true,
  },
  {
    title: "Quloi Omni-Channel Supply Chain Platform",
    description:
      "Cloud-native platform for supply chain collaboration. Manages Purchase Orders, shipments, supplier performance, with real-time dashboards and RBAC.",
    tech: "React",
    tags: ["Logistics", "SaaS", "Dashboards", "RBAC", "KPIs"],
    link: "https://omni.quloi.com", // From resume "Visit: omni"
    isFeatured: true,
  },
  {
    title: "Casa Architect",
    description:
      "Architectural firm site with service offerings, portfolio showcase, pricing matrix, testimonials, and responsive design for conversions.",
    tech: "React",
    tags: ["Portfolio", "UI/UX", "Pricing", "Responsive", "Motion"],
    link: "https://casaarch.com", // From resume "Visit: Casa Arch"; adjust URL
    isFeatured: true,
  },
  {
    title: "Zomato Clone",
    description:
      "React Native app with user auth, home screen, restaurant listings, search, cart, ordering, and multiple payment options.",
    tech: "React Native",
    tags: ["Mobile", "Firebase", "Auth", "E-commerce", "UI/UX"],
    link: "https://example.com/zomato-app-download", // From resume "Download: Zomato App"; update
    isFeatured: true,
  },
  {
    title: "node-typescript-template-with-standerd",
    description: "Node.js TypeScript template with standards.",
    tech: "TypeScript",
    tags: ["Backend", "Template"],
    link: "https://github.com/azhar-siddiqui/node-typescript-template-with-standerd",
    stars: 0,
    forks: 0,
    updated: "2026-02-08",
  },
  {
    title: "authntication-and-authrization-production-api",
    description: "Production-ready authentication and authorization API.",
    tech: "TypeScript",
    tags: ["Auth", "API"],
    link: "https://github.com/azhar-siddiqui/authntication-and-authrization-production-api",
    stars: 0,
    forks: 0,
    updated: "2026-02-02",
  },
  {
    title: "node-js-typescript-app-trpc",
    description: "Node.js TypeScript app with tRPC and OpenAPI documentation.",
    tech: "TypeScript",
    tags: ["Backend", "tRPC", "API"],
    link: "https://github.com/azhar-siddiqui/node-js-typescript-app-trpc",
    stars: 0,
    forks: 0,
    updated: "2026-02-02",
  },
  {
    title: "todo-app-with-convex-launchdarkly",
    description: "Todo app using Convex and LaunchDarkly.",
    tech: "TypeScript",
    tags: ["Frontend", "Todo"],
    link: "https://github.com/azhar-siddiqui/todo-app-with-convex-launchdarkly",
    stars: 0,
    forks: 0,
    updated: "2026-01-11",
  },
  {
    title: "next-shadcn-admin-dashboard",
    description:
      "Modern Admin Dashboard Template built with Shadcn UI and Next.js 16.",
    tech: "TypeScript",
    tags: ["Dashboard", "Shadcn", "Next.js"],
    link: "https://github.com/azhar-siddiqui/next-shadcn-admin-dashboard",
    stars: 1,
    forks: 0,
    updated: "2025-12-04",
  },
  {
    title: "sonarqube-issues-exporter",
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
    title: "medicare-pathology-software",
    description: "Medicare pathology software.",
    tech: "TypeScript",
    tags: ["Healthcare", "Software"],
    link: "https://github.com/azhar-siddiqui/medicare-pathology-software",
    stars: 0,
    forks: 0,
    updated: "2025-10-13",
  },
];
