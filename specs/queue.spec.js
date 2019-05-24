const Queue = require('../src/queue');

describe('Queue', function () {
  describe('push', function() {
    it('should insert item into queue', function() {
      let queue = new Queue();
      let listData = [
        5,
        {a : 10},
        [1,2,3],
      ];
      expect(queue.length).to.be.equal(0);
      listData.forEach((element, index) => {
        queue.push(element);
        expect(queue.length).to.be.equal(index + 1);
      });
    });
    it('should insert list item into queue', function() {
      let queue = new Queue();
      let listData = [
        5,
        {a : 10},
        [1,2,3],
      ];
      queue.push(...listData);
      expect(queue.length).to.be.equal(listData.length);
    });
  });

  describe('pop', function() {
    it('should get head item into queue', function() {
      let queue = new Queue();
      let listData = [
        5,
        {a : 10},
        [1,2,3],
      ];
      listData.forEach((element) => queue.push(element));
      queue.push(10);
      expect(queue.length).to.be.equal(4);
      let resultList = queue.pop(3);
      expect(resultList).to.deep.equal(listData);
      expect(queue.length).to.be.equal(1);
    });
  });

  describe('top', function() {
    it('returns top item of queue (do not remove returned item from structure)', function() {
      let queue = new Queue();
      let listData = [
        5,
        {a : 10},
        [1,2,3],
      ];
      listData.forEach((element) => queue.push(element));
      let result = queue.top(10);
      expect(result).to.be.equal(5);
      let result = queue.top(10);
      expect(result).to.be.equal(queue.head);  
    });
  });

  describe('merge', function() {
    it('merges 2 queues in one and returns new queue if second param true', function() {
      let firstQueue = new Queue();
      const dataFirstQueue = [1, 2, 3];
      let secondQueue = new Queue();
      const dataSecondQueue = [4, 5, 6];
      dataFirstQueue.forEach((element) => firstQueue.push(element));
      dataSecondQueue.forEach((element) => secondQueue.push(element));

      firstQueue.merge(secondQueue, true);
      let allDataQueue = firstQueue.pop(firstQueue.length);
      expect(allDataQueue).to.deep.equal(dataFirstQueue.concat(secondQueue));
    });

    it('merges 2 queues in one and returns new queue if second param false', function() {
      let firstQueue = new Queue();
      const dataFirstQueue = [1, 2, 3];
      let secondQueue = new Queue();
      const dataSecondQueue = [4, 5, 6];
      dataFirstQueue.forEach((element) => firstQueue.push(element));
      dataSecondQueue.forEach((element) => secondQueue.push(element));

      firstQueue.merge(secondQueue, false);
      let allDataQueue = firstQueue.pop(firstQueue.length);
      expect(allDataQueue).to.deep.equal(secondQueue.concat(dataFirstQueue));
    });
  });
});