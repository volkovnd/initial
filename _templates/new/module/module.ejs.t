---
to: "src/store/modules/<%= h.changeCase.kebab(name) %>.js"
---
const state = () => ({});

/** @type {import("vuex").MutationTree} */
const mutations = {};

/** @type {import("vuex").ActionTree} */
const actions = {};

/** @type {import("vuex").GetterTree} */
const getters = {};

const namespaced = true;

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced,
};
