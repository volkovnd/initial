<template>
  <DefaultLayout>
    <img alt="Vue logo" src="../assets/logo.png" />

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/index.vue";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    DefaultLayout,
    HelloWorld,
  },
};
</script>
