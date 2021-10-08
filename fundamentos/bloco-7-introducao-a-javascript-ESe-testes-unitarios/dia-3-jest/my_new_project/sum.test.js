// loginValidation.test.js
const {sum, myRemove, myFizzBuzz, hydrate} = require("./sum.js");

describe('Testa sum', () => {
  it('teste se o input 4,5 retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('teste se o input 0,0 retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('teste se o input 4,"5" retorna error', () => {
    expect(() => sum(4, '5')).toThrowError();
  });
  it('teste se o input 4,"5" retorna mensagem de error', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});

describe('testa myRemove', () => {
  it('testa se input [1, 2, 3, 4], 3 retorna [1, 2, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('testa se input [1, 2, 3, 4], 3  não retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
  it('testa se input [1, 2, 3, 4], 3  não retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

describe('testa myFizzBuzz', () => {
  it ('input 15 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toString('fizzbuzz')
  });
  it ('input 6 retorna fizz', () => {
    expect(myFizzBuzz(6)).toString('fizz')
  });
  it ('input 10 retorna buzz', () => {
    expect(myFizzBuzz(6)).toString('buzz')
  });
  it ('input 89 retorna o próprio número', () => {
    expect(myFizzBuzz(89)).toEqual(89)
  });
  it ('input não é um número retorna false', () => {
    expect(myFizzBuzz('n')).toBeFalsy()
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

