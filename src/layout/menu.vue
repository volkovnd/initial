<template>
  <nav id="page-nav">
    <VContainer>
      <router-link v-for="link in links" :key="link.to" :to="link.to">{{ link.title }}</router-link>
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
