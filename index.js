const getArgs = require("./helpers/args");

const startCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.h) {
    //help
  }
  if (args.s) {
    // sity
  }
  if (args.t) {
    //token
  }
};

startCLI();
