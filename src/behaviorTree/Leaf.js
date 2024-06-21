import Node from './Node.js';
import { v4 as uuidv4 } from 'uuid';

class Leaf extends Node {
    constructor(name, action) {
        super(name);
        this.action = action;
        this.executed = false;
        this.id = uuidv4();
        this.executionTime = 0; 
        this.successfulExecutionCount = 0;
        this.log = []; 
    }

    process() {
        const startTime = Date.now();
        this.executed = true;
        const result = this.action();
        const endTime = Date.now(); // Captura o tempo final
        this.executionTime = endTime - startTime; // Calcula o tempo de execução

        if (result === 'SUCCESS') {
            this.successfulExecutionCount += 1; // Incrementa o contador se a execução foi bem-sucedida
        }

        this.logExecution(result);
        return result;
    }

    logExecution(result) {
        const timestamp = new Date().toISOString();
        this.log.push({ timestamp, result, executionTime: this.executionTime });
    }

    wasExecuted() {
        return this.executed;
    }

    reset() {
        this.executed = false;
        this.executionTime = 0;
        this.successfulExecutionCount = 0;
        this.log = []; 
    }

    updateAction(newAction) {
        this.action = newAction;
    }

    isActionSuccessful() {
        return this.action() === 'SUCCESS'; 
    }

    getExecutionTime() {
        return this.executionTime; // Retorna o tempo de execução
    }

    successfulExecutions() {
        return this.successfulExecutionCount; // Retorna o número de execuções bem-sucedidas
    }

    getLog() {
        return this.log; // Retorna o log de execuções
    }
}

export default Leaf;
