import "./globals.css";

export const metadata = {
  title: "世界科展學院 World Science Academy｜讓孩子站上世界的舞台",
  description:
    "對接亞洲、美洲、歐洲等世界各地科展賽事,為孩子量身規劃完整研究輔導 —— 論文、海報、口頭發表一次到位。全程線上。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
