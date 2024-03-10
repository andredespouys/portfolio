<script setup lang="ts">
import { ref, onMounted, Ref , onBeforeMount, onUpdated} from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '@/components/projects/ProjectHeader.vue';
import ProjectGallery from '@/components/projects/ProjectGallery.vue';
import ProjectInfo from '@/components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '@/components/projects/ProjectRelatedProjects.vue';
import ProjectDetails from '@/components/projects/ProjectDetails.vue';
import { marked } from 'marked';
import projects from '@/data.js';
import { useRoute } from 'vue-router';
const route = useRoute();
const project : Ref<any>= ref('');
const relatedProjects : Ref<any>= ref('');
const projectContent: Ref<any | HTMLBodyElement> = ref("");

async function fetchContent(project : any) {
	try {
		// Fetch project content
		const response = await fetch(project.slug + '/index.md');
		console.log("Response: ", response)
        if (!response.ok) {
        throw new Error(`Failed to fetch ${project.path}`);
        }
        const markdownContent = await response.text();
		const content = marked(markdownContent);
		return content;

	} catch (error) {
		console.error(error);
	}
};

async function getProject() {
    const slug = route.params.slug;

    // Fetch project if it's not present or if the slug has changed
    if (!project.value || project.value.slug !== slug) {
        project.value = projects.find((proj: any) => proj.slug === slug);
        relatedProjects.value = projects.filter((item: any) => !item.slug.includes(slug));
        projectContent.value = await fetchContent(project.value);
    }
	window.scrollTo({ top: 0, behavior: 'smooth' });

}

onBeforeMount(()=>{
   getProject();
})

onMounted(() => {
	feather.replace();
});

onUpdated(() => {
    feather.replace()
    getProject();
});
// Rest of the code...
</script>
<template>
	<div class="parent-container  p-4 lg:p-0  flex-col ">
		<div class="inner-container flex flex-col flex-start mx-auto  my-0 mt-0 ">
			<!-- Check if project exists before accessing its properties -->
			<!-- Left -->
			<div v-if="project" class="flex flex-col lg:flex-row gap-0 md:gap-20 relative ">
				<!-- Project Card -->
				<div class="container-left flex flex-col flex-none 
				gap-10 w-full h-full rounded-xl border-regal-blue
				 border-b-2 lg:border-b-0 lg:border-r-2 
				lg:pr-20 py-10 lg:w-1/3  lg:sticky top-0">
					<ProjectHeader v-if="project.header" :header="project.header" />
					<div v-else>
						<h1>Project Header not found</h1>
					</div>
					<!-- Project gallery -->
					<ProjectGallery v-if=" project.images" :images="project.images" />

					<ProjectDetails v-if=" project" :project="project" />
				</div>
				<!-- Right -->
				<div class="inner-container right flex-auto pt-10 lg:pt-0 ">
					<!-- Project information -->
					<ProjectInfo v-if="projectContent"  :content="projectContent" />
					<div v-else>
						<h1>Project info not found</h1>
					</div>
				</div>
			</div>
			<div v-else>
				<h1>Project not found</h1>
			</div>
		</div>
		<!-- Project related projects -->
		<ProjectRelatedProjects v-if="relatedProjects" :relatedProjects="relatedProjects" />
		<div v-else>
				<h1>Project related not found</h1>
		</div>
	</div>
</template>

<style scoped></style>