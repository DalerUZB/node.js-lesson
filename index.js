import getArgs from "./helpers/args.js";
import { getWeather } from "./services/api.services.js";
import {
  printError,
  printSucces,
  printHelper,
} from "./services/log.service.js";
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.servise.js";

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
const saveSity = async (city) => {
  if (!city.length) {
    printError(`Token does\`nt exist`)
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city)
    printSucces('Tokken was saved')
  } catch (error) {
    printError(error.message)
  }
}
const getForcast = async () => {
  try {
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
    const response = await getWeather(process.env.CITY ?? city)
  } catch (error) {
    if (error?.response?.status == 404) {
      printError('City not found')
    } else if (error?.response?.status == 401) {
      printError('Invalid token')
    } else {
      printError(error.message)
    }
  }
}
const startCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return printHelper();
  }
  if (args.s) {
    return saveSity(args.s)
  }
  if (args.t) {
    return saveToken(args.t)
  }
  return getForcast()
};

startCLI();
