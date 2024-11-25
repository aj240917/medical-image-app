<template>
  <div class="toolbar">
    <button class="btn" @click="zoomIn">Zoom In</button>
    <button class="btn" @click="zoomOut">Zoom Out</button>
    <button class="btn" @click="reset">Reset</button>
  </div>
</template>

<script setup lang="ts">
const zoomIn = () => {
  console.log('Zoom In');
};
const zoomOut = () => {
  console.log('Zoom Out');
};
const reset = () => {
  console.log('Reset');
};
</script>

<style>
.toolbar {
  display: flex;
  gap: 10px;
}
.btn {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.btn:hover {
  background-color: #45a049;
}
</style>
