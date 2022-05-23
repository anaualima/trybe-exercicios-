export default class Book {
  private _id: string;
  private _title: string;
  private _salePrice: number;
  private _cost: number;

  constructor(i: string, t: string, c: number, s?: number) {
    this._id = i;
    this._title = t;
    if(s){
      this._salePrice = s;
    }else {
      this._salePrice = c;
    }
    this._cost = c;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get salePrice() {
    return this._salePrice;
  }

  set salePrice(price: number) {
    if (price < this._cost) {
      console.error('O preço não pode ser menor que o custo');
    } else {
      this._salePrice = price;
    }
  }

  public calculateProfit(): number {
    return this._salePrice - this._cost
  }

  public setMinimunSalePrice(profitMargin:number): number {
    const newPrice = this._cost * (1 + profitMargin/100)

    return this._salePrice = newPrice;
  }

  get cost() {
    return this._cost;

  }

  public toString(): string {
    return `Livro ${this._title}, preço ${this._salePrice}`
  }
}

const b1 = new Book('056781', 'Livretin', 38.00, 50.00);

const b2 = new Book('056782', 'Folhetin', 32.00, 40.00);

//exemplo 1
// console.log('Book 1:', b1, 'Book 2:', b2);
// console.log(b1.id);

// exemplo 2
// console.log(b2);
// console.log('Lucro do livro2', b2.calculateProfit());
// console.log('Setando o valor garantindo 20% de lucro', b2.setMinimunSalePrice(20));
// console.log(b2);

//exeplo 3
console.log(`${b2}`);






