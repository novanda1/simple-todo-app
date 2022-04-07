import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./modules/store";
import { key } from "./modules/todo";

const app = createApp(App);

app.use(store, key);
app.mount("#app");
