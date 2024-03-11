<script setup lang="ts">
import { ref, onMounted } from 'vue';

const theme = ref<string>('');
theme.value = localStorage.getItem('theme') || 'light';

const emit = defineEmits(['theme-changed']);

// Method to toggle the theme
const toggleTheme = () => {
  const newTheme = theme.value === 'light' ? 'dark' : 'light';
  emit('theme-changed', newTheme);
};

// Watch for changes in the theme prop
onMounted(() => {
	theme.value = localStorage.getItem('theme') || 'light';
});

</script>




<template>
	<button @click.stop="toggleTheme" aria-label="Theme Switcher">
		<i
			v-if="theme === 'light'"
			data-feather="moon"
			class="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"
		></i>
		<i
			v-else
			data-feather="sun"
			class="text-gray-200 hover:text-gray-50 w-5"
		></i>
	</button>
</template>
