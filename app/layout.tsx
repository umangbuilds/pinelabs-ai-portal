import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const BASE_PATH = "/pinelabs-ai-portal";
const SITE_URL = `https://umangbuilds.github.io${BASE_PATH}`;

const headlineFont = Syne({
  variable: "--font-headline",
  weight: ["700", "800"],
  subsets: ["latin"],
});
const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const title = "Pine Labs.AI Portal";
const description =
  "Masterclass and Builder Community Program — learn, build, and submit AI agent ideas on Pine Labs rails.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  icons: {
    icon: [
      { url: `${BASE_PATH}/icon.png`, sizes: "32x32", type: "image/png" },
      { url: `${BASE_PATH}/favicon-16.png`, sizes: "16x16", type: "image/png" },
    ],
    apple: `${BASE_PATH}/apple-icon.png`,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title,
    description,
    siteName: title,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${headlineFont.variable} ${bodyFont.variable} antialiased min-h-screen flex flex-col`}>
        <NavBar />
        <main className="flex-1">{children}</main>
        <footer className="bg-[var(--navy-deep)] text-white/70 text-sm">
          <div className="mx-auto max-w-6xl px-4 py-6 flex flex-wrap items-center justify-between gap-2">
            <span>Pine Labs.AI — Masterclass &amp; Builder Community Program</span>
            <span>Internal circulation only · Pine Labs employees</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
