import Tree from '../src/behaviourTree/Tree.js';
import Selector from '../src/behaviourTree/Selector.js';
import Sequence from '../src/behaviourTree/Sequence.js';
import Leaf from '../src/behaviourTree/Leaf.js';

test('Tree should process its children correctly', () => {
  const tree = new Tree((direction) => `Move ${direction}`);
  const result = tree.process();
  expect(result).toBe('Move UP');
});
