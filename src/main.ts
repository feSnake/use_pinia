import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia().use(piniaPluginPersistedstate);
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
