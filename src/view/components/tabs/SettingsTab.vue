<template>
  <!-- <form-input
      name="banlistUrl"
      type="URL"
      placeholder="https://myscamlist.com/list.txt"
      value="">
      Scamlist URL
    </form-input>
    <form-input
      name="scamlistUpdateFrequency"
      type="number"
      placeholder="10"
      min="5"
      max="1440"
      value="10">
      Scamlist Update Frequency (minutes)
    </form-input>
    <form-input
      name="additionalContext"
      type="text"
      label=""
      placeholder="This is a scam account. The real account is @RealAccount"
      value="">
      Additional Context
    </form-input> -->

  <v-form refs="settings" class="pa-2">
    <v-radio-group inline v-model="reportMode" label="Action to take">
      <v-radio label="Report & Block" value="REPORT_AND_BLOCK"></v-radio>
      <v-radio label="Report Only" value="REPORT"></v-radio>
    </v-radio-group>
    <v-radio-group inline v-model="listSyncMode" label="Source of scam list">
      <v-radio label="Remote" value="REMOTE"></v-radio>
      <v-radio label="Local" value="LOCAL"></v-radio>
    </v-radio-group>
    <v-text-field
      label="Remote List URL"
      variant="outlined"
      clearable></v-text-field>
    <v-text-field
      label="Scamlist update frequency (minutes)"
      variant="outlined"
      clearable></v-text-field>
    <v-text-field
      label="Additional Context"
      variant="outlined"
      clearable></v-text-field>
    <v-btn-toggle label="Enable Custom List" variant="outlined"></v-btn-toggle>
    <v-textarea label="Custom List" clearable variant="outlined"></v-textarea>

    <v-switch
      density="compact"
      label="Show Reported"
      color="green"
      rounded
      inset
      class="ml-2 mb-0 h-1 b"
      v-model="showReported"></v-switch>
  </v-form>
</template>

<script>
// import BaseButton from "./BaseButton.vue";
// import FormInput from "./FormInput.vue";

export default {
  data() {
    return {
      reportMode: "REPORT_AND_BLOCK",
      listSyncMode: "REMOTE",
    };
  },
  components: {
    // BaseButton: BaseButton,
    // FormInput: FormInput,
  },
  computed: {
    detached() {
      return window.location.search.includes("detached=true");
    },
  },
  methods: {
    detach: btnDetachWindow_onClick,
    settings: btnSettings_onClick,
    save: () => {
      console.log(this.refs.settings);
    },
  },
};

function btnDetachWindow_onClick() {
  window.close();
  window.open(
    "popup.html?detached=true",
    "_blank",
    "popup,location=off,height=535,width=400"
  );
}

function btnSettings_onClick() {
  //   chrome.runtime.openOptionsPage();
  window.location.href = "options.html";
}
</script>

<style scoped>
/* div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
} */
</style>
