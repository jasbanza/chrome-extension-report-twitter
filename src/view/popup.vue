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
          bg-color="indigo darken-3"
          centered
          density="comfortable"
          grow
          @change="tabUpdated">
          <v-tab value="tab-dashboard">
            <v-icon class="mr-2">mdi-twitter</v-icon>
            DASHBOARD
          </v-tab>
          <v-tab value="tab-settings">
            <v-icon class="mr-2">mdi-cog-outline</v-icon>
            Settings
          </v-tab>
        </v-tabs>
        <v-window v-model="currentTab">
          <v-window-item value="tab-dashboard">
            <dashboard-tab></dashboard-tab>
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
import DashboardTab from "./components/tabs/DashboardTab.vue";
import SettingsTab from "./components/tabs/SettingsTab.vue";

export default {
  data() {
    return {
      currentTab: "tab-reporting",
      theme: "light",
    };
  },
  components: {
    DashboardTab: DashboardTab,
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
        "popup,location=off,height=535,width=420"
      );
    },
    toggleTheme() {
      // this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.theme = this.theme == "light" ? "dark" : "light";
    },
    tabUpdated() {
      document.documentElement.style.overflowY = "auto";
    },
  },
};
</script>

<style>
/* @import "../styles/reset.css";
@import "../styles/style.css"; */
</style>
<style scoped>
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
  min-width: 420px;
}
</style>
