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
          <v-btn variant="danger" size="sm" @click="onClickDelete($event)">Удалить</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { POST_DELETE } from "@/store/types/actions";

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
    onClickDelete(event) {
      event.preventDefault();

      this.$store.dispatch(POST_DELETE, this.post.id);
    },
  },
};
</script>

<style lang="scss">
.post-preview {
  font-size: 1.25rem;
}
</style>
