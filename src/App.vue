<template>
  <div id="app">
    <component :is="LayoutComponent" :key="LayoutComponent.name || LayoutComponent.__file">
      <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <RouterView :key="$route.fullPath" />
      </transition>
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

<style lang="scss">
#app {
  --animate-duration: 0.3s;
}
</style>
