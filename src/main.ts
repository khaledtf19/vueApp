import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "./style.css";
import "primeicons/primeicons.css";
import ToastService from "primevue/toastservice";
import { router } from "./router";
import { createPinia } from "pinia";

const pinia = createPinia()
const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: "light",
    },
  },
});
app.use(pinia);
app.use(ToastService);
app.use(router);
app.mount("#app");
