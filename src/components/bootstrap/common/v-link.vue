<template>
  <router-link
    :to="linkTo"
    :active-class="activeClass"
    :exact-active-class="exactActiveClass"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  name: "VLink",
  props: {
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    activeClass: {
      type: String,
      default: "",
    },
    exactActiveClass: {
      type: String,
      default: "active",
    },
  },
  computed: {
    linkTo() {
      return this.to
        ? this.to
        : {
            to: this.href,
          };
    },
  },
};
</script>
