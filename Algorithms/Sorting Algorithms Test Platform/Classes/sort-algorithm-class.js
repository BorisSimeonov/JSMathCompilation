class SortAlgorithm {
    constructor(name, source) {
        this.name = name;
        this.source = source;
    }

    execute(array) {
        return this.source(array);
    }
}

module.exports = SortAlgorithm;