<script setup>
  import createPostsFromJson from '../store/index.js';
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
  export default {
    name: "Posts",
    components: {ProductCompoOne, ProductCompoTwo},
    data: function () {
      return {
        postList: [
          {id: 1, author: "Charlotte Bronte", book: "Jane Eyre", goodreads: "4.1/5", price: 20},
          {id: 2, author: "Margaret Mitchell", book: "Gone with the Wind", goodreads: "4.3/5", price: 22},
          {id: 3, author: "Anthony Burgess", book: "A Clockwork Orange", goodreads: "4/5", price: 13},
          {id: 4, author: "Fyodor Dostoevsky", book: "Crime and Punishment", goodreads: "4.2/5", price: 18}
        ]
      }
    },

    methods: {
      increaseLikeAmount: function () {
        this.$store.commit("increasePriceAction")

      }
    }
  }
</script>


<style>
  @import '../style/home.css';
</style>
