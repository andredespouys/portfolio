<script setup lang="ts">

import { ref, onMounted } from 'vue';

const experienceTitle = 'Years of experience';
const feedbackTitle = 'Committed to the industry';
const projectsTitle = 'Github conflicts generated this year. And counting...';

const counters = ref({
	experience: 0,
	feedback: 0,
	projects: 0,
});

const targetCounts = {
	experience: 4,
	feedback: 100,
	projects: 77,
};

const duration = 1000; // Duration in milliseconds

onMounted(() => {
	startCounters();
});

function startCounters() {
	countTo('experience');
	countTo('feedback');
	countTo('projects');
}

function countTo(counterKey: keyof typeof targetCounts) {
	const increment = targetCounts[counterKey] / (duration / 100);
	const interval = setInterval(() => {
		if (counters.value[counterKey] < targetCounts[counterKey]) {
		counters.value[counterKey] += increment;
		} else {
		counters.value[counterKey] = targetCounts[counterKey];
		clearInterval(interval);
		}
	}, 100);
}
</script>

<template>
	<div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
		<!-- About me counters -->
		<div class="font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center">
		<!-- Years of experience counter -->
		<div class="mb-20 sm:mb-0">
			<div class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2">
			{{ Math.floor(counters.experience) }}
			</div>
			<span class="block text-md text-ternary-dark dark:text-ternary-light">{{ experienceTitle }}</span>
		</div>
		<!-- Positive feedback counter -->
		<div class="mb-20 sm:mb-0">
			<div class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2">
				{{ Math.floor(counters.feedback) }}%
			</div>
			<span class="block text-md text-ternary-dark dark:text-ternary-light">{{ feedbackTitle }}</span>
		</div>

		<!-- Projects completed counter -->
		<div class="mb-20 sm:mb-0">
		 	<div class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2">
				{{ Math.floor(counters.projects) }}
		  	</div>
			<span class="block text-md text-ternary-dark dark:text-ternary-light">{{ projectsTitle }}</span>
		</div>
	  </div>
	</div>
  </template>

  