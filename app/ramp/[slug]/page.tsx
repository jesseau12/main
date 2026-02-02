import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AdSlot from '@/components/AdSlot';
import { ramps } from '@/lib/ramps-data';
import { buildDirectionsUrl, buildGoogleMapsUrl } from '@/lib/ramps-utils';

export async function generateStaticParams() {
  return ramps.map((ramp) => ({ slug: ramp.slug }));
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const ramp = ramps.find((item) => item.slug === params.slug);
  if (!ramp) {
    return {};
  }

  return {
    title: `${ramp.name} | Savannah Boat Ramps`,
    description: `${ramp.notes} Find amenities, directions, and official info for this Savannah-area launch.`,
    openGraph: {
      title: ramp.name,
      description: ramp.notes,
      images: [{ url: ramp.imageUrl }]
    }
  };
}

export default function RampDetailPage({ params }: { params: { slug: string } }) {
  const ramp = ramps.find((item) => item.slug === params.slug);
  if (!ramp) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <section className="section-card overflow-hidden">
        <div className="relative h-64 w-full md:h-80">
          <Image src={ramp.imageUrl} alt={ramp.imageAlt} fill className="object-cover" priority />
        </div>
        <div className="space-y-6 p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {ramp.county}
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-brand-forest">{ramp.name}</h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-600">{ramp.notes}</p>
            </div>
            <span className="rounded-full bg-brand-sun/30 px-4 py-2 text-xs font-semibold text-brand-clay">
              Official source: {ramp.officialSource}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-brand-forest">Address</p>
                <Link
                  href={buildDirectionsUrl(ramp.address)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-sm text-brand-lake hover:text-brand-moss"
                >
                  {ramp.address}
                </Link>
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-forest">Amenities</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {ramp.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
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
            <div className="rounded-2xl border border-emerald-100 bg-white p-5 text-sm text-slate-600">
              <h2 className="text-sm font-semibold text-brand-forest">Launch notes</h2>
              <ul className="mt-3 space-y-2">
                <li>• Check ramp signage for tidal restrictions.</li>
                <li>• Stage gear away from launch lanes to keep traffic moving.</li>
                <li>• Keep a spare rope handy for swift currents.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AdSlot label="Ad slot: ramp detail" />

      <section className="section-card p-8">
        <h2 className="text-xl font-semibold text-brand-forest">Explore more ramps</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {ramps
            .filter((item) => item.slug !== ramp.slug)
            .slice(0, 3)
            .map((item) => (
              <Link
                key={item.slug}
                href={`/ramp/${item.slug}`}
                className="rounded-2xl border border-emerald-100 bg-white p-4 text-sm text-slate-600 hover:border-brand-forest"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {item.county}
                </p>
                <p className="mt-2 text-sm font-semibold text-brand-forest">{item.name}</p>
                <p className="mt-2 text-xs text-slate-500">{item.address}</p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
