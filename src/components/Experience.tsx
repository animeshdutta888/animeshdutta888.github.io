import { profile } from "../data/profile";
import { ExperienceCard } from "./ExperienceCard";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="From low-level systems work to agentic AI platforms."
    >
      <div className="grid gap-6">
        {profile.experience.map((item) => (
          <ExperienceCard key={`${item.company}-${item.period}`} {...item} />
        ))}
      </div>
    </Section>
  );
}
