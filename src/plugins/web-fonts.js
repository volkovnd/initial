export default function (Vue, options) {
  import("webfontloader").then((WebFont) => {
    WebFont.load(options);
  });
}
