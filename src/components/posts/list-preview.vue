<template>
  <div class="post-preview">
    <v-row>
      <v-col col="9">
        <v-link :to="postLink">
          <v-row>
            <v-col col="6">
              <div class="post-preview-title">{{ post.title }}</div>
            </v-col>
            <v-col col="6">
              <div>{{ post.author }}</div>
            </v-col>
          </v-row>
        </v-link>
      </v-col>
      <v-col col="3">
        <div>
          <v-btn variant="danger" size="sm" @click="deletePost(post.id)">Удалить</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

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
  methods: {
    ...mapActions(["deletePost"]),
  },
};
</script>

<style lang="scss">
.post-preview {
  font-size: 1.25rem;
}
</style>
