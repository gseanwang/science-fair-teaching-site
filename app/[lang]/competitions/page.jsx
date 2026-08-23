import { content, locales } from "../../../data/content";
import { competitions, competitionCats, ui } from "../../../data/competitions";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((l) => ({ lang: l.code }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const u = ui[lang];
  if (!u) return {};
  return { title: `${u.title} | ${content[lang]?.brandEn || "World Science Academy"}` };
}

export default async function CompetitionsPage({ params }) {
  const { lang } = await params;
  const c = content[lang];
  const u = ui[lang];
  if (!c || !u) notFound();

  return (
    <>
      <section className="hero" style={{ paddingBottom: 8 }}>
        <span className="hero-badge">🗓 {c.nav.program}</span>
        <h1 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: "2.4rem", margin: "10px 0 12px", letterSpacing: "-0.5px" }}>
          {u.title}
        </h1>
        <p className="hero-sub">{u.desc}</p>
        <p style={{ maxWidth: 640, margin: "0 auto", color: "var(--muted)", fontSize: "0.9rem" }}>
          ⚠️ {u.disclaimer}
        </p>
      </section>

      {competitionCats.map((cat) => {
        const items = competitions.filter((x) => x.cat === cat);
        if (items.length === 0) return null;
        return (
          <section className="section" key={cat} style={{ paddingTop: 24 }}>
            <h2 className="section-title" style={{ textAlign: "left" }}>{u.cats[cat]}</h2>
            <div className="comp-grid">
              {items.map((x) => (
                <div className="comp-card" key={x.id}>
                  <div className="comp-head">
                    <h3>{x.name}</h3>
                    <span className="comp-grades">{u.who}:&nbsp;{x.grades}</span>
                  </div>
                  <p className="comp-blurb">{x.blurb[lang]}</p>
                  <div className="comp-when">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path></svg>
                    <span>{u.when}:&nbsp;{x.when[lang]}</span>
                  </div>
                  <a className="comp-link" href={x.url} target="_blank" rel="noopener noreferrer">{u.link}</a>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <section className="cta-band">
        <h2>{u.ctaTitle}</h2>
        <a className="btn btn-lg" href={`/${lang}#contact`} style={{ background: "#fff", color: "var(--brand-dark)", marginTop: 8 }}>
          {u.ctaText}
        </a>
      </section>
    </>
  );
}
