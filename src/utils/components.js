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
  for (const name in components) {
    registerComponent(VueConstructor, name, components[name]);
  }
};

/**
 *
 * @param {import("vue/types/options").ImportedComponent}  component
 * @returns {import("vue/types/options").AsyncComponentFactory}
 */
export function asyncComponentFactory(component) {
  return () => ({
    component: Promise.resolve(component),

    loading: require("@/views/_loading.vue"),
  });
}
