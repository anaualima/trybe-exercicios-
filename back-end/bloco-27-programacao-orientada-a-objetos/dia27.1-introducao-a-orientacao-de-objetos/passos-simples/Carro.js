"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carro {
    constructor(c, a, v) {
        this._cor = c;
        this._ano = a;
        this._valor = v;
    }
    getValor() {
        return this._valor;
    }
    setValor(valor) {
        this._valor = valor;
    }
}
exports.default = Carro;
;
let c1 = new Carro('Branco', 2022, 150000);
// console.log(c1._cor);
// console.log(c1._ano);
c1.setValor(50000);
console.log(c1.getValor());
