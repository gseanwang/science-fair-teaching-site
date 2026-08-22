import { content, locales } from "../../data/content";
import { notFound } from "next/navigation";
import Faq from "../../components/Faq";
import Slides from "../../components/Slides";
import ContactForm from "../../components/ContactForm";

export function generateStaticParams() {
  return locales.map((l) => ({ lang: l.code }));
}

export default async function HomePage({ params }) {
  const { lang } = await params;
  const c = content[lang];
  if (!c) notFound();

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero">
        <span className="hero-badge">{c.hero.badge}</span>
        <h1 className="hero-title-en">{c.hero.titleMain}</h1>
        {c.hero.titleSub && <p className="hero-title-zh">{c.hero.titleSub}</p>}
        <p className="hero-sub">{c.hero.subtitle}</p>
        <div className="hero-cta">
          <a className="btn btn-primary btn-lg" href={`/${lang}${c.hero.ctaHref}`}>{c.hero.ctaText}</a>
          <a className="btn btn-ghost btn-lg" href={`/${lang}${c.hero.secondaryHref}`}>{c.hero.secondaryText}</a>
        </div>
      </section>

      {/* ===================== 三大特色 ===================== */}
      <section className="section">
        <div className="highlight-grid">
          {c.highlights.map((h, i) => (
            <div className="highlight-card" key={i}>
              <div className="highlight-icon">{h.icon}</div>
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

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

      {/* ===================== 實際上課內容 ===================== */}
      <Slides section={c.slidesSection} topics={c.topics} />

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

      {/* ===================== 費用方案 ===================== */}
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

      {/* ===================== 常見問答 ===================== */}
      <section className="section" id="faq">
        <h2 className="section-title">{c.faqTitle}</h2>
        <Faq items={c.faq} />
      </section>

      {/* ===================== 諮詢表單 ===================== */}
      <section className="cta-band" id="contact">
        <h2>{c.contact.heading}</h2>
        <p>{c.contact.subheading}</p>
        <div className="form-wrap">
          <ContactForm contact={c.contact} />
        </div>
      </section>
    </>
  );
}
