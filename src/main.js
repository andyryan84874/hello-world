import { createApp } from 'vue'
import App from './App.vue'
import {VueTelInput} from 'vue-intl-phone-input';
import 'vue-intl-phone-input/vue-tel-input.css';

const globalOptions = {
  mode: 'auto',
};

const app = createApp(App);
app.use(VueTelInput, globalOptions); // Define default global options here (optional)
app.mount('#app');