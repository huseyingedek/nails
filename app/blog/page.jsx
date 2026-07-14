import Link from 'next/link';
import { POSTS } from '@/lib/posts';

export const metadata = {
  title: 'Blog — Tırnak Bakımı, Fiyatlar ve Trendler',
  description:
    "Adana & Yüreğir tırnak rehberi: protez tırnak fiyatları, kalıcı oje ve jel farkı, bakım ipuçları ve 2026 nail art trendleri. Mithra Nails Bar blog.",
  alternates: { canonical: '/blog' },
};

export default function Blog() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__glow" data-speed="2" />
        <span className="sparkle" style={{ top: '34%', right: '18%' }}>✦</span>
        <span className="sparkle" style={{ top: '58%', right: '32%' }}>✦</span>
        <div className="container">
          <span className="label" data-intro>Blog</span>
          <h1 className="h-xl split-lines">
            Tırnak <em className="it gold">rehberi</em><br />
          </h1>
          <p className="lead" data-intro>
            Protez tırnak fiyatları, kalıcı oje ve jel farkı, bakım ipuçları ve trendler — Yüreğir &amp; Adana&apos;dan.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="blog-grid">
            {POSTS.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card" data-reveal>
                <div className="blog-card__cover" style={{ backgroundImage: `url(${p.cover})` }} />
                <div className="blog-card__body">
                  <time>{new Date(p.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
