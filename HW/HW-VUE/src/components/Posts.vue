<script setup>
import createPostsFromJson from '../js/loadPosts.js';
import Posts from '../js/posts.json';
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
    <button v-on:click="ResetLikes">Reset likes</button>
  </section>
</template>

<script>
import store from "../store";
window.addEventListener("load", function (event) {
  createPostsFromJson(Posts);
});
export default {
  name: "Posts",
  data: function () {
    return {
      postList: [{
        ID: 1,
        Name: "question",
        Author: "Siim",
        time: "23.09.2022",
        language: "english",
        content: "question about the room where is the lab",
        likeAmount: 0
      },
        {
          ID: 2,
          Name: "hellloooo post",
          Author: "Siim",
          Time: "23.09.2022",
          language: "english",
          content: "This post says hello",
          likeAmount: 0
        },
        {
          ID: 3,
          Name: "photo of Tartu",
          id: "tartu",
          Author: "John Doe",
          Time: "21.07.2022",
          language: "estonian",
          img: "https://www.parkimine.ee/wp-content/uploads/2020/06/tartu.png",
          content: "Picture of Tartu old town looking at Tartu City Government and text commenting that this is pretty cool",
          likeAmount: 0
        },
        {
          ID: 4,
          Name: "welcoming",
          Author: "John Doe",
          Time: "30.03.2022",
          language: "estonian",
          content: "This post says hello in estonian language",
          likeAmount: 0
        },
        {
          ID: 5,
          Name: "LJ",
          Author: "John Doe",
          Time: "20.01.2022",
          content: "This post asks about LJ",
          likeAmount: 0
        },
        {
          ID: 6,
          Name: "Birthday post",
          Author: "John Doe",
          Time: "26.03.2022",
          language: "english",
          content: "This post shows that it was Alar Karis birthday",
          likeAmount: 0
        },
        {
          ID: 7,
          Name: "Holidays",
          Author: "John Doe",
          Time: "01.01.2022",
          language: "english",
          content: "This post shows all the public holidays and days off in year 2022 in Estonia",
          likeAmount: 0
        },
        {
          ID: 8,
          Name: "Horoscope",
          Author: "John Doe",
          Time: "02.01.2022",
          language: "estonian",
          content: "This post is about sagittarius horoscope",
          likeAmount: 0
        },
        {
          ID: 9,
          Name: "Netflix shows",
          Author: "jennifer ",
          Time: "01.10.2022",
          language: "english",
          content: "This post shows three most popular shows in Netflix currently",
          likeAmount: 0
        },
        {
          ID: 10,
          Name: "Web application exam",
          Author: "jennifer ",
          Time: "30.09.2022",
          language: "estonian",
          content: "This post shows Web application exam times",
          likeAmount: 0
        },

      ]
    }
  },

  methods: {
    increaseLikes: function () {
      this.$store.commit("increaseLikeAction")

    },
    ResetLikes: function () {
      this.$store.commit("ResetLikesAct")
    }
  }
}
</script>


<style>
@import '../style/home.css';
</style>
