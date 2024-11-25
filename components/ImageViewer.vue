<template>
  <div class="my-4">
    <canvas ref="canvas" class="border rounded-lg"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import Konva from 'konva';

const canvas = ref<HTMLCanvasElement | null>(null);
const props = defineProps<{ imageSrc: string }>();

onMounted(() => {
  renderImage(props.imageSrc);
});

watch(() => props.imageSrc, (newVal) => {
  renderImage(newVal);
});

const renderImage = (src: string) => {
  const stage = new Konva.Stage({
    container: canvas.value as HTMLElement,
    width: 800,
    height: 600,
  });

  const layer = new Konva.Layer();
  stage.add(layer);

  Konva.Image.fromURL(src, (image) => {
    image.width(800);
    image.height(600);
    layer.add(image);
    layer.draw();
  });
};
</script>
