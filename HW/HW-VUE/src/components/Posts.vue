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
<!--        <div class="like-and-amount">
          <img @click="increaseLikes(post.ID)" class="likeButton" src="src/assets/like.png" alt="likeIcon">
          <p class="clicks">{{ post.likeAmount }}</p>
        </div>-->
      </article>
    </div>
    <button id="deleteButton" @click="DeleteAll">Delete all</button>
  </section>
</template>

<script>

export default {
  name: "Posts",

  methods: {

    DeleteAll() {
      this.$store.dispatch("DeleteAll")
    }
  },
  computed: {
    postList() {
      return this.$store.state.postList
    }
  }
}
</script>


<style>
@import '../style/home.css';
</style>
