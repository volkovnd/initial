<template>
  <v-navbar variant="dark" bg-variant="dark" expand="md">
    <v-container>
      <v-navbar-nav>
        <v-nav-item to="/posts">Posts</v-nav-item>
        <v-nav-item to="/posts/create">Add post</v-nav-item>
      </v-navbar-nav>
    </v-container>
  </v-navbar>
</template>

<script>
export default {
  name: "AppNav",
};
</script>
