import { profile } from "../data/profile";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Work in agentic AI, context systems, and applied ML."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {profile.projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </Section>
  );
}
