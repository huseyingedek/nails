import { POSTS } from '@/lib/posts';

// TODO: Alan adınızı buraya da yazın (layout.jsx'teki SITE ile aynı olmalı).
const SITE = 'https://www.mithranailsbar.com';

export default function sitemap() {
  const pages = ['', '/hizmetler', '/galeri', '/blog', '/hakkimizda', '/iletisim'];
  const staticUrls = pages.map((p) => ({
    url: `${SITE}${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.8,
  }));
  const postUrls = POSTS.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));
  return [...staticUrls, ...postUrls];
}
