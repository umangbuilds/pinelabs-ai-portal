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
          <p className="mt-1 text-sm text-gray-600">From first login to joining the Core Team — seven steps.</p>
          <ol className="mt-8 relative">
            <div aria-hidden className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-200 sm:left-[19px]" />
            {steps.map(([title, desc], i) => (
              <li key={title} className="relative flex gap-4 sm:gap-5 pb-8 last:pb-0">
                <span className="relative z-10 flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-white text-sm font-bold ring-4 ring-white">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-[var(--navy)]">Expected outcomes</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {outcomes.map((o) => (
            <li key={o} className="flex gap-2 text-sm text-gray-700">
              <span className="text-[var(--teal)] font-bold">✓</span>
              {o}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
