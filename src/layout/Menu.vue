<template>
  <nav id="page-nav">
    <ui-container>
      <router-link v-for="link in links" :key="link.to" :to="link.to">{{ link.body }}</router-link>
    </ui-container>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          to: "/",
          body: "Home",
        },
        {
          to: "/about",
          body: "About",
        },
      ],
    };
  },
};
</script>
