const useCreateFile = require("./helpers/multiplicar");
const argv = require("./config/yargs");
console.clear();

console.log(argv);
console.log("base: yargs", argv.b);

useCreateFile(argv.base, argv.listar, argv.hasta)
  .then((fileName) => console.log(fileName))
  .catch((err) => console.log(err));
