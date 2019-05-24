
const Calculator = require('../src/Calculator');

describe('calculator', function() {
    describe('sum', function() {
        it('Should return the sum of two numbers', function() {
            const calc = new Calculator();
            const result = calc.sum(2, 3);
            expect(result).to.be.equal(5);
        });
    });
    describe('insert', function() {
        it('Should set value to root if root is null', function() {
            
        })
    });
});
