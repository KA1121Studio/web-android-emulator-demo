# Web Android Emulator

Webブラウザから操作できるAndroidエミュレーター環境。

## 🚀 Features

- Docker上でAndroidエミュレーター起動
- WebSocketでリアルタイム通信
- ブラウザからタップ操作送信
- noVNC経由で画面表示

---

## 🏗 Project Structure


web-android-emulator/
│
├── docker/
├── server/
├── public/
├── config/
├── .env
├── package.json
└── README.md


---

## 🐳 Setup

### 1️⃣ Docker起動


docker compose up --build


Androidは以下で確認：


http://localhost:6080


---

### 2️⃣ サーバー起動


npm install
npm start


ブラウザで：


http://localhost:3000


---

## ⚙ Environment Variables

`.env` を編集して設定変更可能。

---

## 🔮 Future Improvements

- WebRTCによる低遅延化
- ユーザーごとのコンテナ生成
- Kubernetesスケーリング
- 課金システム統合

---

## 📌 Notes

Android操作はADB経由で実行される。

例：


adb shell input tap x y


---

## 📜 License

MIT
