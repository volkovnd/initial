<template>
  <div>
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
import postPropMixin from "@/mixins/postProp";

export default {
  name: "PostView",
  mixins: [postPropMixin],
  beforeRouteEnter(to, from, next) {
    const id = to.params.id;

    store.dispatch("fetchPost", id).then((data) => {
      next((vm) => {
        vm.post = data;
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.post = null;

    const id = to.params.id;

    store.dispatch("fetchPost", id).then((data) => {
      this.post = data;

      next();
    });
  },
};
</script>
