var Calculator = require('../src/Calculator');

describe('calculator', function () {
    describe('sum', function () {
        it ('should return the sum of two numbers', function() {
            var calc = new Calculator();

            var result = calc.sum(2,3);

            expect(result).to.be.equal(5);
        });
    });
});