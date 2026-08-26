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
const tracks = [
  "Payments & settlements",
  "Merchant operations",
  "Customer support automation",
  "Risk & compliance",
  "Internal tooling & productivity",
  "Other",
];
const licenses = ["Internal use only", "MIT", "Apache-2.0", "Other / not decided yet"];

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[var(--navy)]">{label}</label>
      {hint && <p className="text-xs text-gray-500 mt-0.5">{hint}</p>}
      <div className="mt-1">{children}</div>
    </div>
  );
}

const inputCls = "w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm";

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-gray-100 pt-6 first:border-t-0 first:pt-0">
      <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--teal-dark)]">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}

export default function Submit() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl text-[var(--navy)]">Submit your build</h1>
      <p className="mt-2 text-gray-600">
        Any Pine Labs employee can submit an idea, use case, prototype, agent
        workflow, or working solution. This is the full field set the expert
        panel will see once submissions go live.
      </p>

      <div className="mt-6 rounded-lg border-l-4 border-[var(--amber)] bg-amber-50 p-4 text-sm text-gray-800">
        <strong>Live submissions aren&apos;t open on this page yet.</strong> This
        version of the portal is a static preview, so it can&apos;t accept or store
        submissions directly. Use this page to prepare your entry, then send it
        through the submission channel shared in the official program
        announcement (or check with{" "}
        <a href="mailto:umg.gpt@gmail.com" className="underline font-medium">
          the portal owner
        </a>{" "}
        if you&apos;re not sure where that is).
      </div>

      <div className="mt-8 space-y-8 rounded-lg bg-white border border-gray-200 p-6 shadow-sm opacity-90">
        <FormSection title="Basics">
          <Field label="Project title">
            <input disabled className={inputCls} placeholder="One-line name for your build" />
          </Field>
          <Field label="Tagline" hint="One sentence, under 60 characters — this is what shows in the submissions feed.">
            <input disabled className={inputCls} placeholder="e.g. Auto-reconciles GST filings against Tally invoices" />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Track">
              <select disabled className={inputCls}>
                <option>Select a track</option>
                {tracks.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
            <Field label="Submission type">
              <select disabled className={inputCls}>
                <option>Select a type</option>
                {types.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
          </div>
        </FormSection>

        <FormSection title="Team">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name">
              <input disabled className={inputCls} placeholder="Full name" />
            </Field>
            <Field label="Your Pine Labs email">
              <input disabled className={inputCls} placeholder="you@pinelabs.com" />
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Team name" hint="Solo? Use your own name.">
              <input disabled className={inputCls} placeholder="e.g. Rail Runners" />
            </Field>
            <Field label="Team / function">
              <select disabled className={inputCls}>
                <option>Select your team</option>
                {teams.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
          </div>
          <Field label="Other team members" hint="Name and email per person, one per line. Leave blank if solo.">
            <textarea disabled rows={2} className={inputCls} placeholder={"Jane Doe — jane@pinelabs.com"} />
          </Field>
        </FormSection>

        <FormSection title="The build">
          <Field label="Problem it solves">
            <textarea disabled rows={3} className={inputCls} placeholder="What's broken or slow today, for whom?" />
          </Field>
          <Field label="How it works">
            <textarea disabled rows={4} className={inputCls} placeholder="Architecture, flow, and what makes it work end-to-end." />
          </Field>
          <Field label="Pine Labs stack used">
            <div className="grid gap-2 sm:grid-cols-2">
              {["Agentic Org", "P3P rails", "Grantex", "MCP servers", "Connectors (Tally, Jira, GitHub, …)", "Pine Labs sandbox"].map((t) => (
                <label key={t} className="flex items-center gap-2 text-sm text-gray-500">
                  <input type="checkbox" disabled className="h-4 w-4" />
                  {t}
                </label>
              ))}
            </div>
          </Field>
        </FormSection>

        <FormSection title="Links & files">
          <Field label="GitHub repository URL">
            <input disabled className={inputCls} placeholder="https://github.com/your-org/your-repo" />
          </Field>
          <Field label="Project zip" hint="If your code isn't on GitHub, upload a zip instead. Max 50 MB.">
            <input disabled type="file" className={`${inputCls} py-1.5`} />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Live demo URL" hint="A deployed environment judges can click through.">
              <input disabled className={inputCls} placeholder="https://…" />
            </Field>
            <Field label="Demo video URL" hint="A short Loom/YouTube walkthrough, 2–3 minutes.">
              <input disabled className={inputCls} placeholder="https://…" />
            </Field>
          </div>
          <Field label="Cover image / screenshot" hint="Shown as the thumbnail in the submissions feed.">
            <input disabled type="file" accept="image/*" className={`${inputCls} py-1.5`} />
          </Field>
        </FormSection>

        <FormSection title="Wrap-up">
          <Field label="License">
            <select disabled className={inputCls}>
              {licenses.map((l) => <option key={l}>{l}</option>)}
            </select>
          </Field>
          <Field label="Anything else judges should know?" hint="Optional.">
            <textarea disabled rows={2} className={inputCls} />
          </Field>
          <label className="flex items-start gap-2 text-sm text-gray-500">
            <input type="checkbox" disabled className="h-4 w-4 mt-0.5" />
            I confirm this build only uses Pine Labs sandbox rails and test data — no production credentials or real customer data.
          </label>
          <label className="flex items-start gap-2 text-sm text-gray-500">
            <input type="checkbox" disabled className="h-4 w-4 mt-0.5" />
            I&apos;m okay with this submission being showcased internally (portal, masterclasses, Demo Day).
          </label>
        </FormSection>
      </div>

      <div className="mt-6">
        <Link href="/submissions" className="text-sm font-medium text-[var(--teal-dark)] hover:underline">
          See how submissions appear once they&apos;re live →
        </Link>
      </div>
    </div>
  );
}
