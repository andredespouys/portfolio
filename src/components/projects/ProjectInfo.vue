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
  <div class="block lg:flex sm:gap-10 w-full">
    <!-- Single project right section details -->
      <div  class="w-full lg:w-full text-left mt-10 sm:mt-0 flex flex-col gap-4" v-html="props.content"></div>
  </div>
</template>
