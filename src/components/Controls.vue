<template>
  <button 
    @mousedown="startMoving" 
    @mouseup="stopMoving" 
    @mouseleave="stopMoving" 
    @touchstart="startMoving" 
    @touchend="stopMoving"
  >
    Mover Carro
  </button>
</template>

<script setup>
import { ref } from 'vue';
import { updatePosition } from '../utils/useCar'; // Importa a função updatePosition do useCar.js

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
</script>

<style scoped>
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
