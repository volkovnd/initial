import { WEB_FONT_CONFIG } from "@/config";
import { registerComponents } from "@/utils/components";

import { components } from "./global-components";
import { loadFonts } from "./webfontloader";

const install = function (Vue) {
  loadFonts(WEB_FONT_CONFIG);

  registerComponents(Vue, components);
};

export const Plugins = {
  install,
};
