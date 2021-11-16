<template>
  <div id="app">
    <AppHeader />
    <AppNav />

    <main id="main">
      <v-container>
        <RouterView :key="$route.fullPath" />
      </v-container>
    </main>
  </div>
</template>

<script>
import AppHeader from "@/layout/header.vue";
import AppNav from "@/layout/nav.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppNav,
  },
};
</script>
