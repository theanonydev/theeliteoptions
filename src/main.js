import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import router from "./router.js";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import CryptoNewsList from "./components/CryptoNewsList.vue";
import TheSideBar from "./components/TheSideBar.vue";
import DialogModel from "./components/DialogModel.vue";
import TheSpinner from "./components/TheSpinner.vue";
import store from "./store.js";

import { auth } from "./firebase";
import { authChange } from "./firebase";

let app;

authChange(auth, (user) => {
  store.dispatch("setUser", user);
  if (!app) {
    app = createApp(App);
    app.use(store);
    app.use(router);
    app.component("the-header", TheHeader);
    app.component("the-footer", TheFooter);
    app.component("crypto-news-list", CryptoNewsList);
    app.component("the-side-bar", TheSideBar);
    app.component("the-spinner", TheSpinner);
    app.component("dialog-model", DialogModel);
    app.mount("#app");
  }
});
