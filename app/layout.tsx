import type { Metadata } from "next";
import "./globals.css";
import { PERSONAL_INFO } from "../data/portfolioData";

const pageTitle = `${PERSONAL_INFO.brand} — ${PERSONAL_INFO.title}`;
const twitterHandle = `@${
  PERSONAL_INFO.twitter.split("/").filter(Boolean).pop() ?? "deelolade"
}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: `Personal portfolio of ${PERSONAL_INFO.name} (${PERSONAL_INFO.brand}), a Full-Stack Engineer based in Lagos, Nigeria, building reliable web applications and backend systems.`,
  keywords: [
    "Deelolade",
    PERSONAL_INFO.name,
    "Full-Stack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Lagos Nigeria Developer",
    "Software Engineer",
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  creator: PERSONAL_INFO.brand,
  icons: {
    icon: "/DEE-logo.jpg",
    apple: "/DEE-logo.jpg",
  },
  openGraph: {
    title: `${pageTitle} · ${PERSONAL_INFO.brand}`,
    description:
      "I build scalable web applications and digital products that turn ideas into reliable experiences.",
    url: "https://deelolade.com.ng",
    siteName: `${PERSONAL_INFO.brand} — ${PERSONAL_INFO.name}`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} · ${PERSONAL_INFO.brand}`,
    description:
      "I build scalable web applications and digital products that turn ideas into reliable experiences.",
    creator: twitterHandle,
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
