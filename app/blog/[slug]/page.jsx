import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POSTS, getPost } from '@/lib/posts';

const SITE = 'https://www.mithranailsbar.com';

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `${SITE}/blog/${post.slug}`,
      images: [{ url: post.cover }],
    },
  };
}

export default function Post({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `${SITE}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Mithra Nails Bar' },
    publisher: {
      '@type': 'Organization',
      name: 'Mithra Nails Bar',
      logo: { '@type': 'ImageObject', url: `${SITE}/logo1.PNG` },
    },
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }} />
      <section className="page-hero" style={{ paddingBottom: '1.5rem' }}>
        <div className="page-hero__glow" data-speed="2" />
        <div className="container post">
          <span className="label" data-intro>Blog</span>
          <h1 className="h-lg split-lines" style={{ marginTop: '1rem' }}>{post.title}</h1>
          <p className="lead" data-intro style={{ marginTop: '1rem' }}>
            {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })} · Mithra Nails Bar
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <article className="post">
            <div className="post__cover" style={{ backgroundImage: `url(${post.cover})` }} />
            {post.body.map((b, i) => {
              if (b.h) return <h2 key={i}>{b.h}</h2>;
              if (b.p) return <p key={i}>{b.p}</p>;
              if (b.ul) return <ul key={i}>{b.ul.map((li, j) => <li key={j}>{li}</li>)}</ul>;
              if (b.note) return <p key={i} className="post__note">{b.note}</p>;
              return null;
            })}
            <div className="post__cta">
              <Link href="/iletisim" className="btn btn--solid" data-magnetic><i /> Randevu Al</Link>
              <Link href="/blog" className="btn" data-magnetic><i /> Tüm Yazılar</Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
