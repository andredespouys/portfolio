<script setup lang="ts">
import ThemeSwitcher from '../ThemeSwitcher.vue';
import HireMeModal from '../HireMeModal.vue';
import feather from 'feather-icons';
import AppHeaderLinks from './AppHeaderLinks.vue';
import Button from '../reusable/Button.vue';
import Burger from '../icons/Burger.vue';
import { onMounted, onUpdated, onBeforeMount, Ref, ref } from 'vue';


const modal : Ref<boolean> = ref(false);
const isOpen : Ref<boolean> = ref(false);
const theme : Ref<string> = ref("");

onMounted(() => {
	feather.replace();
	theme.value = localStorage.getItem('theme') || 'light';
});

onUpdated(() => {
	feather.replace();
	console.log("Modal value: ", modal.value)
});

onBeforeMount(() => {
  	theme.value = localStorage.getItem('theme') || 'light';
});

function updateTheme(theme : any) {
	console.log(theme);
	theme = theme;
};

function showModal() {
	if (modal.value) {
		console.log("Data modal true")
		// Stop screen scrolling
		document
			.getElementsByTagName('html')[0]
			.classList.remove('overflow-y-hidden');
		modal.value = false;
	} else {
		console.log("Data modal false")
		document
			.getElementsByTagName('html')[0]
			.classList.add('overflow-y-hidden');

		modal.value = true;
	}
};
function toggle() {
	isOpen.value = !isOpen.value;

};
</script>


<template>
	<nav id="nav" class=" sm:mx-auto">
		<!-- Header start -->
		<div
			class="z-10 max-w-full-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"
		>
			<!-- Header menu links and small screen hamburger menu -->
			<div class="flex justify-between items-center px-4 sm:px-0">
				<!-- Header logos -->
				<div>
					<router-link to="/"
						><img
							v-if="theme === 'light'"
							src="/images/logo-dark.svg"
							class="w-36"
							alt="Dark Logo"
						/>
						<img
							v-else
							src="/images/logo-light.svg"
							class="w-36"
							alt="Light Logo"
						/>
					</router-link>
				</div>

				<!-- Theme switcher small screen -->
				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"
				/>

				<!-- Small screen hamburger menu -->
				<div class="block  sm:hidden">
					<Burger @click="toggle" class="burger" :theme="theme" :isOpen="isOpen" />
				</div>
			</div>

			<!-- Header links -->
			<AppHeaderLinks :showModal="showModal" :isOpen="isOpen" />

			<!-- Header right section buttons -->
			<div
				class="hidden sm:flex justify-between items-center flex-col md:flex-row"
			>
				<!-- Hire me button -->
				<div class="hidden md:block">
					<Button
						title="Contact Me"
						class="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
						@click="showModal()"
						aria-label="Contact Me Button"
					>
					</Button>
				</div>

				<!-- Theme switcher large screen -->
				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
				/>
			</div>
		</div>

		<!-- Hire me modal -->
		<HireMeModal
			:showModal="showModal"
			:modal="modal"
			aria-modal="Contact Me Modal"
		/>
	</nav>
</template>

<style scoped>
#nav a.router-link-exact-active {
	@apply text-indigo-700;
	@apply dark:text-indigo-400;
	@apply font-medium;
}
</style>
