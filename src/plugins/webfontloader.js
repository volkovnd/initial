import WebFont from "webfontloader";

export const loadFonts = (config) => {
  WebFont.load(config);
};

export const WebFontPlugin = {
  install: function (Vue, options) {
    loadFonts(options);
  },
};
