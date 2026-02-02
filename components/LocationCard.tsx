import { LocationItem } from '@/lib/location-data';

export default function LocationCard({ item }: { item: LocationItem }) {
  return (
    <div className="section-card flex h-full flex-col gap-4 p-5">
      <div>
        <h3 className="text-lg font-semibold text-brand-forest">{item.name}</h3>
        <p className="text-sm text-slate-600">{item.address}</p>
      </div>
      <p className="text-sm text-slate-700">{item.description}</p>
      <div className="mt-auto">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Amenities</p>
        <ul className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
          {item.amenities.map((amenity) => (
            <li key={amenity} className="rounded-full bg-brand-sand px-3 py-1">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
