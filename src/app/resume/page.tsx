import { AnimatedLink } from "@/components/resume/animated-link";
import { ResumeCard } from "@/components/resume/resume-card";
import { SkillGroup } from "@/components/resume/skill-group";
import { DATA } from "@/data/resume";
import { Link, MoveUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${DATA.name} | Resume`,
  description: `Resume of ${DATA.name}`,
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background py-10 print:py-0">
      <div className="mx-auto w-full max-w-4xl rounded-2xl border border-border/70 bg-card p-6 shadow-lg md:p-10 print:max-w-none print:rounded-none print:border-0 print:shadow-none">
        <header className="border-b-4 border-primary pb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">
              {DATA.name}
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-muted-foreground md:text-base flex items-center gap-x-2"
              >
                <span className="size-1 bg-primary rounded-full" />
                {DATA.location}
              </a>
              <a
                href={`mailto:${DATA.contact.email}`}
                className="mt-2 text-sm text-muted-foreground md:text-base flex items-center gap-x-2"
              >
                <span className="size-1 bg-primary rounded-full" />
                {DATA.contact.email}
              </a>
              <a
                href={`tel:${DATA.contact.tel}`}
                className="mt-2 text-sm text-muted-foreground md:text-base flex items-center gap-x-2"
              >
                <span className="size-1 bg-primary rounded-full" />
                {DATA.contact.tel}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <AnimatedLink
                href={DATA.url}
                icon={<Link className="size-3 text-primary" />}
                label="Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              />
              <AnimatedLink
                href={DATA.contact.social.GitHub.url}
                icon={<Link className="size-3 text-primary" />}
                label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              />
              <AnimatedLink
                href={DATA.contact.social.LinkedIn.url}
                icon={<Link className="size-3 text-primary" />}
                label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </header>

        <section className="mt-4">
          <h2 className="text-lg font-semibold tracking-wide text-foreground">
            Professional Summary
          </h2>
          <ResumeCard>
            <p className="leading-relaxed text-muted-foreground text-sm">
              {DATA.summary}
            </p>
          </ResumeCard>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold tracking-wide text-foreground">
            Experience
          </h2>
          <div className="mt-3 space-y-4">
            {DATA.work.map((job) => (
              <ResumeCard key={`${job.company}-${job.start}`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground">
                    {job.title} • {job.company}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {job.start} — {job.end}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2 flex-wrap gap-2">
                  <a
                    href={job.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.company}
                  </a>
                  <p className="text-sm text-muted-foreground">
                    {job.location}
                  </p>
                </div>
                <p className="mt-1 leading-relaxed text-muted-foreground text-sm">
                  {job.description}
                </p>
              </ResumeCard>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold tracking-wide text-foreground">
            Education
          </h2>
          <div className="mt-3 space-y-3">
            {DATA.education.map((item) => (
              <ResumeCard key={`${item.school}-${item.start}`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground">
                    {item.school}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {item.start} - {item.end}
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-muted-foreground text-sm">{item.degree}</p>
                  <p className="text-muted-foreground text-sm">
                    {item.location}
                  </p>
                </div>
              </ResumeCard>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold tracking-wide text-foreground">
            Projects
          </h2>
          <div className="mt-3 space-y-4">
            {DATA.projects.slice(0, 6).map((project) => (
              <ResumeCard key={project.title}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {project.title}
                      <MoveUpRight className="size-3 ml-1 inline-block" />
                    </a>
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {project.dates}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.company}
                </p>
                <p className="mt-1 leading-relaxed text-muted-foreground text-sm">
                  {project.description}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tech: {project.technologies.join(", ")}
                </p>
              </ResumeCard>
            ))}
          </div>
          <p className="text-sm w-96 text-center mx-auto mt-4">
            <AnimatedLink
              href="https://azhar-portfolio-delta.vercel.app/"
              label="View all projects"
              target="_blank"
              rel="noopener noreferrer"
            />
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold tracking-wide text-foreground">
            Skills
          </h2>
          <ResumeCard className="flex flex-col gap-y-4">
            <SkillGroup title="Frontend" skills={DATA.skills.frontend} />
            <SkillGroup title="Backend" skills={DATA.skills.backend} />
            <SkillGroup title="DevOps" skills={DATA.skills.devops} />
            <SkillGroup title="Testing" skills={DATA.skills.testing} />
          </ResumeCard>
        </section>
      </div>
    </main>
  );
}
