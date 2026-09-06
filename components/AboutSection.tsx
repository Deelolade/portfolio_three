import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 border-b border-zinc-800/80">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-6 font-sans">
        About
      </h2>

      <div className="space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base max-w-2xl font-sans">
        <p>
          I approach software engineering with a focus on simplicity, predictability, and long-term maintainability. Having earned my degree in Computer Engineering, I view applications through both system design principles and practical user requirements. I prefer clean architectures and straightforward code over unnecessary abstractions.
        </p>

        <p>
          Over the past several years, I have worked across the full JavaScript and TypeScript ecosystem—building React and Next.js frontends, designing Node.js APIs, and structuring relational database schemas in PostgreSQL. I enjoy taking digital products from early concepts through backend architecture to production deployment.
        </p>

        <p>
          Based in Lagos, Nigeria, I work with product teams and client organizations locally and remotely. Outside of writing code and reviewing pull requests, I spend time analyzing classical chess endgames and following modern industrial architecture.
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-900 font-mono text-xs text-zinc-400 space-y-1 max-w-2xl">
        <div>
          <span className="text-zinc-500">Education: </span>
          <span className="text-zinc-300">B.Sc. Computer Engineering</span>
        </div>
        <div>
          <span className="text-zinc-500">Location: </span>
          <span className="text-zinc-300">Lagos, Nigeria</span>
        </div>
        <div>
          <span className="text-zinc-500">Primary Stack: </span>
          <span className="text-zinc-300">React, Next.js, Node.js, TypeScript, PostgreSQL</span>
        </div>
      </div>
    </section>
  );
};
