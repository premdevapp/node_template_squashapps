import clc from "cli-color";
process.stdout.write(clc.reset);
const log = {
  info: (...args) => {
    return process.stdout.write(clc.blueBright(...args));
  },
  warn: (...args) => {
    return process.stdout.write(clc.yellowBright(...args));
  },
  error: (...args) => {
    return process.stdout.write(clc.redBright(...args));
  },
  success: (...args) => {
    return process.stdout.write(clc.greenBright(...args));
  },
};
export default log;
