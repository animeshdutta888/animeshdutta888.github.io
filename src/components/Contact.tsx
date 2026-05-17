import { Mail, Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s talk about AI infra, product engineering, or forward deployed work."
      intro={profile.contactBlurb}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
          { label: "GitHub", value: "animeshdutta888", href: profile.github, icon: Github },
          { label: "LinkedIn", value: "animesh145", href: profile.linkedin, icon: Linkedin },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="panel rounded-[28px] p-7 transition hover:-translate-y-1"
            >
              <Icon className="text-sky-300" size={26} />
              <p className="mt-5 font-display text-2xl font-semibold text-white">{item.label}</p>
              <p className="mt-2 text-slate-300">{item.value}</p>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
