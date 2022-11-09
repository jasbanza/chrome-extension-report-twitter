<template>
  <div class="main_app">
    <div class="header">
      <img src="../assets/icon_48.png" />Twitter Auto Reporter
    </div>
    <the-controls></the-controls>
    <the-output></the-output>
  </div>
</template>

<script>
import TheControls from "./components/TheControls.vue";
import TheOutput from "./components/TheOutput.vue";

export default {
  components: {
    TheControls: TheControls,
    TheOutput: TheOutput,
  },
  name: "popupView",
  data() {
    return {
      msg: "popudp",
    };
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
<style scoped>
.header {
  display: inline-flex;
  justify-content: center; /* center the content horizontally */
  align-items: center; /* center the content vertically */
  text-align: center;
  width: 100%;
  font-size: 0.8em;
  padding: 0.5em 0.1em;
}
</style>
