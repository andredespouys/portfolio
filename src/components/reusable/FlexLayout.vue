<script lang="ts" setup>
import { defineProps } from 'vue';

 defineProps({
  display: String,
});
</script>

<template>
    <div class="FlexLayout w-full gap-4" :class="display ==='row' ? 'flex' : 'flex flex-col' ">
        <slot></slot>
    </div>
</template>



<style scoped>
</style>