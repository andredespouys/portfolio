<script setup lang="ts">
import feather from 'feather-icons';
import { onMounted, onUpdated } from 'vue';
import AboutMe from '../components/about/AboutMe.vue';
import AboutCounter from '../components/about/AboutCounter.vue';
// import AboutClients from '@/components/about/AboutClients';

onMounted(() => {
  feather.replace();
});

onUpdated(() => {
  feather.replace();
});
</script>

<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>

		<!-- About counter -->
		  <AboutCounter />


	</div>
</template>

<style scoped></style>
