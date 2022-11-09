<template>
  <div>
    <v-button icon="▶" tooltip="Click to begin the reporting process"
      >Start Reporting</v-button
    >
    <v-button icon="⚙" tooltip="Configure settings">Settings...</v-button>
    <v-button
      v-if="!detached"
      icon="⛶"
      @click="detach"
      tooltip="Click to open in detached window"
    ></v-button>
  </div>
</template>

<script>
import VButton from "./VButton.vue";

export default {
  components: {
    VButton: VButton,
  },
  computed: {
    detached() {
      return window.location.search.includes("detached=true");
    },
  },
  methods: {
    detach: btnDetachWindow_onClick,
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
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
</style>
