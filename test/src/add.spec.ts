import { get } from 'request-promise-native';
import { expect } from 'chai';

describe('calculator server', function(){
  describe('add service', function(){
    this.timeout(5000);
    this.slow(5000);

    it('harusnya bisa melakukan operasi pertambahan', async function(){
      const result = await get('http://localhost:3000/add?n1=4&n2=3', { json: true });
      expect(result).to.be.deep.eq({
        result: 7
      });
    });
  });
});
