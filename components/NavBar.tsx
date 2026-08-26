"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/masterclasses", label: "Masterclasses" },
  { href: "/docs", label: "Docs & Setup" },
  { href: "/events", label: "Events" },
  { href: "/submissions", label: "Submissions" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--navy)] text-white shadow-md">
      <div className="h-1 bg-[var(--amber)]" />
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
        <Link href="/" className="flex items-baseline gap-1 shrink-0 font-headline">
          <span className="text-lg font-bold tracking-tight">Pine Labs</span>
          <span className="text-lg font-bold text-[var(--amber)]">.AI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
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

        <div className="ml-auto hidden md:block">
          <Link
            href="/submit"
            className="rounded-md bg-[var(--teal)] hover:bg-[var(--teal-dark)] px-4 py-2 text-sm font-semibold transition-colors"
          >
            Submit an idea
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="ml-auto md:hidden flex h-11 w-11 items-center justify-center rounded-md hover:bg-white/10"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 bg-[var(--navy)] px-4 py-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-3 text-base hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/submit"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-md bg-[var(--teal)] px-3 py-3 text-center text-base font-semibold hover:bg-[var(--teal-dark)]"
          >
            Submit an idea
          </Link>
        </nav>
      )}
    </header>
  );
}
