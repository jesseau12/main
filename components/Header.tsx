import Link from 'next/link';
import { categoryOrder, categoryTitles } from '@/lib/location-data';

const primaryLocation = { city: 'Savannah', state: 'GA' };

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container-page flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-2xl font-semibold text-brand-forest">
            Coastal Family Outdoors
          </Link>
          <p className="mt-2 text-sm text-slate-600">
            Discover parks, playgrounds, dog parks, and trails across the Southeast.
          </p>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm font-medium">
          {categoryOrder.map((category) => (
            <Link
              key={category}
              href={`/${primaryLocation.state.toLowerCase()}/${primaryLocation.city.toLowerCase()}/${category}`}
              className="rounded-full bg-brand-sand px-4 py-2 text-brand-forest hover:bg-amber-100"
            >
              {categoryTitles[category]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
