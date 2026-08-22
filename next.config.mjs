/** @type {import('next').NextConfig} */
const nextConfig = {
  // 匯出成純靜態 HTML(out/ 資料夾),可上傳到任何主機(含香港/新加坡、阿里雲 OSS)
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
