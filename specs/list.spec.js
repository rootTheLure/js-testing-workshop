const List = require("../src/list.js");

describe('linked list', function(){

    describe('add', function(){
        it('increments list size ', function(){
            let myList = new List();
            myList.add('value_1');
            myList.add('value_2');

            expect(myList.size).to.be.equal(2);
        });

        it('adds item at empty list', function(){
            let myList = new List();
            myList.add('value_1');

            expect(myList.head).to.be.equal(true);
        });
    });

    describe('getAt', function(){
        it('should return item by index', function(){
            let myList = new List();
            myList.add('value_1');
            myList.add('value_2');
            myList.add('value_3');
            myList.add('value_4');

            let result = myList.getAt(2);
            
            expect(result).to.be.equal('value_3');
        });
    });

    describe('removeAt, removes item by index', function(){
        it('should decrement list size', function(){
            let myList = new List();
            myList.add('value_1');
            myList.add('value_2');
            myList.add('value_3');
            myList.add('value_4');
            
            let result = myList.size - 1; 
            
            myList.removeAt(2);
            
            expect(myList.size).to.be.equal(result);
        });

        it('siblings of removed item should be connected', function(){
            let myList = new List();
            myList.add('value_1');
            myList.add('value_2');
            myList.add('value_3');
            myList.add('value_4');
            
            let nextItem = myList.getAt(2);
            myList.removeAt(1);
            
            expect(myList.head.next == nextItem).to.be.equal(true);
        });

        it('should reject incorected index', function(){
            let myList = new List();
            
            myList.removeAt(-3);
            
            expect(myList.size).to.be.equal(myList.size);
        });
    });

    describe('indexOf', function(){
        it('should return index of value', function(){
            let myList = new List();
            myList.add('value_1');
            myList.add('value_2');
            myList.add('value_3');
            myList.add('value_4');

            let result = myList.indexOf('value_3');
            
            expect(result).to.be.equal(2);
        });
    });
});