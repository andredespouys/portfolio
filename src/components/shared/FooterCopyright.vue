<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Typescript + Vue.js + Tailwind CSS Portfolio',
			author: 'André Despouy Pascual',
			me: "Me"
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}
			. Developed by 
			<a
				href="https://despouysandre.com"
				target="__blank"
				class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
				>{{ me }}</a
				
			>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
