type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export function ExperienceCard({
  company,
  role,
  period,
  summary,
  highlights,
}: ExperienceCardProps) {
  return (
    <article className="panel relative rounded-[28px] p-7">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold text-white">{company}</p>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-sky-300">{role}</p>
        </div>
        <span className="text-sm text-slate-400">{period}</span>
      </div>
      <p className="text-base leading-7 text-slate-300">{summary}</p>
      <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-200">
        {highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
