var Stack = require('../src/Stack.js');

describe('Stack', function () {
    describe('constructor size', function () {
        it('should return correct stack size', function () {
            var expectedSize = 20;

            for (let i = 1; i < expectedSize; i += 1) {
                var testStack = new Stack();
                expect(testStack.maxSize).to.be.equal(i);
            };
        });
        it('should return 1 if stack size not defined', function () {
            var testStack = new Stack();
            expect(testStack.maxSize).to.be.equal(1);
        });
    });
    describe('push', function () {
        it('should push element to stack', function () {
            var element = 10;
            var testStack = new Stack(5);
            testStack.push(element);
            expect(testStack.stackArr[testStack - 1]).to.be.equal(element);
        });
        it('should push array of elements', function () {
            var testStack = new Stack();
            var pushData = [1, 2, 3, 4, 5];
            testStack.push(pushData);
            for (let i = 0; i < pushData.length; i += 1) {
                expect(testStack.currentSize).to.be.equal(5);
            }
        });
    });
    describe('pop', function () {
        it('should return poped element', function () {
            var testStack = new Stack(5);
            testStack.stackArr = [1, 2, 3, 4, 5];
            expect(testStack.pop(2)).to.be.equal([4, 5]);
        });
    });
    describe('top', function () {
        it('should return top item of stack', function () {
            var testStack = new Stack(10);
            testStack.stackArr = [1, 2, 3, 4, 5, 6, 7, 8, 9.10];
            expect(testStack.top()).to.be.equal(1);
        });
    });
    describe('merge', function () {
        it('should merge 2 stacks in one, when second param is true', function () {
            var firstStack = new Stack(5);
            firstStack.stackArr = [1, 2, 3, 4, 5];
            var secondStack = new Stack(3);
            secondStack.stackArr = [6, 7, 8];
            expect(firstStack.merge(secondStack, true)).to.be.equal([6, 7, 8, 1, 2, 3, 4, 5]);

        });
        it('should merge 2 stacks in one, when second param is false', function () {
            var firstStack = new Stack(5);
            firstStack.stackArr = [1, 2, 3, 4, 5];
            var secondStack = new Stack(3);
            secondStack.stackArr = [6, 7, 8];
            expect(firstStack.merge(secondStack, false)).to.be.equal([1, 2, 3, 4, 5, 6, 7, 8]);
        });
    });
});