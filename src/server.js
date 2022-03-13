import { writeFile } from "fs";
import { Buffer } from "buffer";

import log from "./utility/colorLog.js";
import dependency from "./utility/dependency.js";

const data = new Uint8Array(
  Buffer.from(JSON.stringify({ res: "Hello Node.js" }))
);
writeFile("message.json", data, (err) => {
  if (err) {
    log.info(dependency.cradle.mes);
    log.warn(dependency.cradle.mesclass.display());
    log.error(dependency.resolve("messageError"));
  } else {
    log.info(dependency.cradle.mes);
    log.warn(dependency.cradle.mesclass.display());
    log.success(dependency.resolve("messageSuccess"));
  }
});
