<script>
export default {
	props: ['images'],
};
</script>

<template>
	<div class="block sm:gap-10 ">
		<div
			class="m-0"
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
