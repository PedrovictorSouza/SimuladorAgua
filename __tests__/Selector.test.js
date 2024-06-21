import Selector from '../src/behaviourTree/Selector.js';
import Leaf from '../src/behaviourTree/Leaf.js';

test('Selector should return SUCCESS if any child returns SUCCESS', () => {
    const successLeaf = new Leaf('Success Leaf', () => 'SUCCESS');
    const failLeaf = new Leaf('Fail Leaf', () => 'FAILURE');
    const selector = new Selector('Test Selector');
    selector.addChild(failLeaf);
    selector.addChild(successLeaf);
    const result = selector.process();
    expect(result).toBe('SUCCESS');
});

test('Selector should return FAILURE if all children return FAILURE', () => {
    const failLeaf1 = new Leaf('Fail Leaf 1', () => 'FAILURE');
    const failLeaf2 = new Leaf('Fail Leaf 2', () => 'FAILURE');
    const selector = new Selector('Test Selector');
    selector.addChild(failLeaf1);
    selector.addChild(failLeaf2);
    const result = selector.process();
    expect(result).toBe('FAILURE');
});

test('Selector should count the number of children that return SUCCESS', () => {
    const successLeaf1 = new Leaf('Success Leaf 1', () => 'SUCCESS');
    const successLeaf2 = new Leaf('Success Leaf 2', () => 'SUCCESS');
    const failLeaf = new Leaf('Fail Leaf', () => 'FAILURE');
    const selector = new Selector('Test Selector');
    selector.addChild(successLeaf1);
    selector.addChild(successLeaf2);
    selector.addChild(failLeaf);
    const successCount = selector.countSuccesses();
    expect(successCount).toBe(2); // Deve retornar 2, pois dois filhos retornam SUCCESS
});
