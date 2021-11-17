<template>
  <div>
    <AppHeader />
    <AppNav />

    <main id="main">
      <v-container>
        <router-view :key="$route.fullPath" />
      </v-container>
    </main>
  </div>
</template>

<script>
import AppHeader from "@/layout/header.vue";
import AppNav from "@/layout/nav.vue";

export default {
  name: "DefaultLayout",
  components: {
    AppHeader,
    AppNav,
  },
};
</script>
