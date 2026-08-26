const groups = [
  {
    label: "Get started",
    tint: "border-l-[var(--teal)]",
    sections: [
      {
        title: "Pine Labs.AI overview",
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
      <h1 className="text-3xl font-bold text-[var(--navy)]">Docs &amp; Setup</h1>
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
          <h2 className="text-xl font-bold text-[var(--navy)]">{group.label}</h2>
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

      <p className="mt-8 text-xs text-gray-400">
        Docs are being published by section owners — links will appear inline as each is ready.
      </p>
    </div>
  );
}
