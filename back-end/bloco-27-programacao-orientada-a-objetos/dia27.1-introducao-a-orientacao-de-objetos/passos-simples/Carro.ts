export default class Carro {
  private _cor: string;
  private _ano: number;
  private _valor: number;

  constructor(c: string, a: number, v: number) {
    this._cor = c;
    this._ano = a;
    this._valor = v;
  }

  public getValor() {
    return this._valor
  }

  public setValor(valor: number) {
    this._valor = valor
  }
};

let c1 = new Carro('Branco', 2022, 150000);

// console.log(c1._cor);
// console.log(c1._ano);
c1.setValor(50000)
console.log(c1.getValor());
