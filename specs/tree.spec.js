const Tree = require('../src/tree');

let tree;
describe('tree', () => {
    beforeEach(() => {
        tree = new Tree();
    });
    describe('insert', () => {
        it('should store value in root if tree is empty', () => {
            tree.insert(8, 'a');

            expect(tree.root).to.be.equal({ key: 8, value: 'a' });
        });
        it('should store value in this.root.left if key is smaller then root', () => {
            tree.insert(8, 'a');
            tree.insert(2, 'b');

            expect(tree.left).to.be.equal({
                key: 2, value: 'b', left: null, right: null,
            });
        });
        it('should store value in this.root.right if key is bigger then root', () => {
            tree.insert(8, 'a');
            tree.insert(14, 'c');

            expect(tree.root.right).to.be.equal({
                key: 14, value: 'c', left: null, right: null,
            });
        });

        it('should store value in this.root.left if key is smaller then root.left', () => {
            tree.insert(8, 'a');
            tree.insert(2, 'b');
            tree.insert(1, 'd');

            expect(tree.root.left.left).to.be.equal({
                key: 1, value: 'd', left: null, right: null,
            });
        });
    });
    describe('delete', () => {
        it('should remove node by key from tree containing only root ', () => {
            tree.insert(8, 'a');
            tree.delete('a');

            expect(tree.root).to.be.equal(null);
        });
        it('should remove node by key from tree containing no childrem', () => {
            tree.insert(8, 'a');
            tree.insert(2, 'b');
            tree.insert(14, 'c');
            tree.delete('b');

            expect(tree.root.left).to.be.equal(null);
        });
        it('should remove node by key from tree containing one childrem', () => {
            tree.insert(8, 'a');
            tree.insert(2, 'b');
            tree.insert(14, 'c');
            tree.insert(1, 'd');
            tree.delete('b');

            expect(tree.root.left).to.be.equal({
                key: 1, value: 'd', left: null, right: null,
            });
        });
        it('should remove node by key from tree with two children', () => {
            tree.insert(8, 'a');
            tree.insert(2, 'b');
            tree.insert(14, 'c');
            tree.insert(1, 'd');
            tree.insert(6, 'e');
            tree.insert(4, 'f');
            tree.insert(7, 'g');
            tree.delete('b');

            expect(tree.root.left).to.be.equal({
                key: 4,
                value: 'f',
                left: {
                    key: 1, value: 'd', left: null, right: null,
                },
                right: {
                    key: 6,
                    value: 'e',
                    left: null,
                    right:
                    {
                        key: 7, value: 'g', left: null, right: null,
                    },
                },
            });
        });
    });

    describe('search', () => {
        it('should return stored data in tree using key', () => {
            tree.insert(8, 'a');
            tree.insert(2, 'b');
            tree.insert(14, 'c');

            const result = tree.search(2);

            expect(result).to.be.equal('b');
        });
    });

    describe('contains', () => {
        it('should return true if tree contains such value', () => {
            tree.insert(8, 'a');

            const result = tree.contains(8);

            expect(result).to.be.equal(true);
        });
        it('should return false if tree doesn\'t contains such value', () => {
            tree.insert(8, 'a');

            const result = tree.contains(13);

            expect(result).to.be.equal(false);
        });
    });
});
