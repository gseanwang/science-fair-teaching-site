import { content, locales } from "../../../data/content";
import { blogUi } from "../../../data/blogUi";
import { getPosts } from "../../../lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((l) => ({ lang: l.code }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const u = blogUi[lang];
  const c = content[lang];
  if (!u || !c) return {};
  return {
    title: `${u.title} | ${c.brandEn}`,
    description: u.desc,
    alternates: { canonical: `/${lang}/blog/` },
  };
}

export default async function BlogIndex({ params }) {
  const { lang } = await params;
  const c = content[lang];
  const u = blogUi[lang];
  if (!c || !u) notFound();
  const posts = getPosts(lang);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-badge">✍️ {c.nav.blog}</span>
          <h1 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: "2.4rem", margin: "10px 0 12px", letterSpacing: "-0.5px" }}>
            {u.title}
          </h1>
          <p className="hero-sub">{u.desc}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 28 }}>
        {posts.length === 0 ? (
          <p style={{ textAlign: "center", color: "var(--muted)" }}>{u.empty}</p>
        ) : (
          <div className="blog-list">
            {posts.map((p) => (
              <a key={p.slug} className="post-card" href={`/${lang}/blog/${p.slug}/`}>
                <div className="post-card-meta">
                  {p.date}
                  {p.readMins ? ` · ${p.readMins} ${u.min}` : ""}
                </div>
                <h3>{p.title}</h3>
                {p.excerpt && <p>{p.excerpt}</p>}
                <span className="post-card-more">{u.readMore} →</span>
              </a>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
