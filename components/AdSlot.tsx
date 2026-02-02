type AdSlotProps = {
  label: string;
};

export default function AdSlot({ label }: AdSlotProps) {
  return (
    <div className="rounded-2xl border border-dashed border-amber-300 bg-amber-50/80 p-4 text-center text-xs font-semibold uppercase tracking-wide text-amber-800">
      {label} (Google AdSense placeholder)
    </div>
  );
}
