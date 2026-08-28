import { content } from "../../../../data/content";
import { blogUi, listen, authors, defaultAuthor } from "../../../../data/blogUi";
import { getAllPosts, getPost } from "../../../../lib/posts";
import Subscribe from "../../../../components/Subscribe";
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
  const a = authors[p.author] || authors[defaultAuthor];

  return (
    <article className="section post">
      <a className="post-back" href={`/${lang}/blog/`}>← {u.backToBlog}</a>
      <div className="post-meta">
        {p.date}
        {p.readMins ? ` · ${p.readMins} ${u.min}` : ""}
      </div>
      <h1 className="post-title">{p.title}</h1>
      <a className="post-author" href={`/${lang}/faculty/`}>
        {a.photo
          ? <img className="post-author-av post-author-photo" src={a.photo} alt={a.name} />
          : <span className="post-author-av">{a.initials}</span>}
        <div>
          <div className="post-author-name">{a.name}</div>
          <div className="post-author-role">{a.role[lang]}</div>
        </div>
      </a>
      {p.cover && <img className="post-hero-img" src={p.cover} alt="" />}
      <div className="prose" dangerouslySetInnerHTML={{ __html: p.html }} />

      <a className="post-listen" href={listen.url} target="_blank" rel="noopener noreferrer">
        <div className="post-listen-icon">🎧</div>
        <div className="post-listen-body">
          <div className="post-listen-tag">{listen.tag[lang]} · {listen.hint[lang]}</div>
          <div className="post-listen-name">{listen.name}</div>
          <div className="post-listen-ep">{listen.ep}</div>
        </div>
        <div className="post-listen-arrow">→</div>
      </a>

      <div className="post-subscribe">
        <h3>{u.subTitle}</h3>
        <p>{u.subDesc}</p>
        <Subscribe />
      </div>

      <div className="post-cta">
        <p>{u.ctaText}</p>
        <a className="btn btn-primary" href={`/${lang}#contact`}>{u.ctaBtn}</a>
      </div>
    </article>
  );
}
