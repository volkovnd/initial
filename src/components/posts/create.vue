<template>
  <form>
    <h3>form</h3>
    <v-grid columns="3">
      <v-grid-col>
        <v-form-control v-model="formData.title" placeholder="Title" />
      </v-grid-col>

      <v-grid-col>
        <v-form-control v-model="formData.author" placeholder="Author" />
      </v-grid-col>

      <v-grid-col>
        <v-btn type="submit" outline block variant="primary" @click.prevent="onSubmit($event)">Submit</v-btn>
      </v-grid-col>
    </v-grid>
  </form>
</template>

<script>
import { PostsService } from "@/api/index";

export default {
  name: "PostsCreate",

  data() {
    return {
      formData: {
        title: "",
        author: "",
      },
    };
  },

  methods: {
    reset() {
      this.formData = {
        title: "",
        author: "",
      };
    },

    async onSubmit() {
      try {
        const data = this.formData;

        await PostsService.create(data);

        this.reset();

        this.$router.push({ name: "posts" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
