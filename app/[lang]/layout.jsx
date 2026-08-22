import { content, locales, defaultLocale } from "../../data/content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((l) => ({ lang: l.code }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const c = content[lang];
  if (!c) return {};
  return {
    title: `${c.brandEn}｜${c.hero.titleSub || c.hero.titleMain}`,
  };
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const c = content[lang];
  if (!c) notFound();

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href={`/${lang}`} className="logo">
            🔬 <span className="logo-en">{c.brandEn}</span>
            {lang !== "en" && <span className="logo-zh">{c.brand}</span>}
          </a>
          <nav className="nav">
            <a href={`/${lang}#course`}>{c.nav.program}</a>
            <a href={`/${lang}#slides`}>{c.nav.lessons}</a>
            <a href={`/${lang}/faculty`}>{c.nav.faculty}</a>
            <a href={`/${lang}#pricing`}>{c.nav.pricing}</a>
            <a href={`/${lang}#faq`}>{c.nav.faq}</a>
            <a href={`/${lang}#contact`} className="nav-cta">{c.nav.contact}</a>
            <span className="lang-switch">
              {locales.map((l) => (
                <a
                  key={l.code}
                  href={`/${l.code}`}
                  className={"lang-opt" + (l.code === lang ? " active" : "")}
                >
                  {l.label}
                </a>
              ))}
            </span>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {c.brandEn} {lang !== "en" && c.brand} · {c.footerNote}</p>
        </div>
      </footer>
    </>
  );
}
