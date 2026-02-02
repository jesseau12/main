import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Savannah Boat Ramps | Local Launch Guide',
  description:
    'Search Savannah-area boat ramps by county and amenities. Find addresses, launch notes, and official links.',
  metadataBase: new URL('https://savannahboatramp.com'),
  openGraph: {
    title: 'Savannah Boat Ramps',
    description: 'Find launch sites, amenities, and official listings across the Savannah area.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        <main className="container-page py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
