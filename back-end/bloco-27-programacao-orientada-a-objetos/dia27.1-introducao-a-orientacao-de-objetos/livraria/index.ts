export default class Book {
  private _id: string;
  private _title: string;
  private _salePrice: number;
  private _cost: number;

  constructor(i: string, t: string, s: number, c: number) {
    this._id = i;
    this._title = t;
    this._salePrice = s;
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
      console.error('Não posso fazer isso');
    } else {
      this._salePrice = price;
    }

  }

  get cost() {
    return this._cost;

  }
}

const b1 = new Book('056781', 'Livretin', 20.00, 10.00);

const b2 = new Book('056782', 'Folhetin', 60.00, 50.00);

console.log('Book 1:', b1, 'Book 2:', b2);

console.log(b1.id);


