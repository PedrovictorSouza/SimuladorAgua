import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css'; // Importa o arquivo de estilos principal diretamente na pasta src

createApp(App).use(router).mount('#app');
