<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <img :src="logoSrc" alt="Logo">
    </div>
    <button class="navbar-toggle" @click="toggleMenu">
      ☰
    </button>
    <ul :class="['navbar-menu', { 'navbar-menu-visible': isMenuVisible }]">
      <li class="navbar-item"><a href="#home">Home</a></li>
      <li class="navbar-item"><a href="#about">Quem somos</a></li>
      <li class="navbar-item"><a href="#services">Serviços</a></li>
      <li class="navbar-item"><a href="#contact">Contato</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuVisible = ref(false);


const props = defineProps({
  logoSrc: {
    type: String,
    required: true
  }
});

function toggleMenu() {
  isMenuVisible.value = !isMenuVisible.value;
}
</script>

<style src="../styles/Navbar.css"></style>
