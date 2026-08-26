"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Flame } from "lucide-react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

const statusStyles: Record<string, string> = {
  Submitted: "bg-gray-100 text-gray-700 border-gray-300",
  "Under review": "bg-amber-50 text-amber-800 border-amber-300",
  Selected: "bg-teal-50 text-teal-800 border-teal-300",
  Awarded: "bg-[var(--navy)] text-white border-[var(--navy)]",
};

const trackBorders: Record<string, string> = {
  "Payments & settlements": "border-l-[var(--teal)]",
  "Merchant operations": "border-l-gray-400",
  "Customer support automation": "border-l-[var(--navy)]",
  "Risk & compliance": "border-l-[var(--teal-dark)]",
};

type Row = {
  id: string;
  team_name: string;
  track: string;
  type: string;
  title: string;
  tagline: string;
  status: string;
  kudos: number;
};

function initials(name: string) {
  return name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

const exampleSubmissions: Row[] = [
  { id: "1", track: "Payments & settlements", title: "ReconAgent", tagline: "Auto-reconciles GST filings against Tally invoices overnight", team_name: "Rail Runners", type: "Working solution", kudos: 38, status: "Awarded" },
  { id: "2", track: "Customer support automation", title: "MerchantCopilot", tagline: "Answers merchant onboarding questions from the connector docs", team_name: "Team Grantex", type: "Prototype", kudos: 24, status: "Selected" },
  { id: "3", track: "Risk & compliance", title: "DisputeRadar", tagline: "Flags chargeback-risk transactions before settlement", team_name: "Priya S.", type: "Agent workflow", kudos: 19, status: "Under review" },
  { id: "4", track: "Merchant operations", title: "OpsBot", tagline: "Drafts weekly ops standup notes from Jira + GitHub activity", team_name: "Team Sandbox", type: "Use case", kudos: 12, status: "Under review" },
  { id: "5", track: "Payments & settlements", title: "P3P Assistant", tagline: "Natural-language interface for querying P3P rail transactions", team_name: "Arjun & Meera", type: "Idea", kudos: 6, status: "Submitted" },
];

export default function Submissions() {
  const [rows, setRows] = useState<Row[] | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured) return;
    supabase!
      .from("public_submissions")
      .select("id, team_name, track, type, title, tagline, status, kudos")
      .order("kudos", { ascending: false })
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) setLoadError(true);
        else setRows(data as Row[]);
      });
  }, []);

  const isLive = isSupabaseConfigured && rows !== null;
  const list = isLive ? rows! : exampleSubmissions;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl text-[var(--navy)]">Submissions</h1>
          <p className="mt-2 text-gray-600">
            Ideas, prototypes, and working solutions from the pinelabs.ai builder community.
          </p>
        </div>
        <Link href="/submit" className="rounded-md bg-[var(--teal)] hover:bg-[var(--teal-dark)] px-5 py-2.5 font-semibold text-[var(--navy)] transition-colors shrink-0">
          Submit yours
        </Link>
      </div>

      {!isSupabaseConfigured && (
        <div className="mt-6 rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-gray-800">
          <strong>Example entries below — illustrative only.</strong> This deployment
          isn&apos;t connected to a database yet, so nothing here is a real
          submission. It shows how the feed will look once live: ranked by
          kudos, with track, team, and review status at a glance.
        </div>
      )}

      {isSupabaseConfigured && loadError && (
        <div className="mt-6 rounded-lg border-l-4 border-red-400 bg-red-50 p-4 text-sm text-red-800">
          Couldn&apos;t load live submissions right now. Try refreshing the page.
        </div>
      )}

      {isSupabaseConfigured && rows === null && !loadError && (
        <p className="mt-6 text-sm text-gray-500">Loading submissions…</p>
      )}

      {(!isSupabaseConfigured || isLive) && list.length === 0 && (
        <div className="mt-12 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center text-gray-500">
          <p className="text-lg font-semibold">No submissions yet</p>
          <p className="mt-1 text-sm">Be the first — submit an idea, use case, prototype, or working agent.</p>
        </div>
      )}

      {(!isSupabaseConfigured || isLive) && list.length > 0 && (
        <div className="mt-6 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white shadow-sm">
          {list.map((s, i) => (
            <div key={s.id} className={`flex items-center gap-4 p-4 border-l-4 ${trackBorders[s.track] ?? "border-l-gray-300"}`}>
              <span className="w-5 shrink-0 text-center text-sm font-semibold text-gray-400">{i + 1}</span>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white bg-[var(--navy)]">
                {initials(s.team_name)}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="font-semibold text-[var(--navy)]">{s.title}</h3>
                  <span className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${statusStyles[s.status] ?? statusStyles.Submitted}`}>
                    {s.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate">{s.tagline}</p>
                <p className="mt-1 text-xs text-gray-400">
                  {s.team_name} · {s.track} · {s.type}
                </p>
              </div>

              <div className="flex shrink-0 flex-col items-center rounded-md border border-gray-200 px-3 py-1.5">
                <Flame size={14} className="text-[var(--teal-dark)]" strokeWidth={2} aria-hidden />
                <span className="text-sm font-bold text-[var(--navy)]">{s.kudos}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
