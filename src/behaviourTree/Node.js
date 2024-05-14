class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    process() {
        throw new Error('Process method must be implemented by subclass');
    }
}

export default Node;
