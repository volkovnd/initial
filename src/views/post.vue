<template>
  <div class="post-page">
    <div class="banner">
      <div class="container">
        <h1>{{ post.title }}</h1>
      </div>
    </div>
    <div class="container page">
      <div class="row"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
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
