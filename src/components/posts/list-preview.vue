<template>
  <div class="post-preview">
    <v-row>
      <v-col col="9">
        <v-link :to="postLinkTo">
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
          <v-btn variant="danger" size="sm" @click="deletePost(id)">Удалить</v-btn>
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
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    postLinkTo() {
      return "/posts/" + this.id;
    },
  },
  methods: {
    ...mapActions("posts", ["deletePost"]),
  },
};
</script>

<style lang="scss">
.post-preview {
  font-size: 1.25rem;
}
</style>
