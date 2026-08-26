import Link from "next/link";

const teams = [
  "Engineering / Developer",
  "Product",
  "Business",
  "Finance",
  "Marketing",
  "HR",
  "Operations",
  "Group company / International team",
  "Other",
];

const types = ["Idea", "Use case", "Prototype", "Agent workflow", "Working solution"];

export default function Submit() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--navy)]">Submit your build</h1>
      <p className="mt-2 text-gray-600">
        Any Pine Labs employee can submit an idea, use case, prototype, agent
        workflow, or working solution. Submissions are reviewed by the expert panel.
      </p>

      <div className="mt-6 rounded-lg border-l-4 border-[var(--amber)] bg-amber-50 p-4 text-sm text-gray-800">
        <strong>Live submissions aren&apos;t open on this page yet.</strong> This
        version of the portal is a static preview, so it can&apos;t accept or store
        submissions directly. Use the fields below to prepare your entry, then send
        it through the submission channel shared in the official program
        announcement (or check with{" "}
        <a href="mailto:umg.gpt@gmail.com" className="underline font-medium">
          the portal owner
        </a>{" "}
        if you&apos;re not sure where that is).
      </div>

      <div className="mt-8 space-y-6 rounded-lg bg-white border border-gray-200 p-6 shadow-sm opacity-90">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-[var(--navy)]">Your name</label>
            <input disabled className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm" placeholder="Full name" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[var(--navy)]">Pine Labs email</label>
            <input disabled className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm" placeholder="you@pinelabs.com" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-[var(--navy)]">Team / function</label>
            <select disabled className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm">
              <option>Select your team</option>
              {teams.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[var(--navy)]">Submission type</label>
            <select disabled className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm">
              <option>Select a type</option>
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[var(--navy)]">Title</label>
          <input disabled className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm" placeholder="One-line name for your idea or build" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[var(--navy)]">Description</label>
          <textarea disabled rows={5} className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm" placeholder="What problem does it solve? How does it work? What Pine Labs rails or workflows does it touch?" />
        </div>
      </div>

      <div className="mt-6">
        <Link href="/submissions" className="text-sm font-medium text-[var(--teal-dark)] hover:underline">
          View submitted ideas →
        </Link>
      </div>
    </div>
  );
}
