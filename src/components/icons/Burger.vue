<script setup lang="ts">

defineProps({
  isOpen: Boolean,
  theme: String
})

</script>

<template>
    <!-- Open -->
    <svg v-if="!isOpen"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 19.2857H22M2 12.1429H22M2 5H22" :stroke= "theme !=='light' ? 'white' : 'black' " stroke-width="2.85714" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <!-- Close -->
    <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" :stroke= "theme !=='light' ? 'white' : 'black' " stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>