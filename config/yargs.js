const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Toma la base de la tabla de multiplicacion",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Lista la tabla en la terminal",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "numeros a imprimir",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
