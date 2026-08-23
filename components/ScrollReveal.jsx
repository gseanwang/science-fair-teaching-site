"use client";

import { useEffect } from "react";

// 滾動進入畫面時,讓區塊/卡片淡入上升。漸進增強:不支援或關 JS 時內容照常顯示。
export default function ScrollReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sel =
      ".highlight-card, .why-card, .price-card, .phase, .fm-group, .topic-panel, .faq-item, .section-title, .section-lead, .form-wrap, .fm-awards";
    const els = Array.from(document.querySelectorAll(sel));
    const vh = window.innerHeight;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    let i = 0;
    els.forEach((el) => {
      // 只對「還在畫面下方」的元素做動畫,避免首屏內容閃一下
      if (el.getBoundingClientRect().top > vh * 0.85) {
        el.classList.add("reveal-init");
        // 同一批相鄰元素給一點錯開的延遲
        el.style.transitionDelay = (i % 4) * 60 + "ms";
        i++;
        io.observe(el);
      }
    });
  }, []);
  return null;
}
