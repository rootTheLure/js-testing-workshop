const List = require("../src/list.js");

describe('linked list', function(){

    describe('add', function(){
        it('increments list size ', function(){
            let myList = new List();
            myList.add('value_1');
            myList.add('value_2');

            expect(myList.size).to.be.equal(2);
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
        it('decremens list size', function(){
            let myList = new List();
            myList.add('value_1');
            myList.add('value_2');
            myList.add('value_3');
            myList.add('value_4');
            
            let result = myList.size - 1; 
            
            myList.removeAt(2);
            expect(myList.size).to.be.equal(result);
        });
    });

    describe('index of value', function(){
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