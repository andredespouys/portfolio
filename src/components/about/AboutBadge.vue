<script lang="ts" setup>
import {  ref } from 'vue';
import { defineProps } from 'vue';
import Button from '@/components/reusable/Button.vue';


defineProps({
	cert: Object,
});

const hovering = ref(false);
</script>

<template>
	<div v-if="cert" class="AboutBadge  w-full h-auto" 
	@mouseover="hovering = true"
	@mouseleave="hovering = false">
		<div
			class="h-full rounded-xl hover:shadow-xl  p-4
			cursor-pointer flex flex-col items-center gap-6 
			bg-transparent dark:bg-ternary-dark justify-center" 
		>
	
		<div v-if="cert.img" class="h-24">
			<img
				:src="cert.img"
				:alt="cert.title"
				class="rounded-t-xl border-none w-full h-full object-contain"
			/>
		</div>
		<div v-else>
			<span>[Image not found]</span>
		</div>
		<div class="text-center">
			<p
				class="title font-general-semibold text-sm text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
				{{ cert.title }}
			</p>
			<span
				class="category font-general-medium text-sm text-ternary-dark dark:text-ternary-light"
				>{{ cert.category }}</span
			>
		</div>
		<div class="controls h-12 w-auto"> 
			<Button v-if="hovering" :label="cert.certificate ? 'View Certificate' : 'Know more' " :redirect="cert.url" kind="external" />
		</div>
	</div>
</div>
</template>

<style lang="scss" scoped></style>
