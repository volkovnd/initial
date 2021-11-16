<template>
  <div class="post-page">
    <div class="banner">
      <div class="container">
        <h1>{{ post.title }}</h1>
      </div>
    </div>
    <div class="container page">
      <v-row>
        <v-col col="3">Автор</v-col>
        <v-col col="9">{{ post.author }}</v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { mapGetters } from "vuex";

export default {
  name: "PostView",
  beforeRouteEnter: (to, from, next) => {
    store.dispatch("getPost", to.params.id).then(() => {
      next();
    });
  },
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    ...mapGetters(["post"]),
  },
};
</script>
