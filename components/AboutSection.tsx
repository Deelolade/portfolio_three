import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { Terminal, Code, Database, MapPin } from "./Icons";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Section Header Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-emerald-400 bg-zinc-900 border border-zinc-800 rounded-md mb-4">
                <span>01 // ABOUT</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 mb-4">
                Engineering Philosophy & Product Vision
              </h2>
              <p className="text-sm font-mono text-zinc-400 leading-relaxed mb-6">
                Computer Engineering background. Full-stack execution. Lagos based.
              </p>
              
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-lg space-y-3 font-mono text-xs text-zinc-400">
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
                  <span className="text-zinc-500">Degree</span>
                  <span className="text-zinc-300 font-medium">B.Sc. Computer Engineering</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
                  <span className="text-zinc-500">Location</span>
                  <span className="text-zinc-300 font-medium">Lagos, Nigeria (WAT / UTC+1)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Primary Language</span>
                  <span className="text-zinc-300 font-medium">TypeScript / Node.js</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Paragraphs Column */}
          <div className="lg:col-span-8 space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
            {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-zinc-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Quick Principles Grid */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-zinc-900/40 border border-zinc-800/80 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-emerald-400 font-mono text-xs font-semibold">
                  <Code size={14} />
                  <span>PREDICTABLE ARCHITECTURE</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Strict type boundaries, clean data models, and straightforward code paths over clever abstractions.
                </p>
              </div>

              <div className="p-5 bg-zinc-900/40 border border-zinc-800/80 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-emerald-400 font-mono text-xs font-semibold">
                  <Database size={14} />
                  <span>END-TO-END OWNERSHIP</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Designing database schemas, crafting server APIs, and building polished UI components seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
