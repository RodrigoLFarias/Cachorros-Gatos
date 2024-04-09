//index.js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cachorro_1 = require("./cachorro");
var gato_1 = require("./gato");
var cachorro = new cachorro_1.Cachorro("Brutus", 3);
var gato = new gato_1.Gato("Mafuba", 2);
console.log("Cachorro:");
console.log("Nome:", cachorro.getNome());
console.log("Idade:", cachorro.getIdade());
cachorro.latir();
console.log("\nGato:");
console.log("Nome:", gato.getNome());
console.log("Idade:", gato.getIdade());""
gato.miar();
