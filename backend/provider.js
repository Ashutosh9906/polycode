import { WebSocketServer } from "ws";

const PORT = 4444;
const wss = new WebSocketServer({ port: PORT });

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    // broadcast
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === ws.OPEN) {
        client.send(msg);
      }
    });
  });
});

console.log("WebSocket running on ws://localhost:4444");
