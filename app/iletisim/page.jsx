export const metadata = {
  title: 'Randevu & İletişim — Mithra Nails Bar · Adana',
  description: 'Mithra Nails Bar randevu: Instagram DM @mithranailsbar. Adana / Seyhan.',
};

export default function Iletisim() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__glow" data-speed="2" />
        <span className="sparkle" style={{ top: '34%', right: '18%' }}>✦</span>
        <span className="sparkle" style={{ top: '58%', right: '32%' }}>✦</span>
        <div className="container">
          <span className="label" data-intro>Randevu &amp; İletişim</span>
          <h1 className="h-xl split-lines">
            Sizi <em className="it gold">ağırlamak</em><br />
            için buradayız<br />
          </h1>
          <p className="lead" data-intro>
            En hızlı yol: Instagram DM. Dilerseniz aşağıdaki formu doldurun, mesajınız hazır olsun.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container contact-grid">
          <div>
            <span className="label" data-reveal>Randevu Talebi</span>
            <h2 className="h-md split-lines" style={{ margin: '1.2rem 0 2.6rem' }}>Formu doldurun, <em className="it gold">DM'e taşıyalım</em></h2>
            <form className="contact-form" data-reveal>
              <div className="field">
                <input type="text" id="name" placeholder=" " required />
                <label htmlFor="name">Adınız</label>
                <span className="bar" />
              </div>
              <div className="field">
                <select id="service" defaultValue="" required>
                  <option value="" hidden></option>
                  <option value="Protez Tırnak">Protez Tırnak</option>
                  <option value="Jel Güçlendirme">Jel Güçlendirme</option>
                  <option value="Kalıcı Oje">Kalıcı Oje</option>
                  <option value="Manikür">Manikür</option>
                  <option value="Nail Art">Nail Art</option>
                  <option value="Kararsızım">Kararsızım — birlikte karar verelim</option>
                </select>
                <label htmlFor="service">Hizmet Seçin</label>
                <span className="bar" />
              </div>
              <div className="field">
                <input type="text" id="when" placeholder=" " />
                <label htmlFor="when">Tercih ettiğiniz gün / saat</label>
                <span className="bar" />
              </div>
              <div className="field">
                <textarea id="msg" rows="3" placeholder=" " />
                <label htmlFor="msg">Notunuz (referans tasarım vb.)</label>
                <span className="bar" />
              </div>
              <button type="submit" className="btn btn--solid" data-magnetic><i /> DM Mesajı Hazırla</button>
              <div className="form-ok">Mesajınız hazırlandı ve Instagram açılıyor — DM kutusuna yapıştırıp gönderin. ✦</div>
            </form>
          </div>

          <div>
            <div className="info-card" data-reveal>
              <h3>Mithra <em>Nails Bar</em></h3>
              <div className="info-row">
                <div className="ico">✦</div>
                <a href="https://www.instagram.com/mithranailsbar/" target="_blank" rel="noopener noreferrer">
                  <div><b>Instagram — Randevu için DM</b><span>@mithranailsbar</span></div>
                </a>
              </div>
              <div className="info-row">
                <div className="ico">⌖</div>
                <div><b>Konum</b><span>Seyhan / Adana</span></div>
              </div>
              <div className="info-row">
                <div className="ico">✧</div>
                <div><b>Hizmetler</b><span>Protez Tırnak · Jel Güçlendirme · Kalıcı Oje · Manikür · Nail Art</span></div>
              </div>
            </div>

            <div className="hours" data-reveal>
              <h4>Çalışma Saatleri</h4>
              <ul>
                <li><b>Pazartesi – Cumartesi</b><span>10.00 – 19.00</span></li>
                <li><b>Pazar</b><span className="closed">Kapalı</span></li>
              </ul>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '1rem', fontStyle: 'italic' }}>✦ Yalnızca randevu ile çalışıyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section__head">
            <span className="label" data-reveal>Sık Sorulanlar</span>
            <h2 className="h-lg split-lines">Merak <em className="it gold">edilenler</em></h2>
          </div>
          <div>
            <div className="faq-item" data-reveal>
              <button type="button">Protez tırnak doğal tırnağıma zarar verir mi? <span className="plus">+</span></button>
              <div className="faq-body"><p>Doğru uygulama ve doğru çıkarma yapıldığında hayır. Aşındırmayı minimumda tutuyoruz, çıkarma işlemini asla &ldquo;koparma&rdquo; ile yapmıyoruz ve seans sonunda bakım önerilerimizi paylaşıyoruz.</p></div>
            </div>
            <div className="faq-item" data-reveal>
              <button type="button">Randevusuz gelebilir miyim? <span className="plus">+</span></button>
              <div className="faq-body"><p>Hijyen ve kalite standartlarımızı koruyabilmek için yalnızca randevu ile çalışıyoruz. DM'den yazın, uygun ilk saati birlikte bulalım.</p></div>
            </div>
            <div className="faq-item" data-reveal>
              <button type="button">Kalıcı oje ne kadar dayanır? <span className="plus">+</span></button>
              <div className="faq-body"><p>Ortalama 2–3 hafta. Tırnak uzama hızınıza ve günlük alışkanlıklarınıza göre değişir. İlk 24 saat suyla uzun temastan kaçınmanızı öneririz.</p></div>
            </div>
            <div className="faq-item" data-reveal>
              <button type="button">Referans tasarım gösterebilir miyim? <span className="plus">+</span></button>
              <div className="faq-body"><p>Lütfen gösterin! Pinterest veya Instagram kaydınızı DM'den paylaşın; tasarımı el yapınıza ve tarzınıza göre birlikte yorumlayalım.</p></div>
            </div>
            <div className="faq-item" data-reveal>
              <button type="button">Dolguya ne sıklıkla gelmeliyim? <span className="plus">+</span></button>
              <div className="faq-body"><p>Protez ve güçlendirme uygulamalarında ideal aralık 3–4 haftadır. Zamanı gelince hatırlatma mesajı da atıyoruz.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="cta__ring" data-speed="1" />
        <div className="container">
          <h2 className="split-lines">Işıltıya bir <em className="it gold">DM</em> uzaklıktasınız</h2>
          <p data-reveal>Şu an yazın — uygun ilk saati birlikte bulalım.</p>
          <a href="https://www.instagram.com/mithranailsbar/" target="_blank" rel="noopener noreferrer" className="btn btn--solid" data-magnetic data-reveal><i /> @mithranailsbar · DM At</a>
        </div>
      </section>
    </main>
  );
}
