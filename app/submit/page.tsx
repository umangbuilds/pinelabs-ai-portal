"use client";

import { useState } from "react";
import Link from "next/link";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

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
const tracks = [
  "Payments & settlements",
  "Merchant operations",
  "Customer support automation",
  "Risk & compliance",
  "Internal tooling & productivity",
  "Other",
];
const licenses = ["Internal use only", "MIT", "Apache-2.0", "Other / not decided yet"];
const stackOptions = ["Agentic Org", "P3P rails", "Grantex", "MCP servers", "Connectors (Tally, Jira, GitHub, …)", "Pine Labs sandbox"];

const inputCls = "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)]";

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[var(--navy)]">{label}</label>
      {hint && <p className="text-xs text-gray-500 mt-0.5">{hint}</p>}
      <div className="mt-1">{children}</div>
    </div>
  );
}

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-gray-100 pt-6 first:border-t-0 first:pt-0">
      <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--teal-dark)]">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}

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

    const form = new FormData(e.currentTarget);
    if (form.get("honeypot")) return; // silent bot trap

    if (!form.get("confirmSandbox") || !form.get("confirmShowcase")) {
      setError("Please check both confirmations at the bottom before submitting.");
      return;
    }

    setSubmitting(true);
    const payload = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      team_name: form.get("teamName") as string,
      team_function: form.get("teamFunction") as string,
      other_members: (form.get("otherMembers") as string) || null,
      track: form.get("track") as string,
      type: form.get("type") as string,
      title: form.get("title") as string,
      tagline: form.get("tagline") as string,
      problem: form.get("problem") as string,
      description: form.get("description") as string,
      tools,
      repo_url: (form.get("repoUrl") as string) || null,
      demo_url: (form.get("demoUrl") as string) || null,
      video_url: (form.get("videoUrl") as string) || null,
      license: (form.get("license") as string) || null,
      notes: (form.get("notes") as string) || null,
    };

    const { error: insertError } = await supabase!.from("submissions").insert(payload);
    setSubmitting(false);

    if (insertError) {
      setError("Something went wrong saving your submission. Please try again, or reach out to the portal owner.");
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--teal)] text-white text-2xl">✓</div>
        <h1 className="mt-5 text-3xl text-[var(--navy)]">Submission received</h1>
        <p className="mt-3 text-gray-600">
          Thank you for contributing to pinelabs.ai. The expert panel reviews all
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

  if (!isSupabaseConfigured) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl text-[var(--navy)]">Submit your build</h1>
        <p className="mt-2 text-gray-600">
          Any Pine Labs employee can submit an idea, use case, prototype, agent
          workflow, or working solution.
        </p>
        <div className="mt-6 rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-gray-800">
          <strong>Submissions aren&apos;t connected to a database yet.</strong> This
          deployment is missing its Supabase configuration
          (<code className="bg-white/60 px-1 rounded">NEXT_PUBLIC_SUPABASE_URL</code> /{" "}
          <code className="bg-white/60 px-1 rounded">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>),
          so this form can&apos;t save anything right now. See{" "}
          <code className="bg-white/60 px-1 rounded">supabase/schema.sql</code> and the
          project README for setup steps.
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl text-[var(--navy)]">Submit your build</h1>
      <p className="mt-2 text-gray-600">
        Any Pine Labs employee can submit an idea, use case, prototype, agent
        workflow, or working solution. Submissions are reviewed by the expert panel.
      </p>

      <form onSubmit={onSubmit} className="mt-8 rounded-lg bg-white border border-gray-200 p-6 shadow-sm">
        <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <div className="space-y-8">
          <FormSection title="Basics">
            <Field label="Project title *">
              <input name="title" required className={inputCls} placeholder="One-line name for your build" />
            </Field>
            <Field label="Tagline *" hint="One sentence, under 60 characters — this is what shows in the submissions feed.">
              <input name="tagline" required maxLength={80} className={inputCls} placeholder="e.g. Auto-reconciles GST filings against Tally invoices" />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Track *">
                <select name="track" required className={inputCls} defaultValue="">
                  <option value="" disabled>Select a track</option>
                  {tracks.map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
              <Field label="Submission type *">
                <select name="type" required className={inputCls} defaultValue="">
                  <option value="" disabled>Select a type</option>
                  {types.map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
            </div>
          </FormSection>

          <FormSection title="Team">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name *">
                <input name="name" required className={inputCls} placeholder="Full name" />
              </Field>
              <Field label="Your Pine Labs email *">
                <input name="email" type="email" required className={inputCls} placeholder="you@pinelabs.com" />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Team name *" hint="Solo? Use your own name.">
                <input name="teamName" required className={inputCls} placeholder="e.g. Rail Runners" />
              </Field>
              <Field label="Team / function *">
                <select name="teamFunction" required className={inputCls} defaultValue="">
                  <option value="" disabled>Select your team</option>
                  {teams.map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Other team members" hint="Name and email per person, one per line. Leave blank if solo.">
              <textarea name="otherMembers" rows={2} className={inputCls} placeholder={"Jane Doe — jane@pinelabs.com"} />
            </Field>
          </FormSection>

          <FormSection title="The build">
            <Field label="Problem it solves *">
              <textarea name="problem" required rows={3} className={inputCls} placeholder="What's broken or slow today, for whom?" />
            </Field>
            <Field label="How it works *">
              <textarea name="description" required rows={4} className={inputCls} placeholder="Architecture, flow, and what makes it work end-to-end." />
            </Field>
            <Field label="Pine Labs stack used">
              <div className="grid gap-2 sm:grid-cols-2">
                {stackOptions.map((t) => (
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
            </Field>
          </FormSection>

          <FormSection title="Links & files">
            <Field label="GitHub repository URL">
              <input name="repoUrl" type="url" className={inputCls} placeholder="https://github.com/your-org/your-repo" />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Live demo URL" hint="A deployed environment judges can click through.">
                <input name="demoUrl" type="url" className={inputCls} placeholder="https://…" />
              </Field>
              <Field label="Demo video URL" hint="A short Loom/YouTube walkthrough, 2–3 minutes.">
                <input name="videoUrl" type="url" className={inputCls} placeholder="https://…" />
              </Field>
            </div>
            <p className="text-xs text-gray-500">
              No GitHub repo? Email a zip of your project to{" "}
              <a href="mailto:umg.gpt@gmail.com" className="underline">the portal owner</a> after submitting, referencing your project title.
            </p>
          </FormSection>

          <FormSection title="Wrap-up">
            <Field label="License">
              <select name="license" className={inputCls} defaultValue={licenses[0]}>
                {licenses.map((l) => <option key={l}>{l}</option>)}
              </select>
            </Field>
            <Field label="Anything else judges should know?" hint="Optional.">
              <textarea name="notes" rows={2} className={inputCls} />
            </Field>
            <label className="flex items-start gap-2 text-sm text-gray-700">
              <input type="checkbox" name="confirmSandbox" className="h-4 w-4 mt-0.5 accent-[var(--teal)]" />
              I confirm this build only uses Pine Labs sandbox rails and test data — no production credentials or real customer data.
            </label>
            <label className="flex items-start gap-2 text-sm text-gray-700">
              <input type="checkbox" name="confirmShowcase" className="h-4 w-4 mt-0.5 accent-[var(--teal)]" />
              I&apos;m okay with this submission being showcased internally (portal, masterclasses, Demo Day).
            </label>
          </FormSection>
        </div>

        {error && (
          <p className="mt-6 rounded-md bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-700">{error}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="mt-6 rounded-md bg-[var(--teal)] hover:bg-[var(--teal-dark)] disabled:opacity-60 px-6 py-2.5 font-semibold text-white transition-colors"
        >
          {submitting ? "Submitting…" : "Submit to the expert panel"}
        </button>
      </form>

      <div className="mt-6">
        <Link href="/submissions" className="text-sm font-medium text-[var(--teal-dark)] hover:underline">
          See how submissions appear →
        </Link>
      </div>
    </div>
  );
}
