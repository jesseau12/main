type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="section-card p-6">
      <h2 className="text-xl font-semibold text-brand-forest">Frequently asked questions</h2>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={item.question} className="border-b border-slate-200 pb-4 last:border-b-0">
            <h3 className="text-base font-semibold text-slate-800">{item.question}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
