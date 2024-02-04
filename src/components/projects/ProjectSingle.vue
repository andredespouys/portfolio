<script>
export default {
	props: ['project'],
};
</script>

<template>
	<div v-if="project">
		<router-link
		:to="'/projects/' + project.slug"
			class="h-full rounded-xl shadow-lg hover:shadow-xl cursor-pointer flex flex-col mb-10 sm:mb-0 bg-transparent dark:bg-ternary-dark"
		>
	
		<div v-if="project.images" class="flex-auto">
			<img
				:src="project.images[0].img"
				:alt="project.images.title"
				class="rounded-t-xl border-none w-full h-full object-cover"
			/>
		</div>
		<div v-else>
			<span>[Image not found]</span>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
				{{ project.header.title }}
			</p>
			<span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>{{ project.header.category }}</span
			>
		</div>
	</router-link>
	</div>
	
</template>

<style lang="scss" scoped></style>
