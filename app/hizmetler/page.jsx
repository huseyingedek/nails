import Link from 'next/link';

export const metadata = {
  title: 'Hizmetler — Mithra Nails Bar · Adana',
  description:
    'Protez tırnak, jel güçlendirme, kalıcı oje, manikür ve nail art hizmetlerimiz. Güncel fiyat için DM: @mithranailsbar',
};

export default function Hizmetler() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__glow" data-speed="2" />
        <span className="sparkle" style={{ top: '32%', right: '18%' }}>✦</span>
        <span className="sparkle" style={{ top: '55%', right: '34%' }}>✦</span>
        <div className="container">
          <span className="label" data-intro>Hizmetlerimiz</span>
          <h1 className="h-xl split-lines">
            İyi bakım bir<br />
            <em className="it gold">ritüeldir</em><br />
          </h1>
          <p className="lead" data-intro>
            Tüm işlemlerde steril ekipman ve premium ürünler kullanılır. Fiyatlar tasarım detayına göre değişir — güncel fiyat ve uygunluk için DM'den yazın.
          </p>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee__track">
          <span>Steril Ekipman</span>
          <span>Kişiye Özel Tasarım</span>
          <span>Premium Ürünler</span>
          <span>Randevulu Sistem</span>
        </div>
      </div>

      <section className="section">
        <div className="container svc-layout">
          <aside className="svc-side" data-reveal>
            <span className="label" style={{ marginBottom: '1.4rem', display: 'inline-flex' }}>Kategoriler</span>
            <nav>
              <a href="#protez" className="is-active"><i>I</i> Protez Tırnak</a>
              <a href="#guclendirme"><i>II</i> Jel Güçlendirme</a>
              <a href="#kalici-oje"><i>III</i> Kalıcı Oje</a>
              <a href="#manikur"><i>IV</i> Manikür</a>
              <a href="#nail-art"><i>V</i> Nail Art</a>
            </nav>
            <Link href="/iletisim" className="btn btn--solid" data-magnetic style={{ marginTop: '2.4rem' }}><i /> Randevu Al</Link>
          </aside>

          <div>
            <div className="svc-cat" id="protez">
              <div className="svc-cat__head">
                <span className="roman">I</span>
                <h2 className="h-md split-lines">Protez <em className="it gold">Tırnak</em></h2>
              </div>
              <div className="gline" data-line style={{ marginBottom: '1rem' }} />
              <div className="price-row" data-reveal>
                <h4>Protez Tırnak (Set)</h4><span className="dots" /><span className="duration">~120 dk</span><span className="price">DM'den sorun</span>
                <p>Doğal görünümlü, kalıcı ve hafif uygulama. Badem, kare, coffin — form tercihinize göre.</p>
              </div>
              <div className="price-row" data-reveal>
                <h4>Dolgu (Bakım)</h4><span className="dots" /><span className="duration">~90 dk</span><span className="price">DM'den sorun</span>
                <p>3–4 haftada bir önerilen bakım dolgusu; formu ve parlaklığı korur.</p>
              </div>
              <div className="price-row" data-reveal>
                <h4>Protez Çıkarma + Bakım</h4><span className="dots" /><span className="duration">~40 dk</span><span className="price">DM'den sorun</span>
                <p>Doğal tırnağa zarar vermeden güvenli çıkarma, ardından besleyici bakım.</p>
              </div>
              <div className="price-row" data-reveal>
                <h4>Tek Tırnak Onarımı</h4><span className="dots" /><span className="duration">~20 dk</span><span className="price">DM'den sorun</span>
                <p>Kırılan tırnağın sete sadık kalınarak onarımı.</p>
              </div>
            </div>

            <div className="svc-cat" id="guclendirme">
              <div className="svc-cat__head">
                <span className="roman">II</span>
                <h2 className="h-md split-lines">Jel <em className="it gold">Güçlendirme</em></h2>
              </div>
              <div className="gline" data-line style={{ marginBottom: '1rem' }} />
              <div className="price-row" data-reveal>
                <h4>Jel Güçlendirme</h4><span className="dots" /><span className="duration">~60 dk</span><span className="price">DM'den sorun</span>
                <p>Doğal tırnağınızı uzatmadan güçlendirir; kırılma ve yıpranmaya karşı korur.</p>
              </div>
              <div className="price-row" data-reveal>
                <h4>Güçlendirme + Kalıcı Oje</h4><span className="dots" /><span className="duration">~80 dk</span><span className="price">DM'den sorun</span>
                <p>Güç ve renk bir arada — en çok tercih edilen kombinasyon.</p>
              </div>
              <div className="price-row" data-reveal>
                <h4>Güçlendirme Yenileme</h4><span className="dots" /><span className="duration">~50 dk</span><span className="price">DM'den sorun</span>
                <p>Uzayan tırnakla birlikte 3–4 haftada bir önerilen yenileme.</p>
              </div>
            </div>

            <div className="svc-cat" id="kalici-oje">
              <div className="svc-cat__head">
                <span className="roman">III</span>
                <h2 className="h-md split-lines">Kalıcı <em className="it gold">Oje</em></h2>
              </div>
              <div className="gline" data-line style={{ marginBottom: '1rem' }} />
              <div className="price-row" data-reveal>
                <h4>Kalıcı Oje (El)</h4><span className="dots" /><span className="duration">~45 dk</span><span className="price">DM'den sorun</span>
                <p>Haftalarca kalıcılık, aynadan parlaklık. 300+ renk seçeneği.</p>
              </div>
              <div className="price-row" data-reveal>
                <h4>Kalıcı Oje (Ayak)</h4><span className="dots" /><span className="duration">~45 dk</span><span className="price">DM'den sorun</span>
                <p>Bakım sonrası uzun ömürlü renk; yaz aylarının vazgeçilmezi.</p>
              </div>
              <div className="price-row" data-reveal>
                <h4>French / Babyboomer</h4><span className="dots" /><span className="duration">~60 dk</span><span className="price">DM'den sorun</span>
                <p>Zamansız french veya yumuşak geçişli babyboomer ombre.</p>
              </div>
              <div className="price-row" data-reveal>
                <h4>Kalıcı Oje Çıkarma + Bakım</h4><span className="dots" /><span className="duration">~30 dk</span><span className="price">DM'den sorun</span>
                <p>Nazik çıkarma, ardından besleyici yağ bakımı.</p>
              </div>
            </div>

            <div className="svc-cat" id="manikur">
              <div className="svc-cat__head">
                <span className="roman">IV</span>
                <h2 className="h-md split-lines">Manikür</h2>
              </div>
              <div className="gline" data-line style={{ marginBottom: '1rem' }} />
              <div className="price-row" data-reveal>
                <h4>Klasik Manikür</h4><span className="dots" /><span className="duration">~40 dk</span><span className="price">DM'den sorun</span>
                <p>Törpüleme, kütikül bakımı ve dilediğiniz renkte oje.</p>
              </div>
              <div className="price-row" data-reveal>
                <h4>SPA Manikür</h4><span className="dots" /><span className="duration">~60 dk</span><span className="price">DM'den sorun</span>
                <p>Peeling ve maske ile zenginleştirilmiş el bakım ritüeli.</p>
              </div>
            </div>

            <div className="svc-cat" id="nail-art">
              <div className="svc-cat__head">
                <span className="roman">V</span>
                <h2 className="h-md split-lines">Nail <em className="it gold">Art</em></h2>
              </div>
              <div className="gline" data-line style={{ marginBottom: '1rem' }} />
              <div className="price-row" data-reveal>
                <h4>Minimal Tasarım</h4><span className="dots" /><span className="duration">~20 dk</span><span className="price">DM'den sorun</span>
                <p>İnce çizgiler, yıldızlar, nazar detayları — az ama öz.</p>
              </div>
              <div className="price-row" data-reveal>
                <h4>Tam Set Tasarım</h4><span className="dots" /><span className="duration">~60 dk</span><span className="price">DM'den sorun</span>
                <p>Referans fotoğrafınızı getirin; elinize ve tarzınıza göre birlikte kurgulayalım.</p>
              </div>
              <div className="price-row" data-reveal>
                <h4>Taş &amp; 3D Süsleme</h4><span className="dots" /><span className="duration">~30 dk</span><span className="price">DM'den sorun</span>
                <p>Taşlar, inciler ve kabartma detaylarla özel günlere hazırlık.</p>
              </div>
            </div>

            <p className="price-note" data-reveal>
              ✦ Süreler yaklaşıktır; fiyat, tasarımın detayına göre belirlenir. Güncel fiyat listesi ve uygun saatler için{' '}
              <a href="https://www.instagram.com/mithranailsbar/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pink-deep)' }}>@mithranailsbar</a> hesabımıza DM atmanız yeterli.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint cta">
        <div className="container">
          <h2 className="split-lines">Kararsız mı <em className="it gold">kaldınız?</em></h2>
          <p data-reveal>DM'den yazın — tırnak yapınıza en uygun uygulamayı birlikte belirleyelim.</p>
          <a href="https://www.instagram.com/mithranailsbar/" target="_blank" rel="noopener noreferrer" className="btn btn--solid" data-magnetic data-reveal><i /> @mithranailsbar · DM</a>
        </div>
      </section>
    </main>
  );
}
