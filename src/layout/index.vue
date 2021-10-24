<template>
  <div id="page">
    <AppMenu />

    <main id="page-main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import AppMenu from "./Menu.vue";

export default {
  name: "Layout",
  components: {
    AppMenu,
  },
};
</script>
