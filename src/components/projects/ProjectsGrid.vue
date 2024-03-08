<script setup lang="ts">
import { ref, onMounted ,computed, onBeforeMount} from 'vue';
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import projects from '@/data.js';


const projectsHeading = ref('My Projects');
const selectedCategory = ref('');
const searchProject = ref('');

onBeforeMount(() => {


	feather.replace();
});

onMounted(async () => {
	feather.replace();
});


let filteredProjects = computed(() => {
  if (selectedCategory.value) {
	console.log('selectedCategory', selectedCategory.value);
    return filterProjectsByCategory();
  } else if (searchProject.value) {
    return filterProjectsBySearch();
  } else {
    return projects;
  }
});


const filterProjectsByCategory = () => {
  return projects.filter((item : any) => {

	let category =
	  item.header.category.charAt(0).toUpperCase() + item.header.category.slice(1);
	console.log('category', category);
    return category.includes(selectedCategory.value);
  });
};

const filterProjectsBySearch = () => {
console.log('searchProject', searchProject.value);
  let project = new RegExp(searchProject.value, 'i');
  return projects.filter((el : any) => el.header.title.match(project));
};

</script>

<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ projectsHeading }}
			</p>
		</div>

		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">
			<h3
				class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-xl
					font-normal
					mb-4
				"
			>
				Search projects by title or filter by category
			</h3>
			<div
				class="
					flex
					flex-wrap

					justify-between
					border-b border-primary-light
					dark:border-secondary-dark
					pb-3
					gap-2
				"
			>
				<div class="w-full md:w-auto flex flex-grow ">
					<span
						class="
							block
							bg-primary-light
							dark:bg-ternary-dark
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							"
					>
						<i
							data-feather="search"
							class="text-ternary-dark dark:text-ternary-light"
						></i>
					</span>
					<input
						v-model="searchProject"
						class="font-general-medium
						p-2
						w-full
						md:w-auto

						border-1 border-gray-500
						dark:border-secondary-dark
						rounded-lg
						text-sm
						bg-transparent
						border-b-1
						text-primary-dark
						dark:text-ternary-light
						"
						id="name"
						name="name"
						type="search"
						required=false
						placeholder="Search Projects"
						aria-label="Name"
					/>
				</div>
				<ProjectsFilter @filter="selectedCategory = $event" />
			</div>
		</div>

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>
</template>


<style scoped></style>../../assets/data/data.js
