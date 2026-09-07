import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const ContactSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 border-b border-zinc-800/80">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-2 font-sans">
        Let's build something.
      </h2>

      <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-2xl font-sans">
        Have an idea, project, or opportunity you'd like to discuss? I'd love to hear about it.
      </p>

      <div className="space-y-4 font-mono text-xs max-w-2xl">
        <div>
          <span className="text-zinc-500 block mb-1">Email:</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-emerald-400 hover:underline text-sm font-medium transition-colors"
          >
            {PERSONAL_INFO.email} ↗
          </a>
        </div>

        <div>
          <span className="text-zinc-500 block mb-1">WhatsApp:</span>
          <a
            href={PERSONAL_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline text-sm font-medium transition-colors"
          >
            {PERSONAL_INFO.phone} ↗
          </a>
        </div>
      </div>
    </section>
  );
};
