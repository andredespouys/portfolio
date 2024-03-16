<!-- App.vue -->

<script setup lang="ts">
import AppHeader from '@/components/shared/AppHeader.vue';
import AppFooter from '@/components/shared/AppFooter.vue';
import { ref, onUpdated, onMounted } from 'vue';

const appTheme = ref(localStorage.getItem('theme') || 'light');

// Apply theme class to body element
const applyThemeClass = () => {
  const body = document.body;
  if (appTheme.value === 'dark') {
    body.classList.add('bg-primary-dark');
    body.classList.remove('bg-secondary-light');
  } else {
    body.classList.add('bg-secondary-light');
    body.classList.remove('bg-primary-dark');
  }
};

// Apply initial theme class on component mount
onMounted(() => {
  applyThemeClass();
});

// Update theme class on theme change
onUpdated(() => {
  applyThemeClass();
});

// Handle theme change
function handleChange(newTheme: string) {
  appTheme.value = newTheme;
  localStorage.setItem('theme', newTheme);
}
</script>

<template>
  <div :key="appTheme" :class="['p-5 md:p-20 mx-auto w-full xl:max-w-screen-xl']">
    <!-- App header -->
    <AppHeader :theme="appTheme" @theme-changed="handleChange" />
    
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    
    <!-- App footer -->
    <AppFooter />
  </div>
</template>


<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.fade-enter-active {
	animation: coming 0.4s;
	animation-delay: 0.2s;
	opacity: 0;
}

.fade-leave-active {
	animation: going 0.4s;
}

@keyframes going {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-10px);
		opacity: 0;
	}
}

@keyframes coming {
	from {
		transform: translateX(-10px);
		opacity: 0;
	}

	to {
		transform: translateX(0px);
		opacity: 1;
	}
}
</style>
