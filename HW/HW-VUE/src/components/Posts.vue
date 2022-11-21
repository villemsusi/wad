<script setup>
  import createPostsFromJson from '@/js/loadPosts.js';
  import Posts from '@/js/posts.json';
</script>

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
  window.addEventListener("load", function(event) {
    createPostsFromJson(Posts);
  });
  //export default click
</script>


<style>
  @import '../style/home.css';
</style>
