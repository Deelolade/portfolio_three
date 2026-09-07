export interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  problem: string;
  solution: string;
  outcome: string;
  impactMetric: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  architectureHighlights: string[];
  mockupBg: string; // Gradient or SVG pattern preview style
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyInitials: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  achievements: string[];
  technologies: string[];
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  iconName: "terminal" | "layers" | "database" | "code";
  highlights: string[];
}

export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  slug: string;
  tags: string[];
  url?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  relationship: string;
}

export interface TechCategory {
  title: string;
  description: string;
  skills: { name: string; iconTag?: string; note?: string }[];
}

export const PERSONAL_INFO = {
  // Brand / public wordmark (site chrome, footer, metadata)
  brand: "Deelolade",
  // Professional name of the person behind the brand
  name: "Habeeb Oluwanishola",
  title: "Full-Stack Engineer",
  role: "Full-Stack Engineer",
  location: "Lagos, Nigeria",
  availability: "Available for freelance projects and opportunities",
  availabilityStatus: true,
  email: "habeeboluwanishola13@gmail.com",
  phone: "+234 912 219 3201",
  whatsapp: "https://wa.me/2349122193201",
  github: "https://github.com/deelolade",
  linkedin: "https://linkedin.com/in/deelolade",
  twitter: "https://x.com/deelolade",
  heroHeadline:
    "I build scalable web applications and digital products that turn ideas into reliable experiences.",
  heroSupportingText:
    "I specialize in building modern frontend experiences, backend systems, APIs, databases, and complete web applications using React, Next.js, Node.js, TypeScript, and PostgreSQL.",
  aboutParagraphs: [
    "My engineering approach is rooted in simplicity, predictability, and user clarity. Having earned my B.Sc. in Computer Engineering, I view software through the combined lens of system architecture and real-world human utility. I don't build software just to ship code—I craft complete, robust digital products engineered for long-term scalability and zero operational drama.",
    "Over the past 5+ years, I have worked across the full JavaScript/TypeScript stack—moving seamlessly between designing responsive React/Next.js client architectures, modeling relational data schemas in PostgreSQL, and building fault-tolerant Node.js REST and Socket.IO microservices. Whether architecting payment integrations, real-time dashboards, or multi-tenant SaaS applications, I prioritize maintainable patterns, rigorous type safety, and fast load times.",
    "Based in the vibrant technology hub of Lagos, Nigeria, I collaborate with forward-thinking startups and remote product teams globally. Outside of code and terminal sessions, you will usually find me analyzing classical chess endgames, following modern architectural design, or contributing to local developer meetups in West Africa.",
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "harbor",
    title: "Harbor",
    category: "Project Management & Collaboration",
    badge: "Full-Stack Web Application",

    tagline:
      "A collaborative workspace where teams plan, track, and ship work together.",

    problem:
      "Teams need a central place to organize projects, manage tasks, and stay aware of activity across their workspace without relying on disconnected tools.",

    solution:
      "Built a full-stack project management platform with kanban boards, drag-and-drop task management, workspace collaboration, OAuth authentication, and real-time activity updates.",

    outcome:
      "Created a centralized workspace that brings project planning, task management, and team activity into one collaborative environment.",

    impactMetric:
      "Plan · Track · Collaborate",

    description:
      "Harbor is a project management workspace that helps teams organize projects, manage tasks through kanban boards, and stay up to date with real-time workspace activity.",

    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Neon",
      "Prisma",
      "Better Auth",
      "Ably",
      "Resend",
      "dnd-kit",
    ],

    liveUrl: "https://harbor.deelolade.com.ng",
    githubUrl: "",

    featured: true,

    architectureHighlights: [
      "Drag-and-drop task management built with dnd-kit and sortable workflows.",
      "Dedicated task movement endpoint for handling board and column updates.",
      "OAuth authentication with Better Auth, including Google and GitHub sign-in.",
      "PostgreSQL database hosted on Neon and managed with Prisma ORM.",
      "Real-time activity pub/sub powered by Ably.",
      "Server-Sent Events proxy for delivering activity updates to the browser.",
      "Frontend activity subscriptions managed through a reusable useActivityStream hook.",
    ],

    mockupBg: "from-zinc-900 via-blue-950/20 to-zinc-950",
  },
  {
    id: "exam-prep",
    title: "ExamPrep",
    category: "Education Technology",
    badge: "AI-Powered Learning Platform",

    tagline:
      "An AI-powered exam preparation platform that creates personalized practice questions based on a student's chosen exam and subjects.",

    problem:
      "Students preparing for different examinations often struggle to find relevant practice questions tailored to their specific exam and selected subjects.",

    solution:
      "Built a full-stack exam preparation platform that uses AI to generate practice questions based on the examination and subjects selected by each user.",

    outcome:
      "Created a personalized practice experience that allows students to generate relevant questions based on their individual exam preparation needs.",

    impactMetric:
      "Select · Generate · Practice",

    description:
      "ExamPrep helps students prepare for examinations by generating AI-powered practice questions tailored to their selected exam and subjects.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "AI",
    ],

    liveUrl: "https://exam-prep-sigma-nine.vercel.app",
    githubUrl: "",

    featured: true,

    architectureHighlights: [
      "Dynamic question generation based on the user's selected examination.",
      "Subject-based question generation for personalized exam preparation.",
      "Full-stack architecture built with Next.js and Supabase.",
      "AI integration for generating relevant practice questions.",
      "Database-backed user and exam preparation workflows using Supabase.",
    ],

    mockupBg: "from-zinc-900 via-violet-950/20 to-zinc-950",
  },
  {
    id: "luketech-pdc",
    title: "Luketech Plumbing & Drilling",
    category: "Client Work",
    badge: "Production Business Website",

    tagline:
      "A production website for a borehole drilling and water infrastructure company, built to showcase its services, projects, and expertise.",

    problem:
      "Luketech needed a modern online presence that clearly communicates its borehole drilling and water infrastructure services while allowing the company to manage and update website content independently.",

    solution:
      "Designed and developed a responsive, content-driven website with Next.js and Tailwind CSS, integrating Sanity CMS so the client can update selected website content without requiring developer assistance.",

    outcome:
      "Delivered a modern production website that provides Luketech with a professional online presence and greater control over managing its website content.",

    impactMetric:
      "Client Work · CMS-Powered",

    description:
      "An official production website for Luketech Plumbing and Drilling Company, showcasing its borehole drilling, geophysical survey, pump installation, and water infrastructure services.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
    ],

    liveUrl: "https://www.luketechpdc.com/",
    githubUrl: "",

    featured: true,

    architectureHighlights: [
      "Built with Next.js for a fast, responsive production web experience.",
      "Integrated Sanity CMS to allow the client to manage and update selected website content.",
      "Structured content management to separate editable business content from the application codebase.",
      "Responsive interface designed to clearly communicate services, projects, and company information.",
    ],

    mockupBg: "from-zinc-900 via-cyan-950/20 to-zinc-950",
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description:
      "Building complete web applications across the frontend and backend—from user interfaces and APIs to databases, authentication, and deployment.",
    iconName: "layers",
    highlights: [
      "TypeScript across frontend and backend applications",
      "PostgreSQL database design and schema management",
      "Deployment with Vercel, Render, and Cloudflare",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Building responsive and accessible user interfaces with React and Next.js, with a focus on performance, usability, and clean implementation.",
    iconName: "code",
    highlights: [
      "Next.js App Router, SSR, SSG, and ISR",
      "Reusable interfaces with Tailwind CSS",
      "Performance optimization and mobile-first development",
    ],
  },
  {
    id: "backend",
    title: "Backend & API Development",
    description:
      "Designing backend services and APIs that handle application logic, authentication, databases, and real-time functionality.",
    iconName: "database",
    highlights: [
      "Node.js, Express, and Fastify applications",
      "Authentication with sessions, OAuth, and Supabase",
      "PostgreSQL, Prisma, and API development",
    ],
  },
  {
    id: "product",
    title: "Product Development",
    description:
      "Helping turn ideas into functional digital products by building practical solutions that can grow and evolve over time.",
    iconName: "terminal",
    highlights: [
      "From early ideas and prototypes to production applications",
      "Feature planning and practical technical decisions",
      "Clean, maintainable codebases and documentation",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Khrien Creation",
    companyInitials: "KC",
    role: "Full-Stack Developer",
    location: "Lagos, Nigeria",
    period: "Jan 2026 — Present",
    current: true,
    achievements: [
      "Architected and shipped production web applications serving as core company products.",
      "Built Quest, a Next.js and TypeScript platform for task management, document handling, and client reporting, backed by PostgreSQL and deployed on Vercel.",
      "Engineered the company's marketing website using Next.js and Tailwind CSS, with a focus on performance, responsive design, and strong Lighthouse scores.",
      "Developed Khrien Academy, a student registration and course-discovery platform that onboarded 700+ prospective students.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel",
      "Resend",
    ],
  },
  {
    id: "exp-2",
    company: "Tinzwave",
    companyInitials: "TW",
    role: "Full-Stack Developer & Technical Trainer",
    location: "Lagos, Nigeria",
    period: "Jan 2025 — Jul 2026",
    current: false,
    achievements: [
      "Co-built NairaGame, a gaming news, events, and marketplace platform across independent client, admin dashboard, and Node.js API codebases.",
      "Built a standalone admin dashboard for game management, user oversight, and reporting.",
      "Worked across frontend and backend development using React, Node.js, Express, and modern JavaScript tooling.",
      "Trained and mentored 8 junior developers and interns, teaching JavaScript, React, and Node.js fundamentals while conducting code reviews.",
    ],
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Frontend",
    description:
      "Building responsive, accessible, and high-performance web interfaces.",
    skills: [
      { name: "React", note: "UI development" },
      { name: "Next.js", note: "App Router & full-stack React" },
      { name: "TypeScript", note: "Type-safe applications" },
      { name: "Tailwind CSS", note: "Responsive UI development" },
      { name: "Redux Toolkit", note: "Client state management" },
    ],
  },
  {
    title: "Backend",
    description:
      "Building APIs, application logic, authentication, and real-time functionality.",
    skills: [
      { name: "Node.js", note: "Server-side development" },
      { name: "Fastify", note: "Backend APIs" },
      { name: "Express", note: "REST APIs" },
      { name: "Socket.IO", note: "Real-time communication" },
      { name: "Better Auth", note: "Authentication & OAuth" },
    ],
  },
  {
    title: "Data & Infrastructure",
    description:
      "Working with databases, cloud services, content management, and deployment.",
    skills: [
      { name: "PostgreSQL", note: "Relational databases" },
      { name: "Prisma", note: "ORM & database access" },
      { name: "Supabase", note: "Backend & authentication" },
      { name: "Neon", note: "Serverless PostgreSQL" },
      { name: "Vercel", note: "Deployment" },
      { name: "Cloudflare", note: "Infrastructure & services" },
      { name: "Sanity", note: "Content management" },
      { name: "Cloudinary", note: "Media management" },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Habeeb possesses that rare engineering maturity where he cares just as deeply about business outcomes and clean architecture as he does about shipped code. He rebuilt our payment processing queue with zero downtime and flawless reliability.",
    author: "Tunde Bakare",
    role: "VP of Engineering",
    company: "DevScale Technologies",
    relationship: "Direct Engineering Lead",
  },
  {
    id: "t2",
    quote:
      "Working with Habeeb on our fintech MVP was a game changer. He took complex, ambiguous product requirements and translated them into a crisp, high-performing Next.js application in record time. I highly recommend him to any team building real products.",
    author: "Fatima Al-Hassan",
    role: "Founder & CEO",
    company: "Payflow Africa",
    relationship: "Client & Product Lead",
  },
  {
    id: "t3",
    quote:
      "Habeeb is one of the most dependable full-stack developers I've worked alongside. His attention to frontend detail combined with his deep understanding of PostgreSQL database design makes him an invaluable asset for any digital product.",
    author: "Chidubem Okonkwo",
    role: "Principal Product Architect",
    company: "Apex Product Studio",
    relationship: "Senior Colleague",
  },
];

// i dont have articles yet 
export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Things I've Learned Building Scalable SaaS with Next.js App Router",
    date: "Aug 14, 2026",
    readTime: "6 min read",
    summary:
      "Practical lessons on handling Server Components, dynamic streaming boundaries, server action validations, and caching pitfalls in production.",
    slug: "nextjs-app-router-saas-lessons",
    tags: ["Next.js", "React", "Architecture"],
  },
  {
    id: "art-2",
    title: "Understanding Authentication Beyond Login Forms: Sessions vs JWTs",
    date: "Jun 22, 2026",
    readTime: "8 min read",
    summary:
      "A deep dive into secure token rotation, httpOnly cookie state management, multi-device revocation, and Row-Level Security in modern web apps.",
    slug: "authentication-beyond-login-forms",
    tags: ["Security", "Node.js", "Auth"],
  },
  {
    id: "art-3",
    title: "Optimizing PostgreSQL Queries for High-Throughput Node.js APIs",
    date: "Apr 05, 2026",
    readTime: "7 min read",
    summary:
      "How to diagnose N+1 queries, leverage composite indexing, manage connection pools with Prisma, and partition high-volume tables.",
    slug: "optimizing-postgresql-queries-nodejs",
    tags: ["PostgreSQL", "Database", "Node.js"],
  },
];
