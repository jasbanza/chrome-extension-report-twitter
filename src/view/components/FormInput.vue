<template>
  <div>
    <label :for="name"><slot></slot></label>
    <input
      :name="name"
      :type="type"
      :value="value"
      :min="min"
      :max="max"
      :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: ["name", "type", "value", "min", "max", "placeholder"],
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
