import React from "react";

export const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      title: "Full-Stack Development",
      description:
        "Building complete web applications from database schemas to client user interfaces.",
    },
    {
      title: "Frontend Engineering",
      description:
        "Developing responsive, accessible, and fast web interfaces using React, Next.js, and TypeScript.",
    },
    {
      title: "Backend & API Development",
      description:
        "Designing RESTful APIs, Node.js services, database architectures, and authentication flows.",
    },
    {
      title: "Product Development",
      description:
        "Transforming requirements and ideas into production-ready software systems.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 border-b border-zinc-800/80">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mb-6 font-sans">
        What I Do
      </h2>

      <div className="space-y-4 max-w-2xl font-sans">
        {capabilities.map((cap) => (
          <div key={cap.title} className="text-sm">
            <strong className="text-zinc-200 font-semibold">{cap.title}</strong>
            <span className="text-zinc-400"> — {cap.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
