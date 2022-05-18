export default class Animal {
  tipo: string;
  nome: string;
  idade: number;

  constructor(t: string, n: string, i: number) {
    this.tipo = t;
    this.nome = n;
    this.idade = i;
  }
  public comunicar():void { 
    console.log('Olá sou um método da classe mãe chamada animal! isso não é legal?!');
    
  }
}

class Cachorro extends Animal {
  raca: string;

  constructor(t: string, n: string, i: number, r: string) {
    super(t, n, i)
    this.raca = r;
  }
}

class Humano extends Animal {
  cor: string;

  constructor(t: string, n: string, i: number, c: string) {
    super(t, n, i)
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


