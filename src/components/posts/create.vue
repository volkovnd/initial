<template>
  <form>
    <h3>form</h3>
    <v-row class="row-cols-2 g-3">
      <v-col>
        <v-form-control v-model="formData.title" placeholder="Title" />
      </v-col>
      <v-col>
        <v-form-control v-model="formData.author" placeholder="Author" />
      </v-col>
      <v-col>
        <v-btn type="submit" variant="primary" @click.prevent="onSubmit($event)">Submit</v-btn>
      </v-col>
    </v-row>
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
