//cachorro.js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
var Cachorro = /** @class */ (function () {
    function Cachorro(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cachorro.prototype.latir = function () {
        console.log("".concat(this.nome, " est\u00E1 latindo!"));
    };
    Cachorro.prototype.getNome = function () {
        return this.nome;
    };
    Cachorro.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Cachorro.prototype.getIdade = function () {
        return this.idade;
    };
    Cachorro.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    return Cachorro;
}());
exports.Cachorro = Cachorro;
