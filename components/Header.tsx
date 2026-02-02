import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-emerald-100 bg-white/80 backdrop-blur">
      <div className="container-page flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-2xl font-semibold text-brand-forest">
            Savannah Boat Ramps
          </Link>
          <p className="mt-2 max-w-xl text-sm text-slate-600">
            Local launch guide for the Lowcountry. Find the right ramp fast, then get on the water.
          </p>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm font-medium">
          <Link
            href="/#ramps"
            className="rounded-full bg-brand-forest px-4 py-2 text-white shadow-sm transition hover:bg-brand-moss"
          >
            Browse ramps
          </Link>
          <Link
            href="/#counties"
            className="rounded-full border border-emerald-200 px-4 py-2 text-brand-forest transition hover:border-brand-forest"
          >
            Counties
          </Link>
          <Link
            href="/#tips"
            className="rounded-full border border-emerald-200 px-4 py-2 text-brand-forest transition hover:border-brand-forest"
          >
            Launch tips
          </Link>
        </nav>
      </div>
    </header>
  );
}
