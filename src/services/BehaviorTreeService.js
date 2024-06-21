import Tree from '../behaviorTree/Tree.js'; // Certifique-se de que 'Tree' está no caminho correto

export default class BehaviorTreeService {
  constructor(updateFunction) {
    this.tree = new Tree(updateFunction);
  }

  process() {
    console.log("Processing tree in BehaviorTreeService");
    this.tree.process();
  }
}
