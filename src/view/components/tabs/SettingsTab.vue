<template>
  <v-tabs
    v-model="currentSettingsSection"
    bg-color="blue-darken-1"
    slider-color="indigo-darken-3"
    centered
    grow
    density="compact">
    <v-tab value="tab-behavior">
      <v-icon class="mr-2">mdi-clipboard-list-outline</v-icon>
      Behaviour
    </v-tab>
    <v-tab value="tab-datasource">
      <v-icon class="mr-2">mdi-database-search</v-icon>
      Data Source
    </v-tab>
    <!-- <v-tab value="tab-misc">
      <v-icon class="mr-2">mdi-chart-bubble</v-icon>
      Misc
    </v-tab> -->
  </v-tabs>

  <v-window v-model="currentSettingsSection">
    <v-window-item value="tab-behavior">
      <v-form refs="settings">
        <v-container class="px-2 pb-0">
          <v-label>Action</v-label>
          <v-radio-group inline v-model="reportMode">
            <v-radio label="Report & Block" value="REPORT_AND_BLOCK"></v-radio>
            <v-radio label="Report Only" value="REPORT"></v-radio>
          </v-radio-group>
        </v-container>
        <v-container class="px-2 py-0">
          <v-label class="mb-4">Mass Report (Hit List) Defaults:</v-label>
          <v-textarea
            label="Additional Context (Impersonators)"
            hint="Used when completing the reporting process..."
            variant="outlined"
            density="compact"
            class="mt-3"
            rows="2"
            prepend-icon="mdi-guy-fawkes-mask"
            v-model="defaultContextImpersonator"
            clearable></v-textarea>
          <v-textarea
            label="Additional Context (Scam Links)"
            hint="Used when completing the reporting process..."
            variant="outlined"
            density="compact"
            class="mt-3"
            rows="2"
            prepend-icon="mdi-link"
            v-model="defaultContextScamLinks"
            clearable></v-textarea>
        </v-container>
      </v-form>
    </v-window-item>
    <v-window-item value="tab-datasource">
      <v-form refs="settings" class="pa-2">
        <v-radio-group
          inline
          v-model="listSourceMode"
          density="comfortable"
          label="Source of scam list">
          <v-radio label="Remote" value="REMOTE"></v-radio>
          <v-radio label="Custom" value="LOCAL"></v-radio>
        </v-radio-group>
        <v-text-field
          v-if="listSourceMode == 'REMOTE'"
          v-model="remoteUrl"
          label="Remote Google Sheets URL"
          hint="Copy the URL from the correct sheet!"
          variant="outlined"
          density="comfortable"
          prepend-icon="mdi-satellite-uplink"
          class="mb-2"
          clearable></v-text-field>
        <v-text-field
          v-if="listSourceMode == 'REMOTE'"
          v-model="remoteUpdateFrequencyMinutes"
          label="List Update Frequency"
          variant="outlined"
          density="comfortable"
          prepend-icon="mdi-timer-sand"
          suffix="minutes"
          clearable></v-text-field>
        <v-textarea
          v-if="listSourceMode == 'LOCAL'"
          v-model="scamlist"
          label="Custom List"
          hint="One line per twitter account URL"
          persistent-hint
          placeholder="https://twitter.com/username https://twitter.com/username https://twitter.com/username https://twitter.com/username https://twitter.com/username https://twitter.com/username"
          rows="7"
          prepend-icon="mdi-twitter"
          density="comfortable"
          clearable
          variant="outlined"></v-textarea>
      </v-form>
    </v-window-item>
    <!-- <v-window-item value="tab-misc"></v-window-item> -->
  </v-window>
</template>

<script>
// import BaseButton from "./BaseButton.vue";
// import FormInput from "./FormInput.vue";

// import store from "@/store";

// eslint-disable-next-line
// import { mapGetters, mapState, mapMutations } from "vuex";
import { mapFields } from "vuex-map-fields";

export default {
  data() {
    return {
      currentSettingsSection: "tab-behavior",
    };
  },
  computed: {
    detached() {
      return window.location.search.includes("detached=true");
    },
    ...mapFields("settings", [
      "remoteUrl",
      "remoteUpdateFrequencyMinutes",
      "defaultContextImpersonator",
      "defaultContextScamLinks",
      "reportMode",
      "listSourceMode",
    ]),
    ...mapFields("scamlistLocal", ["scamlist"]),
  },
  watch: {
    remoteUrl() {
      this.saveSettings();
    },
    remoteUpdateFrequencyMinutes() {
      this.saveSettings();
    },
    defaultContextImpersonator() {
      this.saveSettings();
    },
    defaultContextScamLinks() {
      this.saveSettings();
    },
    reportMode() {
      this.saveSettings();
    },
    listSourceMode() {
      this.saveSettings();
    },
  },
  methods: {
    saveSettings() {
      console.log("saving settings to chrome localstorage");
      chrome.storage.sync.set({
        settings: this.$store.state.settings,
      });
    },
    loadSettings() {
      chrome.storage.sync.get("settings").then((res) => {
        if (res.settings) {
          const s = res.settings;
          this.remoteUrl =
            s.remoteURL ||
            "https://raw.githubusercontent.com/jasbanza/chrome-extension-report-twitter/main/scamlist.txt";
          this.remoteUpdateFrequencyMinutes =
            s.remoteUpdateFrequencyMinutes || "15";
          this.defaultContextImpersonator =
            s.defaultContextImpersonator || "This is a phishing account.";
          this.defaultContextScamLinks =
            s.defaultContextScamLinks ||
            "This account shares & tags users in scams.";
          this.reportMode = s.reportMode || "REPORT_AND_BLOCK";
          this.listSourceMode = s.listSourceMode || "LOCAL";
        }
      });
    },
  },
  created() {
    this.loadSettings();
  },
};
</script>

<style scoped>
.v-tab--selected {
  background-color: #2196f3;
}
.wrapper {
  overflow-y: scroll;
}
</style>
