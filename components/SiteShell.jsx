'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Effects from './Effects';
import ContactBar from './ContactBar';

const NAV = [
  { href: '/', num: '01', label: 'Ana Sayfa' },
  { href: '/hizmetler', num: '02', label: 'Hizmetler' },
  { href: '/galeri', num: '03', label: 'Galeri' },
  { href: '/hakkimizda', num: '04', label: 'Hakkımızda' },
  { href: '/iletisim', num: '05', label: 'Randevu' },
];

export default function SiteShell({ children }) {
  const pathname = usePathname();

  return (
    <>
      {/* Preloader */}
      <div className="preloader">
        <div className="preloader__stage">
          <svg className="preloader__ring" viewBox="0 0 340 340">
            <circle cx="170" cy="170" r="160" />
          </svg>
          <div className="preloader__word">
            <span>M</span><span>I</span><span>T</span><span>H</span><span>R</span><span>A</span>
          </div>
          <div className="preloader__sub">Nails Bar · Adana</div>
        </div>
        <div className="preloader__count">0%</div>
      </div>

      {/* Sayfa geçiş perdeleri */}
      <div className="transition">
        <div className="transition__panel" />
        <div className="transition__panel" />
        <div className="transition__panel" />
        <div className="transition__panel" />
      </div>

      {/* Özel imleç */}
      <div className="cursor-dot" />
      <div className="cursor-ring"><span>Gör</span></div>

      {/* Header */}
      <header className="header">
        <Link href="/" className="header__logo" aria-label="Mithra Nails Bar — Ana Sayfa">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Mithra Nails Bar" className="header__logo-img" />
        </Link>
        <div className="header__cta">
          <Link href="/iletisim" className="header__book" data-magnetic>Randevu Al</Link>
          <button className="burger" aria-label="Menü" data-magnetic>
            <span /><span />
          </button>
        </div>
      </header>

      {/* Tam ekran menü */}
      <nav className="menu">
        <div className="menu__inner">
          <ul className="menu__links">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href}><small>{n.num}</small> {n.label}</Link>
              </li>
            ))}
          </ul>
          <div className="menu__aside">
            <h4>Randevu</h4>
            <p>
              Randevu ve detaylı bilgi için DM<br />
              <a href="https://www.instagram.com/mithranailsbar/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pink-deep)' }}>@mithranailsbar</a>
            </p>
            <h4>Konum</h4>
            <p>Seyhan / Adana</p>
          </div>
        </div>
      </nav>

      <div key={pathname} className="route-fade">
        {children}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Mithra Nails Bar" className="footer__logo-img" />
              <p>Adana / Seyhan'da protez tırnak ve kalıcı oje'de zarafetin adresi.</p>
            </div>
            <div>
              <h5>Keşfet</h5>
              <ul>
                <li><Link href="/hizmetler">Hizmetler</Link></li>
                <li><Link href="/galeri">Galeri</Link></li>
                <li><Link href="/hakkimizda">Hakkımızda</Link></li>
                <li><Link href="/iletisim">Randevu</Link></li>
              </ul>
            </div>
            <div>
              <h5>Sosyal</h5>
              <ul>
                <li><a href="https://www.instagram.com/mithranailsbar/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h5>İletişim</h5>
              <ul>
                <li>Seyhan / Adana</li>
                <li>Randevu için DM: @mithranailsbar</li>
              </ul>
            </div>
          </div>
          <div className="footer__big">MITHRA</div>
          <div className="footer__bottom">
            <span>© 2026 Mithra Nails Bar. Tüm hakları saklıdır.</span>
            <span>Adana'da ✦ ile tasarlandı</span>
          </div>
        </div>
      </footer>

      <ContactBar />
      <Effects />
    </>
  );
}
