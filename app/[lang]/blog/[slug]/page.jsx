import { content } from "../../../../data/content";
import { blogUi } from "../../../../data/blogUi";
import { getAllPosts, getPost } from "../../../../lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ lang: p.lang, slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const p = getPost(lang, slug);
  const c = content[lang];
  if (!p || !c) return {};
  return {
    title: `${p.title} | ${c.brandEn}`,
    description: p.excerpt || blogUi[lang]?.desc,
    alternates: { canonical: `/${lang}/blog/${slug}/` },
    openGraph: {
      title: p.title,
      description: p.excerpt || "",
      url: `https://www.worldscienceacademy.org/${lang}/blog/${slug}/`,
      type: "article",
    },
  };
}

export default async function Post({ params }) {
  const { lang, slug } = await params;
  const c = content[lang];
  const u = blogUi[lang];
  const p = getPost(lang, slug);
  if (!c || !u || !p) notFound();

  return (
    <article className="section post">
      <a className="post-back" href={`/${lang}/blog/`}>← {u.backToBlog}</a>
      <div className="post-meta">
        {p.date}
        {p.readMins ? ` · ${p.readMins} ${u.min}` : ""}
      </div>
      <h1 className="post-title">{p.title}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: p.html }} />
      <div className="post-cta">
        <p>{u.ctaText}</p>
        <a className="btn btn-primary" href={`/${lang}#contact`}>{u.ctaBtn}</a>
      </div>
    </article>
  );
}
