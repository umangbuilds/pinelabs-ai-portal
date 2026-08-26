import Link from "next/link";
import { Flame } from "lucide-react";

const statusStyles: Record<string, string> = {
  Submitted: "bg-gray-100 text-gray-700 border-gray-300",
  "Under review": "bg-amber-50 text-amber-800 border-amber-300",
  Selected: "bg-teal-50 text-teal-800 border-teal-300",
  Awarded: "bg-[var(--navy)] text-white border-[var(--navy)]",
};

const trackColors: Record<string, string> = {
  Payments: "bg-[var(--teal)]",
  Ops: "bg-[var(--amber)]",
  Support: "bg-[var(--navy)]",
  Risk: "bg-[var(--teal-dark)]",
};

const exampleSubmissions = [
  {
    initials: "RC",
    track: "Payments",
    title: "ReconAgent",
    tagline: "Auto-reconciles GST filings against Tally invoices overnight",
    team: "Rail Runners",
    type: "Working solution",
    kudos: 38,
    status: "Awarded",
  },
  {
    initials: "MC",
    track: "Support",
    title: "MerchantCopilot",
    tagline: "Answers merchant onboarding questions from the connector docs",
    team: "Team Grantex",
    type: "Prototype",
    kudos: 24,
    status: "Selected",
  },
  {
    initials: "DR",
    track: "Risk",
    title: "DisputeRadar",
    tagline: "Flags chargeback-risk transactions before settlement",
    team: "Priya S.",
    type: "Agent workflow",
    kudos: 19,
    status: "Under review",
  },
  {
    initials: "OB",
    track: "Ops",
    title: "OpsBot",
    tagline: "Drafts weekly ops standup notes from Jira + GitHub activity",
    team: "Team Sandbox",
    type: "Use case",
    kudos: 12,
    status: "Under review",
  },
  {
    initials: "PA",
    track: "Payments",
    title: "P3P Assistant",
    tagline: "Natural-language interface for querying P3P rail transactions",
    team: "Arjun & Meera",
    type: "Idea",
    kudos: 6,
    status: "Submitted",
  },
];

export default function Submissions() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl text-[var(--navy)]">Submissions</h1>
          <p className="mt-2 text-gray-600">
            Ideas, prototypes, and working solutions from the Pine Labs.AI builder community.
          </p>
        </div>
        <Link href="/submit" className="rounded-md bg-[var(--teal)] hover:bg-[var(--teal-dark)] px-5 py-2.5 font-semibold text-white transition-colors shrink-0">
          Submit yours
        </Link>
      </div>

      <div className="mt-6 rounded-lg border-l-4 border-[var(--amber)] bg-amber-50 p-4 text-sm text-gray-800">
        <strong>Example entries below — illustrative only.</strong> This static
        preview has no backend, so nothing here is a real submission. It shows
        how the feed will look once live: ranked by kudos, newest first within
        a rank, with track, team, and review status at a glance.
      </div>

      <div className="mt-6 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white shadow-sm">
        {exampleSubmissions.map((s, i) => (
          <div key={s.title} className="flex items-center gap-4 p-4">
            <span className="w-5 shrink-0 text-center text-sm font-semibold text-gray-400">{i + 1}</span>

            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white ${trackColors[s.track] ?? "bg-gray-400"}`}>
              {s.initials}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h3 className="font-semibold text-[var(--navy)]">{s.title}</h3>
                <span className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${statusStyles[s.status]}`}>
                  {s.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 truncate">{s.tagline}</p>
              <p className="mt-1 text-xs text-gray-400">
                {s.team} · {s.track} · {s.type}
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-center rounded-md border border-gray-200 px-3 py-1.5">
              <Flame size={14} className="text-[var(--amber)]" strokeWidth={2} aria-hidden />
              <span className="text-sm font-bold text-[var(--navy)]">{s.kudos}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
