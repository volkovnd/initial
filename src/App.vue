<template>
  <div id="app">
    <header id="page-header">
      <v-container>
        <v-img src="~@/assets/logo.png" />
      </v-container>
    </header>

    <nav id="page-nav" class="bg-dark">
      <v-navbar variant="dark" expand="md">
        <v-container>
          <v-nav is-navbar>
            <v-nav-item to="/">Home</v-nav-item>
            <v-nav-item to="/about">About</v-nav-item>
          </v-nav>
        </v-container>
      </v-navbar>
    </nav>

    <main id="page-main">
      <v-container>
        <RouterView :key="$route.fullPath" />
      </v-container>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "@/scss/vendor/bootstrap/index";
</style>
