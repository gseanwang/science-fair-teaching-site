import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.worldscienceacademy.org"),
  title: "世界科展學院 World Science Academy｜讓孩子站上世界的舞台",
  description:
    "對接亞洲、美洲、歐洲等世界各地科展賽事,為孩子量身規劃完整研究輔導 —— 論文、海報、口頭發表一次到位。全程線上。",
  keywords: [
    "科展輔導", "科展指導", "研究輔導", "科學競賽", "World Science Academy", "世界科展學院",
    "ISEF", "Regeneron STS", "science fair mentorship", "research paper coaching", "留學升學",
  ],
  alternates: { canonical: "/tw/" },
  openGraph: {
    title: "世界科展學院 World Science Academy｜讓孩子站上世界的舞台",
    description:
      "對接亞洲、美洲、歐洲等世界各地科展賽事,為孩子量身規劃完整研究輔導 —— 論文、海報、口頭發表一次到位。全程線上。",
    url: "https://www.worldscienceacademy.org/tw/",
    siteName: "World Science Academy",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
