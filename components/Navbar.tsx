"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Writing", href: "#writing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Identity */}
          <a
            href="#"
            className="group flex items-center gap-2.5 font-medium tracking-tight text-zinc-100 transition-colors hover:text-emerald-400"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-base sm:text-lg">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Right: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-mono text-zinc-400">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-colors hover:text-zinc-100 focus:outline-none focus:text-emerald-400"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Primary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium tracking-wide text-zinc-100 bg-zinc-900 border border-zinc-700/80 rounded-md hover:bg-zinc-800 hover:border-zinc-500 hover:text-emerald-400 transition-all duration-200 shadow-sm"
            >
              <span>Let's Work Together</span>
              <ArrowRight size={14} className="text-emerald-400" />
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-700"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#09090b] border-b border-zinc-800 p-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-zinc-300 border-b border-zinc-900 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 py-3 px-4 text-xs font-mono font-medium text-zinc-900 bg-emerald-400 rounded-md hover:bg-emerald-300 transition-colors"
            >
              <span>Let's Work Together</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
