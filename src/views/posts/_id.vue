<template>
  <div>
    <div class="banner">
      <div class="container">
        <h1>{{ currentPost.title }}</h1>
      </div>
    </div>
    <div class="container page">
      <v-row>
        <v-col col="3">Автор</v-col>
        <v-col col="9">{{ currentPost.author }}</v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import postPropMixin from "@/mixins/postProp";

export default {
  name: "PostView",
  mixins: [postPropMixin],
  beforeRouteEnter(to, from, next) {
    const id = to.params.id;

    store.dispatch("fetchPostData", id).then((data) => {
      next((vm) => {
        vm.currentPost = {
          ...data,
        };
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    const id = to.params.id;

    store.dispatch("fetchPostData", id).then((data) => {
      for (let key in data) {
        this.currentPost[key] = data[key];
      }

      next();
    });
  },
};
</script>
