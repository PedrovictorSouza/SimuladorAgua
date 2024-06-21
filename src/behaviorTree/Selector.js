import Node from './Node.js';

class Selector extends Node {
    constructor(name) {
        super(name);
    }

    process() {
        for (let child of this.children) {
            const status = child.process();
            if (status !== 'FAILURE') {
                return status;
            }
        }
        return 'FAILURE';
    }

    countSuccesses() {
        return this.children.filter(child => child.process() === 'SUCCESS').length;
    }
}

export default Selector;
