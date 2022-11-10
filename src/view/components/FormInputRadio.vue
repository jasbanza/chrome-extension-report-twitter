<template>
  <label :for="name"><slot></slot></label>
  <input :name="name" type="radio" :value="value" />
</template>

<script>
export default {
  props: ["name", "value"],
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
}

label {
}

input {
}
</style>
