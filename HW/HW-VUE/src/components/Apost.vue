<template>
  <div id="aPostArea">
    <div id="aPost-Box">
      <header>
        <strong>Post</strong>
      </header>
      <label>Body: </label>
      <div v-if="!update" id="text">
        <p>{{ post.body }}</p><br><br>
      </div>
      <textarea v-else id="textarea" name="updated-text">{{post.body}}</textarea>>
      <input v-if="!update" id="UpdatePost" @click="updatePost" type="submit" value="Update" class="button">
      <input v-else id="savePost" @click="savePost" type="submit" value="Save" class="button">
      <input id="deletePost" @click="deletePost" type="submit" value="Delete" class="button"><br>
    </div>

  </div>

</template>

<script>

export default {
  name: "A post",
  data() {
    return {
      post: {},
      update: false
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
      this.update = true;
    },
    async savePost() {
      this.update = false
      let newText = document.getElementById("textarea").value
      this.post.body = newText.toString()
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
          .then((response) => {
            console.log(response.data);
            //this.$router.push("/apost/" + this.post.id);
            // We are using the router instance of this element to navigate to a different URL location
          })
          .catch((e) => {
            console.log(e);
          });
    },
    async deletePost() {
      await fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
      })
          .then((response) => {
            console.log(response);
            // We are using the router instance of this element to navigate to a different URL location
            this.$forceUpdate();
          })
          .catch((e) => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.fetchPosts()
  },
}
</script>

<style>
@import '../style/aPost.css';
</style>