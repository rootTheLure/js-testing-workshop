var Queue = require('../src/Queue');

describe('Queue', function() {
    describe('push', function() {
        it('should push element to queue', function() {
            var size = 5;
            var queue1 = new Queue(size);
            var startArr = [1, 2, 3];
            queue1.push(...startArr);
            expect(queue1.storage).to.be.equal(startArr);
        });
        
        it('should push after push', function() {
            var size = 5;
            var queue = new Queue(size);
            queue.push(1);
            queue.push(2);
            expect(queue).to.be.equal([1 ,2]);
        });
    });
    
    describe('pop', function() {
        it('should return array', function() {
            var size = 5;
            var queue = new Queue(size);
            expect(queue.pop() instanceof Array).to.be.equal(true);
        });

        it('should remove first element', function() {
            var size = 5;
            var queue = new Queue(size);
            var startArr = [1, 2, 3];
            queue.push(startArr);
            queue.pop();
            startArr.shift();
            expect(queue.storage).to.be.equal(startArr);
        });

        it('should remove first element after pop', function() {
            var size = 5;
            var queue = new Queue(size);
            var startArr = [1, 2, 3];
            queue.push(startArr);
            queue.pop().pop();
            startArr.shift().shift();
            expect(queue.storage).to.be.equal(startArr);
        });

        it('should remove top if queue had 1 element', function() {
            var size = 5;
            var queue = new Queue(size);
            var startArr = [1];
            queue.push(startArr);
            expect(queue.top()).to.be.equal(undefined);
        });
    });

    describe('top', function() {
        it('should save top after push if queue is does not empty', function() {
            var size = 5;
            var queue = new Queue(size);
            var top = 1;
            queue.push(top);
            queue.push(2);
            expect(queue.top()).to.be.equal(top);
        });

        it('should change top after pop to second element', function() {
            var size = 5;
            var queue = new Queue(size);
            var top = 1;
            var secondEl = 2;
            queue.push(top, secondEl);
            queue.pop();
            expect(queue.top()).to.be.equal(secondEl);
        });

        it('should be add to queue after push if queue is empty', function() {
            var size = 5;
            var queue = new Queue(size);
            var top = 1;
            queue.push(top);
            expect(queue.top()).to.be.equal(top);
        });
    });

    describe('merge', function() {
        it('should merge second queue at the end of first queue', function() {
            var size = 5;
            var firstArr = [1, 2, 3];
            var secondArr = [4, 5, 6];
            var firstQueue = new Queue(size);
            var secondQueue = new Queue(size);
            firstQueue.push(...firstArr);
            secondArr.push(...secondArr);
            var doubleQueue = firstQueue.merge(secondQueue, false);
            expect(doubleQueue).to.be.equal([...firstArr, ...secondArr]);
        });

        it('should merge first queue at the end of second queue', function() {
            var size = 5;
            var firstArr = [1, 2, 3];
            var secondArr = [4, 5, 6];
            var firstQueue = new Queue(size);
            var secondQueue = new Queue(size);
            firstQueue.push(...firstArr);
            secondArr.push(...secondArr);
            var doubleQueue = firstQueue.merge(secondQueue, true);
            expect(doubleQueue).to.be.equal([...secondArr, ...firstArr]);
        });

        it('should set top of first queue', function() {
            var size = 5;
            var firstArr = [1, 2, 3];
            var secondArr = [4, 5, 6];
            var firstQueue = new Queue(size);
            var secondQueue = new Queue(size);
            firstQueue.push(...firstArr);
            secondArr.push(...secondArr);
            var doubleQueue = firstQueue.merge(secondQueue, false);
            expect(doubleQueue.top()).to.be.equal(1);
        });

        it('should set top of second queue', function() {
            var size = 5;
            var firstArr = [1, 2, 3];
            var secondArr = [4, 5, 6];
            var firstQueue = new Queue(size);
            var secondQueue = new Queue(size);
            firstQueue.push(...firstArr);
            secondArr.push(...secondArr);
            var doubleQueue = firstQueue.merge(secondQueue, true);
            expect(doubleQueue.top()).to.be.equal(4);
        });

        it('new queue should be instance of Queue', function() {
            var size = 5;
            var firstArr = [1, 2, 3];
            var secondArr = [4, 5, 6];
            var firstQueue = new Queue(size);
            var secondQueue = new Queue(size);
            firstQueue.push(...firstArr);
            secondArr.push(...secondArr);
            var doubleQueue = firstQueue.merge(secondQueue, true);
            expect(doubleQueue instanceof Queue).to.be.equal(true);
        });
    });
});
