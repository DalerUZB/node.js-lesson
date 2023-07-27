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

export { printError, printSucces, printHelper };
