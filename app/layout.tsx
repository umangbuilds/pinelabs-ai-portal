import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pine Labs.AI Portal",
  description:
    "Masterclass and Builder Community Program — learn, build, submit, and scale AI agent ideas on Pine Labs rails.",
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/masterclasses", label: "Masterclasses" },
  { href: "/docs", label: "Docs & Setup" },
  { href: "/events", label: "Events" },
  { href: "/submissions", label: "Submissions" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-50 bg-[var(--navy)] text-white shadow-md">
          <div className="h-1 bg-[var(--amber)]" />
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
            <Link href="/" className="flex items-baseline gap-1 shrink-0">
              <span className="text-lg font-bold tracking-tight">Pine Labs</span>
              <span className="text-lg font-bold text-[var(--amber)]">.AI</span>
            </Link>
            <nav className="flex items-center gap-1 overflow-x-auto text-sm">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 rounded-md hover:bg-white/10 whitespace-nowrap transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="ml-auto hidden sm:block">
              <Link
                href="/submit"
                className="rounded-md bg-[var(--teal)] hover:bg-[var(--teal-dark)] px-4 py-2 text-sm font-semibold transition-colors"
              >
                Submit an idea
              </Link>
            </div>
          </div>
        </header>
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
