import Link from 'next/link';
import { img, PHOTOS } from '@/lib/photos';

export const metadata = {
  title: 'Hakkımızda — Mithra Nails Bar · Adana',
  description: "Mithra Nails Bar'ın hikayesi, değerleri ve çalışma şekli. Adana / Seyhan.",
};

export default function Hakkimizda() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__glow" data-speed="2" />
        <span className="sparkle" style={{ top: '36%', right: '20%' }}>✦</span>
        <span className="sparkle" style={{ top: '60%', right: '36%' }}>✦</span>
        <div className="container">
          <span className="label" data-intro>Hakkımızda</span>
          <h1 className="h-xl split-lines">
            Işığın ve<br />
            <em className="it gold">zarafetin</em> hikayesi<br />
          </h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container about-teaser__grid">
          <div className="about-teaser__text">
            <span className="label" data-reveal>Neden &ldquo;Mithra&rdquo;?</span>
            <h2 className="h-lg split-lines">Adımız <em className="it gold">ışıktan</em> geliyor</h2>
            <p data-reveal>
              Mithra, antik kültürlerde ışığın ve dostluğun koruyucusudur. Logomuzdaki altın ağaç gibi: kökü özen, dalları zarafet.
              Adana Seyhan'daki atölyemizde her misafirimizin ellerine biraz ışık, gününe biraz dostluk katmak için çalışıyoruz.
            </p>
            <p data-reveal>
              Bizim için tırnak sadece bir uygulama değil; sizi anlatan küçük bir imza. Bu yüzden her seans, dinlemekle başlar —
              tarzınız, temponuz ve tırnak yapınız neyi kaldırıyorsa onu öneririz.
            </p>
          </div>
          <div className="about-teaser__art">
            <div className="art-ring" data-speed="1.5" />
            <div className="swatch art-a" data-reveal-img style={{ backgroundImage: `url(${img(PHOTOS.whiteMani, 800)})` }}><div style={{ height: '100%' }} /></div>
            <div className="swatch art-b" data-reveal-img style={{ backgroundImage: `url(${img(PHOTOS.pinkMani, 700)})` }}><div style={{ height: '100%' }} /></div>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee__track">
          <span>Seyhan · Adana</span>
          <span>Kişiye Özel Tasarım</span>
          <span>Steril Ekipman</span>
          <span>@mithranails</span>
        </div>
      </div>

      <section className="section section--tint">
        <div className="container">
          <div className="section__head">
            <span className="label" data-reveal>Değerlerimiz</span>
            <h2 className="h-lg split-lines">Bizi biz yapan <em className="it gold">üç söz</em></h2>
          </div>
          <div className="values-grid">
            <div className="value-card" data-reveal>
              <span className="num">I</span>
              <h3>Kusursuz Hijyen</h3>
              <p>Tüm ekipmanlar her misafirden sonra steril edilir; törpü ve tamponlar kişiye özeldir. Sağlığınız, estetikten önce gelir.</p>
            </div>
            <div className="value-card" data-reveal data-delay="0.12">
              <span className="num">II</span>
              <h3>Kişiye Özel Tasarım</h3>
              <p>Katalogdan seçtirmeyiz; dinleriz. Tarzınıza, cilt tonunuza ve yaşam temponuza göre form, renk ve tasarımı birlikte kurgularız.</p>
            </div>
            <div className="value-card" data-reveal data-delay="0.24">
              <span className="num">III</span>
              <h3>Dürüst Bakım</h3>
              <p>Tırnağınız bir uygulamaya uygun değilse söyleriz. Kısa vadeli işlem değil, uzun vadeli sağlıklı ve güzel tırnaklar hedefleriz.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="label" data-reveal>Nasıl Çalışıyoruz</span>
            <h2 className="h-lg split-lines">Dört adımda <em className="it gold">ışıltı</em></h2>
          </div>
          <div className="timeline">
            <div className="tl-item" data-reveal>
              <span>Adım 01</span>
              <b>DM'den randevu</b>
              <p>Instagram'dan yazın; istediğiniz uygulamayı ve uygun olduğunuz saatleri söyleyin. Referans fotoğrafınız varsa hemen paylaşın.</p>
            </div>
            <div className="tl-item" data-reveal>
              <span>Adım 02</span>
              <b>Mini danışma</b>
              <p>Seans başında tırnak yapınıza bakar, form ve rengi birlikte netleştiririz. Kararsızsanız size en çok yakışacak tonu öneririz.</p>
            </div>
            <div className="tl-item" data-reveal>
              <span>Adım 03</span>
              <b>Uygulama</b>
              <p>Steril ekipman ve premium ürünlerle, acele etmeden. Siz kahvenizi için, gerisi bizde.</p>
            </div>
            <div className="tl-item" data-reveal>
              <span>Adım 04</span>
              <b>Bakım takibi</b>
              <p>Evde bakım önerilerini paylaşırız; dolgu ve yenileme zamanı gelince hatırlatırız. Işıltı kalıcı olsun.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section__head">
            <span className="label" data-reveal>İmza Dokunuşlar</span>
            <h2 className="h-lg split-lines">En sevilen <em className="it gold">üçlü</em></h2>
          </div>
          <div className="team-grid">
            <div className="team-card" data-reveal>
              <div className="swatch" style={{ backgroundImage: `url(${img(PHOTOS.whiteRing, 700)})` }} />
              <h4>Milky French</h4>
              <span>Zamansız Klasik</span>
            </div>
            <div className="team-card" data-reveal data-delay="0.12">
              <div className="swatch" style={{ backgroundImage: `url(${img(PHOTOS.paintedNails, 700)})` }} />
              <h4>Taşlı Minimal</h4>
              <span>Işıltılı Detay</span>
            </div>
            <div className="team-card" data-reveal data-delay="0.24">
              <div className="swatch" style={{ backgroundImage: `url(${img(PHOTOS.maniRing, 700)})` }} />
              <h4>Rose Hour</h4>
              <span>Mithra İmzası</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="cta__ring" data-speed="1" />
        <div className="container">
          <h2 className="split-lines">Gelin, <em className="it gold">tanışalım</em></h2>
          <p data-reveal>İlk seansınızda tarzınızı konuşalım, size özel bir ışıltı kurgulayalım.</p>
          <Link href="/iletisim" className="btn btn--solid" data-magnetic data-reveal><i /> Randevu Al</Link>
        </div>
      </section>
    </main>
  );
}
