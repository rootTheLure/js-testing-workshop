var Queue = require('../src/Queue.js');

describe('Queue', function () {
    describe('size', function () {
        it('should return correct max size of queue', function () {
            var testQueue = new Queue(5);
            expect(testQueue.maxSize).to.be.equal(5);
        });
    });
    describe('push', function () {
        it('should receive infinite number of items and place one by one to queue', function () {
            var testQueue = new Queue(10);
            testQueue.push([1, 2, 3, 4, 5]);
            expect(testQueue.currentQueue).to.be.equal([5, 4, 3, 2, 1]);
        });
    });
    describe('pop', function () {
        it('shoult return array contains n items', function () {
            var testQueue = new Queue(10);
            testQueue.currentQueue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            expect(testQueue.pop(2)).to.be.equal([1, 2]);
        });
    });
    describe('top', function () {
        it('should return top item of queue', function () {
            var testQueue = new Queue(5);
            testQueue.currentQueue = [1, 2, 3, 4, 5];
            expect(testQueue.top()).to.be.equal(1);
        });
    });
    describe('merge', function () {
        it('should merge 2 queues in one, when second param is true', function () {
            var firstQueue = new Queue(3);
            var secondQueue = new Queue(2);
            firstQueue.currentQueue = [1, 2, 3];
            secondQueue.currentQueue = [7, 8, 9];
            var result = firstQueue.merge(secondQueue, true);
            expect(result.currentQueue).to.be.equal([7, 8, 9, 1, 2, 3]);
        });
        it('should merge 2 queues in one, when second param is false', function () {
            var firstQueue = new Queue(3);
            var secondQueue = new Queue(2);
            firstQueue.currentQueue = [1, 2, 3];
            secondQueue.currentQueue = [7, 8, 9];
            var result = firstQueue.merge(secondQueue, true);
            expect(result.currentQueue).to.be.equal([1, 2, 3, 7, 8, 9]);
        });
    });
});