import Vue from "vue";
import store from "./store/index";
import App from "./components/app/app.vue";

new Vue({
  store,
  el: "#root",
  render: (h) => h(App),
});
