import '@/assets/css/main.css';
import { createApp } from 'vue'
import App from './App.vue'
import BaseBtn from "@/components/Base/BaseBtn";

const app = createApp(App);

app.component('base-btn', BaseBtn)

app.mount('#app')
