let List = require('../src/List.js');

describe('List', function() {
    describe('length', function() {
        it('should return a number'), function() {
            let list = new List('element');

            list.length.should.be('number');
        };
        it('should return counts of elements in list', function() {
            let list = new List('element');

            //list.length.should.equal(1);
            should(list.length()).be.equal(1);
        });
    });

    describe('add', function() {
        it('should add new element', function() {
            let list = new List('element');
            
            list.length.should.equal(2);
        });
    });

    describe('removeAt', function() {
        it('should element with index', function() {
            let list = new List('element');
            
            list.length.should.equal(2);
        });
    });    
});
