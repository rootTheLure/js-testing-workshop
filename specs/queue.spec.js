const Queue = require('../src/queue');

describe('Queue', function () {
    describe('#push', function () {
        it('should add all values', function () {
            [
                {
                    n: 10,
                    test: [1, 2, 3, 4, 5],
                    result: [1, 2, 3, 4, 5],
                }, {
                    n: 20,
                    test: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
                    result: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
                }, {
                    n: 20,
                    test: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                    result: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                }, {
                    n: 1,
                    test: [1],
                    result: [1],
                },
            ].forEach(data => {
                let queue = new Queue(data.n);
                queue.push(...data.test);

                expect(queue.queue).to.be.equal(data.result);
            });
        });

        it('should add more values, then queue max size', function () {
            [
                {
                    n: 3,
                    test: [1, 2, 3, 4, 5],
                    result: [1, 2, 3],
                }, {
                    n: 10,
                    test: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
                    result: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                }, {
                    n: 5,
                    test: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                    result: [1, 3, 5, 7, 9],
                }, {
                    n: 1,
                    test: [1, 99],
                    result: [1],
                },
            ].forEach(data => {
                let queue = new Queue(data.n);
                queue.push(...data.test);

                expect(queue.queue, 'should be reduced to queue max size').to.be.equal(data.result);
            });
        });

        it('should return error, when push in queue with max size 0', function () {
            let queue = new Queue(0);
            queue.push(1, 2, 3);

            expect(queue.queue).to.be.an('error');
        });
    });

    describe('#pop', function () {
        it('should get values from queue', function () {
            [
                {
                    n: 3,
                    test: [1, 2, 3, 4, 5],
                    result: [1, 2, 3],
                }, {
                    n: 5,
                    test: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
                    result: [1, 3, 5, 7, 9],
                }, {
                    n: 10,
                    test: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                    result: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                }, {
                    n: 1,
                    test: [1],
                    result: [1],
                },
            ].forEach(data => {
                let queue = new Queue(100);
                queue.queue = [...data.test];

                expect(queue.pop(data.n)).to.be.equal(data.result);
            });
        });
        
        it('should get all values, when N is more then queue max size', function () {
            [
                {
                    n: 6,
                    test: [1, 2, 3, 4, 5],
                    result: [1, 2, 3, 4, 5],
                }, {
                    n: 20,
                    test: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
                    result: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
                }, {
                    n: 50,
                    test: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                    result: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                }, {
                    n: 10,
                    test: [1, 99],
                    result: [1, 99],
                },
            ].forEach(data => {
                let queue = new Queue(100);
                queue.queue = [...data.test];

                expect(queue.pop(data.n)).to.be.equal(data.result);
            });
        });

        it('should get empty array from empty queue', function () {
            let queue = new Queue(100);

            expect(queue.pop(100)).to.be.equal([]);
        });

        it('should return error, when get from queue with max size 0', function () {
            let queue = new Queue(0);

            expect(queue.pop(1)).to.be.an('error');
        });
    });

    describe('#top', function () {
        it('should get first element', function () {
            [
                {
                    test: [1, 2, 3, 4, 5],
                    result: 1,
                }, {
                    test: [13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
                    result: 13,
                }, {
                    test: [7, 9, 11, 13, 15, 17, 19],
                    result: 7,
                }, {
                    test: [199],
                    result: 199,
                },
            ].forEach(data => {
                let queue = new Queue(100);
                queue.queue = [...data.test];

                expect(queue.top()).to.be.equal(data.result);
            });
        });

        it('should get null if queue is empty', function () {
            let queue = new Queue(100);

            expect(queue.top()).to.be.null;
        });

        it('should get null, when queue max size 0', function () {
            let queue = new Queue(0);

            expect(queue.top()).to.be.null;
        });
    });

    describe('#merge', function () {
        it('should consist of two queues data, but first queue data is first', function () {
            [
                {
                    queue1: [1, 2, 3, 4, 5],
                    queue2: [6, 7, 8, 9, 10],
                }, {
                    queue1: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
                    queue2: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
                }, {
                    queue1: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                    queue2: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                }, {
                    queue1: [1, 99],
                    queue2: [100, 999],
                },
            ].forEach(data => {
                let queue1 = new Queue(100);
                queue1.queue = data.queue1;
                let queue2 = new Queue(50);
                queue2 = data.queue2;
                let queue3 = new Queue(100);
                queue3 = [...data.queue1, ...data.queue2];

                expect(queue1.merge(queue1, false)).to.be.equal(queue3);
            });
        });

        it('should consist of two queues data, but second queue data is first', function () {
            [
                {
                    queue1: [1, 2, 3, 4, 5],
                    queue2: [6, 7, 8, 9, 10],
                }, {
                    queue1: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
                    queue2: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
                }, {
                    queue1: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                    queue2: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                }, {
                    queue1: [1, 99],
                    queue2: [100, 999],
                },
            ].forEach(data => {
                let queue1 = new Queue(100);
                queue1.queue = data.queue1;
                let queue2 = new Queue(50);
                queue2 = data.queue2;
                let queue3 = new Queue(100);
                queue3 = [...data.queue2, ...data.queue1];

                expect(queue1.merge(queue1, true)).to.be.equal(queue3);
            });
        });

        it('should reduce data to the size of first queue', function () {
            [
                {
                    queue1: [1, 2, 3, 4, 5],
                    queue2: [6, 7, 8, 9, 10],
                }, {
                    queue1: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
                    queue2: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
                }, {
                    queue1: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                    queue2: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                }, {
                    queue1: [1, 99],
                    queue2: [100, 999],
                },
            ].forEach(data => {
                const queue1MaxSize = data.queue1.length + Math.floor(data.queue2.length/2);
                let queue1 = new Queue(queue1MaxSize);
                queue1.queue = data.queue1;
                let queue2 = new Queue(50);
                queue2 = data.queue2;
                let queue3 = new Queue(100);
                queue3 = [...data.queue1, ...data.queue2].slice(0, queue1MaxSize + 1);

                expect(queue1.merge(queue1, false)).to.be.equal(queue3);
            });
        });

        it('should duplicate values, when merge queue with itself', function () {
            [
                {
                    values: [1, 2, 3, 4, 5],
                }, {
                    values: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
                }, {
                    values: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
                }, {
                    values: [1, 99],
                },
            ].forEach(data => {
                let queue1 = new Queue(100);
                queue1.queue = data.values;
                let queue2 = new Queue(100);
                queue2.queue = [...data.values, ...data.values];

                expect(queue1.merge(queue1, false)).to.be.equal(queue2);
            });
        });

        it('should get empty queue, when two queues are empty', function () {
            let queue1 = new Queue(100);
            let queue2 = new Queue(100);
            let queue3 = new Queue(100);

            expect(queue1.merge(queue1, false)).to.be.equal(queue3);
        });
    });
});
