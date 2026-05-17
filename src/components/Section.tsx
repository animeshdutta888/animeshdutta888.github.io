import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type SectionProps = PropsWithChildren<{
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
}>;

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-sky-300">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        {intro ? <p className="mt-4 text-base leading-8 text-slate-300">{intro}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}
