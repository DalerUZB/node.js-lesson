import getArgs from "./helpers/args.js";
import { getWeather } from "./services/api.services.js";
import {
  printError,
  printSucces,
  printHelper,
} from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.servise.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError(`Token does\`nt exist`)
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSucces('Tokken was saved')
  } catch (error) {
    printError(error.message)
  }
}

const startCLI = () => {
  const args = getArgs(process.argv);

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
  getWeather('tashkent')
};

startCLI();
