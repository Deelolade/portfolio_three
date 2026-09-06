import React from "react";
import { TECH_CATEGORIES } from "../data/portfolioData";

export const TechStackSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 border-b border-zinc-800/80">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-6 font-sans">
        Tools I Work With
      </h2>

      <div className="space-y-4 max-w-2xl font-mono text-xs">
        {TECH_CATEGORIES.map((cat) => (
          <div key={cat.title} className="space-y-1">
            <span className="text-zinc-500 uppercase tracking-wider block">
              {cat.title}
            </span>
            <p className="text-zinc-300">
              {cat.skills.map((s) => s.name).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
