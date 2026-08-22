import { lessons, categories } from "../../../data/lessons";
import { notFound } from "next/navigation";

// 讓 Next.js 事先知道有哪些課程頁要產生(每個 slug 一頁)
export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

// 每頁的瀏覽器分頁標題
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const lesson = lessons.find((l) => l.slug === slug);
  return { title: lesson ? `${lesson.title}｜科展研究方法教室` : "找不到課程" };
}

export default async function LessonPage({ params }) {
  const { slug } = await params;
  const lesson = lessons.find((l) => l.slug === slug);

  // 找不到這堂課就顯示 404
  if (!lesson) notFound();

  const categoryLabel =
    categories.find((c) => c.id === lesson.category)?.label ?? lesson.category;

  return (
    <article className="lesson">
      <a className="back" href="/">← 回課程列表</a>
      <h1>{lesson.title}</h1>
      <p className="meta">
        {categoryLabel} · {lesson.level} · 約 {lesson.minutes} 分鐘
      </p>

      {lesson.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </article>
  );
}
