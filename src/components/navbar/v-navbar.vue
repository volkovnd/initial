<template>
  <div
    class="navbar"
    :class="{
      [`navbar-${variant}`]: !!variant,
      [`navbar-expand-${expand}`]: !!expand,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "VNavbar",
  props: {
    variant: {
      type: String,
      default: null,
    },
    expand: {
      type: String,
      default: null,
    },
  },
};
</script>
