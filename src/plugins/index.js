import { registerComponents } from "@/utils/components";

import { components } from "./global-components";

const install = function (Vue) {
  registerComponents(Vue, components);
};

export const Plugins = {
  install,
};
