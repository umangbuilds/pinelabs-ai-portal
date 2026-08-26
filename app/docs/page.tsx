import { Rocket, Wrench, ShieldCheck, GraduationCap, ListChecks, BookOpen, FileText, ScrollText } from "lucide-react";

const docTypes = {
  guide: { label: "Setup guide", icon: ListChecks, desc: "Step-by-step instructions you follow in order to get something working." },
  reference: { label: "Reference", icon: BookOpen, desc: "Lookup material — what exists, what it does, and its parameters." },
  template: { label: "Template", icon: FileText, desc: "A starter file or repo you copy and adapt, not just read." },
  policy: { label: "Policy", icon: ScrollText, desc: "Rules you must follow — not optional, not a how-to." },
} as const;

type DocType = keyof typeof docTypes;
type Item = { label: string; type: DocType };

const coreTopics = [
  "Introduction to pinelabs.ai",
  "Why agentic systems matter for Pine Labs",
  "Pine Labs rails, P3P, Grantex, MCP servers, and connectors",
  "Pine Labs sandbox setup and test merchant configuration",
  "MCP servers and API execution tools",
  "Connector ecosystem: Tally, Oracle Fusion, GST portal, Darwin, Jira, GitHub, Facebook, and others",
  "Building one simple agent from scratch",
  "Running one end-to-end sandbox payment or API flow",
  "pinelabs.ai portal walkthrough",
  "Idea submission and community participation process",
];

const readiness = [
  ["Before the masterclass", "Session objective, setup guide, demo flow, prerequisite links, and expected output published on the portal."],
  ["During the masterclass", "Live walkthrough, questions captured, blockers noted, participants directed to the right portal resources."],
  ["After the masterclass", "Recording uploaded, FAQ updated, reference material attached, follow-up tasks added for expert panel review."],
];

const groups = [
  {
    label: "Get started",
    tint: "border-l-[var(--teal)]",
    icon: Rocket,
    sections: [
      {
        title: "pinelabs.ai overview",
        items: [
          { label: "Program note and objective", type: "reference" },
          { label: "Architecture overview", type: "reference" },
          { label: "Use-case examples", type: "reference" },
        ],
      },
      {
        title: "Agentic stack",
        items: [
          { label: "Agentic Org", type: "reference" },
          { label: "P3P rails", type: "reference" },
          { label: "Grantex", type: "reference" },
          { label: "MCP servers", type: "reference" },
          { label: "Connectors", type: "reference" },
          { label: "Pine Labs rails", type: "reference" },
        ],
      },
      {
        title: "Starter repo",
        items: [
          { label: "Public sanitized mirror repo", type: "template" },
          { label: "Clone guide", type: "guide" },
          { label: "Setup instructions", type: "guide" },
          { label: "Customization guide", type: "guide" },
        ],
      },
      {
        title: "Sandbox setup",
        items: [
          { label: "Sandbox credential guide", type: "guide" },
          { label: "Test merchant configuration", type: "guide" },
          { label: "Environment variable setup", type: "guide" },
        ],
      },
    ],
  },
  {
    label: "Build your agent",
    tint: "border-l-[var(--amber)]",
    icon: Wrench,
    sections: [
      {
        title: "MCP servers",
        items: [
          { label: "MCP tool documentation", type: "reference" },
          { label: "API execution reference", type: "reference" },
          { label: "List of available tools", type: "reference" },
        ],
      },
      {
        title: "First agent build",
        items: [{ label: "Step-by-step quickstart to build one simple working agent", type: "guide" }],
      },
      {
        title: "End-to-end payment flow",
        items: [{ label: "Trigger a sandbox payment / API execution from an agent", type: "guide" }],
      },
      {
        title: "Connectors",
        items: [
          { label: "Tally", type: "reference" },
          { label: "Oracle Fusion", type: "reference" },
          { label: "GST portal", type: "reference" },
          { label: "Darwin", type: "reference" },
          { label: "Jira", type: "reference" },
          { label: "GitHub", type: "reference" },
          { label: "Facebook", type: "reference" },
          { label: "…and more", type: "reference" },
        ],
      },
    ],
  },
  {
    label: "Participate & stay safe",
    tint: "border-l-[var(--navy)]",
    icon: ShieldCheck,
    sections: [
      {
        title: "Security and governance",
        items: [
          { label: "Data usage rules", type: "policy" },
          { label: "Credential handling", type: "policy" },
          { label: "Sandbox-only policy", type: "policy" },
          { label: "Responsible AI guidelines", type: "policy" },
        ],
      },
      {
        title: "Submission process",
        items: [
          { label: "Submission form", type: "guide" },
          { label: "Demo template", type: "template" },
          { label: "Selection process", type: "reference" },
          { label: "Recognition criteria", type: "reference" },
        ],
      },
      {
        title: "Troubleshooting",
        items: [
          { label: "FAQ", type: "reference" },
          { label: "Common setup issues", type: "reference" },
          { label: "Support contacts", type: "reference" },
          { label: "Office hours schedule", type: "reference" },
        ],
      },
    ],
  },
] as const;

function TypeTag({ type }: { type: DocType }) {
  const t = docTypes[type];
  return (
    <span className="inline-flex items-center gap-1 text-[11px] text-gray-500" title={t.desc}>
      <t.icon size={12} strokeWidth={2} aria-hidden />
      {t.label}
    </span>
  );
}

export default function Docs() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl text-[var(--navy)]">Docs &amp; Setup</h1>
      <p className="mt-2 max-w-3xl text-gray-600">
        The single source of truth for training material and developer docs:
        setup guides, starter repo links, sandbox access, MCP documentation, and
        connector documentation. Masterclass owners publish supporting material
        here before each session; questions raised in sessions become FAQ entries.
      </p>

      <div className="mt-6 rounded-lg border-l-4 border-[var(--teal)] bg-teal-50 p-4 text-sm text-gray-800">
        <strong>Sandbox-only policy:</strong> all agent builds use Pine Labs sandbox
        rails and test merchant configurations. Never use production credentials or
        live merchant data. See Security and governance below.
      </div>

      <div className="mt-8 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--teal-dark)]">
          What you&apos;ll find below — four kinds of docs
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(docTypes) as DocType[]).map((key) => {
            const t = docTypes[key];
            return (
              <div key={key} className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--navy)]/5 text-[var(--navy)]">
                  <t.icon size={16} strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--navy)]">{t.label}</h3>
                  <p className="mt-0.5 text-xs text-gray-500">{t.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Every item below is tagged with its type, so you know whether you&apos;re
          about to read a policy, follow a setup guide, look something up, or copy a template —
          before you click.
        </p>
      </div>

      <div className="mt-8 rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:flex sm:gap-8">
        <div className="sm:flex-1">
          <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--teal-dark)]">Every setup guide follows the same shape</h2>
          <ol className="mt-3 space-y-1.5 text-sm text-gray-700">
            <li><strong className="text-[var(--navy)]">1. Objective</strong> — what you&apos;ll have working by the end.</li>
            <li><strong className="text-[var(--navy)]">2. Prerequisites</strong> — access, tools, or accounts you need first.</li>
            <li><strong className="text-[var(--navy)]">3. Steps</strong> — numbered, copy-pasteable, one action per step.</li>
            <li><strong className="text-[var(--navy)]">4. Verify</strong> — how to confirm it actually worked.</li>
            <li><strong className="text-[var(--navy)]">5. Troubleshooting</strong> — the errors people hit, and the fix.</li>
          </ol>
        </div>
        <div className="mt-6 sm:mt-0 sm:flex-1 sm:border-l sm:border-gray-100 sm:pl-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-[var(--teal-dark)]">Every reference doc follows the same shape</h2>
          <ol className="mt-3 space-y-1.5 text-sm text-gray-700">
            <li><strong className="text-[var(--navy)]">1. What it is</strong> — one paragraph, plain language.</li>
            <li><strong className="text-[var(--navy)]">2. Where it fits</strong> — how it connects to the rest of the stack.</li>
            <li><strong className="text-[var(--navy)]">3. Fields / parameters</strong> — the details you&apos;ll actually look up.</li>
            <li><strong className="text-[var(--navy)]">4. Example</strong> — a real request/response or config snippet.</li>
            <li><strong className="text-[var(--navy)]">5. Related links</strong> — the guides that use this reference.</li>
          </ol>
        </div>
      </div>

      {groups.map((group) => (
        <div key={group.label} className="mt-10">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--navy)]/5 text-[var(--navy)]">
              <group.icon size={17} strokeWidth={2} aria-hidden />
            </div>
            <h2 className="text-xl text-[var(--navy)]">{group.label}</h2>
          </div>
          <div className="mt-4 space-y-3">
            {group.sections.map((s) => (
              <div key={s.title} className={`rounded-lg bg-white border border-gray-200 border-l-4 ${group.tint} p-5 shadow-sm sm:flex sm:gap-6`}>
                <h3 className="font-semibold text-[var(--navy)] sm:w-56 shrink-0">{s.title}</h3>
                <ul className="mt-2 sm:mt-0 flex flex-wrap gap-x-5 gap-y-2">
                  {(s.items as readonly Item[]).map((item) => (
                    <li key={item.label} className="flex flex-col gap-0.5">
                      <span className="flex items-center gap-1.5 text-sm text-gray-700">
                        <span className="text-[var(--teal)]">›</span>
                        {item.label}
                      </span>
                      <TypeTag type={item.type} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-10">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--navy)]/5 text-[var(--navy)]">
            <GraduationCap size={17} strokeWidth={2} aria-hidden />
          </div>
          <h2 className="text-xl text-[var(--navy)]">Masterclass curriculum &amp; session standards</h2>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          What every session covers, and what a masterclass owner is expected to publish before, during, and after — see{" "}
          <a href="../masterclasses" className="text-[var(--teal-dark)] underline">Masterclasses</a> for the recorded sessions themselves.
        </p>
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-semibold text-[var(--navy)]">Core topics covered</h3>
            <ol className="mt-3 space-y-2">
              {coreTopics.map((t, i) => (
                <li key={t} className="flex gap-3 text-sm text-gray-700">
                  <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--teal)] text-[var(--navy)] text-xs font-bold">
                    {i + 1}
                  </span>
                  {t}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--navy)]">Session readiness standards</h3>
            <div className="mt-3 space-y-3">
              {readiness.map(([stage, req]) => (
                <div key={stage} className="rounded-lg bg-white border border-gray-200 p-4">
                  <h4 className="font-semibold text-[var(--teal-dark)] text-sm">{stage}</h4>
                  <p className="mt-1 text-sm text-gray-600">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-10 text-xs text-gray-400">
        Docs are being published by section owners — links will appear inline as each is ready.
      </p>
    </div>
  );
}
