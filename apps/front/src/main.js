import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const pinia = createPinia()
const app = createApp(App)

app.use(router);
app.use(pinia);

// router.beforeEach((to) => {
// 	// ✅ This will work make sure the correct store is used for the
// 	// current running app
// 	const main = useMainStore(pinia)

// 	// if (to.meta.requiresAuth && !main.isLoggedIn) return '/login'
// })

app.mount("#app");
