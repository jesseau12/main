import Link from 'next/link';
import { categoryOrder, categoryTitles } from '@/lib/location-data';

type Props = {
  city: string;
  state: string;
  activeCategory: string;
};

export default function CategoryLinks({ city, state, activeCategory }: Props) {
  return (
    <div className="section-card p-6">
      <h2 className="text-lg font-semibold text-brand-forest">Related guides</h2>
      <ul className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
        {categoryOrder
          .filter((category) => category !== activeCategory)
          .map((category) => (
            <li key={category}>
              <Link
                href={`/${state.toLowerCase()}/${city.toLowerCase()}/${category}`}
                className="block rounded-xl border border-slate-200 px-4 py-3 hover:border-brand-forest hover:text-brand-forest"
              >
                {city} {categoryTitles[category]}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
