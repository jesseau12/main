import Link from 'next/link';
import { categoryOrder, categoryTitles, footerCities } from '@/lib/location-data';
import { toSlug } from '@/lib/format';

export default function HomePage() {
  const city = { city: 'Savannah', state: 'GA' };
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Coastal Family Outdoors',
    url: 'https://example.com',
    description:
      'Directory of family-friendly parks, playgrounds, dog parks, and trails across Savannah and Southeast cities.'
  };

  return (
    <div className="space-y-10">
      <section className="section-card p-8">
        <h1 className="text-3xl font-semibold text-brand-forest">Outdoor family guides for Savannah and the Southeast</h1>
        <p className="mt-3 text-base text-slate-700">
          Coastal Family Outdoors curates parks, playgrounds, dog parks, and trails that families love.
          Start with Savannah, Georgia, then branch out to nearby Southeast cities for easy weekend plans.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryOrder.map((category) => (
            <Link
              key={category}
              href={`/${city.state.toLowerCase()}/${city.city.toLowerCase()}/${category}`}
              className="rounded-xl border border-slate-200 bg-white p-5 text-sm font-semibold text-brand-forest transition hover:border-brand-forest"
            >
              Savannah {categoryTitles[category]}
            </Link>
          ))}
        </div>
      </section>

      <section className="section-card p-8">
        <h2 className="text-2xl font-semibold text-brand-forest">Explore more Southeast cities</h2>
        <p className="mt-3 text-sm text-slate-600">
          Click a city to jump into its family-friendly park and trail guide.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {footerCities.map((cityItem) => (
            <Link
              key={`${cityItem.city}-${cityItem.state}`}
              href={`/${cityItem.state.toLowerCase()}/${toSlug(cityItem.city)}/parks`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-brand-forest hover:text-brand-forest"
            >
              {cityItem.city}, {cityItem.state}
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
