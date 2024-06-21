import Node from './Node.js';
import Sequence from './Sequence.js';
import Leaf from './Leaf.js';

class Tree extends Node {
    constructor(updatePosition) {
        super('Root');
        this.updatePosition = updatePosition;
        // Construa a árvore aqui
        this.sequence = new Sequence('Main Sequence');

        const moveTo10 = new Leaf('Move to Grid 10', () => {
            console.log('Moving to Grid 10');
            this.updatePosition(10);
            return new Promise(resolve => setTimeout(resolve, 3000));  // Espera 3 segundos
        });

        const moveTo3 = new Leaf('Move to Grid 3', () => {
            console.log('Moving to Grid 3');
            this.updatePosition(3);
        });
        const moveTo4 = new Leaf('Move to Grid 4', () => {
            console.log('Moving to Grid 4');
            this.updatePosition(4);
        });
        const moveTo5 = new Leaf('Move to Grid 5', () => {
            console.log('Moving to Grid 5');
            this.updatePosition(5);
        });
        const moveTo6 = new Leaf('Move to Grid 6', () => {
            console.log('Moving to Grid 6');
            this.updatePosition(6);
        });
        const moveTo7 = new Leaf('Move to Grid 7', () => {
            console.log('Moving to Grid 7');
            this.updatePosition(7);
        });
        const moveTo14 = new Leaf('Move to Grid 14', () => {
            console.log('Moving to Grid 14');
            this.updatePosition(14);
        });

        this.sequence.addChild(moveTo10);
        this.sequence.addChild(moveTo3);
        this.sequence.addChild(moveTo4);
        this.sequence.addChild(moveTo5);
        this.sequence.addChild(moveTo6);
        this.sequence.addChild(moveTo7);
        this.sequence.addChild(moveTo14);

        this.addChild(this.sequence);
        this.currentIndex = 0;
    }

    process() {
        console.log("Starting tree processing");
        if (this.currentIndex < this.sequence.children.length) {
            const currentLeaf = this.sequence.children[this.currentIndex];
            currentLeaf.process().then(() => {
                this.currentIndex++;
                this.process();  // Chama o próximo passo
            });
        } else {
            console.log("Behavior tree process completed");
        }
    }
}

export default Tree;
