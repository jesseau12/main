import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section-card mx-auto max-w-xl p-8 text-center">
      <h1 className="text-2xl font-semibold text-brand-forest">Page not found</h1>
      <p className="mt-3 text-sm text-slate-600">
        The guide you are looking for is not available yet. Try starting from the homepage.
      </p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-brand-forest px-5 py-2 text-sm text-white">
        Back to home
      </Link>
    </div>
  );
}
