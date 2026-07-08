import './globals.css';
import SiteShell from '@/components/SiteShell';

export const metadata = {
  title: 'Mithra Nails Bar — Adana Protez Tırnak & Kalıcı Oje',
  description:
    'Mithra Nails Bar · Adana / Seyhan. Protez tırnak, jel güçlendirme, kalıcı oje, manikür ve nail art. Randevu için DM: @mithranailsbar',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
