import { DATA } from "@/data/resume";
import { getIcon } from "@/lib/utils";
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
        <header className="border-b-4 border-primary  pb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">
              {DATA.name}
            </h1>
            <div className="flex items-center gap-x-6">
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
            <div className="flex items-center gap-x-6">
              <a
                href={DATA.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex text-sm text-primary"
              >
                <span className="relative inline-flex items-center gap-x-2">
                  <Link className="size-3 text-primary" />
                  <span>Portfolio</span>
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </span>
              </a>
              <a
                href={DATA.contact.social.GitHub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex text-sm text-primary"
              >
                <span className="relative inline-flex items-center gap-x-2">
                  <Link className="size-3 text-primary" />
                  <span>GitHub</span>
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </span>
              </a>
              <a
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex text-sm text-primary"
              >
                <span className="relative inline-flex items-center gap-x-2">
                  <Link className="size-3 text-primary" />
                  <span>Linkedin</span>
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </span>
              </a>
            </div>
          </div>
        </header>
        <section className="mt-4">
          <h2 className="text-lg font-semibold tracking-wide text-foreground">
            Professional Summary
          </h2>
          <p className="leading-relaxed text-muted-foreground text-sm bg-card-foreground/5 rounded-lg border-l-4 border-l-primary mt-3  px-2 py-4">
            {DATA.summary}
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-lg font-semibold tracking-wide text-foreground">
            Experience
          </h2>
          <div className="mt-3 space-y-4">
            {DATA.work.map((job) => (
              <article
                key={`${job.company}-${job.start}`}
                className="bg-card-foreground/5 rounded-lg border-l-4 border-l-primary mt-3  px-2 py-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground">
                    {job.title} • {job.company}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {job.start} — {job.end}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <a
                    href={job.href}
                    className="text-sm text-muted-foreground"
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
              </article>
            ))}
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-lg font-semibold tracking-wide text-foreground">
            Education
          </h2>
          <div className="mt-3 space-y-3">
            {DATA.education.map((item) => (
              <article
                className="bg-card-foreground/5 rounded-lg border-l-4 border-l-primary mt-3  px-2 py-4"
                key={`${item.school}-${item.start}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground">
                    {item.school}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {item.start} - {item.end}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">{item.degree}</p>
                  <p className="text-muted-foreground text-sm">
                    {item.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-lg font-semibold tracking-wide text-foreground">
            Projects
          </h2>
          <div className="mt-3 space-y-4">
            {DATA.projects.slice(0, 6).map((project) => (
              <article
                key={project.title}
                className="bg-card-foreground/5 rounded-lg border-l-4 border-l-primary mt-3  px-2 py-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
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
                <p className="mt-1 leading-relaxed text-muted-foreground ">
                  {project.description}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tech: {project.technologies.join(", ")}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold tracking-wide text-foreground">
            Skills
          </h2>
          <div className="bg-card-foreground/5 rounded-lg border-l-4 border-l-primary mt-3  px-2 py-4 flex flex-col gap-y-4">
            <div className="flex flex-wrap gap-2">
              <h6 className="text-sm font-semibold tracking-wide text-foreground w-full">
                Frontend
              </h6>
              {DATA.skills.frontend.map((skill) => {
                const icon = getIcon(skill.icon);
                return (
                  <span
                    key={`${skill.name}-${skill.icon ?? "no-icon"}`}
                    className="rounded-full py-1 px-2 text-xs text-muted-foreground flex items-center gap-x-2 bg-card-foreground/10"
                  >
                    {icon ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="size-3  transition-transform duration-300 group-hover:scale-110"
                        fill={`#${icon.hex}`}
                        suppressHydrationWarning
                      >
                        <path d={icon.path} />
                      </svg>
                    ) : null}
                    {skill.name}
                  </span>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-2">
              <h6 className="text-sm font-semibold tracking-wide text-foreground w-full">
                Backend
              </h6>
              {DATA.skills.backend.map((skill) => {
                const icon = getIcon(skill.icon);
                return (
                  <span
                    key={`${skill.name}-${skill.icon ?? "no-icon"}`}
                    className="rounded-full py-1 px-2 text-xs text-muted-foreground flex items-center gap-x-2 bg-card-foreground/10"
                  >
                    {icon ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="size-3  transition-transform duration-300 group-hover:scale-110"
                        fill={`#${icon.hex}`}
                        suppressHydrationWarning
                      >
                        <path d={icon.path} />
                      </svg>
                    ) : null}
                    {skill.name}
                  </span>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-2">
              <h6 className="text-sm font-semibold tracking-wide text-foreground w-full">
                Devops
              </h6>
              {DATA.skills.devops.map((skill) => {
                const icon = getIcon(skill.icon);
                return (
                  <span
                    key={`${skill.name}-${skill.icon ?? "no-icon"}`}
                    className="rounded-full py-1 px-2 text-xs text-muted-foreground flex items-center gap-x-2 bg-card-foreground/10"
                  >
                    {icon ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="size-3  transition-transform duration-300 group-hover:scale-110"
                        fill={`#${icon.hex}`}
                        suppressHydrationWarning
                      >
                        <path d={icon.path} />
                      </svg>
                    ) : null}
                    {skill.name}
                  </span>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-2">
              <h6 className="text-sm font-semibold tracking-wide text-foreground w-full">
                Testing
              </h6>
              {DATA.skills.testing.map((skill) => {
                const icon = getIcon(skill.icon);
                return (
                  <span
                    key={`${skill.name}-${skill.icon ?? "no-icon"}`}
                    className="rounded-full py-1 px-2 text-xs text-muted-foreground flex items-center gap-x-2 bg-card-foreground/10"
                  >
                    {icon ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="size-3  transition-transform duration-300 group-hover:scale-110"
                        fill={`#${icon.hex}`}
                        suppressHydrationWarning
                      >
                        <path d={icon.path} />
                      </svg>
                    ) : null}
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
