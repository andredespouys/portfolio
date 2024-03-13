<script>
export default {
	props: ['relatedProjects'],
};
</script>

<template>
	<div
		class="w-full rounded-lg border-regal-blue mt-10 pt-10 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
	>
		<p
			class="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"
		>
			Other Projects
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
			
			<div v-for="item in relatedProjects" :key="item.id" router-link>
				<router-link
				:to="'/projects/' + item.slug"
					class="h-full rounded-xl shadow-lg hover:shadow-xl cursor-pointer flex flex-col mb-10 sm:mb-0 bg-transparent dark:bg-ternary-dark">
					<div v-if="item.images" class="flex-auto">
						<img
							:src="item.images[0].img"
							:alt="item.images.title"
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
							{{ item.header.title }}
						</p>
						<span
							class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
							>{{ item.header.category }}</span
						>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
