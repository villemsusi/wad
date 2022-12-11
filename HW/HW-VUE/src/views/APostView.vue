<script setup>
import Header from '@/components/Header.vue';
import Contact from '@/components/Apost.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="flex-container">
    <Header></Header>
    <Apost></Apost>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'APostView',
  components: {
    Apost,
    Header,
    Footer
  }
}
</script>