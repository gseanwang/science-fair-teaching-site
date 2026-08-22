"use client";

import { useState } from "react";

// 「實際上課內容」多主題展示。section = { title, desc };topics = 陣列。
export default function Slides({ section, topics }) {
  const [active, setActive] = useState(0);
  const t = topics[active];

  return (
    <section className="section" id="slides">
      <h2 className="section-title">{section.title}</h2>
      <p className="section-lead">{section.desc}</p>

      <div className="topic-tabs">
        {topics.map((tp, i) => (
          <button
            key={tp.id}
            className={"topic-tab" + (i === active ? " active" : "")}
            onClick={() => setActive(i)}
          >
            <span className="topic-tab-emoji">{tp.emoji}</span>
            {tp.label}
          </button>
        ))}
      </div>

      <div className="topic-panel">
        <h3 className="topic-panel-title">{t.emoji} {t.label}</h3>
        <p className="topic-tagline">{t.tagline}</p>

        {t.ready ? (
          <div className="slides-wrap">
            <iframe className="slides-frame" src={t.file} title={t.label} />
            <div className="slides-actions">
              <a className="btn btn-primary" href={t.file} target="_blank" rel="noopener noreferrer">{section.openLabel}</a>
              <a className="btn btn-ghost" href={t.file} download>{section.downloadLabel}</a>
            </div>
          </div>
        ) : (
          <div className="topic-placeholder">
            <div className="slides-placeholder-badge">📊 {section.comingSoon}</div>
            <p className="topic-placeholder-lead">{section.deepDiveLead}</p>
            <ul className="slides-topics">
              {t.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
