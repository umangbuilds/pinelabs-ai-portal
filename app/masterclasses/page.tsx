const coreTopics = [
  "Introduction to Pine Labs.AI",
  "Why agentic systems matter for Pine Labs",
  "Pine Labs rails, P3P, Grantex, MCP servers, and connectors",
  "Pine Labs sandbox setup and test merchant configuration",
  "MCP servers and API execution tools",
  "Connector ecosystem: Tally, Oracle Fusion, GST portal, Darwin, Jira, GitHub, Facebook, and others",
  "Building one simple agent from scratch",
  "Running one end-to-end sandbox payment or API flow",
  "Pine Labs.AI portal walkthrough",
  "Idea submission and community participation process",
];

const recordings = [
  {
    title: "Pine Labs.AI overview",
    owner: "Sanjeev",
    desc: "Program vision, purpose, and leadership context.",
  },
  {
    title: "Agentic stack overview",
    owner: "Sanjeev",
    desc: "Agentic Org, P3P, Grantex, MCP servers, connectors, and Pine Labs rails.",
  },
  {
    title: "Deep dive on P3P rails",
    owner: "Chandan",
    desc: "P3P rails overview, key use cases, and sandbox setup.",
  },
  {
    title: "MCP servers and API execution",
    owner: "Chandan / Gaurav",
    desc: "MCP tool documentation, API execution reference, and available tools.",
  },
  {
    title: "Agentic Org / Grantex setup",
    owner: "Rahul",
    desc: "Setup guide, tool configuration, connectors, and enablement docs.",
  },
  {
    title: "First agent build quickstart",
    owner: "Rahul / Umang",
    desc: "Step-by-step quickstart to build one simple working agent.",
  },
  {
    title: "Security and governance",
    owner: "Lokesh",
    desc: "Data usage rules, credential handling, sandbox-only policy, responsible AI.",
  },
  {
    title: "Portal walkthrough and submission process",
    owner: "Umang",
    desc: "Idea submission flow, demo template, selection process, recognition criteria.",
  },
];

const readiness = [
  ["Before the masterclass", "Session objective, setup guide, demo flow, prerequisite links, and expected output published on the portal."],
  ["During the masterclass", "Live walkthrough, questions captured, blockers noted, participants directed to the right portal resources."],
  ["After the masterclass", "Recording uploaded, FAQ updated, reference material attached, follow-up tasks added for expert panel review."],
];

export default function Masterclasses() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--navy)]">Masterclasses</h1>
      <p className="mt-2 max-w-3xl text-gray-600">
        Build Working Agents on Pine Labs Rails — hands-on, expert-led sessions
        every Friday. All sessions are recorded and published here, so you can
        learn live or on demand.
      </p>

      <div className="mt-6 rounded-lg border-l-4 border-[var(--amber)] bg-amber-50 p-4 text-sm text-gray-800">
        <strong>Weekly Friday Masterclass:</strong> every Friday, a new session for the
        internal builder community — new use cases, platform capabilities, connector
        integrations, reusable patterns, selected portal ideas, and practical
        agent-building walkthroughs. Top contributors may be invited to conduct
        sessions with prior planning and review by the Core Pine Labs.AI Team.
      </div>

      <h2 className="mt-10 text-2xl font-bold text-[var(--navy)]">Session library</h2>
      <p className="mt-1 text-sm text-gray-600">
        Recordings are published after each session. Sessions not yet delivered are marked as upcoming.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {recordings.map((r) => (
          <div key={r.title} className="rounded-lg bg-white border border-gray-200 p-5 shadow-sm flex flex-col">
            <span className="self-start rounded-full bg-[var(--navy)]/5 border border-[var(--navy)]/15 px-2.5 py-0.5 text-xs font-medium text-[var(--navy)]">
              Recording coming soon
            </span>
            <h3 className="mt-3 font-semibold">{r.title}</h3>
            <p className="mt-1 text-sm text-gray-600 flex-1">{r.desc}</p>
            <p className="mt-3 text-xs text-gray-500">Owner: {r.owner}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-[var(--navy)]">Core topics covered</h2>
          <ol className="mt-4 space-y-2">
            {coreTopics.map((t, i) => (
              <li key={t} className="flex gap-3 text-sm text-gray-700">
                <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--teal)] text-white text-xs font-bold">
                  {i + 1}
                </span>
                {t}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[var(--navy)]">Session readiness standards</h2>
          <div className="mt-4 space-y-4">
            {readiness.map(([stage, req]) => (
              <div key={stage} className="rounded-lg bg-white border border-gray-200 p-4">
                <h3 className="font-semibold text-[var(--teal-dark)]">{stage}</h3>
                <p className="mt-1 text-sm text-gray-600">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
