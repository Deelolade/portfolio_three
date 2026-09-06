import React from "react";
import { CAPABILITIES } from "../data/portfolioData";
import { Terminal, Layers, Database, Code, Check } from "./Icons";

export const CapabilitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "layers":
        return <Layers size={20} className="text-emerald-400" />;
      case "code":
        return <Code size={20} className="text-emerald-400" />;
      case "database":
        return <Database size={20} className="text-emerald-400" />;
      default:
        return <Terminal size={20} className="text-emerald-400" />;
    }
  };

  return (
    <section className="py-24 border-b border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-emerald-400 bg-zinc-900 border border-zinc-800 rounded-md mb-4">
            <span>03 // SERVICES & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
            What I Do
          </h2>
          <p className="text-sm font-mono text-zinc-400">
            From technical design to production launch—building end-to-end web software that scales gracefully.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="p-6 sm:p-8 bg-zinc-900/30 border border-zinc-800/80 rounded-xl hover:border-zinc-700 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-emerald-500/50 transition-colors">
                  {getIcon(cap.iconName)}
                </div>
                <h3 className="text-xl font-bold text-zinc-100">{cap.title}</h3>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {cap.description}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-zinc-800/60 font-mono text-xs">
                {cap.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-zinc-300">
                    <Check size={14} className="text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
