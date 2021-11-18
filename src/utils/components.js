/**
 * @param {VueConstructor} VueConstructor
 */
export const registerComponent = (VueConstructor, name, def) => {
  if (VueConstructor && name && def) {
    VueConstructor.component(name, def);
  }
};

/**
 * @param {import("vue").VueConstructor} VueConstructor
 * @param {object} components
 */
export const registerComponents = (VueConstructor, components = {}) => {
  Object.entries(components).map(([name, options]) => registerComponent(VueConstructor, name, options));
};

/**
 * @param {import("vue/types/options").ImportedComponent} component
 * @returns {import("vue/types/options").AsyncComponentFactory}
 */
export function asyncComponentFactoryFactory(asyncImport, { loading, error, delay, timeout } = {}) {
  return function () {
    return () => ({
      component: Promise.resolve(asyncImport),
      loading,
      error,
      delay,
      timeout,
    });
  };
}
