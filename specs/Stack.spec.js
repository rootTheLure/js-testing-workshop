const { Stack } = require('../src/Stack');

let stack;

describe('Stack', () => {
    describe('#constructor', () => {
        it('Should create a stack with max size equals to value passed to constructor', () => {
            const maxSize = 10;
            stack = new Stack(maxSize);
            expect(stack.size).to.be.equal(maxSize);
        });
    });

    describe('#push', () => {
        beforeEach(() => {
            const maxSize = 10;
            stack = new Stack(maxSize);
        });

        it('Should receive infinite number of items and place one by one to stack', () => {

            stack.push(1, 2, 3, 4, 5);
            expect(stack.size).to.be.equal(5);
        });
        it('Should not push more items than size of stack', () => {
            // const maxSize = 3;
            // const stack = new Stack(maxSize);
            stack.push(1, 2, 3, 4, 5);
            expect(stack.size).to.be.equal(3);
        });
    });

    describe('#pop', () => {
        it('Should not throw if poping from empty stack', () => {
            stack = new Stack(0);
            (() => {
                stack.pop();
            }).should.not.throw();
        });
        it('Should return correct element', () => {
            stack = new Stack(1);
            const item = 1;
            stack.push(item);
            expect(stack.pop()).to.equal(item);
        });
    });

    describe('#top', () => {
        beforeEach(() => {
            const maxSize = 3;
            stack = new Stack(maxSize);
            stack.push(1);
            stack.push(2);
            stack.push(3);
        });

        it('Should return top element from the stack', () => {
            expect(stack.top()).to.be.equal(3);
            expect(stack.top()).to.be.equal(3);
        });
    });

    describe('#merge', () => {
        let stackA;
        let stackB;

        beforeEach(() => {
            stackA = new Stack(2);
            stackA.push(1, 2);
            stackB = new Stack(3);
            stackB.push(3, 4, 5);
        });

        it('Shoul merge two stacks correctly with true flag', () => {
            stackA.merge(stackB, true);
            expect(stackA.top()).to.equal(2);
        });

        it('Shoul merge two stacks correctly with false flag', () => {
            stackA.merge(stackB, true);
            expect(stackA.top()).to.equal(5);
        });
    });
});
