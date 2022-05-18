"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(t, n, i) {
        this.tipo = t;
        this.nome = n;
        this.idade = i;
    }
    comunicar() {
        console.log('Olá sou um método da classe mãe chamada animal! isso não é legal?!');
    }
}
exports.default = Animal;
class Cachorro extends Animal {
    constructor(t, n, i, r) {
        super(t, n, i);
        this.raca = r;
    }
}
class Humano extends Animal {
    constructor(t, n, i, c) {
        super(t, n, i);
        this.cor = c;
    }
}
let c1 = new Cachorro('Canino', 'Fred', 2, 'Poodle');
let p1 = new Humano('Homo sapiens ', 'Valentina', 3, 'branca');
// console.log(`${c1.nome}, é um ${c1.tipo} da raça ${c1.raca} e tem ${c1.idade} anos`);
// console.log(`${p1.nome}, é um ${p1.tipo} da cor ${p1.cor} e tem ${p1.idade} anos`);
console.log('Metodos');
c1.comunicar();
p1.comunicar();
