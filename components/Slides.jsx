import { site } from "../data/site";

// 「實際上課內容」區塊。
// - 當 site.slides.ready === true:顯示可翻閱的 PDF 簡報 + 開新分頁/下載按鈕。
// - 當 ready === false:顯示「即將上線」占位卡,並列出簡報涵蓋主題。
export default function Slides() {
  const s = site.slides;

  return (
    <section className="section" id="slides">
      <h2 className="section-title">{s.title}</h2>
      <p className="section-lead">{s.desc}</p>

      {s.ready ? (
        <div className="slides-wrap">
          <iframe
            className="slides-frame"
            src={s.file}
            title="課程簡報"
          />
          <div className="slides-actions">
            <a className="btn btn-primary" href={s.file} target="_blank" rel="noopener noreferrer">
              全螢幕開啟簡報 →
            </a>
            <a className="btn btn-ghost" href={s.file} download>
              下載 PDF
            </a>
          </div>
        </div>
      ) : (
        <div className="slides-placeholder">
          <div className="slides-placeholder-badge">📊 簡報即將上線</div>
          <p>我們的課堂會帶學生深入這些主題:</p>
          <ul className="slides-topics">
            {s.topics.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
