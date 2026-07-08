import Link from 'next/link';
import { img, PHOTOS } from '@/lib/photos';

export const metadata = {
  title: 'Mithra Nails Bar — Adana Protez Tırnak & Kalıcı Oje',
  description:
    'Mithra Nails Bar · Adana / Seyhan. Protez tırnak, jel güçlendirme, kalıcı oje, manikür ve nail art. Randevu için DM: @mithranails',
};

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img(PHOTOS.glitterPink, 1920)} alt="Pembe parlak protez tırnak — Mithra Nails Bar" />
        </div>
        <div className="hero__scrim" />
        <div className="hero__frame" />
        <div className="hero__glow hero__glow--1" data-speed="2" />
        <div className="hero__glow hero__glow--2" data-speed="-1.5" />
        <span className="sparkle" style={{ top: '22%', left: '12%' }}>✦</span>
        <span className="sparkle" style={{ top: '30%', right: '24%' }}>✦</span>
        <span className="sparkle" style={{ bottom: '28%', left: '30%' }}>✦</span>
        <span className="sparkle" style={{ top: '60%', right: '12%' }}>✦</span>
        <div className="container">
          <span className="label hero__label" data-intro>Adana · Seyhan — Nail Atelier</span>
          <h1 className="h-xl split-lines">
            Tırnak sanatında<br />
            <em className="it gold">pembe</em> zarafet<br />
          </h1>
          <div className="hero__row">
            <Link href="/iletisim" className="btn btn--solid" data-magnetic data-intro><i /> Randevu Al</Link>
            <p className="hero__note" data-intro>
              <b>Protez tırnak · Jel güçlendirme · Kalıcı oje · Nail art.</b><br />
              Her tasarım, size özel kurgulanır.
            </p>
          </div>
        </div>
        <div className="badge-rotate" data-intro>
          <svg viewBox="0 0 150 150">
            <defs>
              <path id="circlePath" d="M 75,75 m -58,0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0" />
            </defs>
            <text><textPath href="#circlePath">MITHRA NAILS BAR • ADANA / SEYHAN •</textPath></text>
          </svg>
          <div className="badge-rotate__center">✦</div>
        </div>
        <div className="scroll-hint">Keşfet</div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee__track">
          <span>Protez Tırnak</span>
          <span>Jel Güçlendirme</span>
          <span>Kalıcı Oje</span>
          <span>Manikür</span>
          <span>Nail Art</span>
        </div>
      </div>

      {/* HİZMETLER */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="label" data-reveal>I — Hizmetlerimiz</span>
            <h2 className="h-lg split-lines">Her tırnak bir <em className="it gold">imza</em> taşır</h2>
          </div>
          <div className="svc-list">
            <Link className="svc-item" href="/hizmetler" data-art="g-blush" data-reveal>
              <span className="svc-item__num">01</span>
              <span className="svc-item__name">Protez Tırnak</span>
              <span className="svc-item__meta"><strong>Kalıcı form</strong>uygulama + tasarım</span>
            </Link>
            <Link className="svc-item" href="/hizmetler" data-art="g-pearl" data-reveal>
              <span className="svc-item__num">02</span>
              <span className="svc-item__name">Jel Güçlendirme</span>
              <span className="svc-item__meta"><strong>Doğal tırnağa</strong>koruyucu güç</span>
            </Link>
            <Link className="svc-item" href="/hizmetler" data-art="g-rose" data-reveal>
              <span className="svc-item__num">03</span>
              <span className="svc-item__name">Kalıcı Oje</span>
              <span className="svc-item__meta"><strong>Haftalarca</strong>aynadan parlaklık</span>
            </Link>
            <Link className="svc-item" href="/hizmetler" data-art="g-mauve" data-reveal>
              <span className="svc-item__num">04</span>
              <span className="svc-item__name">Manikür</span>
              <span className="svc-item__meta"><strong>Bakımlı eller</strong>klasik &amp; spa</span>
            </Link>
            <Link className="svc-item" href="/hizmetler" data-art="g-fuchsia" data-reveal>
              <span className="svc-item__num">05</span>
              <span className="svc-item__name">Nail Art</span>
              <span className="svc-item__meta"><strong>Size özel</strong>tasarım &amp; taş</span>
            </Link>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA ÖNİZLEME */}
      <section className="section section--tint">
        <div className="container about-teaser__grid">
          <div className="about-teaser__art">
            <div className="art-ring" data-speed="1.5" />
            <div className="swatch art-a" data-reveal-img style={{ backgroundImage: `url(${img(PHOTOS.pinkMani, 800)})` }}><div style={{ height: '100%' }} /></div>
            <div className="swatch art-b" data-reveal-img style={{ backgroundImage: `url(${img(PHOTOS.paintedNails, 700)})` }}><div style={{ height: '100%' }} /></div>
          </div>
          <div className="about-teaser__text">
            <span className="label" data-reveal>II — Mithra'yı Tanıyın</span>
            <h2 className="h-lg split-lines">Adı <em className="it gold">ışıktan</em> gelen atölye</h2>
            <p data-reveal>
              Mithra, antik kültürlerde ışığın koruyucusudur. Adana Seyhan'daki atölyemizde biz de tam olarak bunu yapıyoruz:
              ellerinize ışıltı, gününüze zarafet katıyoruz. Steril ekipman, premium ürünler ve tamamen size özel tasarım.
            </p>
            <Link href="/hakkimizda" className="btn" data-magnetic data-reveal><i /> Hikayemiz</Link>
            <div className="stats">
              <div className="stat" data-reveal><b><span data-count="300">0</span><i>+</i></b><span>Renk Seçeneği</span></div>
              <div className="stat" data-reveal data-delay="0.1"><b><span data-count="100">0</span><i>%</i></b><span>Steril Ekipman</span></div>
              <div className="stat" data-reveal data-delay="0.2"><b><span data-count="5">0</span><i>★</i></b><span>Misafir Memnuniyeti</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* YATAY ŞERİT */}
      <section className="hstrip">
        <div className="hstrip__wrap">
          <div className="hstrip__title">
            <span className="label">III — Koleksiyon</span>
            <h2 className="h-lg" style={{ marginTop: '1.2rem' }}>Sezonun <em className="it gold">tonları</em></h2>
            <p className="lead" style={{ marginTop: '1.2rem', maxWidth: '320px' }}>
              Kaydırın — atölyede bu sezon en çok tercih edilen pembe ve rose-gold tonlar.
            </p>
          </div>
          <div className="hstrip__card swatch g-milk" style={{ backgroundImage: `url(${img(PHOTOS.whiteMani, 700)})` }}><div className="shade" /><small>01 — Pudra</small><h5>Blush Milk</h5></div>
          <div className="hstrip__card swatch g-gold" style={{ backgroundImage: `url(${img(PHOTOS.maniRing, 700)})` }}><div className="shade" /><small>02 — Rose Gold</small><h5>Golden Hour</h5></div>
          <div className="hstrip__card swatch g-rose" style={{ backgroundImage: `url(${img(PHOTOS.pinkMani, 700)})` }}><div className="shade" /><small>03 — Sıcak</small><h5>Terracotta Rose</h5></div>
          <div className="hstrip__card swatch g-blush" style={{ backgroundImage: `url(${img(PHOTOS.handPink, 700)})` }}><div className="shade" /><small>04 — Şeker</small><h5>Blush Pink</h5></div>
          <div className="hstrip__card swatch g-fuchsia" style={{ backgroundImage: `url(${img(PHOTOS.glitterPink, 700)})` }}><div className="shade" /><small>05 — Fuşya</small><h5>Pink Pop</h5></div>
          <div className="hstrip__card swatch g-wine" style={{ backgroundImage: `url(${img(PHOTOS.whiteRing, 700)})` }}><div className="shade" /><small>06 — Derin</small><h5>Velvet Wine</h5></div>
          <div className="hstrip__card swatch g-pearl" style={{ backgroundImage: `url(${img(PHOTOS.handsFlowers, 700)})` }}><div className="shade" /><small>07 — Zarif</small><h5>Pearl Shine</h5></div>
        </div>
      </section>

      {/* YORUMLAR */}
      <section className="section testi">
        <div className="container">
          <span className="label">IV — Misafirlerimiz</span>
          <span className="testi__mark">&ldquo;</span>
          <div className="testi__stage">
            <div className="testi__slide">
              <p className="testi__quote">Tırnaklarım hiç bu kadar doğal ve sağlıklı görünmemişti. İlk seansta <em>evimi buldum</em>.</p>
              <div className="testi__who">
                <div className="testi__ava">E</div>
                <span>Elif — Seyhan</span>
              </div>
            </div>
            <div className="testi__slide">
              <p className="testi__quote">Hijyen konusundaki titizlikleri inanılmaz. Tasarımları ise <em>başlı başına sanat</em> — her seferinde iltifat alıyorum.</p>
              <div className="testi__who">
                <div className="testi__ava">B</div>
                <span>Buse — Çukurova</span>
              </div>
            </div>
            <div className="testi__slide">
              <p className="testi__quote">Referans fotoğrafımı gösterdim, elime göre <em>daha da güzelini</em> tasarladılar. DM'den randevu almak da çok pratik.</p>
              <div className="testi__who">
                <div className="testi__ava">Z</div>
                <span>Zeynep — Ziyapaşa</span>
              </div>
            </div>
          </div>
          <div className="testi__nav">
            <button className="testi__dot" aria-label="Yorum 1"><span className="fill" /></button>
            <button className="testi__dot" aria-label="Yorum 2"><span className="fill" /></button>
            <button className="testi__dot" aria-label="Yorum 3"><span className="fill" /></button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="cta__ring" data-speed="1" />
        <div className="container">
          <h2 className="split-lines">Kendinize bir <em className="it gold">ışıltı</em><br />hediye edin</h2>
          <p data-reveal>Instagram'dan DM atın, size en uygun saati birlikte bulalım.</p>
          <a href="https://www.instagram.com/mithranails/" target="_blank" rel="noopener noreferrer" className="btn btn--solid" data-magnetic data-reveal><i /> @mithranails · DM</a>
        </div>
      </section>
    </main>
  );
}
