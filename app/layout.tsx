import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habeeb Oluwanishola — Full-Stack JavaScript Developer",
  description:
    "Personal portfolio of Habeeb Oluwanishola, a Full-Stack JavaScript & TypeScript Developer based in Lagos, Nigeria specializing in building scalable web applications with React, Next.js, Node.js, and PostgreSQL.",
  keywords: [
    "Habeeb Oluwanishola",
    "Full-Stack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Lagos Nigeria Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Habeeb Oluwanishola" }],
  creator: "Habeeb Oluwanishola",
  openGraph: {
    title: "Habeeb Oluwanishola — Full-Stack JavaScript Developer",
    description:
      "I build scalable web applications and digital products that turn ideas into reliable experiences.",
    url: "https://habeeboluwanishola.dev",
    siteName: "Habeeb Oluwanishola Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Habeeb Oluwanishola — Full-Stack JavaScript Developer",
    description:
      "I build scalable web applications and digital products that turn ideas into reliable experiences.",
    creator: "@habeeb_dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-emerald-400 font-sans">
        {children}
      </body>
    </html>
  );
}
