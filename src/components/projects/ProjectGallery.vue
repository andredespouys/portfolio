<script>
export default {
	props: ['images'],
};
</script>

<template>
	<div class="block sm:gap-10 mt-12">
		<div
			class="mb-10 sm:mb-0"
			v-for="projectImage in images"
			:key="projectImage.id"
		>
			<img
				:src="projectImage.img"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				alt="{{ projectImage.title }}"
			/>
		</div>
	</div>
</template>
