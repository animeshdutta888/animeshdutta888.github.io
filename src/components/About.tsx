import { Section } from "./Section";
import { profile } from "../data/profile";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="AI systems engineering with a product delivery mindset."
      intro={profile.about}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Edge to cloud thinking",
            body: "From Qualcomm edge AI workflows to local-first agents and backend platforms, the through-line is practical systems design under real constraints.",
          },
          {
            title: "Close to the problem",
            body: "I do my best work on technical problems that are still messy: fast iteration, real user constraints, deep debugging, and product decisions that have to land in practice.",
          },
          {
            title: "Builder profile",
            body: "My recent work blends model evaluation, context retrieval, orchestration, observability, and interface design rather than treating AI as just a prompt layer.",
          },
        ].map((item) => (
          <article key={item.title} className="panel rounded-[28px] p-7">
            <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-300">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
