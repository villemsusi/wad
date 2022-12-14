<template>
  <section class="forum">
    <div id="left">
      <img src="../assets/hesburger.jpg" id="hesburger" alt="hesburger logo">
    </div>
    <div id="right">
      <img src="../assets/house.jpg" id="house" alt="photo of dr. house">
    </div>
    <div v-for="post in posts" :key="post.id" id="postArea">
      <router-link class="menuLink" :to="'/post/'+post.id">
        <article>
          <div class="pic-and-date">
            <img src="../assets/defaultUser.png" class="prof-pic" alt="user-profile-picture">
            <b> {{ post.author }} @ {{ post.title }}</b>
          </div>
          <p> {{ post.body }}</p>
        </article>
      </router-link>
    </div>
    <button id="deleteButton" @click="deleteAll">Delete all</button>
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
    deleteAll() {
      this.$router.go()
      fetch(`http://localhost:3000/api/deleteall/`)
          .catch((err) => console.log(err.message));
      this.$forceUpdate();
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
