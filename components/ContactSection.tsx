"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  Check,
  MapPin,
  Clock,
} from "./Icons";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Project Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "Project Inquiry", message: "" });
    }, 5000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-24 border-b border-zinc-800/60 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Headline & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-emerald-400 bg-zinc-900 border border-zinc-800 rounded-md mb-4">
                <span>08 // GET IN TOUCH</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
                Let's build something great.
              </h2>
              <p className="text-base text-zinc-400 leading-relaxed font-sans">
                Have an idea, project, or opportunity you'd like to discuss? I'd love to hear about it.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 bg-zinc-900/40 border border-zinc-800/80 rounded-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-zinc-400">
                <span className="flex items-center gap-2">
                  <Mail size={14} className="text-emerald-400" />
                  <span>DIRECT EMAIL</span>
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-[11px] text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  {copiedEmail ? "✓ COPIED" : "COPY EMAIL"}
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-semibold text-zinc-100 hover:text-emerald-400 block transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Book A Call CTA */}
            <div className="p-5 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                <Calendar size={16} />
                <span>SCHEDULE A DISCOVERY CALL</span>
              </div>
              <p className="text-xs text-zinc-400">
                Need to discuss system scope, technical requirements, or timelines directly?
              </p>
              <a
                href={PERSONAL_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-medium text-zinc-950 bg-emerald-400 rounded-md hover:bg-emerald-300 transition-colors"
              >
                <span>Book a Call →</span>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <span className="text-xs font-mono text-zinc-400 block mb-3">
                CONNECT ACROSS THE WEB
              </span>
              <div className="flex flex-wrap gap-3 font-mono text-xs">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300 hover:border-zinc-600 hover:text-zinc-100 transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300 hover:border-zinc-600 hover:text-zinc-100 transition-colors"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300 hover:border-zinc-600 hover:text-zinc-100 transition-colors"
                >
                  <Twitter size={14} />
                  <span>X / Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-zinc-900/30 border border-zinc-800/80 rounded-xl">
              <h3 className="text-xl font-bold text-zinc-100 mb-6 font-mono text-sm uppercase tracking-wider flex items-center justify-between">
                <span>Send a Direct Message</span>
                <span className="text-xs text-emerald-400 font-normal lowercase">
                  ● typical response &lt;24hrs
                </span>
              </h3>

              {submitted ? (
                <div className="p-6 bg-emerald-950/30 border border-emerald-800/60 rounded-lg text-center space-y-3 font-mono">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-100 font-sans">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-zinc-300">
                    Thank you for reaching out, Habeeb will respond to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Vance"
                        className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-md text-zinc-100 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-2">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-md text-zinc-100 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2">
                      SUBJECT / INQUIRY TYPE
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Full-Stack SaaS Application / Freelance Project"
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-md text-zinc-100 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2">
                      PROJECT DETAILS *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your product goals, timeline, and tech stack requirements..."
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-md text-zinc-100 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 font-mono text-xs font-medium text-zinc-950 bg-emerald-400 rounded-md hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/30"
                  >
                    <span>Send Message →</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
