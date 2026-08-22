"use client";

import { useEffect } from "react";
import { defaultLocale } from "../data/content";

// 靜態匯出下,根目錄用瀏覽器端導向到預設語言(简体)
export default function RootRedirect() {
  useEffect(() => {
    window.location.replace(`/${defaultLocale}/`);
  }, []);
  return (
    <main style={{ padding: 40, textAlign: "center", fontFamily: "system-ui" }}>
      <p>正在前往 World Science Academy…</p>
      <p>
        <a href={`/${defaultLocale}/`}>点此进入 / 點此進入 / Enter</a>
      </p>
    </main>
  );
}
