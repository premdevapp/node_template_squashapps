import { writeFile, unlink, readdir, readFile } from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Buffer } from "buffer";

import log from "./utility/colorLog.js";
import dependency from "./utility/dependency.js";

const newNote = (file, body) => {
  if (!body) {
    process.stdin.on("data", (data) => {
      console.log(data);
      const temp = data.toString().replace(/'"/gi, "");
      const temp1 = temp.split("").filter((element, ind) => {
        return ind % 2 === 0;
      });
      const temp2 = [...temp1.slice(1, -1)].filter((element, ind) => {
        return element !== ":" && element !== ",";
      });
      const objLit1 = {};
      for (let i = 0; i < temp2.length; i += 2) {
        let key = temp2[i],
          value = temp2[i + 1];
        objLit1[key] = value;
      }
      writeFile(
        `notes/${file}.json`,
        new Uint8Array(Buffer.from(JSON.stringify(objLit1))),
        (err) => {
          if (err) {
            log.info(dependency.cradle.mes);
            log.warn(dependency.cradle.mesclass.display());
            log.error(dependency.resolve("messageError"));
          } else {
            log.info(dependency.cradle.mes);
            log.warn(dependency.cradle.mesclass.display());
            log.success(dependency.resolve("messageSuccess"));
          }
        }
      );
    });
  } else {
    const temp = body.replace(/'"/gi, "");
    const temp1 = temp.split("").filter((element, ind) => {
      return ind % 2 === 0;
    });
    const temp2 = [...temp1.slice(1, -1)].filter((element, ind) => {
      return element !== ":" && element !== ",";
    });
    const objLit1 = {};
    for (let i = 0; i < temp2.length; i += 2) {
      let key = temp2[i],
        value = temp2[i + 1];
      objLit1[key] = value;
    }
    writeFile(
      `notes/${file}.json`,
      new Uint8Array(Buffer.from(JSON.stringify(objLit1))),
      (err) => {
        if (err) {
          log.info(dependency.cradle.mes);
          log.warn(dependency.cradle.mesclass.display());
          log.error(dependency.resolve("messageError"));
        } else {
          log.info(dependency.cradle.mes);
          log.warn(dependency.cradle.mesclass.display());
          log.success(dependency.resolve("messageSuccess"));
        }
      }
    );
  }
};

const deleteNote = (file) => {
  unlink(`notes/${file}.json`, (err) => {
    if (err) {
      log.info(dependency.cradle.mes);
      log.warn(dependency.cradle.mesclass.display());
      log.error(dependency.resolve("messageError"));
    } else {
      log.info(dependency.cradle.mes);
      log.warn(dependency.cradle.mesclass.display());
      log.success(dependency.resolve("messageDelete"));
    }
  });
};

const listNotes = () => {
  readdir(`notes/`, (err, files) => {
    if (err) {
      log.info(dependency.cradle.mes);
      log.warn(dependency.cradle.mesclass.display());
      log.error(dependency.resolve("messageError"));
    } else {
      files.forEach((file) => {
        log.info(file, "\n");
      });
    }
  });
};

const readNote = (file) => {
  readFile(`notes/${file}.json`, "utf8", (err, data) => {
    if (err) {
      log.info(dependency.cradle.mes);
      log.warn(dependency.cradle.mesclass.display());
      log.error(dependency.resolve("messageError"));
    } else {
      log.info(dependency.cradle.mes);
      log.warn(dependency.cradle.mesclass.display());
      log.info(JSON.stringify(data));
    }
  });
};

yargs(hideBin(process.argv))
  .command({
    command: "newAdd",
    describe: "Add new note",
    builder: {
      title: {
        describe: "Title of the note",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "body of the note",
        type: "string",
      },
    },
    handler: (argv) => {
      newNote(argv.title, argv.body);
    },
  })
  .parse();
yargs(hideBin(process.argv))
  .command({
    command: "delete",
    describe: "delete a note",
    builder: {
      title: {
        describe: "Title of the note",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      deleteNote(argv.title);
    },
  })
  .parse();
yargs(hideBin(process.argv))
  .command({
    command: "list",
    describe: "list the notes",
    handler: (argv) => {
      listNotes();
    },
  })
  .parse();
yargs(hideBin(process.argv))
  .command({
    command: "read",
    describe: "read a note",
    builder: {
      title: {
        describe: "Title of the note",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      readNote(argv.title);
    },
  })
  .parse();
