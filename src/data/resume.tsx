import { Icons } from "@/components/common/icon";
import { FolderOpen, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Sayyed Azhar",
  initials: "AS",
  url: "https://azhar-portfolio-delta.vercel.app/",
  location: "Aurangabad, India",
  locationLink: "https://www.google.com/maps/place/azhar+sayyed",
  description:
    "I understand business, not just code, and I build software that directly increases revenue, cuts operational costs, ensures regulatory compliance, and scales operations — for maritime giants, logistics operators, banks, EdTech startups, NGOs, e-commerce stores, and everything in between.",
  summary:
    "Performance-driven Frontend Lead with a track record of transforming business requirements into scalable digital products. From maritime giants to global logistics operators, I build software designed to streamline operations and drive revenue. Expert at mentoring junior developers and implementing innovative problem-solving to meet the rigorous demands of large-scale, compliant environments.",
  avatarUrl: "/me.png",
  skills: {
    frontend: [
      { name: "React", color: null, icon: "react" },
      { name: "Next.js", color: "#ffffff", icon: "nextdotjs" },
      { name: "React Native", color: null, icon: "react" },
      { name: "TanStack", color: "#ffffff", icon: "tanstack" },
      { name: "Redux/RTK", color: null, icon: "redux" },
      { name: "TailwindCSS", color: null, icon: "tailwindcss" },
      { name: "Shadcn", color: "#ffffff", icon: "radixui" },
      { name: "Material UI", color: null, icon: "mui" },
      { name: "Bootstrap", color: null, icon: "bootstrap" },
      { name: "Mapbox", color: "#ffffff", icon: "mapbox" },
      { name: "AG Grid", color: null, icon: "aggrid" },
      { name: "HighCharts", color: null, icon: "highcharts" },
      { name: "Chart.js", color: null, icon: "chartdotjs" },
      { name: "PWA", color: null, icon: "pwa" },
    ],
    backend: [
      { name: "Node.js", color: null, icon: "nodedotjs" },
      { name: "TypeScript", color: null, icon: "typescript" },
      { name: "Express.js", color: "#ffffff", icon: "express" },
      { name: "NestJS", color: null, icon: "nestjs" },
      { name: "Electron.js", color: null, icon: "electron" },
      { name: "SQLite", color: null, icon: "sqlite" },
      { name: "Prisma", color: null, icon: "prisma" },
      { name: "Convex", color: null, icon: null },
      { name: "Firebase", color: null, icon: "firebase" },
      { name: "MongoDB", color: null, icon: "mongodb" },
      { name: "PostgreSQL", color: null, icon: "postgresql" },
      { name: "Axios", color: null, icon: "axios" },
      { name: "Dotenv", color: null, icon: "dotenv" },
      { name: "Zod", color: null, icon: "zod" },
    ],
    devops: [
      { name: "Docker", color: null, icon: "docker" },
      // { name: "Kubernetes", color: null, icon: "kubernetes" },
      { name: "GitHub Actions", color: null, icon: "githubactions" },
      { name: "Azure DevOps CI/CD", color: null, icon: "azuredevops" },
      { name: "Vercel", color: "#ffffff", icon: "vercel" },
      { name: "Netlify", color: null, icon: "netlify" },
      // { name: "AWS", color: null, icon: "amazonwebservices" },
      // { name: "New Relic", color: null, icon: "newrelic" },
      // { name: "Sentry", color: null, icon: "sentry" },
      { name: "SonarQube", color: null, icon: null },
    ],
    testing: [
      { name: "Jest", color: null, icon: "jest" },
      { name: "Vitest", color: null, icon: "vitest" },
      { name: "Testing Library", color: null, icon: "testinglibrary" },
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderOpen, label: "Projects" },
  ],
  contact: {
    email: "azhartsiddiqui@gmail.com",
    tel: "+91 7558380826",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/azhar-siddiqui",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/azhar-siddiqui-673147179/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:azhartsiddiqui@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Kiya.ai",
      href: "https://kiya.ai",
      badges: ["Current"],
      location: "Remote",
      title: "Associate Consultant",
      logoUrl: "", // Add logo if available
      start: "March 2024",
      end: "March 2026",
      description:
        "Global Tanker Fleet App is a TypeScript-based React web application built with Vite, designed for pool participants in the maritime shipping industry. It features role-based access control (RBAC) for user management, interactive dashboards with global filters and maps (using DeckGL), action item centers, pool point corrections, and performance reporting. The app integrates various tools for development and monitoring, including Tailwind CSS for styling, Vitest for unit testing, Allure for reporting, SonarQube for code quality, New Relic for performance monitoring, and AG Grid for data visualization. It supports multiple environments (dev, test, prod) with CI/CD pipelines via Azure Pipelines and uses conventional commits for version control. The architecture includes modular components, custom hooks, context providers, and services for onboarding and pool corrections, with a focus on scalability and user experience.",
    },
    {
      company: "QULOI",
      href: "https://quloi.com/",
      badges: [],
      location: "Hybrid (Remote + Pune, India)",
      title: "Jr. Full Stack Developer",
      logoUrl: "", // Add logo if available
      start: "Jan 2023",
      end: "Sept 2023",
      description:
        "Quloi is a high-growth spin-off from a global logistics and freight forwarding leader. It was strategically established to capture the logistics SaaS vertical by delivering agile, cutting-edge software solutions. In this fast-paced environment, the focus is on building 'nimble' success strategies—turning complex supply chain challenges into streamlined digital experiences.",
    },
    {
      company: "Banao Tech (ATG World)",
      href: "https://www.atg.world/banao.tech",
      badges: [],
      location: "Remote",
      title: "Sr. Frontend Developer",
      logoUrl: "", // Add logo if available
      start: "Jan 2021",
      end: "Dec 2022",
      description:
        "As a performance-focused Software Developer, I have successfully contributed to the development of over 10 web applications, consistently delivering high-quality, scalable solutions. I have established myself as a subject matter expert in Web Vitals and performance optimization, achieving a 30% reduction in page load times across numerous client websites through advanced technical audits and optimization strategies. My expertise extends to mentoring junior developers, where I have implemented comprehensive training programs that have enhanced team capabilities and fostered a culture of continuous learning. I am adept at translating complex business requirements into efficient technical solutions, ensuring that all projects meet stringent performance standards while aligning with client objectives.",
    },
    {
      company: "RightBrain Infotech",
      href: "https://rightbraininfotech.in/",
      badges: [],
      location: "Pune, India",
      title: "Sr. Frontend Developer",
      logoUrl: "", // Add logo if available
      start: "Jan 2020",
      end: "Dec 2020",
      description:
        "As a Frontend-focused Software Developer, I specialize in transforming complex design mock-ups and wireframes into visually compelling, high-performance web applications. My expertise lies in leveraging HTML, CSS, and JavaScript to build interactive user interfaces that seamlessly integrate modern design principles with a superior user experience. I am committed to engineering excellence, consistently writing clean, maintainable code that adheres to industry best practices and high-quality standards. I have a proven track record of collaborating effectively with cross-functional teams, including designers and backend developers, to deliver projects that meet and exceed client expectations. My approach is centered around understanding the unique needs of each project, allowing me to create tailored solutions that drive user engagement and satisfaction.",
    },
  ],
  education: [
    {
      school: "Savitribai Phule Pune University",
      href: "https://www.unipune.ac.in/",
      degree: "Master Of Computer Science",
      logoUrl: "", // Add logo if available
      location: "Pune, India",
      start: "2021",
      end: "2023",
    },
    {
      school: "Abeda Inamdar Senior College",
      href: "https://abedainamdarcollege.org.in/",
      degree: "Bachelor Of Computer Science",
      logoUrl: "", // Add logo if available
      location: "Pune, India",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "CashCounter Pro",
      href: "https://cash-counter-pro-eta.vercel.app/",
      dates: "",
      company: "Personal Project",
      active: true,
      description:
        "Developed CashCounter Pro, a professional precision currency counter application designed for financial professionals, banks, and businesses. The application supports 150+ currencies with real-time calculation and provides an intuitive interface for accurate cash counting. Features include multi-currency denomination input with automatic subtotal calculation, live grand total updates, and the ability to convert amounts to words. The platform includes comprehensive sharing and copying capabilities for generated summaries. Built with Next.js 14 and TypeScript for type-safe development, styled with Tailwind CSS for responsive design across all devices. Implements advanced state management with React hooks, integrates country-specific currency data using country-data-list, and features dark/light theme support with next-themes. The application is fully SEO-optimized with structured data, meta tags, and XML sitemap for improved discoverability. Deployed as a Progressive Web App (PWA) enabling offline functionality and installation on mobile devices. Achieved Core Web Vitals optimization with 90+ Lighthouse scores across performance, accessibility, and SEO metrics.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "React",
        "TailwindCSS",
        "Radix UI",
        "Framer Motion",
        "PWA",
      ],
      impact:
        "CashCounter Pro revolutionizes cash handling for financial professionals by providing a fast, accurate, and user-friendly digital alternative to traditional cash counting machines. The application reduces manual counting errors through automated calculations, supports diverse currency systems globally, and can be used offline on mobile devices. Its responsive design ensures seamless operation on smartphones, tablets, and desktops, making it accessible to users across all platforms. The professional UI and real-time calculations have potential to improve efficiency in retail environments, banks, and financial institutions.",
      featured: true,
    },
    {
      title: "We Care - SaaS Healthcare Platform",
      href: "https://we-care-prisma-next-git-main-azhar-siddiquis-projects.vercel.app/",
      dates: "",
      company: "Personal Project",
      active: true,
      description:
        "Developed WeCare, a comprehensive SaaS-style healthcare platform designed to digitize laboratory operations. The system automates the entire patient lifecycle—f rom registration and secure record management to automated report generation and real-time tracking. It features a robust administrative engine to manage doctor referrals, laboratory inventory, and multi-tier role-based security, ensuring HIPAA-standard data privacy and operational ef ficiency. Built with Next.js, Prisma, and Tailwind CSS, WeCare delivers a seamless user experience for patients, lab technicians, and administrators alike. The platform's modular architecture allows for easy scalability and integration with third-party services, making it a versatile solution for modern laboratories.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TanStack Query",
        "TailwindCSS",
        "Chart.js",
        "Vitest",
        "Prisma",
        "PostgreSQL",
        "NeonDB",
        "PWA",
      ],
      impact:
        "WeCare has the potential to revolutionize laboratory operations by significantly reducing manual errors, improving patient data management, and enhancing overall efficiency. By automating key processes, it can save laboratories up to 40% in operational costs and reduce report turnaround times by 50%, ultimately leading to improved patient outcomes and satisfaction.",
      featured: true,
    },
    {
      title: "Global Tanker Fleet Management System",
      href: "https://www.kiya.ai/",
      dates: "March 2024 — March 2026",
      company: "Kiya.ai",
      active: true,
      description:
        "Global Tanker Fleet App is a TypeScript-based React web application built with Vite, designed for pool participants in the maritime shipping industry. It features role-based access control (RBAC) for user management, interactive dashboards with global filters and maps (using DeckGL), action item centers, pool point corrections, and performance reporting. The app integrates various tools for development and monitoring, including Tailwind CSS for styling, Vitest for unit testing, Allure for reporting, SonarQube for code quality, New Relic for performance monitoring, and AG Grid for data visualization. It supports multiple environments (dev, test, prod) with CI/CD pipelines via Azure Pipelines and uses conventional commits for version control. The architecture includes modular components, custom hooks, context providers, and services for onboarding and pool corrections, with a focus on scalability and user experience.",
      technologies: [
        "React",
        "React Native",
        "TypeScript",
        "Mapbox",
        "Ag Grid",
        "HighCharts",
        "TailwindCSS",
        "TanStack Query",
        "SonarQube",
        "New Relic",
        "Azure DevOps CI/CD",
        "PWA",
      ],
      impact:
        "Global Tanker Fleet App has the potential to revolutionize maritime shipping operations by significantly improving fleet management, enhancing data-driven decision-making, and optimizing operational efficiency. By providing real-time insights and automating key processes, it can reduce operational costs, improve safety, and increase overall productivity, ultimately leading to better outcomes for shipping companies and their stakeholders.",
      featured: true,
    },
  ],
} as const;
