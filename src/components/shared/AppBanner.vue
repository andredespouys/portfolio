<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';

const theme = ref('');

onMounted(() => {
	theme.value = localStorage.getItem('theme') || 'light';
	feather.replace();
});

onUpdated(() => {
	feather.replace();
});
</script>

<template>
	<section class="flex gap-6 flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
		<!-- Banner left illustration -->
		<div class="w-full md:w-1/2 text-right float-right">
			<img src="/images/memoji.png" alt="Developer" />
		</div>
		<!-- Banner left contents -->
		<div class="flex gap-4 flex-col items-center md:items-start  w-full md:w-2/3 md:text-left">
			<h1 class="font-bold text-4xl md:text-3xl xl:text-4xl text-center text-ternary-dark dark:text-primary-light uppercase">
				Hi, I am André
			</h1>
			<h3 class="text-2xl md:text-3xl text-center sm:text-left text-ternary-dark md:w-2/3 dark:text-primary-light ">
				A passionate of the web and a future security analyst.			</h3>
			<div class="flex justify-center ">
				<a
					download="André-Resume.pdf"
					href="/cv.pdf"
					class="flex justify-center items-center w-36 sm:w-48  mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i>
					<span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
				</a>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
