import { createApp } from "vue";
import { createStore } from "vuex";
import store from "../store";
import App from "../view/popup.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);

// Vuex

// eslint-disable-next-line
const oldstore = createStore({
  state() {
    return {
      target: {
        /* this is the currently active scammer to process */
        url: "",
        reason: "",
        additionalContext: "",
      } /* TODO: init from chrome.storage.sync.get("target") */,
      scamlist: {
        /* all lists use the twitter url as the primary key */
        remote:
          [] /* overwritten by remote list */ /* TODO: init from chrome.storage.sync.get("scamlist-remote") */,
        local:
          [] /* overwritten by user's settings */ /* TODO: init from chrome.storage.sync.get("scamlist-local") */,
        hitlist:
          [] /* records updated or inserted by new records in local or remote lists */ /* TODO: init from chrome.storage.sync.get("scamlist-hitlist") */,
      },
      settings: {
        /* loaded from chrome.storage.sync.get("settings") */
        source: "" /* LOCAL | REMOTE */,
        remoteUrl: "",
        remoteUpdateFrequencyMinutes: "",
      },
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
app.use(store);

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
app.use(vuetify);
app.mount("#app");

// fix for extension detaching scrollbar
document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.style.overflowY = "hidden";
});
