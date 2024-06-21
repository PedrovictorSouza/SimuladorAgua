<template>
  <div class="breadcrumb-container">
    <nav class="breadcrumb">
      <ul>
        <li><a @click="navigateToHome">Home</a></li>
        <li> / </li>
        <li>GridView</li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateToHome() {
  router.push('/');
}
</script>

<style scoped>
.breadcrumb-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: #f8f8f8; /* Cor de fundo para distinguir a área do breadcrumb */
  padding: 10px 0; /* Espaçamento vertical */
}

.breadcrumb {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.breadcrumb ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}

.breadcrumb li {
  margin-right: 5px;
}

.breadcrumb a {
  cursor: pointer;
  text-decoration: underline;
  color: blue;
}

.breadcrumb a:hover {
  color: darkblue;
}
</style>
