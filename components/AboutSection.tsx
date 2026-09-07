import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 border-b border-zinc-800/80">
      <div className="space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base max-w-2xl font-sans">
        <p>
          Good products need more than just working code. They need thoughtful
          execution, reliable systems, and an understanding of the people using them.
          I help turn ideas into functional web applications by building solutions
          that are practical, scalable, and easy to use.
        </p>

        <p>
          As a Full-Stack Engineer, I work across the entire development
          process from building responsive interfaces with React and Next.js to
          designing APIs, backend services, and databases with Node.js, TypeScript,
          and PostgreSQL. This allows me to understand a product beyond just one part
          of the stack and contribute to bringing ideas from concept to production.
        </p>

        <p>
          Based in Lagos, Nigeria, I work with clients and teams locally and remotely.
          I enjoy solving real problems, learning from every project, and finding
          simpler ways to build useful software—currently exploring Python to expand my engineering toolkit. Outside of coding, you'll probably
          find me watching a series, playing games with friends, or trying new food.
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-900 font-mono text-xs text-zinc-400 space-y-1 max-w-2xl">
        <div>
          <span className="text-zinc-500">Location: </span>
          <span className="text-zinc-300">Lagos, Nigeria</span>
        </div>

        <div>
          <span className="text-zinc-500">Primary Focus: </span>
          <span className="text-zinc-300">
             Web Applications, Websites & Digital Products
          </span>
        </div>

        <div>
          <span className="text-zinc-500">Primary Stack: </span>
          <span className="text-zinc-300">
            React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL
          </span>
        </div>

        <div>
          <span className="text-zinc-500">Currently Exploring: </span>
          <span className="text-zinc-300">Python</span>
        </div>
      </div>
    </section>
  );
};
