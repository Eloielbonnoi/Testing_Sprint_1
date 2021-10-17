const {sum, res, div, mul} = require('../src/aritmetica.js');

describe('proves aritmetiques', () => {
    test(' 1 + 2 es igual a 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    it('hauria de resultar 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
    test(' -1 + (-2) es igual a -3', () => { 
        expect(sum(-1, -2)).toBe(-3);
    });
    test(' 5 - 10 es igual a -5', () => {
        expect(res(5, 10)).toBe(-5);
    });
    test('10 / 5 es igual a 2', () => {
        expect(div(10, 5)).toBe(2);
        console.log(test);
    });
    test('3 * 3 es igual a 9', () => {
        expect(mul(3, 3)).toBe(9);
    });
});

//executem el test amb el comando npm test