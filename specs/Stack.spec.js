const Stack = require('../src/Stack');

describe('stack', () => {
    describe('create stack', () => {
        it('should return true if stack is an instance of Stack', () => {
            const stack = new Stack();
            assert.instanceOf(stack, Stack, 'should return true if stack is an instance of Stack');
        });
    });

    describe('stack push', () => {
        it('stack should have method push', () => {
            const stack = new Stack();
            assert.property(stack, 'push');
        });

        it('should push() in stack', () => {
            const stack = new Stack(5);
            stack.push(1, 2, 3, 4, 5);
            assert(stack === [1, 2, 3, 4, 5], 'should return [1, 2, 3, 4, 5]');
        });
    });

    describe('stack pop', () => {
        it('stack should have method pop', () => {
            const stack = new Stack();
            assert.property(stack, 'pop');
        });

        it('should pop() in stack', () => {
            const stack = new Stack(5);
            stack.push(1, 2, 3, 4, 5);
            stack.pop(2);
            assert(stack === [1, 2, 3], 'should return [1, 2, 3]');
        });
    });

    describe('stack top', () => {
        it('stack should have method top', () => {
            const stack = new Stack();
            assert.property(stack, 'top');
        });

        it('should return top element in stack', () => {
            const stack = new Stack(5);
            stack.push(1, 2, 3, 4, 5);
            const topElement = stack.top();
            assert(stack == [1, 2, 3, 4, 5], 'should return [1, 2, 3, 4, 5]');
            assert(topElement === 5, 'should return last element');
        });
    });
    describe('stack merge', () => {
        it('stack should have method merge', () => {
            const stack = new Stack();
            assert.property(stack, 'merge');
        });

        it('stack should method merge with parametr true', () => {
            const stack = new Stack(5);
            stack.push(1, 2, 3, 4, 5);
            stack.merge(true, 6);
            assert(stack === [1, 2, 3, 4, 5, 6], 'should return [1, 2, 3, 4, 5, 6]');
        });

        it('stack should method merge with parametr false', () => {
            const stack = new Stack(5);
            stack.push(1, 2, 3, 4, 5);
            stack.merge(false, 6);
            assert(stack === [6, 1, 2, 3, 4, 5], 'should return [6, 1, 2, 3, 4, 5]');
        });
    });
});
