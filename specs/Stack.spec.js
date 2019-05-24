const Stack = require('../src/Stack');

describe('Stack', () => {
    const size = 42;
    const n = 3;
    describe('#push', () => {
        it('should receive infinite number of items and place one by one to stack', () => {
            const stack = new Stack(size);
            stack.push(1, 2, 3);
            expect(stack.items).to.eql([1, 2, 3]);
        });
        it('should change size of structure', () => {
            const args = [1, 2, 3];
            const stack = new Stack(size);
            stack.push(...args);
            expect(stack.size).to.have.lengthOf(args.length);
        });
        it('should throw an error if stack overflow', () => {
            const stack = new Stack(4);
            expect(stack.push(1, 2, 3, 4, 5)).to.throw();
        });
    });
    describe('#pop', () => {
        it('should return array', () => {
            const stack = new Stack(size);
            const popped = stack.pop(n);
            expect(popped).to.be.an.instanceof(Array);
        });
        it('should remove n items from structure', () => {
            const stack = new Stack(size);
            stack.push(1, 2, 3, 4, 5);
            stack.pop(n);
            expect(stack.items).to.eql([1, 2]);
        });
        it('should return array of proper length', () => {
            const stack = new Stack(size);
            const popped = stack.pop(n);
            expect(popped).to.have.lengthOf(n);
        });
        it('should return array containing n items of stack', () => {
            const stack = new Stack(size);
            stack.push(1, 2, 3, 4, 5);
            const popped = stack.pop(n);
            expect(popped).to.eql([5, 4, 3]);
        });
        it('should change the size of stack', () => {
            const stack = new Stack(size);
            stack.push(1, 2, 3, 4, 5);
            stack.pop(n);
            expect(stack.size).to.equal(2);
        });
    });
    describe('#top', () => {
        it('should return top item of stack', () => {
            const stack = new Stack(size);
            stack.push(1, 2, 3);
            const top = stack.top();
            expect(top).to.equal(3);
        });
        it('should not remove returned item from structure', () => {
            const stack = new Stack(size);
            stack.push(1, 2, 3, 4, 5);
            stack.top();
            expect(stack.items).to.eql([1, 2, 3, 4, 5]);
        });
        it('should not change size of structure', () => {
            const stack = new Stack(size);
            stack.push(1, 2, 3, 4, 5);
            stack.top();
            expect(stack.size).to.equal(5);
        });
    });
    describe('#merge', () => {
        it('should return new stack', () => {
            const stackA = new Stack(size);
            stackA.push(1, 2, 3);
            const stackB = new Stack(size);
            stackB.push(4, 5, 6);
            const stackC = stackA.merge(stackB, true);
            expect(stackC).to.be.an.instanceof(Stack);
        });
        it('should merge 2 stacks in one in right order if bool param is true', () => {
            const stackA = new Stack(size);
            stackA.push(1, 2, 3);
            const stackB = new Stack(size);
            stackB.push(4, 5, 6);
            const stackC = stackA.merge(stackB, true);
            expect(stackC.items).to.eql([4, 5, 6, 1, 2, 3]);
        });
        it('should merge 2 stacks in one in right order if bool param is false', () => {
            const stackA = new Stack(size);
            stackA.push(1, 2, 3);
            const stackB = new Stack(size);
            stackB.push(4, 5, 6);
            const stackC = stackA.merge(stackB, false);
            expect(stackC.items).to.eql([1, 2, 3, 4, 5, 6]);
        });
        it('should return new stack with right size', () => {
            const stackA = new Stack(size);
            stackA.push(1, 2, 3);
            const stackB = new Stack(size);
            stackB.push(4, 5, 6);
            const stackC = stackA.merge(stackB, true);
            expect(stackC.size).to.equal(6);
        });
    });
});
