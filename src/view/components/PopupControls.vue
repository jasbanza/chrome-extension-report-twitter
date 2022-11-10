<template>
  <div>
    <base-button icon="▶" tooltip="Click to begin the reporting process">
      Start Reporting
    </base-button>
    <base-button
      icon="⚙"
      tooltip="Configure settings"
      @click="settings(detached)">
      Settings...
    </base-button>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: {
    BaseButton: BaseButton,
  },
  computed: {
    detached() {
      return window.location.search.includes("detached=true");
    },
  },
  methods: {
    settings: btnSettings_onClick,
  },
};

function btnSettings_onClick(detached) {
  let href = "options.html";
  if (detached) {
    href = href + "?detached=true";
  }
  window.location.href = href;
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-evenly;
}
</style>
