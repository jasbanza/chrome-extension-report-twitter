<template>
  <base-button
    v-if="!detached"
    icon="⛶"
    @click="detach"
    tooltip="Click to open in detached window"></base-button>
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
    detach: btnDetachWindow_onClick,
  },
};

function btnDetachWindow_onClick() {
  window.close();
  window.open(
    window.location.origin + window.location.pathname + "?detached=true",
    "_blank",
    "popup,location=off,height=535,width=420"
  );
}
</script>

<style scoped></style>
