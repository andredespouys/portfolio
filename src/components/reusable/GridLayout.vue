<script lang="ts" setup>

// Responsive grid layout class
const gridClass = `GridLayout w-full gap-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1`;

</script>


<template>
    <div :class="gridClass">
      <slot></slot>
    </div>
  </template>
  

  
  <style scoped>
  </style>
  