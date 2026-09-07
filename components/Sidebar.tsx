import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const Sidebar: React.FC = () => {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between py-10 lg:py-16 pr-0 lg:pr-12 lg:border-r lg:border-zinc-800/80 font-sans">
      <div className="space-y-6">
        {/* Brand & Name & Role */}
        <div>
          <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2">
            {PERSONAL_INFO.brand}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 mb-1">
            {PERSONAL_INFO.name}
          </h1>
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
            {PERSONAL_INFO.title}
          </p>
        </div>

        {/* One-Sentence Positioning Line */}
        <p className="text-sm text-zinc-400 leading-relaxed max-w-xs font-sans">
          I build scalable web applications and digital products that turn ideas into reliable experiences.
        </p>

        {/* Availability & Location (Plain text dot, no colored dot) */}
        <div className="space-y-1.5 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            <span>Available for freelance work</span>
          </div>
          <div className="text-zinc-500">Based in Lagos, Nigeria</div>
        </div>
      </div>

      {/* Plain Text Links */}
      <div className="pt-8 lg:pt-0 space-y-3 font-mono text-xs border-t border-zinc-800/80 lg:border-t-0">
        <span className="text-[11px] text-zinc-500 uppercase tracking-wider block mb-2">
          Connect
        </span>

        <div className="flex flex-col gap-2">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-zinc-300 hover:text-emerald-400 transition-colors"
          >
            Email ↗
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={PERSONAL_INFO.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            X ↗
          </a>
          <a
            href={PERSONAL_INFO.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-emerald-400 transition-colors pt-2 border-t border-zinc-900"
          >
            Book a Call ↗
          </a>
        </div>
      </div>
    </aside>
  );
};
