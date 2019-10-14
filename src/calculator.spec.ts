import { expect } from 'chai';
import { Calculator } from './calculator';

describe('Calculator', function(){
  let calculator = new Calculator;
  describe('Add', function(){
    it('Successfully addition', function(){
      expect(calculator.add(1, 2)).to.be.eq(3);
    });
  });

  describe('Subtract', function(){
    it('Successfully subtraction', function(){
      expect(calculator.subtract(1, 2)).to.be.eq(-1);
    });
  });

  describe('Multiply', function(){
    it('Successfully multiplication', function(){
      expect(calculator.multiply(4, 2)).to.be.eq(8);
    });
  });

  describe('Divide', function(){
    it('Successfully division', function(){
      expect(calculator.divide(6, 2)).to.be.eq(3);
    });
  });
});
