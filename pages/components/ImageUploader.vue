<template>
  <div class="my-4">
    <input
      type="file"
      @change="uploadFile"
      accept=".dcm,.png,.jpg"
      class="file-input"
    />
  </div>
</template>

<script setup lang="ts">
import { emit } from 'vue';

const uploadFile = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      emit('file-uploaded', reader.result as string);
    };
    reader.readAsDataURL(file);
  }
};
</script>
