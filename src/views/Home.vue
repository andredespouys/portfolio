<script setup lang="ts">

import AppBanner from "@/components/shared/AppBanner.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";
import Button from "@/components/reusable/Button.vue";

 function goUp() {

	window.scrollTo({ top: 0, behavior: 'smooth' });

}
</script>

<template>
	<div class="w-full mx-auto">
		<!-- Banner -->
		<AppBanner class="mb-5 sm:mb-8" />

		<!-- Projects -->
		<ProjectsGrid />

		<!-- Load more projects button -->
		<div class="mt-10 sm:mt-20 flex justify-center">
			<router-link
				to="/projects"
				aria-label="More Projects"
				@click="goUp"
			>
			<Button label="More Projects" kind="internal" />

			</router-link>
			
		</div>
	</div>
</template>

<style scoped></style>
