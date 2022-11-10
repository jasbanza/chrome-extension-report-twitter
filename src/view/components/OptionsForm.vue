<template>
  <div>
    <form-input
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
    </form-input>
    <v-radio-group inline>
      <v-radio label="Report & Block" value="REPORT_AND_BLOCK"></v-radio>
      <v-radio label="Report Only" value="REPORT"></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
// import BaseButton from "./BaseButton.vue";
import FormInput from "./FormInput.vue";

export default {
  components: {
    // BaseButton: BaseButton,
    FormInput: FormInput,
  },
  computed: {
    detached() {
      return window.location.search.includes("detached=true");
    },
  },
  methods: {
    detach: btnDetachWindow_onClick,
    settings: btnSettings_onClick,
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
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
}
</style>
