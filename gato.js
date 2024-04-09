//gato.js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
var Gato = /** @class */ (function () {
    function Gato(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Gato.prototype.miar = function () {
        console.log("".concat(this.nome, " est\u00E1 miando!"));
    };
    Gato.prototype.getNome = function () {
        return this.nome;
    };
    Gato.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Gato.prototype.getIdade = function () {
        return this.idade;
    };
    Gato.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    return Gato;
}());
exports.Gato = Gato;
