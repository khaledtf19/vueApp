import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "./style.css"

import { router } from "./router";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: "light",
    },
  },
});

app.use(router);
app.mount("#app");
