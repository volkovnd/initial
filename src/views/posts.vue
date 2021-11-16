<template>
  <div>
    <h1>Home page</h1>

    <PostsList />
  </div>
</template>

<script>
import PostsList from "@/components/posts/list.vue";

export default {
  name: "PostsView",

  components: {
    PostsList,
  },
};
</script>
