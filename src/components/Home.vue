<template>
    <div class="home-container">
      <h1 class="typewriter">TRILHA DA <br> PRECIFICAÇÃO</h1>
      <button @click="goToGrid">simulador</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  function goToGrid() {
    router.push('/grid');
  }
  </script>
  
  <style src="../styles/Home.css" scoped></style>