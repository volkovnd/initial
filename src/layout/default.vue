<template>
  <div id="page">
    <AppHeader />
    <AppMenu />

    <main id="page-main">
      <v-container>
        <slot></slot>
      </v-container>
    </main>
  </div>
</template>

<script>
import AppHeader from "./header.vue";
import AppMenu from "./menu.vue";

export default {
  name: "Layout",
  components: {
    AppHeader,
    AppMenu,
  },
};
</script>
