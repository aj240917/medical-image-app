<template>
  <div class="p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
    <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Medical Image Viewer</h1>
    <ImageUploader @file-uploaded="handleFileUpload" />
    <Toolbar v-if="imageSrc" />
    <ImageViewer :imageSrc="imageSrc" v-if="imageSrc" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ImageUploader from '~/components/ImageUploader.vue';
import ImageViewer from '~/components/ImageViewer.vue';
import Toolbar from '~/components/Toolbar.vue';

const imageSrc = ref<string | null>(null);

const handleFileUpload = (fileUrl: string) => {
  imageSrc.value = fileUrl;
};
</script>
