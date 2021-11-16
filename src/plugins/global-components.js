import Vue from "vue";
import { kebabCase } from "@/utils";

const context = require.context("@/components", true, /v-[\w-]+\.(vue|js)$/);

context.keys().forEach((key) => {
  const name = kebabCase(key.replace(/^\..*\//, "").replace(/\.[\w]+$/, ""));
  const options = context(key).default;

  Vue.component(name, options);
});
