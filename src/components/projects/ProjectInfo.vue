<script setup lang="ts">
import feather from 'feather-icons';
import { onMounted, onUpdated, defineProps } from 'vue';

// Define the props type
const props = defineProps(['content']);

onMounted(() => {
  feather.replace();
});

onUpdated(() => {
  feather.replace();
});
</script>

<template>
    <!-- Single project right section details -->
      <div v-html="props.content" 
      class="text-pretty flex flex-col  leading-loose w-full lg:w-full text-left 
      mt-0  gap-4" ></div>
</template>
