import getArgs from "./helpers/args.js";
import {
  printError,
  printSucces,
  printHelper,
} from "./services/log.service.js";
const startCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.h) {
    //help
    printHelper();
  }
  if (args.s) {
    // sity
  }
  if (args.t) {
    //token
  }
};

startCLI();
