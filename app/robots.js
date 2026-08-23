// 產生 /robots.txt —— 允許所有搜尋引擎爬取,並指向 sitemap。
export const dynamic = "force-static";

const SITE = "https://www.worldscienceacademy.org";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
