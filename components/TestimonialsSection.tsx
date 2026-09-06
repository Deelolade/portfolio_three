import React from "react";
import { TESTIMONIALS } from "../data/portfolioData";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 border-b border-zinc-800/80">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-6 font-sans">
        Testimonials
      </h2>

      <div className="space-y-6 max-w-2xl font-sans">
        {TESTIMONIALS.map((item) => (
          <div key={item.id} className="space-y-1">
            <p className="text-sm text-zinc-300 leading-relaxed italic">
              “{item.quote}”
            </p>
            <div className="text-xs font-mono text-zinc-400">
              <strong className="text-zinc-200 font-sans">{item.author}</strong> — {item.role}, {item.company}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
