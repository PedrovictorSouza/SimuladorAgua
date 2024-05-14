// services/BehaviorTreeService.js
import Tree from '../behaviourTree/Tree.js';

export default class BehaviorTreeService {
  constructor(updateFunction) {
    this.tree = new Tree(updateFunction);
  }

  process() {
    this.tree.process();
  }
}
