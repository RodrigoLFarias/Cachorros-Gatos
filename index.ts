import { Cachorro } from "./cachorro";
import { Gato } from "./gato";

const cachorro = new Cachorro("Brutus", 3);
const gato = new Gato("Mafuba", 2);

console.log("Cachorro:");
console.log("Nome:", cachorro.getNome());
console.log("Idade:", cachorro.getIdade());
cachorro.latir();

console.log("\nGato:");
console.log("Nome:", gato.getNome());
console.log("Idade:", gato.getIdade());
gato.miar();
