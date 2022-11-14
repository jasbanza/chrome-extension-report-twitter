<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="popup-div overflow-hidden">
    <v-app :theme="theme">
      <v-app-bar density="comfortable" center elevation="3">
        <v-img src="assets/icon_48.png" max-width="40px" class="ms-3"></v-img>
        <v-app-bar-title>Twitter Auto Reporter</v-app-bar-title>
        <v-btn icon @click="toggleTheme">
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
        <v-btn icon v-if="!undocked" @click="undockPopup">
          <v-icon>mdi-dock-window</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-tabs
          v-model="currentTab"
          bg-color="indigo-darken-3"
          centered
          density="comfortable"
          grow
          @change="tabUpdated">
          <v-tab value="tab-reporting">
            <v-icon class="mr-2">mdi-gavel</v-icon>
            REPORTING
          </v-tab>
          <v-tab value="tab-log">
            <v-icon class="mr-2">mdi-clipboard-text-clock</v-icon>
            LOG
          </v-tab>
          <v-tab value="tab-settings">
            <v-icon class="mr-2">mdi-cog-outline</v-icon>
            SETTINGS
          </v-tab>
        </v-tabs>
        <v-window v-model="currentTab" height="300px">
          <v-window-item value="tab-reporting">
            <reporting-tab></reporting-tab>
          </v-window-item>
          <v-window-item value="tab-log">
            <log-tab></log-tab>
          </v-window-item>
          <v-window-item value="tab-settings">
            <settings-tab></settings-tab>
          </v-window-item>
        </v-window>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import ReportingTab from "./components/tabs/ReportingTab.vue";
import LogTab from "./components/tabs/LogTab.vue";
import SettingsTab from "./components/tabs/SettingsTab.vue";

export default {
  data() {
    return {
      currentTab: "tab-reporting",
      theme: "light",
    };
  },
  components: {
    ReportingTab: ReportingTab,
    LogTab: LogTab,
    SettingsTab: SettingsTab,
  },
  computed: {
    undocked() {
      return window.location.search.includes("undocked=true");
    },
  },
  methods: {
    undockPopup() {
      window.close();
      window.open(
        window.location.origin + window.location.pathname + "?undocked=true",
        "_blank",
        "popup,location=off,height=540,width=424"
      );
    },
    toggleTheme() {
      // this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.theme = this.theme == "light" ? "dark" : "light";
    },
    tabUpdated() {
      // document.documentElement.style.overflowY = "auto";
    },
  },
};
</script>

<style>
/* @import "../styles/reset.css";
@import "../styles/style.css"; */
</style>
<style scoped>
.v-tab--selected {
  background-color: #303f9f;
}
.header {
  display: inline-flex;
  justify-content: space-evenly; /* center the content horizontally */
  align-items: center; /* center the content vertically */
  text-align: center;
  width: 100%;
  font-size: 0.8em;
  padding: 0.5em 0.1em;
}

.popup-div {
  min-width: 405px;
  max-width: 415px;
  min-height: 500px;
  max-height: 500px;
}
</style>
