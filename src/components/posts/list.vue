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

      <PostListPreview v-for="post in posts" :key="post.id" :post="post" />
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
  data() {
    return {
      currentPage: this.page,
    };
  },
  computed: {
    offset() {
      return (this.page - 1) * this.itemPerPage;
    },
    limit() {
      return this.itemPerPage;
    },
    ...mapGetters(["isLoading", "posts", "totalPosts"]),
  },
  created() {
    this.getPosts({
      params: {
        _limit: this.limit,
        _offset: this.offset,
      },
    });
  },

  methods: {
    ...mapActions(["getPosts"]),
  },
};
</script>

<style lang="scss">
.list-heading {
  font-size: $h3-font-size;
  font-weight: bold;
}
</style>
