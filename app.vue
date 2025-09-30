<template>
  <div>
    <Header />
    <Intro />
    <AboutUs />
    <OurServices />
    <Categories />
    <Clients />
    <Footer />
    
    <Social />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Intro from './components/Intro.vue'
import Social from './components/Social.vue'
import AboutUs from './components/AboutUs.vue'
import OurServices from './components/OurServices.vue'
import Categories from './components/Categories.vue'
import Clients from './components/Clients.vue'
import Footer from './components/Footer.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>