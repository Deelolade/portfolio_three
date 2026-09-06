import React from "react";
import { ARTICLES } from "../data/portfolioData";
import { ArrowRight, Clock } from "./Icons";

export const WritingSection: React.FC = () => {
  return (
    <section id="writing" className="py-24 border-b border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-emerald-400 bg-zinc-900 border border-zinc-800 rounded-md mb-4">
              <span>07 // TECHNICAL NOTES & WRITING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Technical Writing & Notes
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm font-mono text-zinc-400 max-w-sm">
            Documenting architectural trade-offs, performance patterns, and engineering lessons.
          </p>
        </div>

        {/* Editorial Article List */}
        <div className="divide-y divide-zinc-800/80">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="py-8 first:pt-0 last:pb-0 group flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 font-mono text-xs text-zinc-400 mb-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-zinc-500" />
                    <span>{article.readTime}</span>
                  </div>
                  <span>·</span>
                  <div className="flex gap-1.5">
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-emerald-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-2">
                  {article.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="shrink-0 font-mono text-xs text-zinc-400 group-hover:text-emerald-400 flex items-center gap-2 transition-colors">
                <span>Read Note</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
