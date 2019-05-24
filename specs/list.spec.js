var List = require('../src/List');

describe('List', function () {
    describe('sum', function () {
        it ('should return the sum of two numbers', function() {
            const list = new List();
            let result = list.sum(2,3);
            expect(result).to.be.equal(5);
        });
    });

    describe('add', function () {
        it ('should stores specified value to the list', function() {
            const list = new List();
            let result = list.sum(2,3);
            expect(result).to.be.equal(5);
        });
    });

    describe('getAt', function () {
        it ('should returns element by specified index', function() {
            const list = new List();
            let result = list.sum(2,3);
            expect(result).to.be.equal(5);
        });
    });

    describe('removeAt', function () {
        it ('should removes item stored under specified index', function() {
            const list = new List();
            let result = list.sum(2,3);
            expect(result).to.be.equal(5);
        });
    });

    describe('indexOf', function () {
        it ('should returns index of specified value', function() {
            const list = new List();
            let result = list.sum(2,3);
            expect(result).to.be.equal(5);
        });
    });
});




// const list = new List();

// /**
//   WARNING:
//   Please use the suggested functions names!
// **/

// // stores specified value to the list;
// list.add(value);

// // returns element by specified index;
// list.getAt(index);

// // removes item stored under specified index;
// list.removeAt(index);

// // returns index of specified value;
// list.indexOf(value);