<template>
  <header class="flex-element">
    <div id="menu">
        <router-link class="menuLink" to="/">Home</router-link>
        <router-link class="menuLink" to="/addpost">Add Post</router-link>
        <router-link class="menuLink" to="/contact">Contacts</router-link>
        <router-link v-if="authResult === false" class="menuLink" to="/login">Login</router-link>
        <router-link v-if="authResult" @click="logout" class="menuLink" to="/login">Logout</router-link>
    </div>
    <img v-if="authResult" src="../assets/defaultUser.png" id="user-image" alt="user image">
  </header>
</template>
<script>
  import auth from "../../auth";
  import { ref } from 'vue';
  export default {
    name: "Header",
    data: function() {
      return {
        authResult: auth.authenticated(),
      }
    },
    methods: {
      logout() {
        fetch("http://localhost:3000/auth/logout", {
          credentials: 'include',
        })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            })
            .catch((e) => {
              console.log(e);
            });
      },
    },
  }
</script>


<style>
  @import '../style/style.css';
</style>
