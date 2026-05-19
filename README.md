# Milton 官方形象網站：3D Hero + 捲動式課程探索版

這是一包可以直接上傳 GitHub / Vercel 的網站檔案。

## 這版包含
- Header 維持原本橫式品牌 Logo
- 首頁 Hero 改成自然融入背景的品牌主視覺
- 用 CSS 做出浮動與立體感，不使用卡片包住 Logo
- 捲動式課程介紹
- 課程分類：兒童美語、幼兒美語、課後輔導、主題探索課程
- 學生作業系統入口，連到 https://milton-vocab-app.vercel.app/
- 手機版 RWD

## 之後可替換
在 `src/main.jsx`：
- `REVIEW_APP_URL`：學生作業系統網址
- `LINE_URL`：LINE 官方帳號連結
- 電話與地址文案


## 3D floating logo update
- 首頁 Header 仍使用原本橫式品牌 Logo
- Hero 右側使用 `public/assets/milton-3d-floating-mascot.png`
- 已加入 CSS 浮動動畫、陰影與背景光暈，讓 Logo 主視覺有 3D 浮動感
- 保留捲動式課程探索區
