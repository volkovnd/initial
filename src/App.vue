<template>
  <div id="app">
    <RouterView :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "~@/styles/reset";
</style>
