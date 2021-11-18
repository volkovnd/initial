<template>
  <div>
    <div v-if="isLoading" class="post-preview">Loading...</div>
    <div v-else>
      <v-row>
        <v-col col>
          <div class="list-heading">Title</div>
        </v-col>
        <v-col col>
          <div class="list-heading">Author</div>
        </v-col>
        <v-col v-if="totalPosts">Всего: {{ totalPosts }}</v-col>
      </v-row>

      <div v-if="!posts.length" class="post-preview">Nothing to show...</div>

      <PostListPreview v-for="post in posts" :key="post.id" v-bind="post" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PostListPreview from "./list-preview.vue";

export default {
  name: "PostsList",
  components: {
    PostListPreview,
  },
  props: {
    itemPerPage: {
      type: Number,
      default: 10,
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    ...mapGetters("posts", ["isLoading", "posts", "totalPosts"]),
    listParams() {
      return {
        offset: (this.page - 1) * this.itemPerPage,
        limit: this.itemPerPage,
      };
    },
  },
  created() {
    this.getPosts(this.listParams);
  },

  methods: {
    ...mapActions("posts", ["getPosts"]),
  },
};
</script>

<style lang="scss">
.list-heading {
  font-size: $h3-font-size;
  font-weight: bold;
}
</style>
