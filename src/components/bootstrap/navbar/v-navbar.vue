<template>
  <div class="navbar" :class="computedClasses">
    <slot />
  </div>
</template>

<script>
import { bgMixin } from "@/mixins/bgVariant";

export default {
  name: "VNavbar",
  mixins: [bgMixin],
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
  computed: {
    variantClass() {
      return [this.variant ? `navbar-${this.variant}` : null];
    },
    expandClass() {
      return [this.expand ? `navbar-expand-${this.expand}` : null];
    },
    computedClasses() {
      const classes = [];

      classes.push(this.variantClass);

      classes.push(this.expandClass);

      classes.push(this.bgVariantClass);

      return classes;
    },
  },
};
</script>
