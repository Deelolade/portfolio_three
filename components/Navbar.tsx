"use client";

import React, { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { PERSONAL_INFO } from "../data/portfolioData";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Writing", href: "#writing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#09090b] border-b border-zinc-800/80 py-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Identity */}
          <a
            href="#"
            className="font-medium text-zinc-100 hover:text-emerald-400 transition-colors"
          >
            {PERSONAL_INFO.brand}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-emerald-400 hover:underline transition-all"
            >
              <span>Let's Work Together</span>
              <FiArrowUpRight size={14} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-zinc-100 p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b] border-b border-zinc-800 px-4 py-4 space-y-3 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-400 hover:text-emerald-400 py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-emerald-400 hover:underline py-1 font-medium"
          >
            Let's Work Together ↗
          </a>
        </div>
      )}
    </header>
  );
};
