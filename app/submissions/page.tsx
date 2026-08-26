import Link from "next/link";
import { readSubmissions } from "@/lib/store";

export const dynamic = "force-dynamic";

const statusStyles: Record<string, string> = {
  Submitted: "bg-gray-100 text-gray-700 border-gray-300",
  "Under review": "bg-amber-50 text-amber-800 border-amber-300",
  Selected: "bg-teal-50 text-teal-800 border-teal-300",
  Awarded: "bg-[var(--navy)] text-white border-[var(--navy)]",
};

export default async function Submissions() {
  const submissions = await readSubmissions();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--navy)]">Submissions</h1>
          <p className="mt-2 text-gray-600">
            Ideas, prototypes, and working solutions from the Pine Labs.AI builder community.
          </p>
        </div>
        <Link href="/submit" className="rounded-md bg-[var(--teal)] hover:bg-[var(--teal-dark)] px-5 py-2.5 font-semibold text-white transition-colors">
          Submit yours
        </Link>
      </div>

      {submissions.length === 0 ? (
        <div className="mt-12 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center text-gray-500">
          <p className="text-lg font-semibold">No submissions yet</p>
          <p className="mt-1 text-sm">Be the first — submit an idea, use case, prototype, or working agent.</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {submissions.map((s) => (
            <div key={s.id} className="rounded-lg bg-white border border-gray-200 p-5 shadow-sm flex flex-col">
              <div className="flex items-start justify-between gap-2">
                <span className="rounded-full bg-[var(--teal)]/10 border border-[var(--teal)]/30 px-2.5 py-0.5 text-xs font-medium text-[var(--teal-dark)]">
                  {s.type}
                </span>
                <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[s.status] ?? statusStyles.Submitted}`}>
                  {s.status}
                </span>
              </div>
              <h2 className="mt-3 font-semibold text-lg">{s.title}</h2>
              <p className="mt-1 text-sm text-gray-600 flex-1 line-clamp-4">{s.description}</p>
              {s.tools.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.tools.map((t) => (
                    <span key={t} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                {s.repoUrl && (
                  <a href={s.repoUrl} target="_blank" rel="noreferrer" className="font-medium text-[var(--teal-dark)] hover:underline">
                    Repo ↗
                  </a>
                )}
                {s.demoUrl && (
                  <a href={s.demoUrl} target="_blank" rel="noreferrer" className="font-medium text-[var(--teal-dark)] hover:underline">
                    Demo ↗
                  </a>
                )}
              </div>
              <p className="mt-3 border-t border-gray-100 pt-3 text-xs text-gray-500">
                {s.name} · {s.team} · {new Date(s.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
