import Node from './Node.js';

class Selector extends Node {
    process() {
        for (let child of this.children) {
            const status = child.process();
            if (status !== 'FAILURE') {
                return status;
            }
        }
        return 'FAILURE';
    }
}

export default Selector;
