import './globals.css';
import SiteShell from '@/components/SiteShell';
import Script from 'next/script';

// TODO: Yayındaki gerçek alan adınızla değiştirin.
const SITE = 'https://www.mithranailsbar.com';

const KEYWORDS = [
  // Yüreğir (en spesifik)
  'Yüreğir tırnakçı', 'Yüreğir en iyi tırnakçı', 'Yüreğir tırnak', 'Yüreğir protez tırnak',
  'Yüreğir kalıcı oje', 'Yüreğir jel tırnak', 'Yüreğir nail art', 'Yüreğir manikür',
  'Yüreğir pedikür', 'Yüreğir nail bar', 'Yüreğir tırnak salonu', 'Yüreğir tırnak tasarım',
  // Adana (geniş) + rakip terimleri
  'Adana tırnakçı', 'Adana en iyi tırnakçı', 'Adana tırnak', 'Adana protez tırnak',
  'Adana kalıcı oje', 'Adana jel tırnak', 'Adana jel güçlendirme', 'Adana nail art',
  'Adana manikür', 'Adana pedikür', 'Adana manikür pedikür', 'Adana nail bar',
  'Adana nail studio', 'Adana nail art studio', 'Adana tırnak salonu', 'Adana tırnak tasarım',
  'Adana french tırnak', 'Adana ombre tırnak', 'Adana gelin tırnağı', 'Adana el bakımı',
  'Adana tırnak güçlendirme', 'Adana protez tırnak fiyatları', 'Adana kalıcı oje fiyatları',
  'Adana jel tırnak fiyatları', 'Adana güzellik salonu tırnak', 'Adana tırnak butik',
  // Semtler
  'Seyhan tırnakçı', 'Çukurova tırnakçı', 'Sarıçam tırnakçı', 'Ziyapaşa tırnakçı',
  'Reşatbey tırnakçı', 'Kurtuluş tırnakçı', 'Toros tırnakçı', 'Belediye Evleri tırnakçı',
  // Konum / genel
  'en yakın tırnakçı', 'en yakın nail bar', 'yakınımdaki tırnakçı', 'yakınımdaki nail bar',
  'protez tırnak', 'kalıcı oje', 'jel tırnak', 'jel güçlendirme', 'nail art', 'manikür',
  'pedikür', 'french tırnak', 'ombre tırnak', 'babyboomer', 'gelin tırnağı',
  'kırık tırnak onarımı', 'tırnak dolgu', 'tırnak tasarım', 'el bakımı',
  // Marka
  'Mithra Nails Bar', 'mithranailsbar', 'Mithra tırnak Adana',
];

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Yüreğir & Adana En İyi Tırnakçı — Mithra Nails Bar',
    template: '%s | Mithra Nails Bar · Yüreğir Adana',
  },
  description:
    "Yüreğir ve Adana'da en iyi tırnakçı: protez tırnak, kalıcı oje, jel güçlendirme, manikür ve nail art. Steril ekipman, kişiye özel tasarım. Size en yakın nail bar. Randevu: @mithranailsbar",
  keywords: KEYWORDS,
  applicationName: 'Mithra Nails Bar',
  authors: [{ name: 'Mithra Nails Bar' }],
  creator: 'Mithra Nails Bar',
  publisher: 'Mithra Nails Bar',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE,
    siteName: 'Mithra Nails Bar',
    title: 'Yüreğir & Adana En İyi Tırnakçı — Mithra Nails Bar',
    description:
      "Yüreğir ve Adana'da protez tırnak, kalıcı oje, jel güçlendirme, manikür ve nail art. Kişiye özel tasarım, steril ekipman.",
    images: [{ url: '/hero1.PNG', width: 1200, height: 1200, alt: 'Mithra Nails Bar — Yüreğir Adana' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yüreğir & Adana En İyi Tırnakçı — Mithra Nails Bar',
    description: 'Protez tırnak, kalıcı oje, nail art. Yüreğir / Adana.',
    images: ['/hero1.PNG'],
  },
  category: 'beauty',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FBF6EF',
};

const JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'NailSalon',
  '@id': `${SITE}/#business`,
  name: 'Mithra Nails Bar',
  description:
    "Yüreğir ve Adana'da protez tırnak, kalıcı oje, jel güçlendirme, manikür ve nail art hizmeti veren nail bar.",
  image: `${SITE}/logo1.PNG`,
  logo: `${SITE}/logo1.PNG`,
  url: SITE,
  telephone: '+905388103643',
  priceRange: '₺₺',
  currenciesAccepted: 'TRY',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Yüreğir',
    addressRegion: 'Adana',
    addressCountry: 'TR',
  },
  areaServed: [
    { '@type': 'City', name: 'Yüreğir' },
    { '@type': 'City', name: 'Adana' },
  ],
  sameAs: ['https://www.instagram.com/mithranailsbar/'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Protez Tırnak' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jel Güçlendirme' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kalıcı Oje' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manikür' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nail Art' } },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="js">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
        />
        {/* Google tag (gtag.js) — Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18332581997"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18332581997');`}
        </Script>
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
