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
