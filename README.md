# 科展研究方法教室 — 教學網站起始模板

一個用 **Next.js (React)** 做的教學網站,像 Inspirit AI 那樣可以用分類篩選課程卡片。

## 怎麼在自己電腦上跑起來

在這個資料夾打開終端機,依序執行:

```bash
npm install       # 第一次要跑,下載相依套件(約 1–2 分鐘)
npm run dev       # 啟動開發伺服器
```

然後打開瀏覽器到 **http://localhost:3000** 就會看到網站。
改任何檔案存檔後,畫面會自動更新。

## 我要改什麼?

| 想做的事 | 改哪個檔案 |
|----------|-----------|
| 新增 / 修改課程 | `data/lessons.js`（複製一個 `{ ... }` 區塊即可） |
| 改分類 | `data/lessons.js` 最上面的 `categories` |
| 改配色、字體 | `app/globals.css` 最上面的 `:root` 變數 |
| 改網站標題、導覽列 | `app/layout.jsx` |
| 改首頁介紹文字 | `app/page.jsx` |

## 檔案結構速覽

```
teaching-site/
├─ data/lessons.js          ← 課程內容(你最常改這個)
├─ app/
│  ├─ layout.jsx            ← 全站外框(header / footer)
│  ├─ page.jsx              ← 首頁
│  ├─ globals.css           ← 樣式
│  └─ lessons/[slug]/page.jsx ← 每一堂課的內頁(自動產生)
└─ components/
   └─ LessonGallery.jsx     ← 分類篩選 + 卡片牆(互動元件)
```

## 想放到網路上給別人看?

免費作法:把這個資料夾推到 GitHub,再到 [vercel.com](https://vercel.com) 用 GitHub 登入、
選這個 repo、按 Deploy,幾分鐘後就有一個公開網址。Vercel 是 Next.js 官方的部署平台。
