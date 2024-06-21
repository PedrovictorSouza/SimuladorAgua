<template>
  <div class="popup" v-if="visible">
    <div class="popup-content">
      <img :src="imageSrc" alt="Etapa" />
      <p>{{ description }}</p>
      <button @click="closePopup">Fechar</button>
    </div>
  </div>
</template>

  
<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  visible: Boolean,
  imageSrc: String,
  description: String
});

const emit = defineEmits(['close']);

function closePopup() {
  emit('close');
}
</script>

<style src="../styles/Popup.css" scoped></style>
  