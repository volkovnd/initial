<template>
  <nav id="page-nav">
    <VContainer>
      <router-link v-for="link in links" :key="link.to" :to="link.to">{{ link.body }}</router-link>
    </VContainer>
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
