var Stack = require('../src/Stack');

describe('stack', function(){
    describe('create stack', function () {
        it('should return true if stack is an instance of Stack', function () {
            var stack = new Stack();
            assert.instanceOf(stack, Stack, 'should return true if stack is an instance of Stack');
        });        
    });

    describe('stack push', function () {
        it('stack should have method push', function () {
            var stack = new Stack();
            assert.property(stack, 'push');
        });

        it('should push() in stack', function () {
            var stack = new Stack(5);
            stack.push(1, 2, 3, 4, 5);
            assert(stack === [1, 2, 3, 4, 5],'should return [1, 2, 3, 4, 5]');
        });
    });

    describe('stack pop', function () {
        it('stack should have method pop', function () {
            var stack = new Stack();
            assert.property(stack, 'pop');
        });

        it('should pop() in stack', function () {
            var stack = new Stack(5);
            stack.push(1, 2, 3, 4, 5);
            stack.pop(2);
            assert(stack === [1, 2, 3],'should return [1, 2, 3]');
        });
    });

    describe('stack top', function () {
        it('stack should have method top', function () {
            var stack = new Stack();
            assert.property(stack, 'top');
        });

        it('should return top element in stack', function () {
            var stack = new Stack(5);
            stack.push(1, 2, 3, 4, 5);
            let topElement = stack.top();
            assert(stack == [1, 2, 3, 4, 5],'should return [1, 2, 3, 4, 5]');
            assert(topElement === 5,'should return last element');
        });
    });
    describe('stack merge', function () {
        it('stack should have method merge', function () {
            var stack = new Stack();
            assert.property(stack, 'merge');
        });

        it('stack should method merge with parametr true', function () {
            var stack = new Stack(5);
            stack.push(1, 2, 3, 4, 5);
            stack.merge(true, 6);
            assert(stack === [1, 2, 3, 4, 5, 6],'should return [1, 2, 3, 4, 5, 6]');
        });

        it('stack should method merge with parametr false', function () {
            var stack = new Stack(5);
            stack.push(1, 2, 3, 4, 5);
            stack.merge(false, 6);
            assert(stack === [6, 1, 2, 3, 4, 5],'should return [6, 1, 2, 3, 4, 5]');
        });
    });
});