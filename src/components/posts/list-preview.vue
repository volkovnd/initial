<template>
  <div class="post-preview">
    <v-row>
      <v-col col="9">
        <v-link :to="`/posts/${currentPost.id}`">
          <v-row>
            <v-col col="6">
              <div class="post-preview-title">{{ currentPost.title }}</div>
            </v-col>
            <v-col col="6">
              <div>{{ currentPost.author }}</div>
            </v-col>
          </v-row>
        </v-link>
      </v-col>
      <v-col col="3">
        <div>
          <v-btn variant="danger" size="sm" @click="onClickDelete">Удалить</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import postPropMixin from "@/mixins/postProp";

export default {
  name: "PostPreview",
  mixins: [postPropMixin],
  inheritAttrs: false,
  methods: {
    ...mapActions(["deletePost"]),

    async onClickDelete() {
      await this.deletePost(this.currentPost.id);
    },
  },
};
</script>

<style lang="scss">
.post-preview {
  font-size: 1.25rem;
}
</style>
