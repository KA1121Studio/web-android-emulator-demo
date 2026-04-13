// server/index.js

const express = require("express");
const http = require("http");
const path = require("path");
const setupWebSocket = require("./websocket");

const app = express();
const server = http.createServer(app);

// 静的ファイル公開
app.use(express.static(path.join(__dirname, "../public")));

// WebSocket初期化
setupWebSocket(server);

// サーバー起動
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
