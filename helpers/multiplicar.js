const fs = require("fs");
const colors = require("colors");

const useCreateFile = async (base, listar = false, hasta) => {
  try {
    let consola = "";
    let guardarArchivo = "";

    for (let i = 1; i <= hasta; i++) {
      consola += `${base} ${"x".green} ${i} ${"=".cyan} ${i * base}\n`;
      guardarArchivo += `${base} ${"x"} ${i} ${"="} ${i * base}\n`;
    }

    fs.writeFileSync("./tabla.txt", guardarArchivo);
    if (listar) {
      console.clear();
      console.log("===============".red);
      console.log(`    tabla del: ${base}`.yellow);
      console.log("===============".cyan);
      console.log(consola);
    }

    return `tabla-de-${base}.txt`.rainbow.bold;
  } catch (error) {
    throw error;
  }
};

module.exports = useCreateFile;
