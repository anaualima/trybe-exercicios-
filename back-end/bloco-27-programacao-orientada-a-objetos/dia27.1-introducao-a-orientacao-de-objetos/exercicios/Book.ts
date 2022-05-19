class Book {
  id: string;
  title: string;
  salePrice: number;
  cost: number;


  constructor(
    id: string, title: string, salePrice: number, cost: number) {
    this.id = id;
    this.title = title;
    this.salePrice = salePrice;
    this.cost = cost;
  }

  // soma (): number {
  //   return [...this.provas, ...this.trabalhos]
  //     .reduce((acc, nota) => {
  //       nota += acc;

  //       return nota;
  //     }, 0);
  // }
  

  // media() {
  //   const soma = this.soma();
  //   const totalDeNotas = this.provas.length + this.trabalhos.length
  //   return Math.round(soma / totalDeNotas);
  // }
}
const book1 = new Book('00001', 'As Cronicas de Narnia', 100.00, 50.00);


const book2 = new Book('00002', 'As Cronicas de Anauá', 200.00, 50.00);

console.log(`Book1 é ${book1} e Book2 é ${book2}`);
