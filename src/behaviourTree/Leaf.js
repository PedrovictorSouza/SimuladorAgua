import Node from './Node.js';

class Leaf extends Node {
    constructor(name, action) {
        super(name);
        this.action = action;
    }

    process() {
        return this.action();
    }
}

export default Leaf;
