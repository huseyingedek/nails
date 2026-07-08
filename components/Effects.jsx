'use client';

/* ============================================================
   MITHRA NAILS BAR — Animation Engine (Next.js / client)
   GSAP + ScrollTrigger + Lenis
   ============================================================ */

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Sekmeler arası korunan tekil (singleton) durumlar
let lenis = null;
let bootedOnce = false;

export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    let killed = false;
    let cleanup = () => {};

    (async () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isTouch = window.matchMedia('(hover: none)').matches;

      const gsapMod = await import('gsap');
      const stMod = await import('gsap/ScrollTrigger');
      const lenisMod = await import('lenis');
      if (killed) return;

      const gsap = gsapMod.gsap || gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger || stMod.default;
      const Lenis = lenisMod.default || lenisMod.Lenis;
      gsap.registerPlugin(ScrollTrigger);

      /* -------- Lenis (yalnızca bir kez) -------- */
      if (!lenis && !reduced && Lenis) {
        lenis = new Lenis({ duration: 1.15, smoothWheel: true });
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((t) => lenis.raf(t * 1000));
        gsap.ticker.lagSmoothing(0);
      }

      /* -------- Menüyü kapat (navigasyon sonrası) -------- */
      const menuEl = document.querySelector('.menu');
      const burgerEl = document.querySelector('.burger');
      if (menuEl) {
        menuEl.style.clipPath = 'circle(0% at calc(100% - 4.6rem) 3rem)';
        menuEl.style.visibility = 'hidden';
      }
      if (burgerEl) burgerEl.classList.remove('is-open');
      const menuLinks0 = document.querySelectorAll('.menu__links a');
      menuLinks0.forEach((a) => gsap.set(a, { y: '120%' }));
      lenis && lenis.start();
      lenis && lenis.scrollTo(0, { immediate: true });

      /* -------- Metni maskeli satırlara böl -------- */
      function splitLines(el) {
        if (el.querySelector('.line-mask')) return;
        const parts = el.innerHTML.split(/<br\s*\/?>/gi).map((s) => s.trim()).filter(Boolean);
        el.innerHTML = parts
          .map((l) => `<span class="line-mask"><span class="line-inner">${l}</span></span>`)
          .join('');
      }
      document.querySelectorAll('.split-lines').forEach(splitLines);

      /* -------- Açılış -------- */
      gsap.set('[data-intro]', { opacity: 0, y: 36 });
      function runIntro() {
        const tl = gsap.timeline();
        tl.to('.hero .line-inner, .page-hero .line-inner', {
          y: 0, duration: 1.2, stagger: 0.12, ease: 'expo.out',
        }, 0.1);
        tl.to('[data-intro]', {
          opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
        }, 0.5);
        return tl;
      }

      const preloader = document.querySelector('.preloader');

      if (!bootedOnce) {
        bootedOnce = true;
        const visited = sessionStorage.getItem('mithra_visited');

        // Emniyet: 5 sn sonra her koşulda kaldır
        setTimeout(() => {
          if (preloader && getComputedStyle(preloader).display !== 'none') {
            gsap.to(preloader, { autoAlpha: 0, duration: 0.5, onComplete: () => (preloader.style.display = 'none') });
          }
        }, 5000);

        if (preloader && !visited && !reduced) {
          sessionStorage.setItem('mithra_visited', '1');
          const letters = preloader.querySelectorAll('.preloader__word span');
          const ring = preloader.querySelector('.preloader__ring circle');
          const countEl = preloader.querySelector('.preloader__count');
          const count = { v: 0 };
          const tl = gsap.timeline();
          if (ring) tl.to(ring, { strokeDashoffset: 0, duration: 2.2, ease: 'power2.inOut' }, 0);
          tl.to(letters, { y: 0, duration: 1, stagger: 0.07, ease: 'expo.out' }, 0.3)
            .to('.preloader__sub', { opacity: 1, duration: 0.6 }, '-=0.5')
            .to(count, {
              v: 100, duration: 1.7, ease: 'power2.inOut', snap: { v: 1 },
              onUpdate: () => { if (countEl) countEl.textContent = Math.round(count.v) + '%'; },
            }, 0.3)
            .to(letters, { y: '-120%', duration: 0.7, stagger: 0.04, ease: 'expo.in' }, '+=0.2')
            .to('.preloader__ring, .preloader__sub', { opacity: 0, duration: 0.4 }, '<')
            .to(preloader, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '-=0.2')
            .set(preloader, { display: 'none' })
            .add(runIntro(), '-=0.45');
        } else {
          if (preloader) {
            gsap.timeline()
              .to(preloader, { yPercent: -100, duration: 0.7, ease: 'expo.inOut', delay: 0.1 })
              .set(preloader, { display: 'none' })
              .add(runIntro(), '-=0.3');
          } else {
            runIntro();
          }
        }
      } else {
        // Sonraki (SPA) geçişlerde preloader yok, direkt açılış
        runIntro();
      }

      /* -------- Özel imleç (bir kez) -------- */
      if (!isTouch && !window.__mithraCursor) {
        const dot = document.querySelector('.cursor-dot');
        const ring = document.querySelector('.cursor-ring');
        if (dot && ring) {
          window.__mithraCursor = true;
          const pos = { x: innerWidth / 2, y: innerHeight / 2 };
          const ringPos = { x: pos.x, y: pos.y };
          window.addEventListener('mousemove', (e) => { pos.x = e.clientX; pos.y = e.clientY; });
          gsap.ticker.add(() => {
            ringPos.x += (pos.x - ringPos.x) * 0.14;
            ringPos.y += (pos.y - ringPos.y) * 0.14;
            gsap.set(dot, { x: pos.x, y: pos.y });
            gsap.set(ring, { x: ringPos.x, y: ringPos.y });
          });
        }
      }
      // Hover durumları — her sayfa için (flag ile tekrarı önle)
      if (!isTouch) {
        const ring = document.querySelector('.cursor-ring');
        if (ring) {
          document.querySelectorAll('a, button, .price-row, .svc-item').forEach((el) => {
            if (el.dataset.hovBound) return;
            el.dataset.hovBound = '1';
            el.addEventListener('mouseenter', () => ring.classList.add('is-hover'));
            el.addEventListener('mouseleave', () => ring.classList.remove('is-hover'));
          });
          document.querySelectorAll('.gal-item').forEach((el) => {
            if (el.dataset.viewBound) return;
            el.dataset.viewBound = '1';
            el.addEventListener('mouseenter', () => ring.classList.add('is-view'));
            el.addEventListener('mouseleave', () => ring.classList.remove('is-view'));
          });
        }
      }

      /* -------- Magnetic -------- */
      if (!isTouch && !reduced) {
        document.querySelectorAll('[data-magnetic]').forEach((el) => {
          if (el.dataset.magBound) return;
          el.dataset.magBound = '1';
          el.addEventListener('mousemove', (e) => {
            const r = el.getBoundingClientRect();
            gsap.to(el, {
              x: (e.clientX - (r.left + r.width / 2)) * 0.35,
              y: (e.clientY - (r.top + r.height / 2)) * 0.35,
              duration: 0.4, ease: 'power3.out',
            });
          });
          el.addEventListener('mouseleave', () => {
            gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
          });
        });
      }

      /* -------- Header scroll durumu (bir kez) -------- */
      const header = document.querySelector('.header');
      if (header && !window.__mithraHeader) {
        window.__mithraHeader = true;
        window.addEventListener('scroll', () => {
          header.classList.toggle('is-scrolled', window.scrollY > 60);
        }, { passive: true });
      }

      /* -------- Menü aç/kapa (bir kez) -------- */
      const burger = document.querySelector('.burger');
      const menu = document.querySelector('.menu');
      if (burger && menu && !window.__mithraMenu) {
        window.__mithraMenu = true;
        let menuOpen = false;
        const links = menu.querySelectorAll('.menu__links a');
        const aside = menu.querySelector('.menu__aside');
        const menuTl = gsap.timeline({ paused: true })
          .set(menu, { visibility: 'visible' })
          .to(menu, { clipPath: 'circle(150% at calc(100% - 4.6rem) 3rem)', duration: 0.9, ease: 'expo.inOut' })
          .to(links, { y: 0, duration: 0.8, stagger: 0.07, ease: 'expo.out' }, '-=0.35');
        if (aside) menuTl.to(aside, { opacity: 1, y: 0, duration: 0.6 }, '-=0.5');

        burger.addEventListener('click', () => {
          menuOpen = !menuOpen;
          burger.classList.toggle('is-open', menuOpen);
          if (menuOpen) { lenis && lenis.stop(); menuTl.timeScale(1).play(); }
          else { lenis && lenis.start(); menuTl.timeScale(1.6).reverse(); }
        });
        // Menü linkine tıklanınca kapat (navigasyon SiteShell key ile yapılıyor)
        links.forEach((a) => a.addEventListener('click', () => {
          menuOpen = false;
          burger.classList.remove('is-open');
          lenis && lenis.start();
          menuTl.timeScale(1.6).reverse();
        }));
      }

      /* -------- Scroll reveal -------- */
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
          delay: parseFloat(el.dataset.delay || 0),
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      document.querySelectorAll('[data-reveal-img]').forEach((el) => {
        const inner = el.firstElementChild;
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%' } });
        tl.fromTo(el, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'expo.out' });
        if (inner) tl.to(inner, { scale: 1, duration: 1.4, ease: 'expo.out' }, 0);
      });

      document.querySelectorAll('[data-line]').forEach((el) => {
        gsap.to(el, {
          scaleX: 1, duration: 1.4, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });

      // Hero dışındaki başlık satırları
      document.querySelectorAll('.split-lines').forEach((el) => {
        if (el.closest('.hero') || el.closest('.page-hero')) return;
        gsap.to(el.querySelectorAll('.line-inner'), {
          y: 0, duration: 1.1, stagger: 0.1, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      /* -------- Parallax -------- */
      document.querySelectorAll('[data-speed]').forEach((el) => {
        gsap.to(el, {
          yPercent: parseFloat(el.dataset.speed) * -12,
          ease: 'none',
          scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 },
        });
      });

      /* -------- Dönen rozet -------- */
      document.querySelectorAll('.badge-rotate svg').forEach((svg) => {
        gsap.to(svg, {
          rotation: 360, transformOrigin: '50% 50%', ease: 'none',
          scrollTrigger: { trigger: 'body', start: 'top top', end: 'max', scrub: 2 },
        });
      });

      /* -------- Marquee -------- */
      document.querySelectorAll('.marquee').forEach((mq) => {
        const track = mq.querySelector('.marquee__track');
        if (!track || mq.dataset.mqReady) return;
        mq.dataset.mqReady = '1';
        const clone = track.cloneNode(true);
        mq.appendChild(clone);
        const tween = gsap.to([track, clone], { xPercent: -100, ease: 'none', duration: 24, repeat: -1 });
        ScrollTrigger.create({
          onUpdate: (self) => {
            const v = Math.abs(self.getVelocity() / 900);
            gsap.to(tween, { timeScale: 1 + Math.min(v, 2.5), duration: 0.4 });
          },
        });
      });

      /* -------- Hizmet listesi: yüzen önizleme -------- */
      const svcPreview = document.querySelector('.svc-preview');
      if (svcPreview && !isTouch) {
        const art = svcPreview.querySelector('.swatch');
        document.querySelectorAll('.svc-item').forEach((item) => {
          item.addEventListener('mouseenter', () => {
            if (art) { art.className = 'swatch ' + (item.dataset.art || 'g-gold'); art.style.height = '100%'; }
            gsap.to(svcPreview, { opacity: 1, scale: 1, rotate: 0, duration: 0.45, ease: 'power3.out' });
          });
          item.addEventListener('mouseleave', () => {
            gsap.to(svcPreview, { opacity: 0, scale: 0.8, rotate: 4, duration: 0.35, ease: 'power3.in' });
          });
          item.addEventListener('mousemove', (e) => {
            gsap.to(svcPreview, { left: e.clientX + 30, top: e.clientY - 145, duration: 0.6, ease: 'power3.out' });
          });
        });
      }

      /* -------- Yatay sabitlenen şerit -------- */
      const hstrip = document.querySelector('.hstrip__wrap');
      if (hstrip && !reduced && window.innerWidth > 720) {
        const getScroll = () => hstrip.scrollWidth - window.innerWidth;
        gsap.to(hstrip, {
          x: () => -getScroll(),
          ease: 'none',
          scrollTrigger: {
            trigger: '.hstrip', start: 'top top',
            end: () => '+=' + getScroll(),
            pin: true, scrub: 1, invalidateOnRefresh: true,
          },
        });
      }

      /* -------- Sayaçlar -------- */
      document.querySelectorAll('[data-count]').forEach((el) => {
        const target = parseInt(el.dataset.count, 10);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target, duration: 2, ease: 'power2.out', snap: { v: 1 },
          onUpdate: () => { el.textContent = Math.round(obj.v); },
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      /* -------- Yorum slider -------- */
      const slides = document.querySelectorAll('.testi__slide');
      if (slides.length) {
        const dots = document.querySelectorAll('.testi__dot');
        let idx = 0;
        let timer = null;
        const DUR = 5.5;
        function go(n) {
          slides[idx].classList.remove('is-active');
          if (dots[idx]) gsap.set(dots[idx].querySelector('.fill'), { scaleX: 0 });
          idx = n % slides.length;
          const s = slides[idx];
          s.classList.add('is-active');
          gsap.fromTo(s.querySelector('.testi__quote'), { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' });
          gsap.fromTo(s.querySelector('.testi__who'), { opacity: 0 }, { opacity: 1, duration: 0.7, delay: 0.25 });
          if (dots[idx]) gsap.fromTo(dots[idx].querySelector('.fill'), { scaleX: 0 }, { scaleX: 1, duration: DUR, ease: 'none' });
          clearTimeout(timer);
          timer = setTimeout(() => go(idx + 1), DUR * 1000);
        }
        dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
        ScrollTrigger.create({ trigger: '.testi', start: 'top 75%', once: true, onEnter: () => go(0) });
      }

      /* -------- Galeri: filtre + lightbox -------- */
      const filterBtns = document.querySelectorAll('.filterbar button');
      const galItems = document.querySelectorAll('.gal-item');
      filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          filterBtns.forEach((b) => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          const f = btn.dataset.filter;
          galItems.forEach((item) => {
            const show = f === 'all' || item.dataset.cat === f;
            if (show) {
              item.style.display = '';
              gsap.fromTo(item, { opacity: 0, scale: 0.92, y: 24 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power3.out' });
            } else {
              gsap.to(item, { opacity: 0, scale: 0.92, duration: 0.3, onComplete: () => { item.style.display = 'none'; } });
            }
          });
          setTimeout(() => ScrollTrigger.refresh(), 700);
        });
      });

      const lightbox = document.querySelector('.lightbox');
      let closeLb = null;
      if (lightbox) {
        const lbArt = lightbox.querySelector('.lightbox__art');
        const lbCap = lightbox.querySelector('.lightbox__cap');
        galItems.forEach((item) => {
          item.addEventListener('click', () => {
            const artEl = item.querySelector('.art');
            const cap = item.querySelector('figcaption b');
            const bg = artEl ? getComputedStyle(artEl).backgroundImage : '';
            lbArt.className = 'lightbox__art swatch';
            lbArt.style.backgroundImage = bg && bg !== 'none' ? bg : '';
            lbCap.textContent = cap ? cap.textContent : '';
            lenis && lenis.stop();
            gsap.timeline()
              .set(lightbox, { visibility: 'visible' })
              .to(lightbox, { opacity: 1, duration: 0.4 })
              .fromTo(lbArt, { scale: 0.85, y: 40 }, { scale: 1, y: 0, duration: 0.7, ease: 'expo.out' }, '-=0.2');
          });
        });
        closeLb = () => {
          lenis && lenis.start();
          gsap.timeline().to(lightbox, { opacity: 0, duration: 0.35 }).set(lightbox, { visibility: 'hidden' });
        };
        lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLb(); });
        const closeBtn = lightbox.querySelector('.lightbox__close');
        closeBtn && closeBtn.addEventListener('click', closeLb);
      }
      const onKey = (e) => { if (e.key === 'Escape' && closeLb) closeLb(); };
      window.addEventListener('keydown', onKey);

      /* -------- SSS akordiyon -------- */
      document.querySelectorAll('.faq-item').forEach((item) => {
        const btn = item.querySelector('button');
        const body = item.querySelector('.faq-body');
        btn.addEventListener('click', () => {
          const open = item.classList.contains('open');
          document.querySelectorAll('.faq-item.open').forEach((o) => {
            o.classList.remove('open');
            o.querySelector('.faq-body').style.maxHeight = '0px';
          });
          if (!open) {
            item.classList.add('open');
            body.style.maxHeight = body.scrollHeight + 'px';
          }
          setTimeout(() => ScrollTrigger.refresh(), 550);
        });
      });

      /* -------- Randevu formu -------- */
      const form = document.querySelector('.contact-form');
      if (form) {
        const select = form.querySelector('select');
        select && select.addEventListener('change', () => {
          select.classList.toggle('has-value', !!select.value);
        });
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = (document.getElementById('name') || {}).value || '';
          const svc = (document.getElementById('service') || {}).value || '';
          const when = (document.getElementById('when') || {}).value || '';
          const note = (document.getElementById('msg') || {}).value || '';
          const msg =
            'Merhaba! Ben ' + name + '. ' + svc + ' için randevu almak istiyorum.' +
            (when ? ' Tercih ettiğim zaman: ' + when + '.' : '') +
            (note ? ' Not: ' + note : '');
          if (navigator.clipboard) navigator.clipboard.writeText(msg).catch(() => {});
          const ok = form.querySelector('.form-ok');
          if (ok) {
            ok.classList.add('show');
            gsap.fromTo(ok, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
            setTimeout(() => ok.classList.remove('show'), 6000);
          }
          setTimeout(() => window.open('https://www.instagram.com/mithranailsbar/', '_blank'), 900);
          form.reset();
          select && select.classList.remove('has-value');
        });
      }

      /* -------- Hizmetler: aktif kategori + yumuşak kaydırma -------- */
      const svcNavLinks = document.querySelectorAll('.svc-side nav a');
      if (svcNavLinks.length) {
        svcNavLinks.forEach((a) => {
          a.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
              if (lenis) lenis.scrollTo(target, { offset: -110 });
              else target.scrollIntoView({ behavior: 'smooth' });
            }
          });
        });
        document.querySelectorAll('.svc-cat').forEach((cat) => {
          ScrollTrigger.create({
            trigger: cat, start: 'top 40%', end: 'bottom 40%',
            onToggle: (self) => {
              if (self.isActive) {
                svcNavLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + cat.id));
              }
            },
          });
        });
      }

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }
      ScrollTrigger.refresh();

      cleanup = () => {
        window.removeEventListener('keydown', onKey);
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    })();

    return () => {
      killed = true;
      cleanup();
    };
  }, [pathname]);

  return null;
}
