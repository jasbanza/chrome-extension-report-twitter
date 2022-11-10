<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main_app">
    <base-header></base-header>
    <options-controls></options-controls>
    <options-form></options-form>
  </div>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";
import OptionsControls from "./components/OptionsControls.vue";
import OptionsForm from "./components/OptionsForm.vue";

export default {
  components: {
    BaseHeader: BaseHeader,
    OptionsControls: OptionsControls,
    OptionsForm: OptionsForm,
  },
};
</script>

<style>
@import "../styles/reset.css";

:root {
  /* Default Colors as HEX Code */
  --colorNotSoWhite: #f0f0f0;
  --colorJasonBlu: #3c356d;
  --colorOsmoWosmo: #462daf;
  --colorOsmoIon: #2994d0;
  --colorOsmoAmmelia: #ca2ebd;
  --colorOsmoBullish: #29d0b2;
  --colorOsmoBearish: #c6451c;
  --colorOsmoVerse: #140f34;
  /* Default Font-Families */
  --fontNumbers: "IBM Plex Mono", monospace;
  --fontText: "Inter", sans-serif;
  --fontHeadings: "Poppins", sans-serif;
}

html {
  font-family: var(--fontText);
  font-weight: 400;
  font-size: 1rem;
  color: var(--colorNotSoWhite);
}

/* Setting the default bg color */
body {
  margin: 0;
  background-color: var(--colorOsmoVerse);
  color: var(--colorNotSoWhite);
}

.main_app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* width: 350px; */
  display: flex;
  flex-direction: column;
}
</style>

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
