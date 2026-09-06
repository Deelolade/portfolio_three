import React from "react";
import { EXPERIENCES } from "../data/portfolioData";
import { MapPin } from "./Icons";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-b border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-emerald-400 bg-zinc-900 border border-zinc-800 rounded-md mb-4">
            <span>04 // CAREER & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
            Engineering Track Record
          </h2>
          <p className="text-sm font-mono text-zinc-400">
            A history of shipping production code, improving system throughput, and solving technical complexity.
          </p>
        </div>

        {/* Reverse Chronological Timeline */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 sm:before:left-32 before:w-0.5 before:bg-zinc-800/80">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="relative flex flex-col sm:flex-row gap-6 sm:gap-12 items-start group"
            >
              {/* Dates & Period Column */}
              <div className="sm:w-32 shrink-0 font-mono text-xs text-zinc-400 pt-1 flex sm:flex-col sm:items-end justify-between w-full">
                <span className="font-semibold text-zinc-200">{exp.period}</span>
                {exp.current && (
                  <span className="inline-block text-[10px] px-2 py-0.5 bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 rounded-full mt-1">
                    Present Role
                  </span>
                )}
              </div>

              {/* Timeline Dot Indicator */}
              <div className="hidden sm:flex absolute left-[123px] top-2 w-3 h-3 rounded-full bg-zinc-900 border-2 border-zinc-600 group-hover:border-emerald-400 group-hover:bg-emerald-500 transition-colors z-10" />

              {/* Content Box */}
              <div className="flex-1 bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-6 sm:p-8 hover:border-zinc-700 transition-all">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Initials Badge */}
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700/80 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
                      {exp.companyInitials}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-100">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-mono text-zinc-400">
                    <MapPin size={12} className="text-zinc-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Outcome-Focused Achievements List */}
                <ul className="space-y-3 mb-6 text-sm text-zinc-300 leading-relaxed">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-emerald-400 font-mono text-xs mt-1">
                        ›
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60 font-mono text-xs">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-zinc-400 bg-zinc-900 border border-zinc-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
