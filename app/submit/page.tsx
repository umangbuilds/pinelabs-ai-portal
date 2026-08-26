"use client";

import { useState } from "react";
import Link from "next/link";

const teams = [
  "Engineering / Developer",
  "Product",
  "Business",
  "Finance",
  "Marketing",
  "HR",
  "Operations",
  "Group company / International team",
  "Other",
];

const types = ["Idea", "Use case", "Prototype", "Agent workflow", "Working solution"];

const toolOptions = [
  "Agentic Org",
  "P3P rails",
  "Grantex",
  "MCP servers",
  "Connectors (Tally, Jira, GitHub, …)",
  "Pine Labs sandbox",
  "Not applicable yet (idea stage)",
];

export default function Submit() {
  const [tools, setTools] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function toggleTool(t: string) {
    setTools((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      team: form.get("team"),
      type: form.get("type"),
      title: form.get("title"),
      description: form.get("description"),
      repoUrl: form.get("repoUrl"),
      demoUrl: form.get("demoUrl"),
      tools,
    };
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Submission failed. Please try again.");
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--teal)] text-white text-2xl">✓</div>
        <h1 className="mt-5 text-3xl font-bold text-[var(--navy)]">Submission received</h1>
        <p className="mt-3 text-gray-600">
          Thank you for contributing to Pine Labs.AI. The expert panel reviews all
          submissions — selected ideas are recognized, awarded, and considered for
          implementation across Pine Labs products and workflows.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/submissions" className="rounded-md bg-[var(--navy)] text-white px-5 py-2.5 font-semibold hover:opacity-90">
            View all submissions
          </Link>
          <button
            onClick={() => { setDone(false); setTools([]); }}
            className="rounded-md border border-gray-300 px-5 py-2.5 font-semibold hover:bg-gray-100"
          >
            Submit another
          </button>
        </div>
      </div>
    );
  }

  const label = "block text-sm font-semibold text-[var(--navy)]";
  const input =
    "mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)]";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--navy)]">Submit your build</h1>
      <p className="mt-2 text-gray-600">
        Any Pine Labs employee can submit an idea, use case, prototype, agent
        workflow, or working solution. Submissions are reviewed by the expert panel.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-6 rounded-lg bg-white border border-gray-200 p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={label}>Your name *</label>
            <input id="name" name="name" required className={input} placeholder="Full name" />
          </div>
          <div>
            <label htmlFor="email" className={label}>Pine Labs email *</label>
            <input id="email" name="email" type="email" required className={input} placeholder="you@pinelabs.com" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="team" className={label}>Team / function *</label>
            <select id="team" name="team" required className={input} defaultValue="">
              <option value="" disabled>Select your team</option>
              {teams.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="type" className={label}>Submission type *</label>
            <select id="type" name="type" required className={input} defaultValue="">
              <option value="" disabled>Select a type</option>
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="title" className={label}>Title *</label>
          <input id="title" name="title" required className={input} placeholder="One-line name for your idea or build" />
        </div>

        <div>
          <label htmlFor="description" className={label}>Description *</label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            className={input}
            placeholder="What problem does it solve? How does it work? What Pine Labs rails or workflows does it touch?"
          />
        </div>

        <fieldset>
          <legend className={label}>Pine Labs stack used</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {toolOptions.map((t) => (
              <label key={t} className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={tools.includes(t)}
                  onChange={() => toggleTool(t)}
                  className="h-4 w-4 accent-[var(--teal)]"
                />
                {t}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="repoUrl" className={label}>Repo link (optional)</label>
            <input id="repoUrl" name="repoUrl" type="url" className={input} placeholder="https://github.com/…" />
          </div>
          <div>
            <label htmlFor="demoUrl" className={label}>Demo link (optional)</label>
            <input id="demoUrl" name="demoUrl" type="url" className={input} placeholder="Demo video or environment" />
          </div>
        </div>

        {error && (
          <p className="rounded-md bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-700">{error}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="rounded-md bg-[var(--teal)] hover:bg-[var(--teal-dark)] disabled:opacity-60 px-6 py-2.5 font-semibold text-white transition-colors"
        >
          {submitting ? "Submitting…" : "Submit to the expert panel"}
        </button>
      </form>
    </div>
  );
}
