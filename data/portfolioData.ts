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
  companyShort?: string;
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
  website: "https://deelolade.com.ng",
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
      "Helped build and ship Khrien Academy, a student registration and course-discovery platform that onboarded 700+ prospective students."
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
  {
    title: "Currently Exploring",
    description: "Expanding technical skills and tooling.",
    skills: [
      { name: "Python", note: "Backend & scripting" },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      `Working with Habeeb on Luketech’s website has been a really good experience. Habeeb is actually a childhood friend of mine, so one thing that stood out to me from the beginning was how professionally he handled the project despite our relationship.

When I first approached him in February about building the website, instead of simply listing out what he could do over WhatsApp because of our familiarity, he scheduled a Google Meet with me. We spent about an hour discussing exactly what I wanted, and he was already showing me different samples and possibilities during the conversation. That immediately showed me that he was approaching it as a proper client project.

Throughout the project, his communication remained very professional. Even when I kept changing or expanding the scope of what I wanted, he was patient, attentive and willing to make the necessary adjustments without making the process difficult. In fact, any delays that occurred were largely from my end, not his.

The first phase of the website was completed successfully, and I was very happy with the result. We are already looking forward to the next phase, where we'll be adding more features and taking the website to a much higher level. Overall, what stood out most to me was his professionalism. He was able to separate friendship from business and still give me the level of attention and respect you would expect from a professional service provider.`,
    author: "Abdulrafiu Moshood",
    role: "Managing Director",
    company: "Luketech Plumbing and Drilling Company LTD",
    companyShort: "Luketech",
  },
  {
    id: "t2",
    quote:
      "Habeeb worked with us for two years as a fullstack developer, and was part of our team from the very start of the NairaGame.com project through to launch. He consistently delivered his tasks on schedule and kept clear, proactive communication with our project manager throughout — the kind of reliability that makes a project run smoothly. What stood out most was that he managed all of this while also mentoring aspiring developers coming through our company's training program, and he did both roles with the same level of care and professionalism. He's dependable, easy to work with, and someone I'd gladly work with again.",
    author: "Martins Ejiofor",
    role: "Founder",
    company: "Tinzwave Technology",
    companyShort: "Tinzwave Technology",
  },
];

