/**
 * Register components
 *
 * @param {any} Vue
 * @param {string} name
 * @param {any} config
 */
export const registerComponent = function (Vue, name, config) {
  if (Vue && name && config) {
    Vue.component(name, config);
  }
};

/**
 * Register components
 *
 * @param {any} Vue
 * @param {object} components
 */
export const registerComponents = function (Vue, components) {
  for (const name in components) {
    const config = components[name];

    registerComponent(Vue, name, config);
  }
};
