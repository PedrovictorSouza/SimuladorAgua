<template>
  <div id="app">
    <Navbar />
    <GridView />
    <Controls />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import GridView from './components/GridView.vue';
import Controls from './components/Controls.vue';
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;  /* Ajuste para alinhar a navbar corretamente */
}
</style>
