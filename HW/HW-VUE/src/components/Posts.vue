<template>
  <section class="forum">
    <div id="left">
      <img src="../assets/hesburger.jpg" id="hesburger" alt="hesburger logo">
    </div>
    <div id="right">
      <img src="../assets/house.jpg" id="house" alt="photo of dr. house">
    </div>
    <div id="postArea"></div>
  </section>
</template>

<script>
window.addEventListener("load", function (event) {
  createPostsFromJson(Posts);
});
export default {
  name: "Posts",
  components: {ProductCompoOne, ProductCompoTwo},
  data: function () {
    return {
      postList: [import("../js/posts.json")]
    }
  },

  methods: {
    increaseLikes: function () {
      this.$store.commit("increaseLikeAction")

    }
  }
}
</script>


<style>
@import '../style/home.css';
</style>
