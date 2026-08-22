import LessonGallery from "../components/LessonGallery";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>科展研究方法教室</h1>
        <p>
          從選題、實驗設計、資料分析到報告發表 ——
          一步步帶你把一個好奇心變成一份站得住腳的科展作品。
        </p>
      </section>

      {/* 可篩選的課程卡片牆(互動元件) */}
      <LessonGallery />

      <section className="about" id="about">
        <h2>關於這個課程</h2>
        <p style={{ color: "var(--muted)" }}>
          這是一個示範用的教學網站起始模板。所有課程內容都放在{" "}
          <code>data/lessons.js</code>,你只要編輯那個檔案就能新增或修改課程,
          網站會自動更新。想換主題(例如改成程式教學、語文課),
          把課程內容整包換掉即可。
        </p>
      </section>
    </>
  );
}
