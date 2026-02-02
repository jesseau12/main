import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Coastal Family Outdoors | Southeast Parks, Playgrounds & Trails',
  description:
    'Find family-friendly parks, playgrounds, dog parks, and trails across Savannah and other Southeast cities.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Coastal Family Outdoors',
    description:
      'Plan outdoor adventures with curated parks, playgrounds, dog parks, and trails in the Southeast.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-sand">
        <Header />
        <main className="container-page py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
