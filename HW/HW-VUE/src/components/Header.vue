<template>
  <header class="flex-element">
    <div id="menu">
        <router-link class="menuLink" to="/">Home</router-link>
        <router-link class="menuLink" to="/addpost">Add Post</router-link>     
        <router-link class="menuLink" to="/login">Login</router-link>
        <router-link class="menuLink" to="/contact">Contacts</router-link>
    </div>
    <img src="../assets/defaultUser.png" id="user-image" alt="user image">
  </header>
</template>


<style>
  @import '../style/style.css';
</style>
