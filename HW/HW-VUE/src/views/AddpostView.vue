<script setup>
    import Header from '@/components/Header.vue';
    import AddPost from '@/components/AddPost.vue';
    import Footer from '@/components/Footer.vue';
</script>

<template>
    <div class="flex-container">
      <Header></Header>
      <AddPost></AddPost>
      <Footer></Footer>
    </div>
</template>

<script>
    export default {
        name: 'AddpostView',
        components: {
            AddPost,
            Header,
            Footer
        }
    }
</script>