import Link from 'next/link';
import { categoryOrder, categoryTitles, footerCities } from '@/lib/location-data';
import { toSlug } from '@/lib/format';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h2 className="text-lg font-semibold text-brand-forest">Plan your next outdoor day</h2>
          <p className="mt-2 text-sm text-slate-600">
            Built for parents, caregivers, and outdoor enthusiasts looking for the best spots in
            Southeast cities. Explore category guides and keep trips simple.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Categories</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {categoryOrder.map((category) => (
              <li key={category}>
                <Link href={`/ga/savannah/${category}`} className="hover:text-brand-forest">
                  {categoryTitles[category]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
            Southeast cities
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {footerCities.map((city) => (
              <li key={`${city.city}-${city.state}`}>
                <Link
                  href={`/${city.state.toLowerCase()}/${toSlug(city.city)}/parks`}
                  className="hover:text-brand-forest"
                >
                  {city.city}, {city.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Coastal Family Outdoors. Made for easy trip planning.
      </div>
    </footer>
  );
}
