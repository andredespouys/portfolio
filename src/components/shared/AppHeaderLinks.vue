<script>

export default {
	props: ['showModal', 'isOpen', 'theme'],
};
</script>

<template>
	<!-- Header links -->
	<div
    :class="[isOpen ? 'block' : 'hidden', (theme === 'dark') ? 'bg-primary-dark' : 'bg-secondary-light']"
    class="w-full sm:w-auto rounded-lg absolute md:relative z-3 m-0 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
>
		<router-link
			to="/projects"
			class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 "
			aria-label="Projects"
			@click="$emit('linkClick')"
			>Projects</router-link
		>
		<router-link
			to="/about"
			class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
			aria-label="About Me"
			@click="$emit('linkClick')"
			>About Me</router-link
		>
		<div
			class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
		>
			<button
				class="rounded-lg font-general-medium sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm  px-4 py-2 mt-2 duration-500"
				@click="showModal()"
				aria-label="Contact Me Button"
			>
				Contact Me
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
