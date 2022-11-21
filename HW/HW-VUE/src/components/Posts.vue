<script setup>
  import createPostsFromJson from '../js/loadPosts.js';
  import Posts from '../js/posts.json';
</script>

<template>
  <section class="forum">
    <div id="dropdown-content">
        <p>John Doe</p>
        <p>john.doe@ut.ee</p>
        <a href="login.html">logout</a>
    </div>
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
  const source = "FILE";
  window.onload = (event) => {
      if (source == "API") {
          fetch("https://myjson.dit.upm.es/api/bins/j4gi")
              .then((response) => response.json())
              .then((json) => {
                  createPostsFromJson(json);
              });
      } else if (source == "FILE") {
        createPostsFromJson(Posts);
      }   
  }
</script>

<style>
  @import '../style/home.css';
</style>
