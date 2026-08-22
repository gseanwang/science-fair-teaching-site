import "./globals.css";
import { site } from "../data/site";

export const metadata = {
  title: "美國科展研究輔導課程 | 從選題到發表全程陪跑",
  description:
    "針對美國各州科展比賽,為孩子量身規劃 16 週完整研究輔導 —— 論文、海報、口頭發表一次到位。全程線上、中文溝通。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a href="/" className="logo">🔬 {site.brand}</a>
            <nav className="nav">
              <a href="#course">課程</a>
              <a href="#slides">上課內容</a>
              <a href="#pricing">費用</a>
              <a href="#faq">問答</a>
              <a href="#contact" className="nav-cta">諮詢</a>
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
