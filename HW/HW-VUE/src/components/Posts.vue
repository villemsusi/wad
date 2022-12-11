<template>
  <section class="forum">
    <div id="left">
      <img src="../assets/hesburger.jpg" id="hesburger" alt="hesburger logo">
    </div>
    <div id="right">
      <img src="../assets/house.jpg" id="house" alt="photo of dr. house">
    </div>
    <div v-for="post in postList" :key="post.ID" id="postArea">
      <article>
        <div class="pic-and-date">
          <img src="src/assets/defaultUser.png" class="prof-pic" alt="user-profile-picture">
          <b> {{ post.Author }} @ {{ post.Time }}</b>
        </div>
        <img v-bind:src=post.img v-bind:id=post.id v-bind:alt=post.id>
        <p> {{ post.content }}</p>
      </article>
    </div>
    <button id="deleteButton" @click="DeleteAll">Delete all</button>
  </section>
</template>

<script>

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    }
  },

  methods: {
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
    DeleteAll() {
      this.$store.dispatch("DeleteAll")
    }
  },
  computed: {
    postList() {
      return this.$store.state.postList
    }
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>


<style>
@import '../style/home.css';
</style>
