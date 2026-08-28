import { content, locales } from "../../../data/content";
import { blogUi, categories, catAll } from "../../../data/blogUi";
import { getPosts } from "../../../lib/posts";
import BlogList from "../../../components/BlogList";
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
  const posts = getPosts(lang).map((p) => ({
    slug: p.slug, title: p.title, excerpt: p.excerpt || "",
    date: p.date || "", readMins: p.readMins || "", category: p.category || "",
    cover: p.cover || "", coverPos: p.coverPos || "",
  }));

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
          <BlogList
            posts={posts}
            lang={lang}
            ui={{ readMore: u.readMore, min: u.min }}
            categories={categories}
            catAll={catAll[lang]}
          />
        )}
      </section>
    </>
  );
}
