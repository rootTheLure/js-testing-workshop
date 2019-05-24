var List = require('../src/List');

describe('List', function () {
    describe('add', function () {
        it ('should stores specified value to the list', function() {
            const list = new List();
            list.add('value1');
            list.add('value2');
            list.add('value3');
            let result = list.indexOf('value2');
            expect(result).to.be.equal(1);
        });

        it ('should stores specified value to the list', function() {
            const list = new List();
            list.add('value1');
            list.add('value2');
            list.add('value3');
            list.add('value4');
            let result = list.indexOf('value3');
            expect(result).to.be.equal(2);
        });
        
        it ('should stores specified value to the list', function() {
            const list = new List();
            list.add('value1');
            list.add('value2');
            list.add('value3');
            list.add('value4');
            let result = list.indexOf('value1');
            expect(result).to.be.equal(0);
        });
        
        it ('should returs valid length of list', function() {
            const list = new List();
            list.add('value1');
            list.add('value2');
            list.add('value3');
            let result = list.length;
            expect(result).to.be.equal(3);
        });
        
        it ('should returs valid length of list', function() {
            const list = new List();
            list.add('value1');
            list.add('value2');
            list.add('value3');
            list.add('value4');
            list.add('value5');
            let result = list.length;
            expect(result).to.be.equal(5);
        });
        
        it ('should returs valid length of list', function() {
            const list = new List();
            list.add('value1');
            list.add('value2');
            list.add('value3');
            list.add('value4');
            list.add('value5');
            list.add('value6');
            list.add('value7');
            list.add('value8');
            list.add('value9');
            list.add('value10');
            let result = list.length;
            expect(result).to.be.equal(10);
        });
    });

    describe('getAt', function () {
        it ('should returns element by specified index', function() {
            const list = new List();
            list.add('value1');
            list.add('value2');
            list.add('value3');
            let result = list.getAt(0);
            expect(result).to.be.equal('value1');
        });

        it ('should returns element by specified index', function() {
            const list = new List();
            list.add('value1');
            list.add('value2');
            list.add('value3');
            list.add('value4');
            list.add('value5');
            let result = list.getAt(4);
            expect(result).to.be.equal('value5');
        });
        it ('should returns element by specified index', function() {
            const list = new List();
            list.add('value1');
            list.add('value2');
            list.add('value3');
            list.add('value4');
            list.add('value5');
            list.add('value6');
            list.add('value7');
            list.add('value8');
            list.add('value9');
            list.add('value10');
            let result = list.getAt(9);
            expect(result).to.be.equal('value10');
        });
    });

    describe('removeAt', function () {
        it ('should removes item stored under specified index', function() {
            const list = new List();        
            list.add('value1');
            list.add('value2');
            list.add('value3');
            list.removeAt(0);
            let result = list.indexOf('value2');
            expect(result).to.be.equal(0);
        });
        
        it ('should returns valid length of list', function() {
            const list = new List();
            list.add('value1');
            list.add('value2');
            list.add('value3');
            list.removeAt(0);
            let result = list.length;
            expect(result).to.be.equal(2);
        });
    });

    describe('indexOf', function () {
        it ('should returns index of specified value', function() {
            const list = new List();
            list.add('value1');
            list.add('value2');
            list.add('value3');            
            let result = list.indexOf('value2');
            expect(result).to.be.equal(1);
        });
        
        it ('should not change length of list', function() {
            const list = new List();
            list.add('value1');
            list.indexOf('value1');
            let result = list.length;
            expect(result).to.be.equal(1);
        });
    });
});
