import "./globals.css";
import { site } from "../data/site";

export const metadata = {
  title: "世界科展學院 World Science Academy｜讓孩子站上世界的舞台",
  description:
    "對接台灣、美國、中國等世界各地科展賽事,為孩子量身規劃 16 週完整研究輔導 —— 論文、海報、口頭發表一次到位。全程線上、中文溝通。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a href="/" className="logo">
              🔬 <span className="logo-en">{site.brandEn}</span>
              <span className="logo-zh">{site.brand}</span>
            </a>
            <nav className="nav">
              <a href="/#course">課程</a>
              <a href="/#slides">上課內容</a>
              <a href="/faculty">師資群</a>
              <a href="/#faq">問答</a>
              <a href="/#contact" className="nav-cta">諮詢</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} {site.brand} · {site.brandEn}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
