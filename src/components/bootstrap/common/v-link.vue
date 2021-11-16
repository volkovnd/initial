<template>
  <router-link
    :to="computedLinkTo"
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
  inheritAttrs: false,
  props: {
    to: {
      type: [String, Object],
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
    computedLinkTo() {
      if (this.to && typeof this.to !== "string") return this.to;

      return {
        path: this.to || this.href,
      };
    },
  },
};
</script>
