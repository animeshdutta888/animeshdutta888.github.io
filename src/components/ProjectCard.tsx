import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  name: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  href: string;
};

export function ProjectCard({
  name,
  problem,
  solution,
  impact,
  stack,
  href,
}: ProjectCardProps) {
  return (
    <article className="panel flex h-full flex-col rounded-[28px] p-7">
      <div className="mb-5 flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold text-white">{name}</h3>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-slate-700 p-2 text-slate-200 transition hover:border-sky-300 hover:text-sky-300"
          aria-label={`Open ${name}`}
        >
          <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="space-y-4 text-sm leading-7 text-slate-300">
        <p><span className="font-semibold text-white">Problem:</span> {problem}</p>
        <p><span className="font-semibold text-white">Solution:</span> {solution}</p>
        <p><span className="font-semibold text-white">Impact:</span> {impact}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700/80 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
