import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-white/90">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h2 className="text-lg font-semibold text-brand-forest">Plan a smooth launch</h2>
          <p className="mt-2 text-sm text-slate-600">
            Savannah Boat Ramps is a local-first guide with fast filters, safety notes, and
            directions that work on the water.
          </p>
          <Link
            href="mailto:hello@savannahboatramp.com?subject=Suggest%20a%20ramp"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-forest hover:text-brand-moss"
          >
            Suggest a ramp →
          </Link>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-600">Quick links</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/#ramps" className="hover:text-brand-forest">
                Ramp directory
              </Link>
            </li>
            <li>
              <Link href="/#counties" className="hover:text-brand-forest">
                County overview
              </Link>
            </li>
            <li>
              <Link href="/#tips" className="hover:text-brand-forest">
                Launch tips
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-600">Local tips</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Check tides before sunrise launches.</li>
            <li>Pack extra dock lines for windy afternoons.</li>
            <li>Keep a spare dry bag for keys and phones.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-emerald-100 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Savannah Boat Ramps. Built for the Lowcountry community.
      </div>
    </footer>
  );
}
