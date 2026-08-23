import { content, locales, defaultLocale } from "../../data/content";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import ScrollReveal from "../../components/ScrollReveal";

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
      <SiteHeader lang={lang} brand={c.brand} brandEn={c.brandEn} nav={c.nav} locales={locales} />

      <main>{children}</main>
      <ScrollReveal />

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {c.brandEn} {lang !== "en" && c.brand} · {c.footerNote}</p>
        </div>
      </footer>
    </>
  );
}
