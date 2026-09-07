"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section className="py-16 sm:py-20 border-b border-zinc-800/80">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-2 font-sans">
        Let's build something.
      </h2>

      <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-2xl font-sans">
        Have an idea, project, or opportunity you'd like to discuss? I'd love to hear about it.
      </p>

      {/* Direct Info */}
      <div className="space-y-3 font-mono text-xs mb-8 max-w-2xl">
        <div>
          <span className="text-zinc-500 block">Email:</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-emerald-400 hover:underline text-sm font-medium"
          >
            {PERSONAL_INFO.email} ↗
          </a>
        </div>

        <div>
          <span className="text-zinc-500 block">WhatsApp:</span>
          <a
            href={PERSONAL_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline text-sm font-medium"
          >
            {PERSONAL_INFO.phone} ↗
          </a>
        </div>

        <div className="flex flex-wrap gap-4 text-xs pt-1">
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
            X  ↗
          </a>
        </div>
      </div>

      {/* Direct Contact Form */}
      <div className="pt-6 border-t border-zinc-900 max-w-2xl">
        <h3 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-4">
          Send Message
        </h3>

        {submitted ? (
          <div className="p-3 border border-emerald-800/80 font-mono text-xs text-emerald-400">
            Message sent. Habeeb will respond shortly via email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-3 py-2 bg-transparent border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-3 py-2 bg-transparent border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Project details..."
                className="w-full px-3 py-2 bg-transparent border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-emerald-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 font-mono text-xs text-zinc-950 bg-emerald-400 hover:bg-emerald-300 font-medium transition-colors"
            >
              Let's Talk →
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
