export interface Project {
  id: string;
  title: string;
  tagline: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

export interface Capability {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface TechCategory {
  title: string;
  description: string;
  skills: { name: string; note?: string }[];
}

export const PERSONAL_INFO = {
  brand: "Deelolade",
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
};

export const PROJECTS: Project[] = [
  {
    id: "harbor",
    title: "Harbor",
    tagline: "A collaborative workspace where teams plan, track, and ship work together.",
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
  },
  {
    id: "exam-prep",
    title: "ExamPrep",
    tagline: "An AI-powered exam preparation platform that creates personalized practice questions based on a student's chosen exam and subjects.",
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
  },
  {
    id: "luketech-pdc",
    title: "Luketech Plumbing & Drilling",
    tagline: "A production website for a borehole drilling and water infrastructure company, built to showcase its services, projects, and expertise.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
    ],
    liveUrl: "https://www.luketechpdc.com/",
    githubUrl: "",
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description: "Building complete web applications across the frontend and backend—from user interfaces and APIs to databases, authentication, and deployment.",
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive and accessible user interfaces with React and Next.js, with a focus on performance, usability, and clean implementation.",
  },
  {
    id: "backend",
    title: "Backend & API Development",
    description: "Designing backend services and APIs that handle application logic, authentication, databases, and real-time functionality.",
  },
  {
    id: "product",
    title: "Product Development",
    description: "Helping turn ideas into functional digital products by building practical solutions that can grow and evolve over time.",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Khrien Creation",
    role: "Full-Stack Developer",
    location: "Lagos, Nigeria",
    period: "Jan 2026 — Present",
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
    role: "Full-Stack Developer & Technical Trainer",
    location: "Lagos, Nigeria",
    period: "Jan 2025 — Jul 2026",
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
    description: "Building responsive, accessible, and high-performance web interfaces.",
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
    description: "Building APIs, application logic, authentication, and real-time functionality.",
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
    description: "Working with databases, cloud services, content management, and deployment.",
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
  },
  {
    id: "t2",
    quote:
      "Working with Habeeb on our fintech MVP was a game changer. He took complex, ambiguous product requirements and translated them into a crisp, high-performing Next.js application in record time. I highly recommend him to any team building real products.",
    author: "Fatima Al-Hassan",
    role: "Founder & CEO",
    company: "Payflow Africa",
  },
  {
    id: "t3",
    quote:
      "Habeeb is one of the most dependable full-stack developers I've worked alongside. His attention to frontend detail combined with his deep understanding of PostgreSQL database design makes him an invaluable asset for any digital product.",
    author: "Chidubem Okonkwo",
    role: "Principal Product Architect",
    company: "Apex Product Studio",
  },
];
