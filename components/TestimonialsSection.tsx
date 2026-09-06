import React from "react";
import { TESTIMONIALS } from "../data/portfolioData";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 border-b border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-emerald-400 bg-zinc-900 border border-zinc-800 rounded-md mb-4">
            <span>06 // ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
            What Engineering Leaders Say
          </h2>
          <p className="text-sm font-mono text-zinc-400">
            Direct feedback from product leads, founders, and senior architects I've collaborated with.
          </p>
        </div>

        {/* Editorial Light Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-zinc-900/30 border border-zinc-800/80 rounded-xl flex flex-col justify-between"
            >
              <div className="mb-6">
                <span className="text-emerald-400 font-mono text-xl block mb-3">“</span>
                <p className="text-sm text-zinc-300 leading-relaxed font-sans italic">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 font-mono text-xs">
                <div className="font-bold text-zinc-100 font-sans text-sm">
                  {item.author}
                </div>
                <div className="text-emerald-400 font-medium">{item.role}</div>
                <div className="text-zinc-500 text-[11px]">
                  {item.company} · {item.relationship}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
