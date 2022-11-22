<script setup>
  import createPostsFromJson from '@/js/loadPosts.js';
  import Posts from '@/js/posts.json';
</script>

<template>
  <router-view :key="$route.path"></router-view>
</template>

<script>
  window.addEventListener("load", function(event) {
    createPostsFromJson(Posts);
  });
</script>
