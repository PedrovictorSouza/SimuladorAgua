import { reactive, computed } from 'vue';

const position = reactive({ x: 0, y: 0, rotation: 0 });

const carStyle = computed(() => ({
  position: 'absolute',
  width: 'calc(70% / 7)',  // Ajuste aqui para o tamanho desejado com base no grid
  height: 'calc(70% / 7)',  // Ajuste aqui para o tamanho desejado com base no grid
  left: `${position.x}px`,
  top: `${position.y}px`,
  transform: `rotate(${position.rotation}deg)`,
  transition: 'left 0.5s ease-in, top 0.5s ease-in, transform 0.5s'
}));

function updatePosition(direction) {
  const grid = document.querySelector('.grid');
  const step = grid ? grid.clientWidth / 7 : 0;  // Define quantos pixels o carro se move por ação
  switch (direction) {
    case 'UP':
      position.y = Math.max(position.y - step, 0);
      break;
    case 'DOWN':
      position.y = Math.min(position.y + step, step * 6);
      break;
    case 'LEFT':
      position.x = Math.max(position.x - step, 0);
      break;
    case 'RIGHT':
      position.x = Math.min(position.x + step, step * 6);
      break;
  }
}

function setRotation(direction) {
  switch (direction) {
    case 'UP':
      position.rotation = -90;
      break;
    case 'DOWN':
      position.rotation = 90;
      break;
    case 'LEFT':
      position.rotation = 180;
      break;
    case 'RIGHT':
      position.rotation = 0;
      break;
  }
}

export { position, carStyle, updatePosition, setRotation };
