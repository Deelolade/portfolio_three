import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { PERSONAL_INFO } from "../data/portfolioData";

const SITE_URL = PERSONAL_INFO.website;
// Set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local to enable Google Analytics.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const pageTitle = `${PERSONAL_INFO.brand} — ${PERSONAL_INFO.title}`;
const socialTitle = `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title} | ${PERSONAL_INFO.brand}`;
const description = `Personal portfolio of ${PERSONAL_INFO.name} (${PERSONAL_INFO.brand}), a Full-Stack Engineer based in Lagos, Nigeria, building reliable web applications and backend systems.`;
const twitterHandle = `@${
  PERSONAL_INFO.twitter.split("/").filter(Boolean).pop() ?? "deelolade"
}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSONAL_INFO.name,
      alternateName: PERSONAL_INFO.brand,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/DEE-logo.jpg`,
      jobTitle: PERSONAL_INFO.title,
      sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin, PERSONAL_INFO.twitter],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: PERSONAL_INFO.brand,
      alternateName: PERSONAL_INFO.name,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: pageTitle,
  description,
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
  authors: [{ name: PERSONAL_INFO.name, url: SITE_URL }],
  creator: PERSONAL_INFO.brand,
  publisher: PERSONAL_INFO.brand,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/DEE-logo.jpg",
    apple: "/DEE-logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    siteName: PERSONAL_INFO.brand,
    title: socialTitle,
    description,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 630,
        height: 1200,
        alt: `${PERSONAL_INFO.brand} — ${PERSONAL_INFO.name}`, 
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description,
    creator: twitterHandle,
    images: [`${SITE_URL}/og-image.jpg`],
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
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","${GA_MEASUREMENT_ID}",{anonymize_ip:true});`,
              }}
            />
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
