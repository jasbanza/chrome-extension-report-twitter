import { createApp } from "vue";
import App from "../view/popup.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";

const vuetify = createVuetify();
createApp(App).use(vuetify).mount("#app");

// fix for extension detaching scrollbar
document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.style.overflowY = "auto";
});
