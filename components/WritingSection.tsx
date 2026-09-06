import React from "react";
import { ARTICLES } from "../data/portfolioData";

export const WritingSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 border-b border-zinc-800/80">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-6 font-sans">
        Writing
      </h2>

      <div className="space-y-6 max-w-2xl">
        {ARTICLES.map((article) => (
          <article key={article.id} className="space-y-1">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>{article.date} · {article.readTime}</span>
            </div>

            <h3 className="text-base font-bold text-zinc-100 font-sans hover:text-emerald-400 transition-colors">
              <a href="#">
                {article.title} ↗
              </a>
            </h3>

            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              {article.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
