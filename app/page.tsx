import RampDirectory from '@/components/RampDirectory';
import { ramps } from '@/lib/ramps-data';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Savannah Boat Ramps',
    url: 'https://savannahboatramp.com',
    description:
      'Search Savannah-area boat ramps by county and amenities with maps, launch notes, and official listings.'
  };

  return (
    <div className="space-y-12">
      <section className="section-card overflow-hidden">
        <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-clay">
              Savannah, Georgia
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-brand-forest md:text-4xl">
              Your local guide to Savannah boat ramps
            </h1>
            <p className="mt-4 text-base text-slate-700">
              Launch faster with quick filters, tide-friendly notes, and official resources. Built for
              locals and visitors who want to be on the river before the sun is up.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-brand-moss">
                {ramps.length} curated ramps
              </span>
              <span className="rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold text-brand-lake">
                County + amenities filters
              </span>
              <span className="rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold text-brand-clay">
                Fast mobile cards
              </span>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-brand-forest to-brand-lake p-6 text-white shadow-lg">
            <h2 className="text-xl font-semibold">Launch checklist</h2>
            <ul className="mt-4 space-y-3 text-sm text-emerald-50">
              <li>✔ Verify ramp hours and tide windows.</li>
              <li>✔ Pack extra lines, life jackets, and bug spray.</li>
              <li>✔ Use official listings for alerts and closures.</li>
              <li>✔ Keep a dry bag for keys, phones, and permits.</li>
            </ul>
            <div className="mt-6 rounded-xl bg-white/10 p-4 text-xs">
              Tip: Morning launches stay cooler and avoid afternoon chop.
            </div>
          </div>
        </div>
      </section>

      <RampDirectory />

      <section id="tips" className="section-card p-8">
        <h2 className="text-2xl font-semibold text-brand-forest">Local launch tips</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Savannah tides can be dramatic. Keep an eye on tide charts, bring a push pole for shallow
          ramps, and always double-check signage from the managing agency.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Tide planning',
              body: 'Aim for the last hour of incoming tide for easier ramp access and less current.'
            },
            {
              title: 'Parking prep',
              body: 'Weekends fill quickly. Arrive early and stage your gear away from the lanes.'
            },
            {
              title: 'Safety first',
              body: 'Keep a throwable device within reach and log a float plan with someone ashore.'
            }
          ].map((tip) => (
            <div key={tip.title} className="rounded-2xl border border-emerald-100 bg-white p-5">
              <h3 className="text-sm font-semibold text-brand-forest">{tip.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{tip.body}</p>
            </div>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
