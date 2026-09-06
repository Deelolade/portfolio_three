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
  name: "Habeeb Oluwanishola",
  title: "Full-Stack JavaScript Developer",
  role: "Full-Stack JavaScript Developer",
  location: "Lagos, Nigeria",
  availability: "Available for freelance projects and opportunities",
  availabilityStatus: true,
  email: "habeeb.oluwanishola.dev@gmail.com",
  calendlyUrl: "https://calendly.com/habeeb-dev/30min",
  github: "https://github.com/habeeb-oluwanishola",
  linkedin: "https://linkedin.com/in/habeeb-oluwanishola",
  twitter: "https://x.com/habeeb_dev",
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
    id: "payflow-engine",
    title: "Payflow Engine",
    category: "Fintech & Payments Infrastructure",
    badge: "Full-Stack SaaS",
    tagline: "Automated multi-currency subscription and invoice platform for African merchants.",
    problem:
      "Cross-border subscription billing in Emerging Markets suffers from frequent gateway outages, failed recurring retries, and high friction in reconciliation.",
    solution:
      "Engineered an automated recurring billing engine with intelligent gateway fallbacks, automated retry queues, webhook idempotency handlers, and customer self-serve billing portals.",
    outcome:
      "Reduced monthly subscription drop-offs by 24% and processed over $1.4M in cross-border settlements with 99.98% transaction reliability.",
    impactMetric: "$1.4M+ Processed · 99.98% Gateway Uptime",
    description:
      "A complete billing platform enabling businesses to accept recurring payments in NGN, USD, and KES with automated ledger reconciliation and multi-tenant webhook dispatches.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Redis",
      "Paystack API",
    ],
    liveUrl: "https://payflow-engine-demo.vercel.app",
    githubUrl: "https://github.com/habeeb-oluwanishola/payflow-engine",
    featured: true,
    architectureHighlights: [
      "Idempotent webhook pipeline processing 500+ events/sec",
      "Prisma relational schema with multi-tenant row-level isolation",
      "Automated exponential backoff retries for failed card charges",
      "Optimized Next.js App Router dashboard with server-side table pagination",
    ],
    mockupBg: "from-zinc-900 via-emerald-950/30 to-zinc-950",
  },
  {
    id: "pulse-apm",
    title: "Pulse Real-Time Observability",
    category: "Developer Tools & APM",
    badge: "Backend & Systems",
    tagline: "Lightweight APM & log analytics agent for Node.js microservices.",
    problem:
      "Engineering teams faced steep pricing and high resource overhead when deploying enterprise APM suites to inspect lightweight Node microservices.",
    solution:
      "Designed a zero-dependency telemetry agent and streaming WebSockets dashboard that aggregates HTTP latency metrics, memory allocation spikes, and error stack traces in real time.",
    outcome:
      "Decreased average mean-time-to-detection (MTTD) for production API errors from 45 minutes to under 3 minutes across 14 internal microservices.",
    impactMetric: "<3min Incident MTTD · Sub-5ms Agent Overhead",
    description:
      "A developer tool consisting of an npm telemetry package and a Next.js dashboard featuring live metrics visualization via WebSockets and time-series aggregation.",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Fastify",
      "Socket.IO",
      "TimescaleDB",
      "Tailwind CSS",
    ],
    liveUrl: "https://pulse-observability.vercel.app",
    githubUrl: "https://github.com/habeeb-oluwanishola/pulse-apm",
    featured: true,
    architectureHighlights: [
      "Asynchronous ring-buffer metric collection preventing event-loop blockages",
      "Real-time WebSocket streaming with binary protocol compression",
      "TimescaleDB hypertable partitioning for efficient time-series range queries",
      "Dark-mode canvas charting engine optimized for 60fps renders",
    ],
    mockupBg: "from-zinc-900 via-indigo-950/30 to-zinc-950",
  },
  {
    id: "commercescale",
    title: "CommerceScale Headless",
    category: "E-Commerce Architecture",
    badge: "Full-Stack Platform",
    tagline: "High-performance multi-vendor marketplace engine for digital products.",
    problem:
      "Legacy e-commerce templates suffered from slow initial page loads (>3.8s) and high cart abandonment during peak promotional drops.",
    solution:
      "Architected a headless e-commerce store with incremental static regeneration (ISR), serverless cart state synchronization, and Neon serverless PostgreSQL.",
    outcome:
      "Achieved a 99/100 Google Lighthouse performance rating and cut mobile checkout drop-off by 38%.",
    impactMetric: "99/100 Lighthouse · Sub-1.1s Page Load",
    description:
      "An end-to-end commerce experience with instant search filters, vendor dashboard payout tracking, inventory reservation, and secure digital asset download distribution.",
    technologies: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Neon PostgreSQL",
      "Supabase Auth",
      "Cloudinary",
    ],
    liveUrl: "https://commercescale.vercel.app",
    githubUrl: "https://github.com/habeeb-oluwanishola/commercescale",
    featured: true,
    architectureHighlights: [
      "Edge-cached Next.js App Router pages with 60-second ISR revalidation",
      "Atomic cart mutations using optimistic state updates",
      "Supabase Row-Level Security (RLS) protecting vendor financial records",
      "Cloudinary image transformation pipeline with WebP auto-conversion",
    ],
    mockupBg: "from-zinc-900 via-amber-950/20 to-zinc-950",
  },
  {
    id: "slate-editor",
    title: "Slate Collaborative API Studio",
    category: "Productivity & Developer Tools",
    badge: "Real-Time Web Application",
    tagline: "Browser-based OpenAPI schema architect & team documentation suite.",
    problem:
      "API documentation frequently fell out of sync with backend code bases, resulting in miscommunicated payload schemas between frontend and backend engineers.",
    solution:
      "Built a collaborative, real-time OpenAPI schema editor with live visual previewers, interactive endpoint test runners, and instant TypeScript interface generator.",
    outcome:
      "Adopted by 8 active engineering teams, eliminating hand-written API documentation overhead.",
    impactMetric: "8 Teams Active · 100% Schema Auto-Sync",
    description:
      "A developer tool for creating, validating, and sharing REST and GraphQL API specs with real-time multiplayer cursor synchronization.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "Socket.IO",
      "Tailwind CSS",
    ],
    liveUrl: "https://slate-api-studio.vercel.app",
    githubUrl: "https://github.com/habeeb-oluwanishola/slate-api-studio",
    featured: true,
    architectureHighlights: [
      "Operational Transformation (OT) state engine for concurrent editing",
      "Client-side AST schema parser for instant OpenAPI 3.1 validation",
      "Custom TypeScript type exporter converting JSON schemas to interfaces",
    ],
    mockupBg: "from-zinc-900 via-teal-950/20 to-zinc-950",
  },
  {
    id: "healthbridge-sync",
    title: "HealthBridge Clinical Portal",
    category: "Healthcare & Digital Health",
    badge: "Full-Stack Web App",
    tagline: "HIPAA-compliant patient triage and asynchronous clinical sync portal.",
    problem:
      "Specialist clinics struggled with paper-heavy intake forms, disorganized medical record transfers, and delayed triage scheduling.",
    solution:
      "Engineered an encrypted patient portal featuring dynamic symptom intake questionnaires, automated urgency scoring, and automated appointment scheduling.",
    outcome:
      "Shortened patient check-in wait times by 62% and eliminated manual intake entry errors for partner clinics.",
    impactMetric: "62% Faster Check-in · Zero Record Errors",
    description:
      "An accessible telehealth and triage web application enabling seamless communication between clinical staff and patients with file encryption at rest.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Cloudflare Workers",
    ],
    liveUrl: "https://healthbridge-sync.vercel.app",
    githubUrl: "https://github.com/habeeb-oluwanishola/healthbridge-sync",
    featured: false,
    architectureHighlights: [
      "End-to-end payload encryption for patient diagnostic uploads",
      "Server-side form state management with strict Zod validation schemas",
      "Automated clinic staff email notification dispatches via Cloudflare Workers",
    ],
    mockupBg: "from-zinc-900 via-blue-950/20 to-zinc-950",
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description:
      "Building complete web applications from frontend user interfaces to backend services, RESTful APIs, relational databases, authentication flows, and automated cloud deployments.",
    iconName: "layers",
    highlights: [
      "End-to-end TypeScript type safety across client and server",
      "Relational schema modeling and migration strategies in PostgreSQL",
      "Scalable deployment strategies on Vercel, Render, and Cloudflare",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Creating responsive, accessible, and high-performance user experiences using React and Next.js App Router with an unyielding emphasis on speed, clean typography, and Lighthouse metrics.",
    iconName: "code",
    highlights: [
      "Next.js App Router architecture, SSR, SSG, and ISR patterns",
      "Design system development with Tailwind CSS & component modularity",
      "Web vital optimization, WCAG compliance, and mobile-first layouts",
    ],
  },
  {
    id: "backend",
    title: "Backend & API Development",
    description:
      "Designing reliable backend microservices, REST APIs, authentication security, real-time WebSocket infrastructure, and high-concurrency database queries.",
    iconName: "database",
    highlights: [
      "Node.js, Express, and Fastify server architectures",
      "JWT, session, OAuth, and Supabase security integration",
      "Prisma & SQL query optimization for heavy transactional workloads",
    ],
  },
  {
    id: "product",
    title: "Product Development",
    description:
      "Helping startups and founders transform ambiguous ideas into crisp, production-ready digital products built for customer validation and long-term maintainability.",
    iconName: "terminal",
    highlights: [
      "Rapid prototyping with scalable production architecture",
      "Outcome-focused feature prioritization and tech debt management",
      "Clean documentation and maintainable codebase handoffs",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "DevScale Technologies",
    companyInitials: "DS",
    role: "Senior Full-Stack Software Engineer",
    location: "Lagos, Nigeria (Remote)",
    period: "2024 — Present",
    current: true,
    achievements: [
      "Led the backend and client architecture of a multi-tenant SaaS application serving over 45,000 active monthly users across West Africa.",
      "Re-engineered core API endpoints with Node.js and PostgreSQL connection pooling, reducing p99 response latencies from 420ms down to 85ms.",
      "Migrated legacy React frontend codebase to Next.js 15 App Router, improving overall Google Lighthouse Performance scores from 64 to 98.",
      "Mentored 4 junior and mid-level engineers through code reviews, architectural documentation, and weekly engineering brownbag sessions.",
    ],
    technologies: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Vercel",
    ],
  },
  {
    id: "exp-2",
    company: "Apex Product Studio",
    companyInitials: "AP",
    role: "Full-Stack JavaScript Developer",
    location: "Lagos, Nigeria",
    period: "2022 — 2024",
    achievements: [
      "Delivered 6 client products from greenfield concept to production launch using React, Node.js, Express, and PostgreSQL.",
      "Built real-time web socket channels for a logistics tracking dashboard handling over 12,000 daily active delivery updates.",
      "Integrated secure Paystack and Stripe payment gateways with idempotent webhook handlers, handling over $800k in monthly transactions.",
      "Established standardized CI/CD deployment pipelines on Vercel and Cloudflare, reducing deployment release times by 50%.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Socket.IO",
      "PostgreSQL",
      "Tailwind CSS",
      "Paystack API",
    ],
  },
  {
    id: "exp-3",
    company: "Kora Web Solutions",
    companyInitials: "KW",
    role: "Frontend Developer",
    location: "Lagos, Nigeria",
    period: "2020 — 2022",
    achievements: [
      "Developed high-converting, responsive web applications for financial service and e-commerce clients across Nigeria.",
      "Built reusable React component libraries styled with Tailwind CSS, reducing front-end development cycle times by 35%.",
      "Optimized web asset bundles and image rendering strategies, lowering average page load size by 1.8MB per route.",
    ],
    technologies: [
      "React",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML5/CSS3",
      "REST APIs",
    ],
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Frontend",
    description: "Building responsive, modern, and accessible client interfaces.",
    skills: [
      { name: "React", note: "Primary library" },
      { name: "Next.js", note: "App Router & SSR" },
      { name: "TypeScript", note: "Strict type safety" },
      { name: "Tailwind CSS", note: "Editorial layout styling" },
      { name: "Redux Toolkit", note: "Complex client state" },
    ],
  },
  {
    title: "Backend",
    description: "Engineering secure, scalable APIs and microservice architecture.",
    skills: [
      { name: "Node.js", note: "Server runtime" },
      { name: "Fastify", note: "High throughput APIs" },
      { name: "Express", note: "REST endpoints" },
      { name: "REST APIs", note: "OpenAPI design" },
      { name: "Socket.IO", note: "Real-time WebSockets" },
    ],
  },
  {
    title: "Database & Infrastructure",
    description: "Modeling data, managing persistent stores, and cloud hosting.",
    skills: [
      { name: "PostgreSQL", note: "Relational database" },
      { name: "Prisma", note: "ORM & type generation" },
      { name: "Supabase", note: "Auth & Realtime DB" },
      { name: "Neon", note: "Serverless Postgres" },
      { name: "Cloudinary", note: "Media CDN" },
      { name: "Vercel", note: "Edge hosting & CI/CD" },
      { name: "Cloudflare", note: "DNS & Workers" },
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
