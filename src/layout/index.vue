<template>
  <div id="page">
    <app-menu />

    <main id="page-main">
      <ui-container>
        <slot></slot>
      </ui-container>
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
