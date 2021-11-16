<template>
  <div class="post-preview">
    <v-link :to="postLink">
      <v-row>
        <v-col col>
          <div class="post-preview-title">{{ post.title }}</div>
        </v-col>
        <v-col col>
          <div>{{ post.author }}</div>
        </v-col>
      </v-row>
    </v-link>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    post: { type: Object, required: true },
  },
  computed: {
    postLink() {
      const postId = this.post.id;

      return {
        name: "post",
        params: {
          id: postId,
        },
      };
    },
  },
};
</script>

<style lang="scss">
.post-preview {
  font-size: 1.25rem;
}
</style>
