import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js";
import "./styles/global.scss";

const app = createApp(App)
app.config.productionTip = false;

app.use(router)

app.mount("#app")
