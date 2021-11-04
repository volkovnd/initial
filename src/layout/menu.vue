<template>
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
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          to: "/",
          title: "Home",
        },
        {
          to: "/about",
          title: "About",
        },
      ],
    };
  },
};
</script>
