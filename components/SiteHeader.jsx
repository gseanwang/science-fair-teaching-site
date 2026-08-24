"use client";

import { useState } from "react";

export default function SiteHeader({ lang, brand, brandEn, nav, locales }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const links = [
    { href: `/${lang}#course`, label: nav.program },
    { href: `/${lang}#slides`, label: nav.lessons },
    { href: `/${lang}/faculty`, label: nav.faculty },
    { href: `/${lang}/competitions`, label: nav.competitions },
    { href: `/${lang}/blog`, label: nav.blog },
    { href: `/${lang}#pricing`, label: nav.pricing },
    { href: `/${lang}#faq`, label: nav.faq },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href={`/${lang}`} className="logo" onClick={close}>
          <img className="logo-mark" src="/icon.svg" alt="" width="30" height="30" />
          <span className="logo-en">{brandEn}</span>
          {lang !== "en" && <span className="logo-zh">{brand}</span>}
        </a>

        {/* 桌面版導覽 */}
        <nav className="nav nav-desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href={`/${lang}#contact`} className="nav-cta">{nav.contact}</a>
          <span className="lang-switch">
            {locales.map((l) => (
              <a key={l.code} href={`/${l.code}`} className={"lang-opt" + (l.code === lang ? " active" : "")}>
                {l.label}
              </a>
            ))}
          </span>
        </nav>

        {/* 手機版漢堡鈕 */}
        <button
          className="nav-toggle"
          aria-label="menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* 手機版展開選單 */}
      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a href={`/${lang}#contact`} className="mobile-cta" onClick={close}>{nav.contact}</a>
          <div className="mobile-lang">
            {locales.map((l) => (
              <a key={l.code} href={`/${l.code}`} className={"lang-opt" + (l.code === lang ? " active" : "")}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
