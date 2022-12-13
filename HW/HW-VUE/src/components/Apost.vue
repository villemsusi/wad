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
      app.put('/api/posts/:id', async(req, res) => {
        try {
          const {text} = req.body;
          const title=req.title;
          const author = req.author;
          console.log("update request has arrived");
          const updatepost = await pool.query(
              "UPDATE posttable SET (author,title, body) = ($2, $3, $4) WHERE body = $1", [author, title, text]
          );
          res.json(updatepost);
        } catch (err) {
          console.error(err.message);
        }
      });
    },
    async deletePost() {
      await fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
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