import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.worldscienceacademy.org"),
  title: "世界科展学院 World Science Academy｜让孩子站上世界的舞台",
  description:
    "对接亚洲、美洲、欧洲等世界各地科展赛事,为孩子量身规划完整研究辅导 —— 论文、海报、口头发表一次到位。全程线上。",
  keywords: [
    "科展辅导", "科展指导", "研究辅导", "科学竞赛", "World Science Academy", "世界科展学院",
    "科展輔導", "科學競賽", "ISEF", "Regeneron STS", "science fair mentorship", "research paper coaching",
  ],
  alternates: { canonical: "/cn/" },
  openGraph: {
    title: "世界科展学院 World Science Academy｜让孩子站上世界的舞台",
    description:
      "对接亚洲、美洲、欧洲等世界各地科展赛事,为孩子量身规划完整研究辅导 —— 论文、海报、口头发表一次到位。全程线上。",
    url: "https://www.worldscienceacademy.org/cn/",
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
