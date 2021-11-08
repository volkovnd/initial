<template>
  <div id="app">
    <header id="page-header">
      <v-container>
        <v-img src="~@/assets/logo.png" />
      </v-container>
    </header>

    <v-navbar variant="dark" bg="dark" expand="md">
      <v-container>
        <v-navbar-nav>
          <v-nav-item to="/">Home</v-nav-item>
          <v-nav-item to="/about">About</v-nav-item>
        </v-navbar-nav>
      </v-container>
    </v-navbar>

    <main id="main">
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
