import type { MetadataRoute } from 'next';
import { ramps } from '@/lib/ramps-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://savannahboatramp.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    ...ramps.map((ramp) => ({
      url: `${baseUrl}/ramp/${ramp.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    }))
  ];
}
