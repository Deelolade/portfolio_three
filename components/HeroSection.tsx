import React from "react";
import { ArrowRight, MapPin, Terminal, Layers } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-zinc-800/60 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Availability & Location Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Location Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-zinc-400 bg-zinc-900/80 border border-zinc-800 rounded-full">
              <MapPin size={12} className="text-zinc-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Role Header */}
          <div className="mb-4 flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider uppercase text-zinc-400">
            <span className="text-emerald-400 font-bold">//</span>
            <span>{PERSONAL_INFO.role}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 leading-[1.12] mb-6">
            I build <span className="text-emerald-400">scalable web applications</span> and digital products that turn ideas into reliable experiences.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal mb-10 max-w-2.5xl">
            {PERSONAL_INFO.heroSupportingText}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* View My Work CTA */}
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-mono font-medium text-zinc-950 bg-emerald-400 rounded-md hover:bg-emerald-300 transition-all duration-200 shadow-md shadow-emerald-950/20 group"
            >
              <span>View My Work</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-mono font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md hover:bg-zinc-800 hover:border-zinc-700 hover:text-zinc-100 transition-all duration-200"
            >
              <span>Let's Talk</span>
              <ArrowRight size={16} className="text-zinc-500" />
            </a>
          </div>

          {/* Editorial Quick Specs Bar */}
          <div className="mt-16 pt-8 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs text-zinc-400">
            <div>
              <span className="text-zinc-500 block mb-1">CORE STACK</span>
              <span className="text-zinc-300 font-medium">React · Next.js · Node.js</span>
            </div>
            <div>
              <span className="text-zinc-500 block mb-1">DATABASE & API</span>
              <span className="text-zinc-300 font-medium">PostgreSQL · TypeScript</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-zinc-500 block mb-1">FOCUS</span>
              <span className="text-zinc-300 font-medium">Full-Stack Digital Products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
