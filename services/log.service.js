import chalk from "chalk";
import dedent from "dedent-js";

const printError = (err) => {
  console.log(chalk.red("error") + " ", err);
};
const printSucces = (succes) => {
  console.log(chalk.green("succes") + " " + succes);
};

const printHelper = (helper) => {
  console.log(dedent`
${chalk.bgCyan("HELP")}
-s [CITY] for install city  
-h for help
-t [API_KEY]  for saving token
`);
};

const printWeather = (response, icon) => {
  console.log(dedent`${chalk.bgYellowBright('WEATHER')} city weather ${response.name}
  ${icon} ${response.weather[0].description}
  Temprature: ${response.main.temp} (feels like ${response.main.feels_like})
  Humidity: ${response.main.humidity}%
  Wind speed: ${response.wind.speed}
  `);
}

export { printError, printSucces, printHelper, printWeather };
