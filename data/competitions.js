// ============================================================
//  科展資訊分頁的資料。
//  competitions:各大競賽(名稱/連結為共用,blurb 與 when 分三語)
//  ui:頁面文字(標題、分類名、欄位標籤),分三語
//  更新方式:每季看官方網站,改 when 的時程說明即可;新增競賽複製一個 { } 區塊。
//  ⚠️ 確切報名截止日每年不同,一律以官方網站為準(頁面有註明)。
// ============================================================

export const competitionCats = ["national", "elite", "regional"];

export const ui = {
  tw: {
    title: "最新科展資訊",
    desc: "美國各大科展與研究競賽總覽 —— 幫你快速看懂有哪些、對象是誰、什麼時候報名。",
    disclaimer: "報名時程每年不同,以下為一般時程參考,確切日期請以各官方網站為準。",
    cats: { national: "全國級旗艦賽事", elite: "菁英競賽與獎助", regional: "州 / 區域科展" },
    who: "對象", when: "時程", link: "官方網站 →",
    ctaTitle: "想參加哪一個?我們幫孩子規劃到報名",
    ctaText: "預約免費諮詢 →",
  },
  en: {
    title: "Science Competitions",
    desc: "A guide to major U.S. science fairs and research competitions — what they are, who they're for, and when to apply.",
    disclaimer: "Deadlines change every year. The timelines below are general guidance — always confirm on the official website.",
    cats: { national: "National Flagship Competitions", elite: "Elite Competitions & Scholarships", regional: "State / Regional Fairs" },
    who: "For", when: "Timeline", link: "Official site →",
    ctaTitle: "Not sure which one? We'll plan your child's path to it.",
    ctaText: "Book a free consultation →",
  },
  cn: {
    title: "最新科展资讯",
    desc: "美国各大科展与研究竞赛总览 —— 帮你快速看懂有哪些、对象是谁、什么时候报名。",
    disclaimer: "报名时程每年不同,以下为一般时程参考,确切日期请以各官方网站为准。",
    cats: { national: "全国级旗舰赛事", elite: "精英竞赛与奖助", regional: "州 / 区域科展" },
    who: "对象", when: "时程", link: "官方网站 →",
    ctaTitle: "想参加哪一个?我们帮孩子规划到报名",
    ctaText: "预约免费咨询 →",
  },
};

export const competitions = [
  {
    id: "isef", cat: "national", name: "Regeneron ISEF", grades: "9–12",
    url: "https://www.societyforscience.org/isef/",
    blurb: { tw: "全球最大的高中科展,匯集各國頂尖學生。", en: "The world's largest pre-college science & engineering fair.", cn: "全球最大的高中科展,汇集各国顶尖学生。" },
    when: { tw: "每年 5 月舉行;需先在你所在地區的「加盟賽事」晉級(通常秋冬報名)。", en: "Held in May; qualify via your local affiliated fair (usually register fall–winter).", cn: "每年 5 月举行;需先在你所在地区的「加盟赛事」晋级(通常秋冬报名)。" },
  },
  {
    id: "sts", cat: "national", name: "Regeneron Science Talent Search (STS)", grades: "12（高中畢業班）",
    url: "https://www.societyforscience.org/regeneron-sts/",
    blurb: { tw: "美國歷史最悠久、最具聲望的高中生研究競賽。", en: "The oldest and most prestigious U.S. science research competition for seniors.", cn: "美国历史最悠久、最具声望的高中生研究竞赛。" },
    when: { tw: "申請截止約在 11 月。", en: "Application deadline is typically in November.", cn: "申请截止约在 11 月。" },
  },
  {
    id: "jshs", cat: "national", name: "Junior Science & Humanities Symposium (JSHS)", grades: "9–12",
    url: "https://www.jshs.org/",
    blurb: { tw: "在區域研討會上發表研究,再晉級全國。", en: "Present your research at regional symposia, then advance to nationals.", cn: "在区域研讨会上发表研究,再晋级全国。" },
    when: { tw: "區域報名多在秋冬,研討會在 1–3 月。", en: "Regional registration is usually fall–winter; symposia run Jan–Mar.", cn: "区域报名多在秋冬,研讨会在 1–3 月。" },
  },
  {
    id: "jic", cat: "national", name: "Thermo Fisher JIC（原 Broadcom MASTERS）", grades: "6–8（中學）",
    url: "https://www.societyforscience.org/jic/",
    blurb: { tw: "全美最頂尖的「中學生」STEM 競賽。", en: "The premier U.S. STEM competition for middle-schoolers.", cn: "全美最顶尖的「中学生」STEM 竞赛。" },
    when: { tw: "透過加盟科展提名;全國賽事在秋季。", en: "Nominated via affiliated fairs; national event in the fall.", cn: "通过加盟科展提名;全国赛事在秋季。" },
  },
  {
    id: "davidson", cat: "elite", name: "Davidson Fellows Scholarship", grades: "≤ 18 歲",
    url: "https://www.davidsongifted.org/gifted-programs/fellows-scholarship/",
    blurb: { tw: "傑出研究可獲 $10,000–$50,000 獎學金。", en: "$10,000–$50,000 scholarships for significant, original work.", cn: "杰出研究可获 $10,000–$50,000 奖学金。" },
    when: { tw: "申請截止約在 2 月。", en: "Application deadline is typically in February.", cn: "申请截止约在 2 月。" },
  },
  {
    id: "think", cat: "elite", name: "MIT THINK Scholars", grades: "9–12",
    url: "https://think.mit.edu/",
    blurb: { tw: "提交研究提案,獲 MIT 學生導師 + 經費支持。", en: "Submit a project proposal for MIT student mentorship and funding.", cn: "提交研究提案,获 MIT 学生导师 + 经费支持。" },
    when: { tw: "申請截止約在 1 月初。", en: "Application deadline is around January 1.", cn: "申请截止约在 1 月初。" },
  },
  {
    id: "conrad", cat: "elite", name: "Conrad Challenge", grades: "6–12",
    url: "https://www.conradchallenge.org/",
    blurb: { tw: "以創新與創業解決真實世界問題。", en: "Solve real-world problems through innovation and entrepreneurship.", cn: "以创新与创业解决真实世界问题。" },
    when: { tw: "秋季開放報名,初賽截止約 11 月。", en: "Registration opens in the fall; first deadline around November.", cn: "秋季开放报名,初赛截止约 11 月。" },
  },
  {
    id: "genius", cat: "elite", name: "GENIUS Olympiad", grades: "高中",
    url: "https://www.geniusolympiad.org/",
    blurb: { tw: "以環境為主題的國際高中生競賽。", en: "An international high-school competition themed around the environment.", cn: "以环境为主题的国际高中生竞赛。" },
    when: { tw: "作品提交約在春季(3–4 月)。", en: "Project submission is usually in spring (Mar–Apr).", cn: "作品提交约在春季(3–4 月)。" },
  },
  {
    id: "affiliated", cat: "regional", name: "你所在地區的 ISEF 加盟科展", grades: "依各賽事",
    url: "https://www.societyforscience.org/isef/find-a-fair/",
    blurb: { tw: "找到你州/區域的科展 —— 這是晉級 ISEF 的入口(例如印第安納的 IAS STS)。", en: "Find your state/regional fair — the on-ramp to ISEF (e.g., Indiana's IAS STS).", cn: "找到你州/区域的科展 —— 这是晋级 ISEF 的入口(例如印第安纳的 IAS STS)。" },
    when: { tw: "報名多在秋冬,賽事在冬春;用官方查詢工具找你當地的。", en: "Registration is usually fall–winter; use the official finder for your area.", cn: "报名多在秋冬,赛事在冬春;用官方查询工具找你当地的。" },
  },
];
