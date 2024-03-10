<script setup lang="ts">
import feather from 'feather-icons';
import Button from './reusable/Button.vue';

import { socialLinks } from '@/socialLinks';

import { onMounted, onUpdated , ref} from 'vue';
const theme = ref('');

const props = defineProps(['showModal', 'modal']);
const socials = socialLinks;
onMounted(() => {
	theme.value = localStorage.getItem('theme') || 'light';

  feather.replace();
  console.log("Modal value: ", props.modal)
});

onUpdated(() => {
  feather.replace();
  if (
    theme.value === 'dark'
) {
    console.log('dark');
    document.querySelector('body')!.classList.add('bg-primary-dark');
} else {
    console.log('light');
    document.querySelector('body')!.classList.add('bg-secondary-light');
}
});

</script>

<template>
	<transition name="fade">
		<div v-show="modal"  class= " font-general-regular fixed inset-0 z-30">
			<!-- Modal body background as backdrop -->
			<div
				v-show="modal"
				@click="showModal()"
				class="bg-filter  bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
			></div>
			<!-- Modal content -->
			<main
				class="flex flex-col items-center justify-center h-full w-full"
			>
					<div
						v-show="modal"
						:class="
						[theme === 'dark' ? 'bg-primary-dark' : 'bg-secondary-light']"
						class="rounded-lg modal-wrapper w-3/4 md:w-1/3 mx-auto flex 
						flex-col justify-around items-center p-5 z-30 h-auto
						gap-5"
					>
						<div
							class="relative w-full"
							>
							<button
								class="text-primary-dark dark:text-primary-light absolute right-0 "
								@click="showModal()"
								>
									<i data-feather="x"></i>
							</button>
						</div>

						<div class="w-full md:w-1/2 text-right float-right">
							<img src="/images/memoji-contact.png" alt="Developer" />
						</div>
							<div
								class="modal-header  dark:border-ternary-dark"
							>
								<h3
									class="text-primary-dark dark:text-primary-light  font-bold	"
								>
									Contact me
								</h3>
							
							</div>
						
							<ul class="flex gap-4 sm:gap-8 w-full justify-around items-center">
								<a
									v-for="social in socials"
									:key="social.id"
									:href="social.url"
									target="__blank"
									class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"
								>
									<i
										:data-feather="social.icon"
										class="w-5 sm:w-8 h-5 sm:h-8"
									></i>
								</a>
							</ul>

					</div>
			</main>
		</div>
	</transition>
</template>

<style scoped>
.modal-body {
	max-height: 570px;
}
.bg-gray-800-opacity {
	background-color: #2d374850;
}
@media screen and (max-width: 768px) {
	.modal-body {
		max-height: 400px;
	}
}
.fade-up-down-enter-active {
	transition: all 0.3s ease;
}
.fade-up-down-leave-active {
	transition: all 0.3s ease;
}
.fade-up-down-enter {
	transform: translateY(10%);
	opacity: 0;
}
.fade-up-down-leave-to {
	transform: translateY(10%);
	opacity: 0;
}

.fade-enter-active {
	-webkit-transition: opacity 2s;
	transition: opacity 0.3s;
}
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>../assets/data/socialLinks.js
