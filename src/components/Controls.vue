

<script setup>
import { ref } from 'vue';
import { updatePosition } from '../utils/useCar'; // Importa a função updatePosition do useCar.js
import BehaviorTreeService from '../services/BehaviorTreeService.js'; // Certifique-se de que o nome está correto

// Serviço da árvore de comportamento
const behaviorTreeService = new BehaviorTreeService(updatePosition);

let moveInterval = ref(null);

function startMoving() {
  if (!moveInterval.value) {
    moveInterval.value = setInterval(() => {
      updatePosition('RIGHT');
    }, 100);
  }
}

function stopMoving() {
  clearInterval(moveInterval.value);
  moveInterval.value = null;
}

function startBehaviorTree() {
  console.log("Starting behavior tree");
  behaviorTreeService.process();
}
</script>

<style scoped>
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
