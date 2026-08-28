// Blog 分頁的介面文字,分三語。文章本身在 content/posts/*.md。
// 合作夥伴 podcast(文章結尾「延伸收聽」)—— 換節目就改這裡。
export const listen = {
  name: "Audrey老師・八分鐘家長答疑",
  ep: "EP18｜AI 時代,我們到底該替孩子規劃什麼?",
  url: "https://audreycollegecoach.substack.com/p/ep18ai",
  tag: { tw: "延伸收聽", en: "Recommended listening", cn: "延伸收听" },
  hint: { tw: "Podcast", en: "Podcast", cn: "Podcast" },
};

// 作者。文章 frontmatter 用 author: "sean" / "emily" / "jay";省略则预设 sean。
export const defaultAuthor = "sean";
export const authors = {
  sean: { name: "Dr. Sean Wang", initials: "SW", photo: "/faculty/sean-2.jpg", role: { tw: "創辦人・科學研究導師", en: "Founder & Research Mentor", cn: "创办人・科学研究导师" } },
  emily: { name: "Emily Chou", initials: "EC", role: { tw: "AI 應用・產品設計導師", en: "AI & Product Design Mentor", cn: "AI 应用・产品设计导师" } },
  jay: { name: "Dr. Jay Lee", initials: "JL", role: { tw: "動物科學・生命科學導師", en: "Animal & Life Science Mentor", cn: "动物科学・生命科学导师" } },
};

// 文章分類/系列(五大主軸)。文章 frontmatter 用 category: "teardown" 等對應。
export const catAll = { tw: "全部", en: "All", cn: "全部" };
export const categories = {
  teardown: { tw: "範例拆解", en: "Worked Examples", cn: "范例拆解" },
  judge: { tw: "評審視角", en: "From the Judging Table", cn: "评审视角" },
  ai: { tw: "AI × 科展", en: "AI & Science Fairs", cn: "AI × 科展" },
  data: { tw: "科展數據", en: "Data & Trends", cn: "科展数据" },
  guide: { tw: "賽事攻略", en: "Competition Guides", cn: "赛事攻略" },
};

export const blogUi = {
  tw: {
    title: "科展・升學觀點",
    desc: "定期分享科展研究、升學趨勢與 AI 時代的學習觀察。",
    empty: "文章即將上線,敬請期待。",
    readMore: "閱讀全文",
    min: "分鐘",
    backToBlog: "返回文章列表",
    subTitle: "喜歡這篇?訂閱我們的電子報",
    subDesc: "新文章一發布就寄給你,還有科展與升學的第一手資訊。",
    ctaText: "想讓孩子做出一件真實的研究?我們提供免費諮詢。",
    ctaBtn: "預約免費諮詢 →",
  },
  en: {
    title: "Science-Fair Insights",
    desc: "Notes on science-fair research, admissions trends, and learning in the age of AI.",
    empty: "Articles coming soon.",
    readMore: "Read more",
    min: "min read",
    backToBlog: "Back to all articles",
    subTitle: "Enjoyed this? Get it in your inbox",
    subDesc: "New articles as they publish, plus science-fair and admissions updates.",
    ctaText: "Want your child to build a real research project? Book a free consultation.",
    ctaBtn: "Book a free consultation →",
  },
  cn: {
    title: "科展・升学观点",
    desc: "定期分享科展研究、升学趋势与 AI 时代的学习观察。",
    empty: "文章即将上线,敬请期待。",
    readMore: "阅读全文",
    min: "分钟",
    backToBlog: "返回文章列表",
    subTitle: "喜欢这篇?订阅我们的电子报",
    subDesc: "新文章一发布就寄给你,还有科展与升学的第一手资讯。",
    ctaText: "想让孩子做出一件真实的研究?我们提供免费咨询。",
    ctaBtn: "预约免费咨询 →",
  },
};
