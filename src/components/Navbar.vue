<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <img src="" alt="Logo"> <!-- Substitua pelo caminho correto da sua logo -->
    </div>
    <ul class="navbar-menu">
      <li class="navbar-item"><a href="#home">Gasolina</a></li>
      <li class="navbar-item"><a href="#about">Qualidade da agua</a></li>
      <li class="navbar-item"><a href="#services">xxxx</a></li>
      <li class="navbar-item"><a href="#contact">xxxx</a></li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 60px;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.navbar-logo img {
  height: 40px;
  width: auto;
}

.navbar-menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0 20px; /* Adiciona padding para evitar corte do texto */
}

.navbar-item {
  margin-left: 20px;
}

.navbar-item a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
}

.navbar-item a:hover {
  color: #ddd;
}
</style>
