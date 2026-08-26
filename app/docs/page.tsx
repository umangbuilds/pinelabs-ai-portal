import { Rocket, Wrench, ShieldCheck, GraduationCap } from "lucide-react";

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
        items: ["Program note and objective", "Architecture overview", "Use-case examples"],
      },
      {
        title: "Agentic stack",
        items: ["Agentic Org", "P3P rails", "Grantex", "MCP servers", "Connectors", "Pine Labs rails"],
      },
      {
        title: "Starter repo",
        items: ["Public sanitized mirror repo", "Clone guide", "Setup instructions", "Customization guide"],
      },
      {
        title: "Sandbox setup",
        items: ["Sandbox credential guide", "Test merchant configuration", "Environment variable setup"],
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
        items: ["MCP tool documentation", "API execution reference", "List of available tools"],
      },
      {
        title: "First agent build",
        items: ["Step-by-step quickstart to build one simple working agent"],
      },
      {
        title: "End-to-end payment flow",
        items: ["Trigger a sandbox payment / API execution from an agent"],
      },
      {
        title: "Connectors",
        items: ["Tally", "Oracle Fusion", "GST portal", "Darwin", "Jira", "GitHub", "Facebook", "…and more"],
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
        items: ["Data usage rules", "Credential handling", "Sandbox-only policy", "Responsible AI guidelines"],
      },
      {
        title: "Submission process",
        items: ["Submission form", "Demo template", "Selection process", "Recognition criteria"],
      },
      {
        title: "Troubleshooting",
        items: ["FAQ", "Common setup issues", "Support contacts", "Office hours schedule"],
      },
    ],
  },
];

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
                <ul className="mt-2 sm:mt-0 flex flex-wrap gap-x-4 gap-y-1.5">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-1.5 text-sm text-gray-600">
                      <span className="text-[var(--teal)]">›</span>
                      {i}
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
