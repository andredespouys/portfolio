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
		<!-- Single project left section details -->
		<div class="w-full text-left flex flex-col gap-4">
			<!-- Single project client details -->
			<div class="w-full flex flex-col gap-2">
				<!-- Single project summary -->
				<p
					class="font-bold font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
				>
					Summary:
				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light"
				>
					{{ project.summary }}
				</p>
			</div>

			<!-- Single project technologies -->
			<div class="w-full flex flex-col gap-2">
				<p
					class="font-bold font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ project.technologies[0].title }}:
				</p>
				<ul class="list-disc ml-7">
					<li
						class="list font-general-regular text-primary-dark dark:text-ternary-light"
						v-for="tech in project.technologies[0].techs"
						:key="tech"
					>
						{{ tech }}
					</li>
				</ul>
			</div>
			<a v-if="project.link" class="p-4 bg-indigo-500 text-white font-medium rounded-lg w-fit" :href="project.link.url">{{ project.link.title }}</a>


		</div>
</template>
