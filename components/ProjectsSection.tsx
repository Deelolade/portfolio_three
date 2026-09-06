"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "../data/portfolioData";
import { ArrowRight, ExternalLink, Github, Check, Terminal, Layers, X, Code } from "./Icons";

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 border-b border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-emerald-400 bg-zinc-900 border border-zinc-800 rounded-md mb-4">
              <span>02 // SELECTED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Real-World Applications & Products
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm font-mono text-zinc-400 max-w-sm">
            Solving real problems with complete frontend & backend systems. No placeholder practice code.
          </p>
        </div>

        {/* Editorial Projects List */}
        <div className="space-y-24">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
              >
                {/* Visual Mockup Column */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    className={`relative cursor-pointer rounded-xl border border-zinc-800 bg-gradient-to-br ${project.mockupBg} p-6 sm:p-8 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-zinc-600 group-hover:shadow-emerald-950/20`}
                  >
                    {/* Top Mockup Browser Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-6 font-mono text-xs text-zinc-500">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-zinc-700/60" />
                        <span className="w-3 h-3 rounded-full bg-zinc-700/60" />
                        <span className="w-3 h-3 rounded-full bg-zinc-700/60" />
                      </div>
                      <div className="px-3 py-1 bg-zinc-950/80 border border-zinc-800 rounded text-zinc-400 text-[11px] truncate max-w-[200px] sm:max-w-none">
                        https://{project.id}.dev
                      </div>
                      <span className="hidden sm:inline-block text-emerald-400 font-semibold">
                        {project.badge}
                      </span>
                    </div>

                    {/* Mockup Card Content Inner */}
                    <div className="bg-zinc-950/90 rounded-lg border border-zinc-800/80 p-5 font-mono">
                      <div className="flex items-center justify-between mb-3 text-xs text-zinc-400">
                        <span className="text-zinc-500">// SYSTEM OVERVIEW</span>
                        <span className="text-emerald-400">{project.impactMetric}</span>
                      </div>
                      <div className="text-lg font-bold text-zinc-100 font-sans mb-2">
                        {project.title}
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-4">
                        {project.tagline}
                      </p>

                      {/* Mockup Architecture Tags Preview */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] text-zinc-300 bg-zinc-900 border border-zinc-800 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-2 py-0.5 text-[10px] text-zinc-500">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Click Overlay Banner */}
                    <div className="mt-4 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-emerald-400 transition-colors">
                      <span>Click for deep architecture view</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Project Specs & Narrative Column */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-6">
                    {/* Category & Badge */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Problem -> Solution -> Outcome Breakdown */}
                    <div className="space-y-3 font-mono text-xs pt-2">
                      <div className="p-3 bg-zinc-900/60 border-l-2 border-amber-500/80 rounded-r">
                        <span className="text-amber-400 font-bold block mb-1">
                          PROBLEM →
                        </span>
                        <p className="text-zinc-300 font-sans leading-snug">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-3 bg-zinc-900/60 border-l-2 border-indigo-500/80 rounded-r">
                        <span className="text-indigo-400 font-bold block mb-1">
                          SOLUTION →
                        </span>
                        <p className="text-zinc-300 font-sans leading-snug">
                          {project.solution}
                        </p>
                      </div>

                      <div className="p-3 bg-zinc-900/60 border-l-2 border-emerald-500/80 rounded-r">
                        <span className="text-emerald-400 font-bold block mb-1">
                          OUTCOME →
                        </span>
                        <p className="text-zinc-300 font-sans leading-snug">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links & CTA Buttons */}
                    <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/80">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-zinc-950 bg-emerald-400 rounded hover:bg-emerald-300 transition-colors"
                        >
                          <span>Live Product</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 rounded hover:border-zinc-700 hover:text-zinc-100 transition-colors"
                        >
                          <Github size={14} />
                          <span>Source Code</span>
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="ml-auto text-xs font-mono text-zinc-500 hover:text-emerald-400 transition-colors underline underline-offset-4"
                      >
                        Inspect Architecture
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep Architecture Drawer Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0c0c0e] border border-zinc-800 rounded-xl p-6 sm:p-8 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-6 border-b border-zinc-800 mb-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-zinc-100">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-zinc-400 hover:text-zinc-100 bg-zinc-900 border border-zinc-800 rounded-md"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Architecture Highlights */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono text-zinc-400 uppercase mb-3 flex items-center gap-2">
                  <Terminal size={14} className="text-emerald-400" />
                  <span>Key Architectural Highlights</span>
                </h4>
                <div className="space-y-2.5 font-mono text-xs">
                  {selectedProject.architectureHighlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 bg-zinc-900/70 border border-zinc-800/80 rounded"
                    >
                      <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-zinc-300 font-sans text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Full Breakdown */}
              <div>
                <h4 className="text-xs font-mono text-zinc-400 uppercase mb-3">
                  Technology Infrastructure
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 font-mono text-xs text-zinc-200 bg-zinc-900 border border-zinc-700/80 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
                <div className="text-xs font-mono text-emerald-400">
                  {selectedProject.impactMetric}
                </div>
                <div className="flex items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-mono text-zinc-950 bg-emerald-400 rounded hover:bg-emerald-300 font-medium"
                    >
                      Launch Project →
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 text-xs font-mono text-zinc-400 hover:text-zinc-200 bg-zinc-900 border border-zinc-800 rounded"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
