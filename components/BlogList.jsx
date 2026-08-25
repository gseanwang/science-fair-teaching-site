"use client";

import { useState } from "react";

export default function BlogList({ posts, lang, ui, categories, catAll }) {
  const [active, setActive] = useState("all");

  const present = [];
  for (const p of posts) if (p.category && !present.includes(p.category)) present.push(p.category);

  const shown = active === "all" ? posts : posts.filter((p) => p.category === active);
  const catLabel = (key) => (categories[key] && categories[key][lang]) || key;

  return (
    <>
      {present.length > 1 && (
        <div className="blog-cats">
          <button className={"blog-cat" + (active === "all" ? " active" : "")} onClick={() => setActive("all")}>
            {catAll}
          </button>
          {present.map((key) => (
            <button key={key} className={"blog-cat" + (active === key ? " active" : "")} onClick={() => setActive(key)}>
              {catLabel(key)}
            </button>
          ))}
        </div>
      )}

      <div className="blog-list">
        {shown.map((p) => (
          <a key={p.slug} className="post-card" href={`/${lang}/blog/${p.slug}/`}>
            <div className="post-card-meta">
              {p.category && <span className="post-cat-badge">{catLabel(p.category)}</span>}
              {p.date}
              {p.readMins ? ` · ${p.readMins} ${ui.min}` : ""}
            </div>
            <h3>{p.title}</h3>
            {p.excerpt && <p>{p.excerpt}</p>}
            <span className="post-card-more">{ui.readMore} →</span>
          </a>
        ))}
      </div>
    </>
  );
}
