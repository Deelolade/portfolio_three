import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { Github, Linkedin, Twitter, ArrowRight } from "./Icons";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#09090b] text-zinc-400 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
          {/* Left: Copyright & Role */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="text-zinc-200 font-semibold">
              © {currentYear} {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline-block text-zinc-600">|</span>
            <span className="text-zinc-400">{PERSONAL_INFO.title}</span>
            <span className="hidden sm:inline-block text-zinc-600">|</span>
            <span className="text-zinc-500">{PERSONAL_INFO.location}</span>
          </div>

          {/* Right: Quick Social Links & Back to top */}
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
              aria-label="Twitter Profile"
            >
              X / Twitter
            </a>
            <a
              href="#"
              className="p-2 bg-zinc-900 border border-zinc-800 rounded hover:border-zinc-700 hover:text-zinc-100 transition-colors text-[10px]"
              aria-label="Back to top"
            >
              ↑ Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
