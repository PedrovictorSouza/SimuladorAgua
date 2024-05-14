<template>
  <div class="grid-container">
    <div class="grid">
      <div v-for="(item, index) in 49" :key="index" class="grid-item">
        <button class="grid-button" :class="{ active: buttonStates[index], special: isSpecialGrid(index) }" @click="moveTo(index)">
          {{ getGridLabel(index) }}
        </button>
      </div>
    </div>
    <img :src="carImage" :style="carStyle" alt="Car">
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { carStyle, updatePosition, setRotation, position } from '../utils/useCar';
import carImage from '../assets/vehicles/car.svg';  // Substitua pelo caminho correto do seu SVG

const gridSize = 7;  // Tamanho da grade (7x7)
const buttonStates = reactive(Array(49).fill(false));  // Matriz para armazenar os estados dos botões

// Identificação dos grids especiais
const specialGrids = {
  9: 'Fonte',
  11: 'Distribuidores',
  13: 'Depósito',
  17: 'Entrega ao PDV',
  19: 'Venda e entrega'
};

function moveTo(index) {
  const row = Math.floor(index / gridSize);
  const col = index % gridSize;
  const grid = document.querySelector('.grid');
  const step = grid ? grid.clientWidth / gridSize : 0;

  const targetX = col * step;
  const targetY = row * step;

  let directions = [];
  let finalDirection = '';

  if (position.x < targetX) {
    directions.push('RIGHT');
    finalDirection = 'RIGHT';
  } else if (position.x > targetX) {
    directions.push('LEFT');
    finalDirection = 'LEFT';
  }

  if (position.y < targetY) {
    directions.push('DOWN');
    finalDirection = 'DOWN';
  } else if (position.y > targetY) {
    directions.push('UP');
    finalDirection = 'UP';
  }

  directions.forEach((direction, i) => {
    setTimeout(() => {
      setRotation(direction);
      setTimeout(() => {
        updatePosition(direction);
        if (index in buttonStates) {
          buttonStates[index] = !buttonStates[index]; // Alterna o estado do botão
        }
        if (i === directions.length - 1) {
          setRotation(finalDirection); // Define a rotação final baseada na direção do último movimento
        }
      }, 500 * (i + 1));
    }, 500 * i);
  });
}

function isSpecialGrid(index) {
  return index in specialGrids;
}

function getGridLabel(index) {
  return specialGrids[index] || '';
}
</script>

<style scoped>
.grid-container {
  width: 100%;
  height: calc(100% - 60px);  /* Ajuste a altura para subtrair a altura da navbar */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 60px;  /* Ajuste o padding para dar espaço para a navbar */
}

.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  width: 100%;
  height: 100%;
}

.grid-item {
  border: 1px solid #000; /* Adicione bordas para separar as áreas */
  box-sizing: border-box; /* Para incluir a borda dentro do tamanho do elemento */
}

.grid-button {
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  text-align: center;
}

.grid-button.active {
  background-color: rgba(0, 255, 0, 0.3);  /* Mude a cor para indicar interação */
}

.grid-button.special {
  background-color: rgba(0, 0, 255, 0.2);  /* Cor diferente para grids especiais */
}

.grid-button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

img {
  transition: left 0.5s ease-in, top 0.5s ease-in, transform 0.5s;
}
</style>
