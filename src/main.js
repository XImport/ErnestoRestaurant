import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify"; // Ensure Vuetify CSS is imported
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

Vue.config.productionTip = false;

AOS.init();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    AOS.init();
  },
}).$mount("#app");
