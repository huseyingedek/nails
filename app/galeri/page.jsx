import { img, PHOTOS } from '@/lib/photos';

export const metadata = {
  title: 'Galeri — Mithra Nails Bar · Adana',
  description: 'Mithra Nails Bar çalışmalarımızdan seçkiler. Tamamı için Instagram: @mithranailsbar',
};

const ITEMS = [
  { p: PHOTOS.whiteMani, t: 'Milky French', s: 'French · Klasik', cat: 'french', tall: true },
  { p: PHOTOS.paintedNails, t: 'Star Studs', s: 'Nail Art · Taş', cat: 'art' },
  { p: PHOTOS.pinkMani, t: 'Terracotta Rose', s: 'Kalıcı Oje', cat: 'oje' },
  { p: PHOTOS.handPink, t: 'Blush Almond', s: 'Protez · Badem', cat: 'protez' },
  { p: PHOTOS.maniRing, t: 'Nazar Touch', s: 'Nail Art · Minimal', cat: 'art', tall: true },
  { p: PHOTOS.whiteRing, t: 'Sunny French', s: 'French · Renkli', cat: 'french' },
  { p: PHOTOS.glitterPink, t: 'Pink Square', s: 'Protez · Kare', cat: 'protez' },
  { p: PHOTOS.goldRing, t: 'Velvet Wine', s: 'Kalıcı Oje', cat: 'oje' },
  { p: PHOTOS.salon, t: 'Rose Line', s: 'Nail Art · Çizgi', cat: 'art' },
  { p: PHOTOS.handsFlowers, t: 'Pearl Tip', s: 'French · Sedef', cat: 'french' },
  { p: PHOTOS.handWhite, t: 'Rose Coffin', s: 'Protez · Coffin', cat: 'protez' },
  { p: PHOTOS.polish1, t: 'Golden Hour', s: 'Kalıcı Oje · Işıltı', cat: 'oje' },
];

export default function Galeri() {
  return (
    <>
      <main>
        <section className="page-hero">
          <div className="page-hero__glow" data-speed="2" />
          <span className="sparkle" style={{ top: '34%', right: '16%' }}>✦</span>
          <span className="sparkle" style={{ top: '58%', right: '30%' }}>✦</span>
          <div className="container">
            <span className="label" data-intro>Galeri</span>
            <h1 className="h-xl split-lines">
              Ellerden çıkan<br />
              <em className="it gold">ışıltılar</em><br />
            </h1>
            <p className="lead" data-intro>
              Aşağıdakiler temsili renk kartlarıdır — gerçek çalışmalarımızın tamamı Instagram hesabımızda. Kartlara tıklayıp yakından bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '2rem' }}>
          <div className="container">
            <div className="filterbar" data-reveal>
              <button className="is-active" data-filter="all">Tümü</button>
              <button data-filter="protez">Protez</button>
              <button data-filter="oje">Kalıcı Oje</button>
              <button data-filter="french">French</button>
              <button data-filter="art">Nail Art</button>
            </div>

            <div className="gal-grid">
              {ITEMS.map((it, i) => (
                <figure
                  key={i}
                  className={`gal-item${it.tall ? ' tall' : ''}`}
                  data-cat={it.cat}
                  data-reveal
                >
                  <div className="art" style={{ backgroundImage: `url(${img(it.p, it.tall ? 900 : 700)})` }} />
                  <figcaption><b>{it.t}</b><small>{it.s}</small></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint insta-cta">
          <div className="container">
            <span className="label label--center" data-reveal style={{ justifyContent: 'center' }}>Gerçek Çalışmalarımız</span>
            <h2 className="h-lg split-lines" style={{ marginTop: '1.6rem' }}>Tamamı <em className="it gold">Instagram'da</em></h2>
            <p className="lead" data-reveal style={{ margin: '1.4rem auto 2.6rem', maxWidth: '480px' }}>
              French setlerden taşlı tasarımlara — tüm işlerimizi ve güncel paylaşımlarımızı profilimizde bulabilirsiniz.
            </p>
            <a href="https://www.instagram.com/mithranailsbar/" target="_blank" rel="noopener noreferrer" className="btn btn--solid" data-magnetic data-reveal><i /> @mithranailsbar'i Ziyaret Et</a>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <div className="lightbox">
        <button className="lightbox__close" aria-label="Kapat">×</button>
        <div className="lightbox__box">
          <div className="lightbox__art swatch g-gold" />
          <div className="lightbox__cap" />
        </div>
      </div>
    </>
  );
}
