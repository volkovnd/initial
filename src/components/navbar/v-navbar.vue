<template>
  <div
    class="navbar"
    :class="{
      [`navbar-${variant}`]: !!variant,
      [`navbar-expand-${expand}`]: !!expand,
      [`bg-${bg}`]: !!bg,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "VNavbar",
  props: {
    bg: {
      type: String,
      default: null,
    },
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
