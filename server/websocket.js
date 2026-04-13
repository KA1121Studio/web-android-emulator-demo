// server/websocket.js

const WebSocket = require("ws");

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.send(JSON.stringify({ type: "connected" }));

    ws.on("message", (message) => {
      try {
        const data = JSON.parse(message);
        console.log("Received:", data);

        // 今はエコーするだけ
        ws.send(JSON.stringify({ type: "echo", payload: data }));
      } catch (err) {
        console.error("Invalid message format");
      }
    });

    ws.on("close", () => {
      console.log("Client disconnected");
    });
  });
}

module.exports = setupWebSocket;
