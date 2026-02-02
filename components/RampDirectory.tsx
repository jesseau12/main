'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { amenities, counties, ramps } from '@/lib/ramps-data';
import { buildDirectionsUrl, buildGoogleMapsUrl } from '@/lib/ramps-utils';
import AdSlot from '@/components/AdSlot';

export default function RampDirectory() {
  const [query, setQuery] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const filteredRamps = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return ramps.filter((ramp) => {
      const matchesQuery =
        !normalizedQuery ||
        [ramp.name, ramp.address, ramp.county, ramp.notes]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesCounty = !selectedCounty || ramp.county === selectedCounty;
      const matchesAmenities = selectedAmenities.every((amenity) => ramp.features.includes(amenity));

      return matchesQuery && matchesCounty && matchesAmenities;
    });
  }, [query, selectedCounty, selectedAmenities]);

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((item) => item !== amenity) : [...prev, amenity]
    );
  };

  const clearFilters = () => {
    setQuery('');
    setSelectedCounty('');
    setSelectedAmenities([]);
  };

  return (
    <section id="ramps" className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-emerald-100 bg-white/90 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-brand-forest">Search Savannah-area ramps</h2>
          <p className="mt-2 text-sm text-slate-600">
            Filter by county, amenities, or a keyword like “floating dock” or “Tybee.”
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              Search
              <input
                type="text"
                placeholder="Try Lazaretto, Ogeechee, shaded parking"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-normal text-slate-700 shadow-sm focus:border-brand-moss focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              County
              <select
                value={selectedCounty}
                onChange={(event) => setSelectedCounty(event.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-normal text-slate-700 shadow-sm focus:border-brand-moss focus:outline-none"
              >
                <option value="">All counties</option>
                {counties.map((county) => (
                  <option key={county} value={county}>
                    {county}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-700">Amenities</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {amenities.map((amenity) => (
                <button
                  key={amenity}
                  type="button"
                  onClick={() => toggleAmenity(amenity)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                    selectedAmenities.includes(amenity)
                      ? 'border-brand-forest bg-brand-forest text-white'
                      : 'border-emerald-100 bg-white text-slate-600 hover:border-brand-forest'
                  }`}
                >
                  {amenity}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span>{filteredRamps.length} ramps match your filters.</span>
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-brand-forest hover:text-brand-forest"
            >
              Clear filters
            </button>
          </div>
        </div>
        <div id="counties" className="rounded-2xl border border-emerald-100 bg-white/90 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-brand-forest">Counties covered</h3>
          <p className="mt-2 text-sm text-slate-600">
            Local ramps around Savannah plus easy drives into Bryan County for wider river access.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {counties.map((county) => (
              <li key={county} className="flex items-center justify-between">
                <span>{county}</span>
                <span className="text-xs text-slate-400">
                  {ramps.filter((ramp) => ramp.county === county).length} ramps
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl bg-brand-sky/70 p-4 text-sm text-brand-lake">
            Sunrise launches are best when tides are rising. Plan ahead for easy trailer loading.
          </div>
        </div>
      </div>

      <AdSlot label="Ad slot: top of ramp list" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredRamps.map((ramp) => (
          <article
            key={ramp.slug}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm"
          >
            <div className="relative h-48 w-full">
              <Image
                src={ramp.imageUrl}
                alt={ramp.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {ramp.county}
                  </p>
                  <Link href={`/ramp/${ramp.slug}`} className="text-lg font-semibold text-brand-forest">
                    {ramp.name}
                  </Link>
                </div>
                <span className="rounded-full bg-brand-sun/30 px-3 py-1 text-xs font-semibold text-brand-clay">
                  Local launch
                </span>
              </div>
              <p className="text-sm text-slate-600">{ramp.notes}</p>
              <div className="flex flex-wrap gap-2">
                {ramp.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <Link
                href={buildDirectionsUrl(ramp.address)}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-brand-lake hover:text-brand-moss"
              >
                {ramp.address}
              </Link>
              <div className="mt-auto flex flex-wrap gap-3">
                <Link
                  href={buildGoogleMapsUrl(ramp.lat, ramp.lng)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-brand-forest px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-brand-moss"
                >
                  Open in Google Maps
                </Link>
                <Link
                  href={ramp.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-emerald-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-forest hover:border-brand-forest"
                >
                  Official listing
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
