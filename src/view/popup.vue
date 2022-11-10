<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main_app">
    <base-header></base-header>
    <popup-controls></popup-controls>
    <popup-form></popup-form>
  </div>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";
import PopupControls from "./components/PopupControls.vue";
import PopupForm from "./components/PopupForm.vue";

export default {
  components: {
    BaseHeader: BaseHeader,
    PopupControls: PopupControls,
    PopupForm: PopupForm,
  },
};
</script>

<style>
@import "../styles/reset.css";
@import "../styles/style.css";
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

div {
  min-width: 350px;
}
</style>
