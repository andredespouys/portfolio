<script>
import feather from 'feather-icons';

export default {
	props: ['project'],

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block  sm:block gap-0 sm:gap-10 mt-14">
		<!-- Single project left section details -->
		<div class="w-full  text-left">
			<!-- Single project client details -->
			<div class="mb-7 w-full">
				<p
					class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
				>
					{{ project.header.title }}
				</p>
			</div>

			<!-- Single project summary -->
			<div class="mb-7">
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light"
				>
					{{ project.summary }}
				</p>
			</div>

			<!-- Single project technologies -->
			<div class="mb-7">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ project.technologies[0].title }}
				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light"
				>
					{{ project.technologies[0].techs.join(', ') }}
				</p>
			</div>
		</div>
	</div>
</template>
