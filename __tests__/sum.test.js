const sum = require('../src/sum'); //sintaxi per sortir de la  carpeta de tests

describe('proves aritmetiques', ()=>{
    test(' 1 + 2 es igual a 3', () => {
        expect(sum(1, 2)).toBe(3);
      });
      it('hauria de resultar 3', () =>{
          expect(sum(1,2)).toBe(3)
      })
      test(' 1 + (-2) es igual a -1', () => {
        expect(sum(1, -2)).toBe(-1);
      });
      test(' -1 + (-2) es igual a -3', () => {
        expect(sum(-1, -2)).toBe(-3);
      });
})

//executem el test amb el comando npm test
