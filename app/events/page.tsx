import { Rocket, Repeat, HelpCircle, FileCheck2, Trophy } from "lucide-react";

const events = [
  {
    type: "Kickoff",
    icon: Rocket,
    tint: "border-l-[var(--amber)]",
    title: "Program kickoff + Pine Labs.AI overview",
    detail: "Formal launch, leadership message, and program vision. One-time session.",
    when: "Date to be announced",
  },
  {
    type: "Masterclass",
    icon: Repeat,
    tint: "border-l-[var(--teal)]",
    title: "Weekly Friday Masterclass",
    detail: "New use cases, platform capabilities, connector integrations, and hands-on agent-building walkthroughs. Recurring.",
    when: "Every Friday",
  },
  {
    type: "Office hours",
    icon: HelpCircle,
    tint: "border-l-[var(--teal)]",
    title: "Builder office hours",
    detail: "Drop-in support for sandbox access issues, setup blockers, and build questions. Recurring.",
    when: "Weekly, schedule TBA",
  },
  {
    type: "Deadline",
    icon: FileCheck2,
    tint: "border-l-[var(--navy)]",
    title: "Submission deadline",
    detail: "Last day to submit an idea, use case, prototype, agent workflow, or working solution through the portal.",
    when: "Date to be announced",
  },
  {
    type: "Review",
    icon: HelpCircle,
    tint: "border-l-[var(--navy)]",
    title: "Expert panel review window",
    detail: "The expert panel reviews all submissions for feasibility, business relevance, and execution.",
    when: "Date to be announced",
  },
  {
    type: "Demo Day",
    icon: Trophy,
    tint: "border-l-[var(--amber)]",
    title: "Demo Day & awards",
    detail: "Selected builders present live. Winners are recognized and awarded, and the Core Pine Labs.AI Team is announced.",
    when: "Date to be announced",
  },
];

export default function Events() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl text-[var(--navy)]">Events &amp; Expert Panel</h1>
      <p className="mt-2 max-w-3xl text-gray-600">
        Everything on the Pine Labs.AI calendar — kickoff, recurring masterclasses
        and office hours, the submission deadline, and Demo Day. Exact dates land
        in the official program announcement; this list updates as they're confirmed.
      </p>

      <div className="mt-8 space-y-3">
        {events.map((e) => (
          <div key={e.title} className={`rounded-lg bg-white border border-gray-200 border-l-4 ${e.tint} p-4 shadow-sm flex gap-4 items-start`}>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--navy)]/5 text-[var(--navy)]">
              <e.icon size={18} strokeWidth={2} aria-hidden />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[var(--navy)]/5 border border-[var(--navy)]/15 px-2.5 py-0.5 text-xs font-medium text-[var(--navy)]">
                  {e.type}
                </span>
                <span className="text-xs text-gray-500">{e.when}</span>
              </div>
              <h3 className="mt-1.5 font-semibold">{e.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{e.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-lg bg-white border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl text-[var(--navy)]">Expert panel support</h2>
        <p className="mt-2 text-sm text-gray-600">
          An expert panel is available during planned events to guide builders on
          technical, product, and business topics — and reviews every portal
          submission for selection, awards, and implementation.
        </p>
      </div>
    </div>
  );
}
