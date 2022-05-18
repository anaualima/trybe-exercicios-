export default class Pessoa {
  constructor(n: string, i: number) {
    this.nome = n;
    this.idade = i;
  }
  nome: string;
  idade: number;
}

let p1 = new Pessoa('Noni', 40);

// p1.nome = 'Noni';
// p1.idade = 40;

console.log(`${p1.nome} tem ${p1.idade} anos de idade`);
