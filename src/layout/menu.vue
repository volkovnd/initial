<template>
  <nav id="page-nav">
    <VContainer>
      <VNav>
        <VNavLink v-for="link in links" :key="link.to" :to="link.to">{{ link.title }}</VNavLink>
      </VNav>
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
