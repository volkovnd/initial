<template>
  <div id="page">
    <nav id="page-nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>

    <main id="page-main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>
