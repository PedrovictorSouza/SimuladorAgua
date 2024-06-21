import { reactive, computed } from 'vue';

const position = reactive({ x: 0, y: 0, rotation: 0 });

const carStyle = computed(() => ({
  position: 'absolute',
  width: 'calc(40% / 7)',  // Ajuste aqui para o tamanho desejado com base no grid
  height: 'calc(40% / 7)',  // Ajuste aqui para o tamanho desejado com base no grid
  left: `${position.x}px`,
  top: `${position.y}px`,
  transform: `rotate(${position.rotation}deg)`,
  transition: 'left 0.5s ease-in, top 0.5s ease-in, transform 0.5s'
}));

function setInitialPosition() {
  const grid = document.querySelector('.grid');
  const step = grid ? grid.clientWidth / 7 : 0;
  const carElement = document.querySelector('img[alt="Car"]');
  const carWidth = carElement ? carElement.clientWidth : 0;
  const carHeight = carElement ? carElement.clientHeight : 0;

  // Calculando o offset corretamente para centralizar o carro na célula
  const offsetX = (step - carWidth) / 2;
  const offsetY = (step - carHeight) / 2;

  position.x = offsetX;
  position.y = offsetY;
}

function updatePosition(targetX, targetY) {
  const grid = document.querySelector('.grid');
  const step = grid ? grid.clientWidth / 7 : 0;
  const carElement = document.querySelector('img[alt="Car"]');
  const carWidth = carElement ? carElement.clientWidth : 0;
  const carHeight = carElement ? carElement.clientHeight : 0;

  // Calculando o offset corretamente para centralizar o carro na célula
  const offsetX = (step - carWidth) / 2;
  const offsetY = (step - carHeight) / 2;

  position.x = targetX + offsetX;
  position.y = targetY + offsetY;

  // Ajuste baseado em porcentagens do tamanho do step
  const adjustmentX = step * 0.7; // 70% do step
  const adjustmentY = step * 1.2; // 120% do step

  setTimeout(() => {
    position.x += adjustmentX;
    position.y += adjustmentY;
    console.log(`Car coordinates after adjustment - X: ${position.x}, Y: ${position.y}`);
  }, 500); // Ajuste o tempo conforme necessário
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

export { position, carStyle, updatePosition, setRotation, setInitialPosition };
