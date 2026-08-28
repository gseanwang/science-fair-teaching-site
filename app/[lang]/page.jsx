import { content, locales } from "../../data/content";
import { preLaunch, preLaunchUi } from "../../data/prelaunch";
import { blogUi } from "../../data/blogUi";
import { getPosts } from "../../lib/posts";
import { notFound } from "next/navigation";
import Faq from "../../components/Faq";
import Slides from "../../components/Slides";
import ContactForm from "../../components/ContactForm";
import Subscribe from "../../components/Subscribe";

export function generateStaticParams() {
  return locales.map((l) => ({ lang: l.code }));
}

// 乾淨的線條圖示(取代 emoji)
const HL_ICONS = {
  globe: (
    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#2F6DF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>
  ),
  paper: (
    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#2F6DF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2h8l4 4v16H6z" /><path d="M14 2v4h4" /><path d="M9 12h6" /><path d="M9 16h6" /></svg>
  ),
  present: (
    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#2F6DF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h18" /><path d="M4 4v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4" /><path d="M8 11l2.5-2.5L13 11l3-3" /><path d="M12 15v4" /><path d="M9 21h6" /></svg>
  ),
  ai: (
    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#2F6DF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z" /><path d="M18.5 14l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z" /></svg>
  ),
};

export default async function HomePage({ params }) {
  const { lang } = await params;
  const c = content[lang];
  if (!c) notFound();
  const pl = preLaunchUi[lang];
  const bu = blogUi[lang];
  const latestPosts = getPosts(lang).slice(0, 3);

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero hero-photo">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">{c.hero.badge}</span>
          <h1 className="hero-title-en">{c.hero.titleMain}</h1>
          {c.hero.titleSub && <p className="hero-title-zh">{c.hero.titleSub}</p>}
          <p className="hero-sub">{c.hero.subtitle}</p>
          {preLaunch && <span className="hero-coming-soon">{pl.comingSoon}</span>}
          <div className="hero-cta">
            <a className="btn btn-primary btn-lg" href={`/${lang}#contact`}>{preLaunch ? pl.cta : c.hero.ctaText}</a>
            <a className="btn btn-hero-ghost btn-lg" href={`/${lang}${c.hero.secondaryHref}`}>{c.hero.secondaryText}</a>
          </div>
          {c.hero.aiLine && <p className="hero-ai-line">{c.hero.aiLine}</p>}
        </div>
      </section>

      {/* ===================== 最新文章(一進站先看到 blog) ===================== */}
      {latestPosts.length > 0 && (
        <section className="section">
          <h2 className="section-title">{c.nav.blog}</h2>
          <p className="section-lead">{bu.desc}</p>
          <div className="blog-list">
            {latestPosts.map((p) => (
              <a key={p.slug} className={"post-card" + (p.cover ? " has-cover" : "")} href={`/${lang}/blog/${p.slug}/`}>
                {p.cover && <div className="post-card-cover" style={{ backgroundImage: `url(${p.cover})` }} />}
                <div className="post-card-body">
                  <div className="post-card-meta">{p.date}{p.readMins ? ` · ${p.readMins} ${bu.min}` : ""}</div>
                  <h3>{p.title}</h3>
                  {p.excerpt && <p>{p.excerpt}</p>}
                  <span className="post-card-more">{bu.readMore} →</span>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <a className="btn btn-primary" href={`/${lang}/blog/`}>
              {lang === "en" ? "View all articles →" : lang === "tw" ? "看全部文章 →" : "查看全部文章 →"}
            </a>
          </div>
        </section>
      )}

      {/* ===================== 我們能做什麼(灰底帶,與上下區隔) ===================== */}
      <div className="band">
        <section className="section">
          <h2 className="section-title">{c.highlightsTitle}</h2>
          <p className="section-lead">{c.highlightsLead}</p>
          <div className="highlight-grid">
            {c.highlights.map((h, i) => (
              <div className="highlight-card" key={i}>
                <div className="highlight-icon">{HL_ICONS[h.icon]}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ===================== 實際上課內容 ===================== */}
      <Slides section={c.slidesSection} topics={c.topics} />

      {/* ===================== 課程架構 ===================== */}
      <section className="section" id="course">
        <h2 className="section-title">{c.courseTitle}</h2>
        <div className="two-col">
          <div className="panel">
            <h3>{c.specsTitle}</h3>
            <ul className="check-list plain">
              {c.specs.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
          </div>
          <div className="panel panel-accent">
            <h3>{c.deliverablesTitle}</h3>
            <ul className="check-list">
              {c.deliverables.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== 五大學習階段 ===================== */}
      <section className="section">
        <h2 className="section-title">{c.phasesTitle}</h2>
        <p className="section-lead">{c.phasesLead}</p>
        <div className="phase-row">
          {c.phases.map((p, i) => (
            <div className="phase" key={i}>
              <div className="phase-num">{i + 1}</div>
              <div className="phase-weeks">{p.weeks}</div>
              <div className="phase-zh">{p.main}</div>
              {p.sub && <div className="phase-en">{p.sub}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ===================== 為什麼選擇我們 ===================== */}
      <section className="section" id="why">
        <h2 className="section-title">{c.whyTitle}</h2>
        <div className="why-grid">
          {c.whyUs.map((w, i) => (
            <div className="why-card" key={i}>
              <div className="why-check">✓</div>
              <div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== 費用方案(pre-launch 時隱藏)===================== */}
      {!preLaunch && (
      <section className="section" id="pricing">
        <h2 className="section-title">{c.pricingTitle}</h2>
        <div className="price-grid">
          {c.pricing.map((p, i) => (
            <div className={"price-card" + (p.highlight ? " featured" : "")} key={i}>
              {p.highlight && <div className="price-ribbon">{c.pricingPopular}</div>}
              <h3>{p.name}</h3>
              <div className="price-en">{p.en}</div>
              <div className="price-perclass-big">
                {p.perClass}<span className="price-per-unit">{c.pricingPerUnit}</span>
              </div>
              {p.perClassAlt && <div className="price-perclass-alt">{p.perClassAlt}</div>}
              <div className="price-total-line">
                {p.total} {p.totalUnit} {c.pricingTotalTip}
              </div>
              {p.altPrice && <div className="price-alt">{p.altPrice}</div>}
              {p.save && <div className="price-save">{p.save}</div>}
              <ul className="check-list">
                {p.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <a className="btn btn-primary block" href={`/${lang}#contact`}>{c.pricingCta}</a>
            </div>
          ))}
        </div>
        <p className="price-note">💡 {c.pricingNote}</p>
      </section>
      )}

      {/* ===================== 常見問答 ===================== */}
      <section className="section" id="faq">
        <h2 className="section-title">{c.faqTitle}</h2>
        <Faq items={c.faq} />
      </section>

      {/* ===================== 諮詢表單 ===================== */}
      <section className="cta-band" id="contact">
        <h2>{preLaunch ? pl.heading : c.contact.heading}</h2>
        <p>{preLaunch ? pl.sub : c.contact.subheading}</p>
        <div className="form-wrap">
          {preLaunch ? <Subscribe lang={lang} /> : <ContactForm contact={c.contact} />}
        </div>
      </section>
    </>
  );
}
