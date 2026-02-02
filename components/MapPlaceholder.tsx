export default function MapPlaceholder() {
  return (
    <div className="section-card p-6">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-brand-forest">Map preview</h3>
        <p className="text-sm text-slate-600">
          Embed your Google Map here for quick directions and trip planning.
        </p>
        <div className="h-64 rounded-xl border border-dashed border-slate-300 bg-slate-50" />
      </div>
    </div>
  );
}
