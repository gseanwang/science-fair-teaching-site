// 產生 /sitemap.xml —— 列出三語 × 各頁面,並附多語 hreflang,幫 Google 收錄。
import { locales } from "../data/content";
import { getAllPosts } from "../lib/posts";

export const dynamic = "force-static";

const SITE = "https://www.worldscienceacademy.org";
const PAGES = ["", "faculty", "competitions", "blog"]; // 首頁、師資、科展資訊、部落格

export default function sitemap() {
  const now = new Date();
  const urls = [];
  for (const l of locales) {
    for (const p of PAGES) {
      const path = p ? `/${l.code}/${p}/` : `/${l.code}/`;
      urls.push({
        url: `${SITE}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: p === "" ? 1.0 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((x) => [x.htmlLang, `${SITE}${p ? `/${x.code}/${p}/` : `/${x.code}/`}`])
          ),
        },
      });
    }
  }
  // 個別文章
  for (const post of getAllPosts()) {
    urls.push({
      url: `${SITE}/${post.lang}/blog/${post.slug}/`,
      lastModified: post.date ? new Date(post.date) : now,
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }
  return urls;
}
