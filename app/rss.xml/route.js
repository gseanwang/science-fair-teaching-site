// /rss.xml —— 部落格訂閱源(簡體為主)。電子報平台可用它「RSS 轉 email」,
// 一發新文章就自動寄給訂閱者。之後要英文版可再加 /en/rss.xml。
import { getPosts } from "../../lib/posts";

export const dynamic = "force-static";

const SITE = "https://www.worldscienceacademy.org";

function esc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function GET() {
  const posts = getPosts("cn");
  const items = posts
    .map(
      (p) => `  <item>
    <title>${esc(p.title)}</title>
    <link>${SITE}/cn/blog/${p.slug}/</link>
    <guid>${SITE}/cn/blog/${p.slug}/</guid>
    <pubDate>${new Date(p.date || Date.now()).toUTCString()}</pubDate>
    <description>${esc(p.excerpt)}</description>
  </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>世界科展学院 World Science Academy · 博客</title>
  <link>${SITE}/cn/blog/</link>
  <description>科展研究、升学趋势与 AI 时代的学习观察。</description>
  <language>zh-CN</language>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
