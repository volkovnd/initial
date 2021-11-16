<template>
  <input
    :type="type"
    class="form-control"
    :class="{ [`form-control-${size}`]: !!size }"
    v-bind="$attrs"
    @input="onInput($event)"
    @change="onChange($event)"
  />
</template>

<script>
export default {
  name: "VFormControl",
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: null,
    },
  },

  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
    onChange(event) {
      this.$emit("change", event.target.value);
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/forms";
</style>
