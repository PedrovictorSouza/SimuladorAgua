import Node from '../src/behaviorTree/Node.js';

test('Node should be instantiated with a name', () => {
  const node = new Node('Test Node');
  expect(node.name).toBe('Test Node');
});

test('Node should start with an empty children array', () => {
  const node = new Node('Test Node');
  expect(node.children).toEqual([]);
});

test('Node should be able to add children', () => {
  const node = new Node('Parent Node');
  const child = new Node('Child Node');
  node.addChild(child);
  expect(node.children).toContain(child);
});

test('Node should be able to remove children', () => {
    const node = new Node('Parent Node');
    const child = new Node('Child Node');
    node.addChild(child);
    expect(node.children).toContain(child);
    node.removeChild(child);
    expect(node.children).not.toContain(child);
});

test('Node should return correct children count', () => {
  const node = new Node('Parent Node');
  expect(node.getChildrenCount()).toBe(0); // Inicialmente, não há filhos
  const child1 = new Node('Child Node 1');
  const child2 = new Node('Child Node 2');
  node.addChild(child1);
  node.addChild(child2);
  expect(node.getChildrenCount()).toBe(2); // Deve retornar 2 após adicionar dois filhos
  node.removeChild(child1);
  expect(node.getChildrenCount()).toBe(1); // Deve retornar 1 após remover um filho
});

test('Node should find child by name', () => {
  const node = new Node('Parent Node');
  const child1 = new Node('Child Node 1');
  const child2 = new Node('Child Node 2');
  node.addChild(child1);
  node.addChild(child2);
  expect(node.findChildByName('Child Node 1')).toBe(child1); // Deve encontrar child1
  expect(node.findChildByName('Child Node 2')).toBe(child2); // Deve encontrar child2
  expect(node.findChildByName('Nonexistent Node')).toBeUndefined(); // Não deve encontrar
});

test('Node should clone itself and its children', () => {
  const node = new Node('Parent Node');
  const child1 = new Node('Child Node 1');
  const child2 = new Node('Child Node 2');
  node.addChild(child1);
  node.addChild(child2);
  const clonedNode = node.clone();
  expect(clonedNode.name).toBe(node.name);
  expect(clonedNode.getChildrenCount()).toBe(node.getChildrenCount());
  expect(clonedNode.findChildByName('Child Node 1').name).toBe('Child Node 1');
  expect(clonedNode.findChildByName('Child Node 2').name).toBe('Child Node 2');
});

test('Node should return true if it is a leaf node', () => {
  const node = new Node('Parent Node');
  expect(node.isLeaf()).toBe(true); // Sem filhos, deve ser uma folha
  const child = new Node('Child Node');
  node.addChild(child);
  expect(node.isLeaf()).toBe(false); // Com filhos, não deve ser uma folha
});

test('Node process method should throw an error', () => {
  const node = new Node('Test Node');
  expect(() => node.process()).toThrow('Process method must be implemented by subclass');
});


