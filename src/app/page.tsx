import About from "@/components/common/about";
import Contact from "@/components/common/contact";
import Education from "@/components/common/education";
import Experience from "@/components/common/experience";
import Hero from "@/components/common/hero";
import ProjectsHeader from "@/components/common/projects-header";
import SkillsSection from "@/components/common/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsHeader />
      <About />
      <Experience />
      <Education />
      <SkillsSection />
      <Contact />
    </>
  );
}
