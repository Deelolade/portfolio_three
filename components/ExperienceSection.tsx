import React from "react";
import { EXPERIENCES } from "../data/portfolioData";

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 border-b border-zinc-800/80">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-8 font-sans">
        Experience
      </h2>

      <div className="divide-y divide-zinc-800/80 max-w-2xl">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="py-8 first:pt-0 last:pb-0 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 font-mono text-xs">
              <div>
                <span className="text-base font-bold text-zinc-100 font-sans">
                  {exp.role}
                </span>
                <span className="text-zinc-400 ml-2">@ {exp.company}</span>
              </div>
              <div className="text-zinc-500">
                {exp.period} · {exp.location}
              </div>
            </div>

            <ul className="space-y-2 text-sm text-zinc-300 font-sans">
              {exp.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-zinc-500 font-mono text-xs mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-xs font-mono text-zinc-400 pt-1">
              <span className="text-zinc-500">Tech: </span>
              <span>{exp.technologies.join(", ")}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
