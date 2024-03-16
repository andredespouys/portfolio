<script setup lang="ts">

import certs from '@/certs.js';

import GridLayout from '@/components/reusable/GridLayout.vue';

import AboutBadge from './AboutBadge.vue';


</script>

<template>
    <h2 class="text-2xl font-bold text-center mb-5">Check my mertifications</h2>
    <GridLayout >
    <AboutBadge v-for="cert in certs" :key="cert.id" :cert="cert" />  
    </GridLayout>
</template>

  