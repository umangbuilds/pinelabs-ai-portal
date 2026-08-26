import Link from "next/link";

const audience = [
  ["DEV Builders", "Developers and technical teams who create agents, integrations, workflows, and extensions using Agentic Org, MCP tools, connectors, and Pine Labs sandbox rails."],
  ["Domain Experts", "Business, Finance, HR, Marketing, and Operations teams who bring real business problems and configure use cases on the Agentic portal."],
  ["Product Thinkers", "Teams who convert use cases into scalable product ideas."],
  ["Reviewers & Mentors", "Senior leaders and experts who guide feasibility, business relevance, and execution."],
];

const steps = [
  ["Access the portal", "All docs, recordings, setup guides, submission links, and event details live here."],
  ["Attend or watch masterclasses", "Join live Friday masterclasses or watch recorded sessions."],
  ["Build and submit", "Submit an idea, use case, prototype, agent workflow, or working solution."],
  ["Get expert panel support", "The expert panel guides builders on technical, product, and business topics."],
  ["Selection and awards", "Innovative submissions are reviewed by the expert panel, then recognized and awarded."],
  ["Implementation", "Top ideas are implemented across Pine Labs products, use cases, and internal workflows."],
  ["Join the Core Team", "Top contributors are invited to the Core Pine Labs.AI Team."],
];

const outcomes = [
  "A trained internal builder community",
  "A reusable library of masterclass recordings and training material",
  "A developer-ready documentation hub",
  "A continuous pipeline of ideas and working agent prototypes",
  "A structured expert panel to support builders",
  "A recognition model for innovative contributors",
  "A Core Pine Labs.AI Team formed from top contributors",
  "A repeatable model for ongoing agentic innovation at Pine Labs",
];

const ownership = [
  ["Program launch & kickoff", "Amrish"],
  ["Pine Labs.AI overview", "Sanjeev"],
  ["Agentic stack overview", "Sanjeev"],
  ["Deep dive on P3P rails", "Chandan"],
  ["MCP servers & API execution", "Chandan / Gaurav"],
  ["Agentic Org / Grantex setup", "Rahul"],
  ["First agent build quickstart", "Rahul / Umang"],
  ["Security & governance", "Lokesh"],
  ["Portal walkthrough & submission process", "Umang"],
  ["Program communication", "Marketing"],
  ["Event coordination & execution", "HR"],
  ["Program committee & internal champions", "Chandan / Gaurav"],
];

export default function Home() {
  return (
    <>
      <section className="bg-[var(--navy)] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-[var(--amber)] font-semibold text-sm uppercase tracking-widest">
            Internal innovation program
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
            Learn, build, submit, and scale AI agents on Pine Labs rails.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Pine Labs.AI is a continuous masterclass and builder community program.
            Build working agent prototypes with Agentic Org, P3P, Grantex, MCP tools,
            connectors, and the Pine Labs sandbox — then submit them right here.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/submit" className="rounded-md bg-[var(--teal)] hover:bg-[var(--teal-dark)] px-5 py-2.5 font-semibold transition-colors">
              Submit your build
            </Link>
            <Link href="/masterclasses" className="rounded-md border border-white/30 hover:bg-white/10 px-5 py-2.5 font-semibold transition-colors">
              Explore masterclasses
            </Link>
            <Link href="/docs" className="rounded-md border border-white/30 hover:bg-white/10 px-5 py-2.5 font-semibold transition-colors">
              Developer docs
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-[var(--navy)]">Who this is for</h2>
        <p className="mt-1 text-sm text-gray-600">Open to Pine Labs employees only, across functions and geographies.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audience.map(([title, desc]) => (
            <div key={title} className="rounded-lg bg-white border border-gray-200 p-5 shadow-sm">
              <h3 className="font-semibold text-[var(--teal-dark)]">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-[var(--navy)]">How participation works</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map(([title, desc], i) => (
              <li key={title} className="rounded-lg border border-gray-200 p-5 bg-[var(--paper)]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--navy)] text-white text-sm font-bold">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-[var(--navy)]">Expected outcomes</h2>
          <ul className="mt-4 space-y-2">
            {outcomes.map((o) => (
              <li key={o} className="flex gap-2 text-sm text-gray-700">
                <span className="text-[var(--teal)] font-bold">✓</span>
                {o}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[var(--navy)]">Ownership matrix</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-[var(--navy)] text-white text-left">
                <tr>
                  <th className="px-4 py-2 font-semibold">Area / Deliverable</th>
                  <th className="px-4 py-2 font-semibold">Responsible</th>
                </tr>
              </thead>
              <tbody>
                {ownership.map(([area, owner], i) => (
                  <tr key={area} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-2">{area}</td>
                    <td className="px-4 py-2 font-medium text-[var(--teal-dark)]">{owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
