import { WEB_FONTS_CONFIG } from "@/config";

const loadFonts = (config) => {
  return import("webfontloader").then((WebFont) => {
    WebFont.load(config);
  });
};

const install = function () {
  loadFonts(WEB_FONTS_CONFIG);
};

export const WebFontsPlugin = {
  install,
};
