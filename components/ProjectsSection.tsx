import React from "react";
import { PROJECTS } from "../data/portfolioData";

export const ProjectsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 border-b border-zinc-800/80">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-6 font-sans">
        Selected Works
      </h2>

      <div className="divide-y divide-zinc-800/80 max-w-2xl">
        {PROJECTS.map((project) => (
          <div key={project.id} className="py-6 first:pt-0 last:pb-0 space-y-2.5">
            {/* Title & One-line Description */}
            <div>
              <h3 className="text-lg font-bold text-zinc-100 font-sans inline-block mr-2">
                {project.title}
              </h3>
              <span className="text-sm text-zinc-400 font-sans">
                — {project.tagline}
              </span>
            </div>

            {/* Comma-Separated Stack */}
            <div className="text-xs font-mono text-zinc-400">
              <span className="text-zinc-500">Tech: </span>
              <span>{project.technologies.join(", ")}</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 text-xs font-mono pt-1">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  Live ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  Source ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
