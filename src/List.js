class List {
    constructor () {
        this.list = [];
        this.length = 0;
    }

    add(value) {
        this.list.push(value);
        this.length++;
    }

    getAt(index) {
        return this.list[index];
    }

    removeAt(index) {
        this.list.splice(index, 1);
        this.length--;
    }

    indexOf(value) {
        return this.list.indexOf(value);
    }

}

module.exports = List;