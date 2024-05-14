import Node from './Node.js';
import Selector from './Selector.js';
import Sequence from './Sequence.js';
import Leaf from './Leaf.js';

class Tree extends Node {
    constructor(updatePosition) {
        super('Root');
        this.updatePosition = updatePosition;
        // Construa a árvore aqui
        const selector = new Selector('Main Selector');
        const sequence = new Sequence('Main Sequence');

        // Exemplo de ação que sempre retorna 'SUCCESS'
        const moveUp = new Leaf('Move Up', () => this.updatePosition('UP'));
        const moveDown = new Leaf('Move Down', () => this.updatePosition('DOWN'));
        const moveLeft = new Leaf('Move Left', () => this.updatePosition('LEFT'));
        const moveRight = new Leaf('Move Right', () => this.updatePosition('RIGHT'));

        sequence.addChild(moveUp);
        sequence.addChild(moveDown);
        sequence.addChild(moveLeft);
        sequence.addChild(moveRight);

        // Montando a árvore
        //sequence.addChild(leaf);
        selector.addChild(sequence);
        this.addChild(selector);
    }

    process() {
        // Aqui, você poderia definir lógica específica de processamento da raiz, se necessário
        console.log("Starting tree processing");
        return this.children[0].process();
    }
}

export default Tree;
