import React from "react";
import { CAPABILITIES } from "../data/portfolioData";

export const CapabilitiesSection: React.FC = () => {

  return (
    <section className="py-16 sm:py-20 border-b border-zinc-800/80">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-6 font-sans">
        What I Do
      </h2>

      <div className="space-y-4 max-w-2xl font-sans">
        {CAPABILITIES.map((cap) => (
          <div key={cap.title} className="text-sm">
            <strong className="text-zinc-200 font-semibold">{cap.title}</strong>
            <span className="text-zinc-400"> — {cap.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
