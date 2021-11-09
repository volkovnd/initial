import Vue from "vue";

export const bgMixin = Vue.extend({
  props: {
    bgVariant: {
      type: String,
      default: null,
    },
  },

  computed: {
    bgVariantClass() {
      return [this.bgVariant ? `bg-${this.bgVariant}` : null];
    },
  },
});
