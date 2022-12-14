<script setup>
    import Header from '../components/Header.vue';
    import Posts from '../components/Posts.vue';
    import Footer from '../components/Footer.vue';
</script>

<template>
    <div class="flex-container">
      <Header></Header>
      <Posts></Posts>
      <Footer></Footer>
    </div>
</template>

<script>
    export default {
        name: 'HomeView',
        components: {
            Posts,
            Header,
            Footer
        }
    }
</script>