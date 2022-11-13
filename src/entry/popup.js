import { createApp } from "vue";
import App from "../view/popup.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
const app = createApp(App);
app.use(vuetify);
app.mount("#app");

// fix for extension detaching scrollbar
document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.style.overflowY = "hidden";
});
