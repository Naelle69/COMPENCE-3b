import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'



import './css/style.css'
import './css/typo.css'
import './css/mediasqueries.css'
import 'tw-elements'

/* const { createApp } = Vue;
createApp({
  data() {
    return {
      plats: [],
    };
  },
  mounted() {
    axios
      .get("plats.json")
      .then((response) => (this.plats = response.data.plats));
  },
}).mount("#app"); */

createApp(App).use(store).use(router).mount('#app')


