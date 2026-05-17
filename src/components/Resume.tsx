import { ExternalLink } from "lucide-react";
import { profile } from "../data/profile";
import { Section } from "./Section";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="Resume"
      intro="For the formal summary of my experience, projects, and background, open the latest resume here."
    >
      <div className="panel grid gap-6 rounded-[28px] p-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-base leading-7 text-slate-300">
            The portfolio highlights selected work in more depth, while the resume gives the concise version.
          </p>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Open Resume <ExternalLink size={18} />
          </a>
        </div>
        <div className="rounded-[24px] border border-slate-700/70 bg-slate-950/60 p-6 text-sm leading-7 text-slate-300">
          <p className="font-display text-lg text-white">What you’ll find</p>
          <p className="mt-3">
            Experience across AI software, backend systems, developer tooling, and agentic product work.
          </p>
          <p className="mt-3">
            Recent focus areas include edge AI validation, context systems for coding agents, local-first AI products, and production-minded engineering.
          </p>
        </div>
      </div>
    </Section>
  );
}
