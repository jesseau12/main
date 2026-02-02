import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CategoryLinks from '@/components/CategoryLinks';
import FAQ from '@/components/FAQ';
import LocationCard from '@/components/LocationCard';
import MapPlaceholder from '@/components/MapPlaceholder';
import {
  categoryDescriptions,
  categoryTitles,
  sampleLocations,
  type CategoryKey
} from '@/lib/location-data';
import { toTitleCase } from '@/lib/format';

const faqItems = (city: string, category: string) => [
  {
    question: `What is the best time to visit ${city} ${category}?`,
    answer:
      'Early mornings and late afternoons are usually cooler and less crowded, making them ideal for families.'
  },
  {
    question: 'Are these locations stroller-friendly?',
    answer:
      'Most spots listed are family-focused with paved paths or smooth walking areas, but check amenities before you go.'
  },
  {
    question: 'Is parking available nearby?',
    answer:
      'Yes, every location listed has on-site or nearby public parking, but weekend events can fill lots quickly.'
  },
  {
    question: 'Do I need to bring my own snacks and water?',
    answer:
      'We recommend packing water and snacks, especially for trail outings or longer park days.'
  },
  {
    question: 'Are pets allowed?',
    answer:
      'Many parks and trails are pet-friendly on leash. Dog parks are off-leash but always follow posted rules.'
  }
];

const getCategory = (category: string): CategoryKey | null => {
  if (['parks', 'playgrounds', 'dog-parks', 'trails'].includes(category)) {
    return category as CategoryKey;
  }
  return null;
};

export async function generateMetadata({
  params
}: {
  params: { state: string; city: string; category: string };
}): Promise<Metadata> {
  const category = getCategory(params.category);
  if (!category) {
    return {};
  }
  const city = toTitleCase(params.city);
  const state = params.state.toUpperCase();
  const title = `${city}, ${state} ${categoryTitles[category]} | Family Outdoor Guide`;
  const description =
    `${city}, ${state} ${categoryTitles[category]} guide with kid-friendly amenities, map preview, and local tips for outdoor planning.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article'
    }
  };
}

export default function CategoryPage({
  params
}: {
  params: { state: string; city: string; category: string };
}) {
  const category = getCategory(params.category);
  if (!category) {
    notFound();
  }

  const city = toTitleCase(params.city);
  const state = params.state.toUpperCase();
  const locations = sampleLocations[category];
  const intro = categoryDescriptions[category];
  const faqs = faqItems(city, categoryTitles[category].toLowerCase());

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${city}, ${state} ${categoryTitles[category]}`,
    itemListElement: locations.map((location, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: location.name,
      description: location.description,
      address: location.address
    }))
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <div className="space-y-10">
      <section className="section-card p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {state} · {city}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-brand-forest">
          {city} {categoryTitles[category]}
        </h1>
        <p className="mt-4 max-w-3xl text-base text-slate-700">{intro}</p>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-brand-forest">Featured locations</h2>
          <span className="text-sm text-slate-500">{locations.length} curated spots</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {locations.map((location) => (
            <LocationCard key={location.name} item={location} />
          ))}
        </div>
      </section>

      <MapPlaceholder />

      <FAQ items={faqs} />

      <CategoryLinks city={params.city} state={params.state} activeCategory={category} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </div>
  );
}
