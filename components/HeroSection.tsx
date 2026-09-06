import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { PERSONAL_INFO } from "../data/portfolioData";

export const HeroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Availability & Location */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mb-6">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-300">{PERSONAL_INFO.availability}</span>
          </span>
          <span>·</span>
          <span>{PERSONAL_INFO.location}</span>
        </div>

        {/* Role Header */}
        <div className="font-mono text-xs text-emerald-400 uppercase tracking-wider mb-4">
          // {PERSONAL_INFO.role}
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 leading-tight mb-6 max-w-3xl">
          I build scalable web applications and digital products that turn ideas into reliable experiences.
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-2.5xl">
          {PERSONAL_INFO.heroSupportingText}
        </p>

        {/* CTAs as plain text links */}
        <div className="flex items-center gap-6 text-sm font-mono">
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-emerald-400 hover:underline transition-all"
          >
            <span>View My Work</span>
            <FiArrowRight size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>Let's Talk</span>
            <FiArrowRight size={14} />
          </a>
        </div>

        {/* Plain text tech bar */}
        <div className="mt-12 pt-6 border-t border-zinc-800/80 font-mono text-xs text-zinc-500 space-y-1">
          <div><strong className="text-zinc-400">Core Stack:</strong> React, Next.js, Node.js, TypeScript, PostgreSQL</div>
          <div><strong className="text-zinc-400">Focus:</strong> Full-Stack Products, High-Throughput APIs, Systems Architecture</div>
        </div>
      </div>
    </section>
  );
};
