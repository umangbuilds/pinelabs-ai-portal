import Link from "next/link";
import { PlayCircle } from "lucide-react";

const recordings = [
  {
    title: "pinelabs.ai overview",
    desc: "Program vision, purpose, and leadership context.",
  },
  {
    title: "Agentic stack overview",
    desc: "Agentic Org, P3P, Grantex, MCP servers, connectors, and Pine Labs rails.",
  },
  {
    title: "Deep dive on P3P rails",
    desc: "P3P rails overview, key use cases, and sandbox setup.",
  },
  {
    title: "MCP servers and API execution",
    desc: "MCP tool documentation, API execution reference, and available tools.",
  },
  {
    title: "Agentic Org / Grantex setup",
    desc: "Setup guide, tool configuration, connectors, and enablement docs.",
  },
  {
    title: "First agent build quickstart",
    desc: "Step-by-step quickstart to build one simple working agent.",
  },
  {
    title: "Security and governance",
    desc: "Data usage rules, credential handling, sandbox-only policy, responsible AI.",
  },
  {
    title: "Portal walkthrough and submission process",
    desc: "Idea submission flow, demo template, selection process, recognition criteria.",
  },
];

export default function Masterclasses() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl text-[var(--navy)]">Masterclasses</h1>
      <p className="mt-2 max-w-3xl text-gray-600">
        Recorded sessions from pinelabs.ai Masterclass: Build Working Agents on
        Pine Labs Rails. Watch on your own time — every Friday session lands here.
      </p>
      <p className="mt-1 text-sm text-gray-500">
        Looking for the curriculum outline or session-readiness standards instead?
        See{" "}
        <Link href="/docs" className="text-[var(--teal-dark)] underline">
          Docs &amp; Setup
        </Link>
        .
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {recordings.map((r) => (
          <div key={r.title} className="rounded-lg bg-white border border-gray-200 p-5 shadow-sm flex flex-col">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--teal)]/10 text-[var(--teal-dark)]">
              <PlayCircle size={18} strokeWidth={2} aria-hidden />
            </div>
            <span className="mt-3 self-start rounded-full bg-[var(--navy)]/5 border border-[var(--navy)]/15 px-2.5 py-0.5 text-xs font-medium text-[var(--navy)]">
              Recording coming soon
            </span>
            <h3 className="mt-3 font-semibold">{r.title}</h3>
            <p className="mt-1 text-sm text-gray-600 flex-1">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
