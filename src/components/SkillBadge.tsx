type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-200">
      {label}
    </span>
  );
}
