import express from "express";
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

app.use(express.static(path.join(__dirname, "../public")));

server.listen(dependency.cradle.PORT, () => {
  log.info(`Server is listening on port ${dependency.cradle.PORT}`);
}
);

