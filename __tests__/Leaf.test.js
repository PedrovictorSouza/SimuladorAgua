import Leaf from '../src/behaviourTree/Leaf.js';

test('Leaf should be instantiated with a name and action', () => {
  const action = jest.fn();
  const leaf = new Leaf('Test Leaf', action);
  expect(leaf.name).toBe('Test Leaf');
  expect(leaf.action).toBe(action);
  expect(leaf.wasExecuted()).toBe(false);
});

test('Leaf process method should call the action', () => {
  const action = jest.fn(() => 'SUCCESS');
  const leaf = new Leaf('Test Leaf', action);
  const result = leaf.process();
  expect(action).toHaveBeenCalled();
  expect(result).toBe('SUCCESS');
  expect(leaf.wasExecuted()).toBe(true);
});

test('Leaf should reset its executed state', () => {
  const action = jest.fn(() => 'SUCCESS');
  const leaf = new Leaf('Test Leaf', action);
  leaf.process();
  expect(leaf.wasExecuted()).toBe(true); // Verificar se foi executado após o process
  leaf.reset();
  expect(leaf.wasExecuted()).toBe(false); // Verificar se o estado foi resetado
});

test('Leaf should have a unique identifier', () => {
  const action = jest.fn();
  const leaf1 = new Leaf('Test Leaf 1', action);
  const leaf2 = new Leaf('Test Leaf 2', action);
  expect(leaf1.id).toBeDefined();
  expect(leaf2.id).toBeDefined();
  expect(leaf1.id).not.toBe(leaf2.id); // Verificar se os IDs são únicos
});

test('Leaf should update its action', () => {
  const action1 = jest.fn(() => 'SUCCESS');
  const action2 = jest.fn(() => 'FAILURE');
  const leaf = new Leaf('Test Leaf', action1);
  expect(leaf.process()).toBe('SUCCESS'); // Verificar se a ação inicial é chamada
  leaf.updateAction(action2);
  leaf.reset(); // Resetar o estado para poder testar a nova ação
  expect(leaf.process()).toBe('FAILURE'); // Verificar se a nova ação é chamada
});

test('Leaf should correctly identify if the action was successful', () => {
  const successAction = jest.fn(() => 'SUCCESS');
  const failureAction = jest.fn(() => 'FAILURE');
  const successLeaf = new Leaf('Success Leaf', successAction);
  const failureLeaf = new Leaf('Failure Leaf', failureAction);
  expect(successLeaf.isActionSuccessful()).toBe(true); // Verificar se a ação é bem-sucedida
  expect(failureLeaf.isActionSuccessful()).toBe(false); // Verificar se a ação não é bem-sucedida
});

test('Leaf should correctly measure the execution time of the action', () => {
  const action = jest.fn(() => {
      const start = Date.now();
      while (Date.now() - start < 50) {} // Simula uma ação que leva 50ms
      return 'SUCCESS';
  });
  const leaf = new Leaf('Test Leaf', action);
  leaf.process();
  expect(leaf.getExecutionTime()).toBeGreaterThanOrEqual(50); // Verifica se o tempo de execução é de pelo menos 50ms
});

test('Leaf should count the number of successful executions', () => {
  const successAction = jest.fn(() => 'SUCCESS');
  const failureAction = jest.fn(() => 'FAILURE');
  const leaf = new Leaf('Test Leaf', successAction);

  leaf.process();
  leaf.process();
  leaf.updateAction(failureAction);
  leaf.process();

  expect(leaf.successfulExecutions()).toBe(2); // Verifica se o número de execuções bem-sucedidas é 2
});

test('Leaf should log executions', () => {
  const action = jest.fn(() => 'SUCCESS');
  const leaf = new Leaf('Test Leaf', action);
  
  leaf.process();
  const log = leaf.getLog();
  expect(log.length).toBe(1); // Verifica se há uma entrada no log
  expect(log[0].result).toBe('SUCCESS'); // Verifica o resultado da ação logada
  expect(typeof log[0].executionTime).toBe('number'); // Verifica se o tempo de execução é um número

  leaf.process();
  expect(leaf.getLog().length).toBe(2); // Verifica se há duas entradas no log após a segunda execução
});