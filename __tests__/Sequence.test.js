import Sequence from '../src/behaviourTree/Sequence.js';
import Leaf from '../src/behaviourTree/Leaf.js';

test('Sequence should return FAILURE if any child returns FAILURE', () => {
  const successLeaf = new Leaf('Success Leaf', () => 'SUCCESS');
  const failLeaf = new Leaf('Fail Leaf', () => 'FAILURE');
  const sequence = new Sequence('Test Sequence');
  sequence.addChild(successLeaf);
  sequence.addChild(failLeaf);
  const result = sequence.process();
  expect(result).toBe('FAILURE');
});

test('Sequence should return SUCCESS if all children return SUCCESS', () => {
  const successLeaf1 = new Leaf('Success Leaf 1', () => 'SUCCESS');
  const successLeaf2 = new Leaf('Success Leaf 2', () => 'SUCCESS');
  const sequence = new Sequence('Test Sequence');
  sequence.addChild(successLeaf1);
  sequence.addChild(successLeaf2);
  const result = sequence.process();
  expect(result).toBe('SUCCESS');
});
