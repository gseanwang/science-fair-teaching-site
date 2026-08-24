// ============================================================
//  Pre-launch 開關 —— 律師 / UF DSO 放行後,把 preLaunch 改成 false、重新部署,
//  就一鍵切回正式招生版(顯示價格、CTA 變回「預約免費諮詢」、表單恢復諮詢文案)。
//  目前狀態:網站僅供資訊與「開課通知登記」用途,尚未招生、未提供服務、未收費。
// ============================================================
export const preLaunch = true;

// preLaunch 為 true 時,以下文案會覆蓋原本的招生用語(分三語)。
export const preLaunchUi = {
  tw: {
    comingSoon: "課程籌備中 · Coming Soon",
    cta: "加入通知名單",
    navContact: "訂閱通知",
    heading: "課程籌備中 —— 想搶先知道開課消息?",
    sub: "留下 email,開課時間與名額我們會第一時間通知你。(目前僅開放興趣登記,尚未開始招生。)",
    submit: "加入名單",
    success: "已收到!開課前我們會第一時間通知你 🎉",
  },
  en: {
    comingSoon: "Coming Soon",
    cta: "Join Our Interest List",
    navContact: "Get Updates",
    heading: "We're getting ready to launch — want to be first to know?",
    sub: "Leave your email and we'll notify you when enrollment opens. (Interest list only — we're not enrolling students yet.)",
    submit: "Join the list",
    success: "You're on the list! We'll be in touch before we launch 🎉",
  },
  cn: {
    comingSoon: "课程筹备中 · Coming Soon",
    cta: "加入通知名单",
    navContact: "订阅通知",
    heading: "课程筹备中 —— 想抢先知道开课消息?",
    sub: "留下 email,开课时间与名额我们会第一时间通知你。(目前仅开放兴趣登记,尚未开始招生。)",
    submit: "加入名单",
    success: "已收到!开课前我们会第一时间通知你 🎉",
  },
};
