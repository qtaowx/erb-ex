# 🗂️ Group Project – User Calendar System

這是一個使用 Node.js + Express + MongoDB 實作的簡易用戶註冊 / 登入 / 個人事件管理系統。每位註冊用戶可擁有個人資料、頭像上傳、個人日曆頁面，頭像圖片並儲存至 MongoDB, 並可使用 FullCalendar.js 管理事件。

## 📁 專案目錄結構
group-project-0416_v1/
├── app.js                # Express 主伺服器入口
├── middleware.js         # 驗證與日誌中介層
├── models/               # Mongoose 模型
│   ├── event.js          # 事件模型
│   └── user.js           # 用戶模型
├── public/               # 前端頁面與靜態資源
│   ├── home.html             # 使用者登入後首頁（UID 專屬）
│   ├── index.html            # 註冊頁，含頭像上傳與表單驗證
│   ├── login.html            # 登入頁，導向個人化首頁
│   ├── user-list.html        # 用戶清單頁面（載入所有用戶，含頭像）
│   └── js/
│       ├── main.js           # 註冊頁表單處理與驗證邏輯
│       └── user-list.js      # 動態載入用戶資料並渲染至 user-list.html
├── routes/               # Express 路由模組
│   ├── eventRoute.js         # /events 路由，負責事件 CRUD
│   └── userRoute.js          # /users 路由，負責註冊、登入、圖片
├── README.md             # 專案說明文件


## 🚀 快速啟動（Quick Start）

### 1️⃣ 安裝相依套件
```bash
npm init -y
npm install mongoose express multer body-parser fullcalendar
```

### 2️⃣ 啟動 MongoDB
確保 MongoDB 已在本機執行（預設連線字串：`mongodb://localhost:27017/0407_db`）

### 3️⃣ 啟動伺服器
```bash
node app.js
```

啟動後可在 `http://localhost:3000` 存取前端頁面。

說明：

- `mongoose`：MongoDB 的 ODM 工具，負責資料操作
- `express`：Node.js Web 應用伺服器框架
- `multer`：處理圖片上傳
- `body-parser`：解析 JSON 與表單請求（已用於 app.js 中）
- `fullcalendar`：前端日曆元件（實際在前端以 CDN 引入為主，此處為備用）

