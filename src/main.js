import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = "http://localhost:3000/api";

export const EventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
