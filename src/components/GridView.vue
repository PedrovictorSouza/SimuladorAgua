<template>
  <div class="grid-container">
    <Breadcrumb />
    <div class="grid">
      <div v-for="(item, index) in 49" :key="index" class="grid-item" :data-symbol="getGridLabel(index)">
        <button class="grid-button" :class="{ active: buttonStates[index], special: isSpecialGrid(index) }" @click="moveTo(index)">
          {{ getGridLabel(index) }}
        </button>
      </div>
    </div>
    <img :src="carImage" :style="carStyle" alt="Car">
    <Controls />
    <Popup v-if="showPopup" :visible="showPopup" :imageSrc="popupImageSrc" :description="popupDescription" @close="closePopup" />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import Breadcrumb from './Breadcrumb.vue';
import Controls from './Controls.vue';
import Popup from './Popup.vue';
import { carStyle, updatePosition, setRotation, position, setInitialPosition } from '../utils/useCar';
import carImage from '../assets/vehicles/car.svg';  // Substitua pelo caminho correto do seu SVG

import '../styles/GridView.css'; // Importa o arquivo CSS

const gridSize = 7;  // Tamanho da grade (7x7)
const buttonStates = reactive(Array(49).fill(false));  // Matriz para armazenar os estados dos botões
const showPopup = ref(false);
const popupImageSrc = ref('');
const popupDescription = ref('');

// Identificação dos grids especiais
const specialGrids = {
  9: { label: 'Fonte', image: 'path_to_image_fonte.jpg', description: 'Descrição da Fonte' },
  11: { label: 'Distribuidores', image: 'path_to_image_distribuidores.jpg', description: 'Descrição dos Distribuidores' },
  13: { label: 'Depósito', image: 'path_to_image_deposito.jpg', description: 'Descrição do Depósito' },
  17: { label: 'Entrega ao PDV', image: 'path_to_image_entrega_pdv.jpg', description: 'Descrição da Entrega ao PDV' },
  19: { label: 'Venda e entrega', image: 'path_to_image_venda_entrega.jpg', description: 'Descrição da Venda e Entrega' }
};

function moveTo(index) {
  closePopup();  // Fecha o popup antes de mover o carro

  const row = Math.floor(index / gridSize);
  const col = index % gridSize;
  const grid = document.querySelector('.grid');
  const step = grid ? grid.clientWidth / gridSize : 0;

  const targetX = col * step;
  const targetY = row * step;

  updatePosition(targetX, targetY); // Move o carro diretamente para a célula desejada

  if (index in buttonStates) {
    buttonStates[index] = !buttonStates[index]; // Alterna o estado do botão
  }

  if (isSpecialGrid(index)) {
    const specialGrid = specialGrids[index];
    popupImageSrc.value = specialGrid.image;
    popupDescription.value = specialGrid.description;
    setTimeout(() => {
      showPopup.value = true;  // Mostra o popup após o carro se mover
    }, 500); // Ajuste o tempo conforme necessário
  }
}

function isSpecialGrid(index) {
  return index in specialGrids;
}

function getGridLabel(index) {
  return specialGrids[index]?.label || '';
}

function closePopup() {
  showPopup.value = false;
}

onMounted(() => {
  setInitialPosition(); // Define a posição inicial do carro na primeira célula
});
</script>

<style scoped>
.grid-container {
  width: 100%;
  height: calc(100% - 60px);  /* Ajuste a altura para subtrair a altura da navbar */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 60px;  /* Ajuste o padding para dar espaço para a navbar */
}

.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  width: 80vmin;  /* Use vmin para garantir que o grid seja sempre quadrado */
  height: 80vmin; /* Use vmin para garantir que o grid seja sempre quadrado */
}

.grid-item {/* Adicione bordas para separar as áreas */
  box-sizing: border-box; /* Para incluir a borda dentro do tamanho do elemento */
  display: flex;
  justify-content: center;
  align-items: center;
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
