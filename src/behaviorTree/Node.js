class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    removeChild(node) {
        const index = this.children.indexOf(node);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    }

    getChildrenCount() {
        return this.children.length;
    }


    findChildByName(name) {
        return this.children.find(child => child.name === name);
    }

    countSuccesses() {
        return this.children.filter(child => child.process() === 'SUCCESS').length;
    }

    clone() {
        const clonedNode = new Node(this.name);
        this.children.forEach(child => clonedNode.addChild(child.clone()));
        return clonedNode;
    }

    isLeaf() {
        return this.children.length === 0;
    }


    process() {
        throw new Error('Process method must be implemented by subclass');
    }
}

export default Node;
