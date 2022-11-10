<template>
  <button :title="tooltip">
    <span class="icon" v-if="icon">{{ icon }}</span>
    <span class="text" v-if="hasText">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: ["icon", "tooltip"],
  computed: {
    hasText() {
      return !!this.$slots.default;
    },
  },
};
</script>

<style scoped>
span.icon {
  font-size: 1.5rem;
}
span.text {
  margin-left: 5px;
}

button {
  display: inline-flex;
  justify-content: center; /* center the content horizontally */
  align-items: center; /* center the content vertically */
  font: var(--fontHeadings);
  font-size: 1rem;
  border-color: var(--colorJasonBlu);
  border-width: 1px;
  border-style: solid;
  background-color: var(--colorOsmoWosmo);
  color: var(--colorNotSoWhite);
  padding: 0.3rem 0.5rem;
  border-radius: 1rem;
  margin: 0.5rem;
  /* width: 12rem; */
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.26) -5px 5px 10px;
  transition-property: all;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  white-space: nowrap;
}
button:focus {
  outline: none;
}
button:hover,
button:active,
button.active {
  background-color: var(--colorOsmoIon);
  border-color: var(--colorOsmoWosmo);
  border-radius: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.26) 5px -5px 10px;
  transition-property: all;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
}
</style>
