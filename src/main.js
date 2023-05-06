import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
const app = createApp(App);
import Toast from "vue-toastification";

app.use(router);
app.use(Toast);

app.mount('#app');