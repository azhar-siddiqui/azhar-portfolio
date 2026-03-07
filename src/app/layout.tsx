import Loader from "@/components/common/loader";
import NavBar from "@/components/common/nav-bar";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} — Senior Product Engineer & Full-Stack Developer`,
    template: "%s | Azhar Sayyed Portfolio",
  },
  description: DATA.description,
  keywords: [
    "Azhar Sayyed",
    "Frontend Developer",
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Pune",
  ],
  openGraph: {
    title: `${DATA.name} — Senior Product Engineer`,
    description: DATA.description,
    url: DATA.url,
    type: "website",
    images: [
      {
        url: `${DATA.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${DATA.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} — Senior Product Engineer`,
    description: DATA.description,
    images: [`${DATA.url}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${DATA.url}/#person`,
    name: DATA.name,
    url: DATA.url,
    email: DATA.contact.email,
    image: `${DATA.url}/me.png`,
    description: DATA.description,
    jobTitle: "Senior Product Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Shurutech",
      url: "https://shurutech.com",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Abeda Inamdar Senior College",
      url: "https://abedainamdarcollege.org.in/",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressCountry: "IN",
    },
    sameAs: Object.values(DATA.contact.social)
      .map((s) => s.url)
      .filter((url) => !url.startsWith("mailto:")),
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Full Stack Development",
      "React Native",
      "Angular",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "AWS",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${DATA.url}/#website`,
    url: DATA.url,
    name: `${DATA.name} — Senior Product Engineer`,
    description: DATA.description,
    publisher: { "@id": `${DATA.url}/#person` },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${DATA.url}/#profilepage`,
    url: DATA.url,
    name: `${DATA.name} — Portfolio`,
    mainEntity: { "@id": `${DATA.url}/#person` },
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          personSchema,
          websiteSchema,
          profilePageSchema,
        ]),
      }}
    />
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Loader />
          <NavBar />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
