export const dynamic = 'force-static';
import { MetadataRoute } from 'next';
import { services } from '@/constants/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'https://sident.in';

  // Core Pages
  const routes = ['', '/about', '/our-doctors', '/contact', '/facilities'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  // Dynamic Service Pages
  const serviceRoutes = Object.keys(services).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes];
}
