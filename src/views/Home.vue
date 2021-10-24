<template>
  <Layout>
    <img alt="Vue logo" src="../assets/logo.png" />

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </Layout>
</template>

<script>
import Layout from "@/layout/index.vue";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    Layout,
    HelloWorld,
  },
};
</script>
