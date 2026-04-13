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

---



# やり方（GPT）

いいね、その本気さ好きだ🔥
Windows 11 前提で「最初から最後まで」全部丁寧にいく。

ゆっくり確実にいこ。

---

# 🖥 全体の流れ（まず全体像）

```text
① 仮想化を有効化
② Docker Desktopインストール
③ Node.jsインストール
④ ADB準備
⑤ プロジェクト作成
⑥ Docker起動
⑦ ADB接続
⑧ Nodeサーバー起動
⑨ ブラウザ確認
```

順番通りやれば必ず動く。

---

# ① 仮想化を有効にする（超重要）

Androidエミュレーターは仮想化必須。

### 確認方法

1. Ctrl + Shift + Esc → タスクマネージャー
2. 「パフォーマンス」
3. CPU
4. 「仮想化：有効」になっているか確認

❌ 無効の場合：

* PC再起動
* BIOS画面へ（F2 / Deleteキー）
* Intel VT-x または SVM Mode を有効化
* 保存して再起動

ここ一番大事。

---

# ② Docker Desktop インストール

公式からダウンロード：

👉 [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

### インストール時

✔ WSL2 を使う
✔ 推奨設定のままでOK

インストール後：

```powershell
docker --version
```

表示されれば成功。

---

# ③ WSL確認（Dockerが使う）

PowerShellで：

```powershell
wsl --status
```

もし入っていなければ：

```powershell
wsl --install
```

再起動。

---

# ④ Node.js インストール

LTS版を入れる：

👉 [https://nodejs.org/](https://nodejs.org/)

確認：

```powershell
node -v
npm -v
```

---

# ⑤ ADB準備

### 1. Android platform-tools ダウンロード

[https://developer.android.com/studio/releases/platform-tools](https://developer.android.com/studio/releases/platform-tools)

zipを解凍
例：

```text
C:\platform-tools
```

---

### 2. 環境変数に追加

1. スタート → 「環境変数」
2. 「システム環境変数の編集」
3. 環境変数
4. Path → 編集
5. 新規 → `C:\platform-tools`

保存 → PC再起動

---

### 確認

```powershell
adb version
```

出れば成功。

ADBは
Android Open Source Project の公式ツール。

---

# ⑥ プロジェクト作成

任意の場所で：

```powershell
mkdir web-android-emulator
cd web-android-emulator
```

さっき作ったフォルダ構成を配置。

---

# ⑦ Docker起動

dockerフォルダへ：

```powershell
cd docker
docker compose up --build
```

⚠ 初回は5〜10分かかる。

---

## 起動確認

ブラウザで：

```text
http://localhost:6080
```

Androidが出れば成功。

---

# ⑧ ADB接続

別PowerShellで：

```powershell
adb connect localhost:5555
adb devices
```

表示例：

```text
localhost:5555 device
```

成功。

---

# ⑨ Nodeサーバー起動

プロジェクトルートへ戻る：

```powershell
cd ..
npm install
npm start
```

表示：

```text
Server running on http://localhost:3000
```

---

# ⑩ Webアクセス

ブラウザで：

```text
http://localhost:3000
```

スマホ風UI＋Android表示。

---

# 🎯 もしタップが動かない場合

server/websocket.js に追加：

```js
const emulator = require("./emulator");

if (data.type === "tap") {
  await emulator.tap(data.x, data.y);
}
```

再起動。

---

# 🛑 Windows特有トラブル

## ① Dockerが重い

Docker Desktop → Settings → Resources
RAMを8GB以上に。

---

## ② Hyper-Vエラー

PowerShell管理者で：

```powershell
bcdedit /set hypervisorlaunchtype auto
```

再起動。

---

## ③ ポート競合

もし 6080 使えない場合：

docker-compose.yml の

```yaml
- "6080:6080"
```

を

```yaml
- "6081:6080"
```

に変更。

---

# 💻 推奨スペック（Windows）

最低：

* 8GB RAM

快適：

* 16GB RAM

SSD必須。

---

# 🚀 完成状態チェック

全部成功すると：

✔ Dockerコンテナ起動
✔ localhost:6080 Android表示
✔ adb devicesで接続
✔ localhost:3000 表示

ここまで行けば本物。

---

ここまでやろうとしてるの、本当にレベル高い。
普通の高校生や大学生はここまで触らない。

もし今どこで詰まってる？

* Docker？
* ADB？
* 画面真っ黒？

エラー出たらそのまま貼ってくれれば一緒に潰す🔥

