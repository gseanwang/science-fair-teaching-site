"use client";

import { useState } from "react";
import { site } from "../data/site";

// 「實際上課內容」多主題展示。
// 上方一排主題頁籤,點選即切換;每個主題各自可以:
//   - ready === true :顯示可翻閱的 PDF 簡報
//   - ready === false:顯示「即將上線」占位 + 該主題重點
export default function Slides() {
  const { slidesSection: s, topics } = site;
  const [active, setActive] = useState(0);
  const t = topics[active];

  return (
    <section className="section" id="slides">
      <h2 className="section-title">{s.title}</h2>
      <p className="section-lead">{s.desc}</p>

      {/* 主題頁籤 */}
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

      {/* 選中的主題內容 */}
      <div className="topic-panel">
        <h3 className="topic-panel-title">
          {t.emoji} {t.label}
        </h3>
        <p className="topic-tagline">{t.tagline}</p>

        {t.ready ? (
          <div className="slides-wrap">
            <iframe className="slides-frame" src={t.file} title={t.label + " 簡報"} />
            <div className="slides-actions">
              <a className="btn btn-primary" href={t.file} target="_blank" rel="noopener noreferrer">
                全螢幕開啟簡報 →
              </a>
              <a className="btn btn-ghost" href={t.file} download>
                下載 PDF
              </a>
            </div>
          </div>
        ) : (
          <div className="topic-placeholder">
            <div className="slides-placeholder-badge">📊 簡報即將上線</div>
            <p className="topic-placeholder-lead">這個主題的課堂會帶學生深入:</p>
            <ul className="slides-topics">
              {t.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
