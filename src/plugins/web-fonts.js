const loadFonts = (config) => {
  return import("webfontloader").then((WebFont) => {
    WebFont.load(config);
  });
};

export default function (Vue, options) {
  loadFonts(options);
}
