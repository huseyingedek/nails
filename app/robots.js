// TODO: Alan adınızı buraya da yazın (layout.jsx'teki SITE ile aynı olmalı).
const SITE = 'https://www.mithranailsbar.com';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
