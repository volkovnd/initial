<template>
  <div>
    <h1>Posts list</h1>

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
