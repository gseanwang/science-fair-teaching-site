"use client"; // 這一行代表:這個元件會在瀏覽器互動,篩選功能就靠它

import { useState } from "react";
import { categories, lessons } from "../data/lessons";

export default function LessonGallery() {
  // active 記住目前選了哪個分類,預設是 "all"
  const [active, setActive] = useState("all");

  // 依照選到的分類,篩出要顯示的課程
  const visible =
    active === "all"
      ? lessons
      : lessons.filter((lesson) => lesson.category === active);

  // 把分類 id 轉成中文標籤,卡片上要用
  const labelOf = (id) =>
    categories.find((c) => c.id === id)?.label ?? id;

  return (
    <>
      {/* 分類篩選按鈕列 */}
      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={"filter-btn" + (active === cat.id ? " active" : "")}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 課程卡片牆 */}
      <div className="grid">
        {visible.map((lesson) => (
          <article className="card" key={lesson.slug}>
            <div className="card-tags">
              <span className="tag">{labelOf(lesson.category)}</span>
              <span className="tag level">{lesson.level}</span>
            </div>
            <h3>{lesson.title}</h3>
            <p>{lesson.summary}</p>
            <div className="card-foot">
              <span>⏱ 約 {lesson.minutes} 分鐘</span>
              <a className="card-link" href={`/lessons/${lesson.slug}`}>
                開始上課 →
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
