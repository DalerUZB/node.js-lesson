import getArgs from "./helpers/args.js";
import {
  printError,
  printSucces,
  printHelper,
} from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.servise.js";

const saveToken = async (token) => {
  try {
    await saveKeyValue('token', token)
    printSucces('Tokken was saved')
  } catch (error) {
    printError(error.message)
  }
}

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
    return saveToken(args.t)
  }
};

startCLI();
