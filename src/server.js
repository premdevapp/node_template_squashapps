import express from "express";
import { Server } from "socket.io";
import path, { dirname } from "path";
import http from "http";
import { fileURLToPath } from 'url';
import log from "./utility/colorLog.js";
import dependency from "./utility/dependency.js";
//dependency.cradle.PORT

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "../public")));


io.on("connection", (socket) => {
  log.info("\n A user connected");

  socket.emit("message", {
    text: "Welcome to the chat app",
  });

  socket.on("change", (data) => {
    log.info(`\n ${data.text}`);
    io.emit("message", {
      text: data.text,
    });
  })

  socket.on("disconnect", () => {
    log.info("\n A user disconnected");
  });
});

server.listen(dependency.cradle.PORT, () => {
  log.info(`Server is listening on port ${dependency.cradle.PORT}`);
}
);

