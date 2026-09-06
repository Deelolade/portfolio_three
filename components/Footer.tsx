import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#09090b] text-zinc-500 font-mono text-xs border-t border-zinc-800/80">
      <div className="max-w-2xl font-mono text-xs text-zinc-500">
        © {currentYear} {PERSONAL_INFO.name} — {PERSONAL_INFO.title} —{" "}
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-300"
        >
          GitHub
        </a>{" "}
        ·{" "}
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-300"
        >
          LinkedIn
        </a>{" "}
        ·{" "}
        <a
          href={PERSONAL_INFO.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-300"
        >
          X
        </a>
      </div>
    </footer>
  );
};
