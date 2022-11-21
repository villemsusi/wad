<script setup>
    import Header from '@/components/Header.vue';
    import Login from '@/components/Login.vue';
    import Footer from '@/components/Footer.vue';
</script>

<template>
    <div class="flex-container">
      <Header></Header>
      <Login></Login>
      <Footer></Footer>
    </div>
</template>

<script>
    export default {
        name: 'LoginView',
        components: {
            Login,
            Header,
            Footer
        }
    }
</script>