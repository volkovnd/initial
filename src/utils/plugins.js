/**
 *
 * @param {any} Vue
 * @param {any} plugin
 * @param {object} options
 */
export const registerPlugin = function (Vue, plugin, options = {}) {
  if (Vue && plugin) {
    Vue.use(plugin, options);
  }
};

/**
 *
 * @param {any} Vue
 * @param {object} plugin
 * @param {object} options
 */
export const registerPlugins = function (Vue, plugins, options = {}) {
  for (const plugin in plugins) {
    registerPlugin(Vue, plugins[plugin], options);
  }
};
