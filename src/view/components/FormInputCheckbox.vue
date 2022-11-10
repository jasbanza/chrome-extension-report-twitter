<template>
  <div>
    <label :for="name"><slot></slot></label>
    <input :name="name" type="checkbox" />
  </div>
</template>

<script>
export default {
  props: ["name"],
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
