<template>
  <div id="page">
    <AppHeader />
    <AppMenu />

    <main id="page-main">
      <VContainer>
        <slot></slot>
      </VContainer>
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
