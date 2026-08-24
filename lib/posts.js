// 讀取 content/posts/ 的文章(建置時執行)。
// 檔名格式:<slug>.<lang>.md,例如 research-college.cn.md
// frontmatter(檔案最上面用 --- 包住):title / date / excerpt / cover / readMins
import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

const DIR = path.join(process.cwd(), "content/posts");

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const val = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    if (key) data[key] = val;
  }
  return { data, body: m[2] };
}

function parseFile(file) {
  const nameMatch = file.match(/^(.+)\.(cn|tw|en)\.md$/);
  if (!nameMatch) return null;
  const [, slug, lang] = nameMatch;
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, body } = parseFrontmatter(raw);
  return { slug, lang, ...data, html: marked.parse(body) };
}

export function getAllPosts() {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map(parseFile)
    .filter(Boolean)
    .sort((a, b) => (String(a.date) < String(b.date) ? 1 : -1));
}

export function getPosts(lang) {
  return getAllPosts().filter((p) => p.lang === lang);
}

export function getPost(lang, slug) {
  return getAllPosts().find((p) => p.lang === lang && p.slug === slug) || null;
}
