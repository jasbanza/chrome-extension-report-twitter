<template>
  <div>
    <base-button icon="↩" tooltip="Return to main view" @click="back(detached)">
      Return
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
    back: btnReturn_onClick,
  },
};

function btnReturn_onClick(detached) {
  let href = "popup.html";
  if (detached) {
    href = href + "?detached=true";
  }
  window.location.href = href;
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
</style>
