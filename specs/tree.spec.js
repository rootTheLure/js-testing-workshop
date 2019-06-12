const Tree = require('../src/Tree');

describe('Tree', function() {
    describe('Constructor', function() {
        it('New constructor should create a root equal null', function() {
            const tree = new Tree();
            expect(tree.root).to.be.equal(null);
        });
    });
    describe('insert', function() {
        it('Should set key, value to root if root is null', function() {
            const tree = new Tree();
            tree.insert('elem1', 1);
            expect(tree.root.key).to.be.equal('elem1');
        });
        it('Should set key, value to root if root is null', function() {
            const tree = new Tree();
            tree.insert('elem1', 1);
            expect(tree.root.value).to.be.equal(1);
        });
        it('Should set key to left child node if node.key less that parent.key and parent.left child is empty', function() {
            const tree = new Tree();
            tree.insert(7, 'elem1');
            tree.insert(1, 'elem2')
            expect(tree.root.left.key).to.be.equal(1);
            expect(tree.root.left.value).to.be.equal('elem2');
        });
        it('Should set key to correct place in tree structure', function() {
            const tree = new Tree();
            tree.insert(7, 'elem1');
            tree.insert(4, 'elem2')
            tree.insert(2, 'elem3');
            tree.insert(5, 'elem4')
            tree.insert(9, 'elem5');
            tree.insert(1, 'elem6')
            expect(tree.root.left.left.key).to.be.equal(2);
            expect(tree.root.left.value).to.be.equal('elem3');
        });
        it('Should set key to correct place in tree structure', function() {
            const tree = new Tree();
            tree.insert(7, 'elem1');
            tree.insert(4, 'elem2')
            tree.insert(2, 'elem3');
            tree.insert(5, 'elem4')
            tree.insert(9, 'elem5');
            tree.insert(1, 'elem6')
            expect(tree.root.left.right.key).to.be.equal(5);
            expect(tree.root.left.right.value).to.be.equal('elem4');
        });
        it('Should set key to correct place in tree structure', function() {
            const tree = new Tree();
            tree.insert(7, 'elem1');
            tree.insert(4, 'elem2')
            tree.insert(2, 'elem3');
            tree.insert(5, 'elem4')
            tree.insert(9, 'elem5');
            tree.insert(1, 'elem6')
            expect(tree.root.right.left.key).to.be.equal(1);
            expect(tree.root.right.left.key).to.be.equal('elem6');
        });
        it('If parent node doesn\'t have two child one of them should return undefined key, value', function() {
            const tree = new Tree();
            tree.insert(7, 'elem1');
            tree.insert(4, 'elem2')
            tree.insert(2, 'elem3');
            tree.insert(5, 'elem4')
            tree.insert(9, 'elem5');
            tree.insert(1, 'elem6')
            expect(tree.root.right.right.key).to.be.equal(undefined);
            expect(tree.root.right.right.key).to.be.equal(undefined);
        });
    });
    describe('delete', function() {
        beforeEach(function () {
            const tree = new Tree();
            tree.insert(7, 'elem1');
            tree.insert(4, 'elem2')
            tree.insert(2, 'elem3');
            tree.insert(5, 'elem4')
            tree.insert(9, 'elem5');
            tree.insert(1, 'elem6')
        });
        it('Should throw error if key not belong a tree', function() {
            expect(tree.delete(18)).to.be.throw(ReferenceError);
        });
        it('Should delete and return node by provided key', function() {
            expect(tree.delete(1)).to.be.deep.equal({key: 1, value: 'elem6'})
        });
        it('Should delete node by provided key and if node has a children replace node place by bigger child node', function() {
            tree.delete(4);
            expect(tree.root.left.key).to.be.equal(5);
            expect(tree.root.left.key).to.be.equal('elem4');
        });
        it('Should delete node by provided key and if node has a children replace node place by bigger child node', function() {
            expect(tree.delete(4)).to.be.deep.equal({key: 4, value: 'elem2'})
        });
        it('Should delete node by provided key and if node has a children replace node place by bigger child node', function() {
            tree.delete(4)
            expect(tree.root.left.right.key).to.be.equal(undefined);
            expect(tree.root.left.right.key).to.be.equal(undefined);
        });
    });
    describe('search', function() {
        beforeEach(function () {
            const tree = new Tree();
            tree.insert(7, 'elem1');
            tree.insert(4, 'elem2')
            tree.insert(2, 'elem3');
            tree.insert(5, 'elem4')
            tree.insert(9, 'elem5');
            tree.insert(1, 'elem6')
        });
        it('Should throw error if key not belong a tree', function() {
            expect(tree.search(18)).to.be.throw(ReferenceError);
        });
        it('Should return node.value by provided key', function() {
            expect(tree.search(5)).to.be.equal(tree.left.right.value);
        });
        it('Should throw error if key was deleted', function() {
            tree.delete(5);
            expect(tree.search(5)).to.be.throw(ReferenceError);
        });
    });
    describe('contains', function() {
        beforeEach(function () {
            const tree = new Tree();
            tree.insert(7, 'elem1');
            tree.insert(4, 'elem2')
            tree.insert(2, 'elem3');
            tree.insert(5, 'elem4')
            tree.insert(9, 'elem5');
            tree.insert(1, 'elem6')
        });
        it('Should throw error if tree doesn\'t contain value', function() {
            expect(tree.contains('elem10')).to.be.throw(ReferenceError, 'This tree doesn\'t contain search value');
        });
        it('Should return true by provided value', function() {
            expect(tree.contains('elem4')).to.be.equal(true);
        });
        it('Should throw error if value was deleted', function() {
            tree.delete(5);
            expect(tree.search('elem4')).to.be.throw(ReferenceError, 'This tree doesn\'t contain search value');
        });
    });
});
