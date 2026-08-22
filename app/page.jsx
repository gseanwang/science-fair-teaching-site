import { site } from "../data/site";
import Faq from "../components/Faq";
import Slides from "../components/Slides";

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero">
        <span className="hero-badge">{site.hero.badge}</span>
        <h1>{site.hero.title}</h1>
        <p className="hero-sub">{site.hero.subtitle}</p>
        <p className="hero-sub-en">{site.hero.subtitleEn}</p>
        <div className="hero-cta">
          <a className="btn btn-primary btn-lg" href={site.hero.ctaHref}>
            {site.hero.ctaText}
          </a>
          <a className="btn btn-ghost btn-lg" href={site.hero.secondaryHref}>
            {site.hero.secondaryText}
          </a>
        </div>
      </section>

      {/* ===================== 三大特色 ===================== */}
      <section className="section">
        <div className="highlight-grid">
          {site.highlights.map((h, i) => (
            <div className="highlight-card" key={i}>
              <div className="highlight-icon">{h.icon}</div>
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== 課程規格 + 學生將獲得 ===================== */}
      <section className="section" id="course">
        <h2 className="section-title">課程架構</h2>
        <div className="two-col">
          <div className="panel">
            <h3>課程規格</h3>
            <ul className="check-list plain">
              {site.specs.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="panel panel-accent">
            <h3>學生將獲得</h3>
            <ul className="check-list">
              {site.deliverables.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== 五大學習階段 ===================== */}
      <section className="section">
        <h2 className="section-title">五大學習階段</h2>
        <p className="section-lead">
          課程以 16 週為基礎設計,實際進度依學生狀況與科展截止日期彈性調整。
        </p>
        <div className="phase-row">
          {site.phases.map((p, i) => (
            <div className="phase" key={i}>
              <div className="phase-num">{i + 1}</div>
              <div className="phase-weeks">{p.weeks}</div>
              <div className="phase-zh">{p.zh}</div>
              <div className="phase-en">{p.en}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== 實際上課簡報 ===================== */}
      <Slides />

      {/* ===================== 費用方案 ===================== */}
      <section className="section" id="pricing">
        <h2 className="section-title">費用方案</h2>
        <div className="price-grid">
          {site.pricing.map((p, i) => (
            <div className={"price-card" + (p.highlight ? " featured" : "")} key={i}>
              {p.highlight && <div className="price-ribbon">最受歡迎</div>}
              <h3>{p.name}</h3>
              <div className="price-en">{p.en}</div>
              <div className="price-amount">{p.price}</div>
              <div className="price-unit">{p.unit}</div>
              <div className="price-perclass">{p.perClass}</div>
              <ul className="check-list">
                {p.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <a className="btn btn-primary block" href="#contact">
                我要報名這個方案
              </a>
            </div>
          ))}
        </div>
        <p className="price-note">💡 {site.pricingNote}</p>
      </section>

      {/* ===================== 為什麼選擇我們 ===================== */}
      <section className="section" id="why">
        <h2 className="section-title">為什麼選擇我們?</h2>
        <div className="why-grid">
          {site.whyUs.map((w, i) => (
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

      {/* ===================== 常見問答 ===================== */}
      <section className="section" id="faq">
        <h2 className="section-title">常見問答</h2>
        <Faq />
      </section>

      {/* ===================== 聯絡 / CTA ===================== */}
      <section className="cta-band" id="contact">
        <h2>{site.contact.heading}</h2>
        <p>{site.contact.subheading}</p>
        <div className="contact-lines">
          <div>📧 {site.contact.email}</div>
          <div>📱 {site.contact.line}</div>
          <div>☎️ {site.contact.phone}</div>
        </div>
      </section>
    </>
  );
}
