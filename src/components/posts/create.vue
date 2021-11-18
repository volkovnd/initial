<template>
  <form>
    <h3>form</h3>
    <v-grid columns="3">
      <v-grid-col>
        <v-form-control v-model="currentPost.title" placeholder="Title" />
      </v-grid-col>

      <v-grid-col>
        <v-form-control v-model="currentPost.author" placeholder="Author" />
      </v-grid-col>

      <v-grid-col>
        <v-btn type="submit" block variant="primary" @click.prevent="onSubmit($event)">Submit</v-btn>
      </v-grid-col>
    </v-grid>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import postPropMixin from "@/mixins/postProp";

export default {
  name: "PostsCreate",
  mixins: [postPropMixin],
  methods: {
    ...mapActions(["addPost"]),

    async onSubmit() {
      try {
        const formData = {};

        for (let key in this.currentPost) {
          formData[key] = this.currentPost[key];
        }

        await this.addPost(formData);

        this.$router.push("/posts");
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
</script>
