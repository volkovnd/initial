<template>
  <div id="app">
    <component :is="LayoutComponent" :key="LayoutComponent.name || LayoutComponent.__file">
      <RouterView />
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    LayoutComponent() {
      return this.$route.meta.layout || require("@/layout/default.vue").default;
    },
  },
};
</script>
