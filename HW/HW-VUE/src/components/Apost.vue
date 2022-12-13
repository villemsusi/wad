<template>
  <div id="aPostArea">
    <div id="aPost-Box">
      <header>
        <strong>Post</strong>
      </header>
      <label>Body:   </label>
      <div id= "text">
        <p><textarea>{{post.body}}</textarea></p><br><br>
      </div>
      <input id="UpdatePost" @click="updatePost" type="submit" value="Update" class="button">
      <input id="deletePost" @click="deletePost" type="submit" value="Delete" class="button"><br>
    </div>

  </div>

</template>

<script>
import {Pool} from "pg";

export default {
  name: "A post",
  data() {
    return {
      post: {},
    }
  },

  methods: {
    async fetchPosts() {
      let posts;
      await fetch(`http://localhost:3000/api/posts/`)
          .then((response) => response.json())
          .then((data) => (posts = data))
          .catch((err) => console.log(err.message));
      for (const post of posts) {
        if (this.$route.params.id == post.id) {
          this.post = post;
          break;
        }
      }
    },
    async updatePost() {

      let text = document.getElementById("text")
      let text1 = text.value
      const request = {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        credentials: 'include',
        body: JSON.stringify({
          "body": text1
        })
      }
      await fetch(`http://localhost:3000/api/posts/`)
    },
    async deletePost() {

      let post = document.getElementById("text");
      delete
      post.parentNode.removeChild(post);


    },
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<style>
@import '../style/aPost.css';
</style>