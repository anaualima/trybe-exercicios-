const { expect } = require('chai');

const calcString = require('../calcString');

describe('Testar se o reultado da funcao é positivo, negativo ou neutro', () => {
    it('a funcao existe', () => {
      expect(calcString).to.be.a('function')
    });
    it('a funcao retorna uma string', () => {
      const resultado = calcString(10);
      expect(resultado).to.be.a('string')
      });
    it('tem um resultado positivo', () => {
      const resultado = calcString(10);
      expect(resultado).to.be.equals('positivo')
    });
    it('tem um resultado negativo', () => {
      const resultado = calcString(-10);
      expect(resultado).to.be.equals('negativo')
    });
    it('tem um resultado neutro', () => {
      const resultado = calcString(0);
      expect(resultado).to.be.equals('neutro')
    });
  });