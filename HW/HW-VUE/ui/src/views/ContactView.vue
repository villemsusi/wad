<script setup>
import Header from '../components/Header.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="flex-container">
    <Header></Header>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  components: {
    Contact,
    Header,
    Footer
  }
}
</script>