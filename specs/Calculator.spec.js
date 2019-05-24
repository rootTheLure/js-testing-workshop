const { Calculator } = require('../src/Calculator');

describe('calculator', () => {
    describe('sum', () => {
        it('Should sum two values', () => {
            const calc = new Calculator();
            const result = calc.sum(2, 3);
            expect(result).to.be.equal(5);
        });
    });
});
