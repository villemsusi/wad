<script setup>
  import showDropdown from '../js/header.js';
</script>

<template>
  <header class="flex-element">
    <div id="menu">
        <a class="menuLink" href="index.html">Home</a>
        <a class="menuLink" href="addPost.html">Add Post</a>
    </div>
    <img onClick="showDropdown()" src="../assets/defaultUser.png" id="user-image" alt="user image">
  </header>
</template>


<style>
  @import '../style/style.css';
</style>
