import { expect } from 'chai';
import { add } from './calculator';

describe('calculator', function(){
  describe('add', function(){
    it('harusnya melakukan fungsi tambah', function(){
      expect(add(1,2)).to.be.eq(3);
    });
  });
});
