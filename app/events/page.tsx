const upcoming = [
  {
    week: "Session 1",
    title: "Program kickoff + Pine Labs.AI overview",
    detail: "Formal launch, leadership message, and program vision.",
  },
  {
    week: "Session 2",
    title: "Agentic stack + P3P rails deep dive",
    detail: "Agentic Org, P3P, Grantex, MCP servers, connectors, and sandbox setup.",
  },
  {
    week: "Session 3",
    title: "MCP servers, API execution & first agent build",
    detail: "Build one simple working agent from scratch and run a sandbox flow.",
  },
  {
    week: "Session 4",
    title: "Portal walkthrough, security & submissions",
    detail: "Submission flow, demo template, selection and recognition criteria, governance.",
  },
];

export default function Events() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl text-[var(--navy)]">Events &amp; Expert Panel</h1>
      <p className="mt-2 max-w-3xl text-gray-600">
        Planned events, Friday masterclasses, office hours, and expert panel
        support. Dates and invites will be shared in the official program
        announcement — watch this page and your inbox.
      </p>

      <h2 className="mt-8 text-2xl text-[var(--navy)]">Launch sequence</h2>
      <p className="mt-1 text-sm text-gray-600">Dates to be announced.</p>
      <div className="mt-4 space-y-3">
        {upcoming.map((e) => (
          <div key={e.week} className="rounded-lg bg-white border border-gray-200 p-4 flex flex-col sm:flex-row sm:items-center gap-3 shadow-sm">
            <div className="shrink-0 sm:w-40 font-semibold text-[var(--teal-dark)]">{e.week}</div>
            <div>
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-sm text-gray-600">{e.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl text-[var(--navy)]">Office hours</h2>
          <p className="mt-2 text-sm text-gray-600">
            Weekly office hours for setup help, sandbox access issues, and build
            questions. Schedule will be published here alongside the troubleshooting
            FAQ and support contacts.
          </p>
        </div>
        <div className="rounded-lg bg-white border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl text-[var(--navy)]">Expert panel support</h2>
          <p className="mt-2 text-sm text-gray-600">
            An expert panel is available during planned events to guide builders on
            technical, product, and business topics — and reviews all portal
            submissions for selection, awards, and implementation.
          </p>
        </div>
      </div>
    </div>
  );
}
