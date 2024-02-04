// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './index.css';
import feather from 'feather-icons';
feather.replace();

const app = createApp(App).use(router);

const appTheme = localStorage.getItem('theme');

app.mount('#app');
if (
    appTheme === 'dark'
) {
    console.log('dark');
    document.querySelector('body')!.classList.add('bg-primary-dark');
} else {
    console.log('light');
    document.querySelector('body')!.classList.add('bg-secondary-light');
}