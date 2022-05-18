"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(n, i) {
        this.nome = n;
        this.idade = i;
    }
}
exports.default = Pessoa;
let p1 = new Pessoa('Noni', 40);
// p1.nome = 'Noni';
// p1.idade = 40;
console.log(`${p1.nome} tem ${p1.idade} anos de idade`);
