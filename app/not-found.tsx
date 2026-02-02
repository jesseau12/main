import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section-card mx-auto max-w-xl p-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">404</p>
      <h1 className="mt-2 text-2xl font-semibold text-brand-forest">Ramp not found</h1>
      <p className="mt-3 text-sm text-slate-600">
        We couldn&apos;t find that launch. Head back to the directory to keep exploring Savannah-area
        ramps.
      </p>
      <Link
        href="/#ramps"
        className="mt-6 inline-flex rounded-full bg-brand-forest px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white"
      >
        Back to ramp list
      </Link>
    </div>
  );
}
