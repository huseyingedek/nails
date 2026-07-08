// Unsplash görselleri (ücretsiz, ticari kullanım serbest)
// Kaynak: unsplash.com — manicure / pink-nails aramaları
const base = 'https://images.unsplash.com/photo-';
export const img = (id, w = 1200) => `${base}${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PHOTOS = {
  glitterPink: '1522337660859-02fbefca4702', // parlak pembe tırnaklar
  pinkMani: '1607779097040-26e80aa78e66',    // pembe manikür
  whiteMani: '1630843599725-32ead7671867',   // beyaz manikür
  paintedNails: '1659391542239-9648f307c0b1',// boyalı tırnaklar
  maniRing: '1641814250010-9887d86eedfd',     // manikür + yüzük
  whiteRing: '1652990337162-fa84a588d843',    // beyaz manikür + yüzük
  salon: '1632345031435-8727f6897d53',        // salonda tırnak yapımı
  handPink: '1604902396830-aca29e19b067',     // pembe zeminde el
  goldRing: '1604654894610-df63bc536371',     // yüzüklü el
  handsFlowers: '1637264718120-e70224dc0662', // eller + çiçek
  handWhite: '1610992015732-2449b76344bc',    // beyaz zeminde el
  polish1: '1661531695300-3e30ba2980b9',      // oje şişeleri
  polish2: '1661531684300-361894df6613',
  polish3: '1661531673433-f41021f49644',
  polish4: '1661531666908-11c2d81ea71f',
};
