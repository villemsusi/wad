<script setup>
    import Header from '../components/Header.vue';
    import SignUp from '../components/SignUp.vue';
    import Footer from '../components/Footer.vue';
</script>

<template>
    <div class="flex-container">
      <Header></Header>
      <SignUp></SignUp>
      <Footer></Footer>
    </div>
</template>

<script>
    export default {
        name: 'SignupView',
        components: {
            SignUp,
            Header,
            Footer
        }
    }
</script>