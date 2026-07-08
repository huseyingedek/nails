# Mithra Nails Bar — Next.js

Statik HTML site, **Next.js 14 (App Router)**'a taşındı ve **blush pembe + altın** paletine geçirildi.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
```

Yayına almak için:

```bash
npm run build
npm start
```

## Yapı

- `app/` — sayfalar (`/`, `/hizmetler`, `/galeri`, `/hakkimizda`, `/iletisim`)
- `app/globals.css` — tüm stiller (blush pembe + altın)
- `components/SiteShell.jsx` — header, menü, footer, preloader, imleç, iletişim bar
- `components/Effects.jsx` — GSAP + ScrollTrigger + Lenis animasyon motoru
- `components/ContactBar.jsx` — WhatsApp / Ara / Instagram butonları
- `lib/photos.js` — Unsplash görsel adresleri
- `legacy/` — eski statik HTML sürümü (referans)

## ⚠️ Yapılacak: Telefon numarası

`components/ContactBar.jsx` içindeki `PHONE` değerini kendi numaranızla değiştirin
(uluslararası format, ülke koduyla — örn. `905321112233`):

```js
const PHONE = '905555555555'; // TODO: gerçek numara
```

WhatsApp butonu, "Ara" bağlantısı ve mobil bar bu numarayı kullanır.

## Notlar

- Masaüstünde sağ altta tek **WhatsApp** butonu; mobilde altta **WhatsApp · Ara · Instagram** barı.
- Görseller Unsplash'ten (ücretsiz/ticari kullanım). Kendi çalışma fotoğraflarınızla
  değiştirmek için `lib/photos.js` ve ilgili sayfalardaki `url(...)` adreslerini güncelleyin.
