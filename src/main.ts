// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './index.css';
import feather from 'feather-icons';
feather.replace();

const app = createApp(App).use(router);

const appTheme = localStorage.getItem('theme');
console.log(appTheme);

app.mount('#app');
