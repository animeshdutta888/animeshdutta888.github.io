import { profile } from "../data/profile";
import { Section } from "./Section";
import { SkillBadge } from "./SkillBadge";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Languages/Frameworks/Tools"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {profile.skills.map((group) => (
          <article key={group.group} className="panel rounded-[28px] p-7">
            <h3 className="font-display text-2xl font-semibold text-white">{group.group}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <SkillBadge key={item} label={item} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
