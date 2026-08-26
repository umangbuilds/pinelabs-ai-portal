import Link from "next/link";

export default function Submissions() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl text-[var(--navy)]">Submissions</h1>
          <p className="mt-2 text-gray-600">
            Ideas, prototypes, and working solutions from the Pine Labs.AI builder community.
          </p>
        </div>
        <Link href="/submit" className="rounded-md bg-[var(--teal)] hover:bg-[var(--teal-dark)] px-5 py-2.5 font-semibold text-white transition-colors">
          Submit yours
        </Link>
      </div>

      <div className="mt-12 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center text-gray-500">
        <p className="text-lg font-semibold">Live submission gallery isn&apos;t connected yet</p>
        <p className="mt-1 text-sm max-w-md mx-auto">
          This is a static preview of the portal, so it can&apos;t list submissions in
          real time. Once the portal is on a hosting plan with a backend, this page
          will show every submitted idea, use case, and prototype with its review status.
        </p>
      </div>
    </div>
  );
}
