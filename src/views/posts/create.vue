<template>
  <div>
    <h1>Add page</h1>

    <PostsCreate />
  </div>
</template>

<script>
import PostsCreate from "@/components/posts/create.vue";

export default {
  name: "PostsCreateView",

  components: { PostsCreate },
};
</script>
