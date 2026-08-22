import "./globals.css";

export const metadata = {
  title: "World Science Academy 世界科展学院｜让孩子站上世界的舞台",
  description:
    "对接台湾、美国、中国等世界各地科展赛事,为孩子量身规划完整研究辅导 —— 论文、海报、口头发表一次到位。全程线上、中文沟通。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hans">
      <body>{children}</body>
    </html>
  );
}
