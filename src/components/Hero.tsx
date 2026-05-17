import { motion } from "framer-motion";
import { Download, Github, Linkedin, Sparkles } from "lucide-react";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/6 bg-grid bg-[size:42px_42px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.16),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(249,115,22,0.16),transparent_22%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:gap-12 sm:px-8 sm:py-20 lg:grid-cols-[1.3fr_0.7fr] lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
            <Sparkles size={16} />
            Building AI systems that ship
          </div>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-3xl font-display text-lg leading-8 text-slate-200 sm:mt-5 sm:text-2xl lg:text-[1.7rem]">
            {profile.title}
          </p>
          <p className="mt-5 max-w-3xl pb-8 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:pb-16">
            {profile.tagline}
          </p>
          <div className="mt-6 flex flex-nowrap gap-3 overflow-x-auto pb-2">
            <a
              href="#projects"
              className="shrink-0 rounded-full bg-sky-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 sm:px-5 sm:text-base"
            >
              View Projects
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-full border border-slate-600 px-4 py-3 text-sm font-semibold text-white transition hover:border-white sm:px-5 sm:text-base"
            >
              <span className="inline-flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-full border border-slate-600 px-4 py-3 text-sm font-semibold text-white transition hover:border-white sm:px-5 sm:text-base"
            >
              <span className="inline-flex items-center gap-2">
                <Github size={18} />
                GitHub
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-full border border-slate-600 px-4 py-3 text-sm font-semibold text-white transition hover:border-white sm:px-5 sm:text-base"
            >
              <span className="inline-flex items-center gap-2">
                <Linkedin size={18} />
                LinkedIn
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="panel rounded-[28px] p-4 sm:rounded-[32px] sm:p-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}img/animesh-dp.png`}
            alt="Animesh Dutta"
            className="h-64 w-full rounded-[22px] object-cover object-top sm:h-72 sm:rounded-[24px]"
          />
          <div className="mt-6 space-y-4">
            {profile.heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/6 bg-white/3 px-4 py-3"
              >
                {stat.value ? (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">{stat.label}</span>
                    <span className="font-display text-lg font-semibold text-white">
                      {stat.value}
                    </span>
                  </div>
                ) : (
                  <span className="block text-sm font-semibold text-white sm:text-[0.95rem]">
                    {stat.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
