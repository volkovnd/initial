import Vue from "vue";

export const bgMixin = Vue.extend({
  props: {
    textVariant: {
      type: String,
      default: null,
    },
  },

  computed: {
    textClass() {
      return [this.textVariant ? `text-${this.textVariant}` : null];
    },
  },
});
