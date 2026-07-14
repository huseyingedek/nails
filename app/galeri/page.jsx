export const metadata = {
  title: 'Galeri — Tırnak Çalışmalarımız (Yüreğir & Adana)',
  description: "Yüreğir / Adana Mithra Nails Bar tırnak çalışmalarından seçkiler: protez tırnak, french, kalıcı oje ve nail art. Tamamı için Instagram: @mithranailsbar",
  alternates: { canonical: '/galeri' },
};

const ITEMS = [
  { src: '/gallery/g01.jpg', t: 'Yıldız Işıltısı', s: 'Nail Art · Taş', cat: 'art', tall: true },
  { src: '/gallery/g02.jpg', t: 'Kırmızı Çiçek', s: 'Nail Art', cat: 'art' },
  { src: '/gallery/g03.jpg', t: 'Doğal French', s: 'French', cat: 'french' },
  { src: '/gallery/g04.jpg', t: 'Mavi Çiçek', s: 'Nail Art', cat: 'art' },
  { src: '/gallery/g05.jpg', t: 'Kelebek Set', s: 'Protez · Badem', cat: 'protez', tall: true },
  { src: '/gallery/g06.jpg', t: 'Kafes Desen', s: 'Nail Art · Taş', cat: 'art' },
  { src: '/gallery/g07.jpg', t: 'Kurdeleli Sarı', s: 'French', cat: 'french' },
  { src: '/gallery/g08.jpg', t: 'Çiçekli French', s: 'French', cat: 'french' },
  { src: '/gallery/g09.jpg', t: 'Mavi French', s: 'French', cat: 'french' },
  { src: '/gallery/g10.jpg', t: 'Mavi Yıldız', s: 'Nail Art', cat: 'art' },
  { src: '/gallery/g11.jpg', t: 'Gelin Işıltısı', s: 'Protez · Özel Gün', cat: 'protez' },
  { src: '/gallery/g12.jpg', t: 'Klasik Kırmızı', s: 'Kalıcı Oje', cat: 'protez' },
  { src: '/gallery/g13.jpg', t: 'Nazar French', s: 'French', cat: 'french' },
  { src: '/gallery/g14.jpg', t: 'Işıltılı Nude', s: 'Protez', cat: 'protez' },
  { src: '/gallery/g15.jpg', t: 'Taşlı French', s: 'French · Taş', cat: 'french' },
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
              Atölyemizde gerçekleştirdiğimiz çalışmalardan seçkiler. Daha fazlası ve güncel paylaşımlar için Instagram hesabımıza göz atın. Kartlara tıklayıp yakından bakabilirsiniz.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '2rem' }}>
          <div className="container">
            <div className="filterbar" data-reveal>
              <button className="is-active" data-filter="all">Tümü</button>
              <button data-filter="protez">Protez</button>
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
                  <div className="art" style={{ backgroundImage: `url(${it.src})` }} />
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
          <div className="lightbox__art swatch" />
          <div className="lightbox__cap" />
        </div>
      </div>
    </>
  );
}
