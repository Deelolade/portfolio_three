"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "../data/portfolioData";

export const TestimonialsSection: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-16 sm:py-20 border-b border-zinc-800/80">
      <div className="max-w-2xl font-sans">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wider text-zinc-100 capitalize">
            Testimonials
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-zinc-400 mb-8 sm:mb-10">
          Kind words from people I've worked with.
        </p>

        {/* Testimonials List */}
        <div className="divide-y divide-zinc-800/80">
          {TESTIMONIALS.map((item) => {
            const isExpanded = !!expandedIds[item.id];
            const displayCompany = item.companyShort || item.company;

            return (
              <div key={item.id} className="py-8 first:pt-0 last:pb-0">
                {/* Quote Text */}
                {isExpanded ? (
                  <div className="text-sm sm:text-base text-zinc-300 leading-relaxed space-y-3 font-normal">
                    {item.quote.split("\n\n").map((paragraph, idx, arr) => (
                      <p key={idx}>
                        {idx === 0 ? `“${paragraph.trim()}` : paragraph.trim()}
                        {idx === arr.length - 1 ? `”` : ""}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed line-clamp-3 sm:line-clamp-4 font-normal">
                    “{item.quote.trim()}”
                  </p>
                )}

                {/* Read More / Read Less Toggle Button */}
                <div className="flex justify-end mt-3">
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    className="text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0"
                  >
                    {isExpanded ? "Read less ↖" : "Read more ↗"}
                  </button>
                </div>

                {/* Author Info */}
                <div className="mt-4 space-y-0.5">
                  <div className="text-base font-semibold text-zinc-100">
                    {item.author}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    {item.role} · {displayCompany}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
