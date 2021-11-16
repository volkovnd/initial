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
import { FETCH_POST } from "@/store/actions.type";

export default {
  name: "PostView",
  components: {},
  beforeRouteEnter(to, from, next) {
    store.dispatch(FETCH_POST, to.params.id).then(() => {
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
