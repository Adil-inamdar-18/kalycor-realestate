import type { MetadataRoute } from 'next';
import { LISTINGS } from '@/data/listings';
import { PAGES, SITE } from '@/data/site';
export default function sitemap(): MetadataRoute.Sitemap { return [SITE.url, `${SITE.url}/properties`, ...LISTINGS.map((l) => `${SITE.url}/properties/${l.id}`), ...PAGES.map((p) => `${SITE.url}/${p.slug}`)].map((url) => ({ url, lastModified: new Date() })); }
