<script id="3xk9qp">
// public/app.js

const socket = new WebSocket(`ws://${location.host}`);

socket.addEventListener("open", () => {
  console.log("WebSocket connected");
});

socket.addEventListener("message", (event) => {
  const data = JSON.parse(event.data);
  console.log("Server:", data);
});

// iframe上でクリック位置を取得
const frame = document.getElementById("emulatorFrame");

frame.addEventListener("load", () => {
  const iframeWindow = frame.contentWindow;

  frame.contentWindow.document.addEventListener("click", (e) => {
    const rect = frame.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    socket.send(JSON.stringify({
      type: "tap",
      x: Math.floor(x),
      y: Math.floor(y)
    }));

    console.log("Tap sent:", x, y);
  });
});
</script>
