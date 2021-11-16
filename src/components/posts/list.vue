<template>
  <div>
    <div v-if="isLoading" class="post-preview">Загрузка..</div>
    <div v-else>
      <v-row>
        <v-col col>
          <div class="list-heading">Название</div>
        </v-col>
        <v-col col>
          <div class="list-heading">Автор</div>
        </v-col>
      </v-row>

      <div v-if="posts.length === 0" class="post-preview">Нет ни одного поста...</div>
      <PostListPreview v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostListPreview from "./list-preview.vue";
import { FETCH_POSTS } from "@/store/types/actions";

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
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    listConfig() {
      const filters = {
        offset: (this.currentPage - 1) * this.itemPerPage,
        limit: this.itemPerPage,
      };

      return {
        filters,
      };
    },

    ...mapGetters(["isLoading", "posts"]),
  },
  mounted() {
    this.fetchPosts();
  },

  methods: {
    fetchPosts() {
      this.$store.dispatch(FETCH_POSTS, this.listConfig);
    },
  },
};
</script>

<style lang="scss">
.list-heading {
  font-size: $h3-font-size;
  font-weight: bold;
}
</style>
