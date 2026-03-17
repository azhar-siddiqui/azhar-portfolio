import About from "@/components/common/about";
import Contact from "@/components/common/contact";
import Education from "@/components/common/education";
import Experience from "@/components/common/experience";
import Hero from "@/components/common/hero";
import NavBar from "@/components/common/nav-bar";
import ProjectsHeader from "@/components/common/projects-header";
import SkillsSection from "@/components/common/skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="pt-16">
        <Hero />
        <ProjectsHeader />
        <About />
        <Experience />
        <Education />
        <SkillsSection />
        <Contact />
      </section>
    </>
  );
}
