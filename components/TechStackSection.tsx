import React from "react";
import { TECH_CATEGORIES } from "../data/portfolioData";
import { Terminal, Code, Database } from "./Icons";

export const TechStackSection: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    if (index === 0) return <Code size={18} className="text-emerald-400" />;
    if (index === 1) return <Terminal size={18} className="text-emerald-400" />;
    return <Database size={18} className="text-emerald-400" />;
  };

  return (
    <section className="py-24 border-b border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-emerald-400 bg-zinc-900 border border-zinc-800 rounded-md mb-4">
            <span>05 // STACK & TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
            Tools I Work With
          </h2>
          <p className="text-sm font-mono text-zinc-400">
            A battle-tested set of languages, frameworks, databases, and deployment platforms optimized for product reliability.
          </p>
        </div>

        {/* Categorized Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((category, index) => (
            <div
              key={category.title}
              className="p-6 bg-zinc-900/30 border border-zinc-800/80 rounded-xl space-y-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3 pb-4 border-b border-zinc-800/80">
                  <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-md">
                    {getCategoryIcon(index)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100">
                      {category.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 bg-zinc-900/60 border border-zinc-800/60 rounded-md font-mono text-xs hover:border-zinc-700 transition-colors"
                    >
                      <span className="text-zinc-200 font-semibold">
                        {skill.name}
                      </span>
                      {skill.note && (
                        <span className="text-[11px] text-zinc-500">
                          {skill.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/60 font-mono text-[11px] text-zinc-400 flex items-center justify-between">
                <span>PRODUCTION READY</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
