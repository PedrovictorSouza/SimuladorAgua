import Node from './Node.js';

class Sequence extends Node {
    process() {
        for (let child of this.children) {
            const status = child.process();
            if (status !== 'SUCCESS') {
                return status;
            }
        }
        return 'SUCCESS';
    }
}

export default Sequence;
