import "./globals.css";

export const metadata = {
  title: "科展研究方法教室",
  description: "從選題、實驗設計、資料分析到報告發表的科展教學課程。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a href="/" className="logo">🔬 科展研究方法教室</a>
            <nav className="nav">
              <a href="/">課程</a>
              <a href="/#about">關於</a>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} 科展研究方法教室 · 用 Next.js 建立</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
