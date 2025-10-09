<template>
  <div>
    <!-- 1. Page Loader -->
    <PageLoader v-if="isLoading" />

    <!-- 2. Main Content (v-else ensures it only shows when loading is done) -->
    <div v-else class="transition-opacity duration-500 ease-in-out">
      <Header />
      <Intro />
      <AboutUs />
      <OurServices />
      <Categories />
      <Footer />
      
      <Social />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import Intro from '../components/Intro.vue'
import Social from '../components/Social.vue'
import AboutUs from '../components/AboutUs.vue'
import OurServices from '../components/OurServices.vue'
import Categories from '../components/Categories.vue'
import Footer from '../components/Footer.vue'
import PageLoader from '../components/PageLoader.vue' // Import the new loader

// State to control the loader visibility
const isLoading = ref(true)

// When all components are mounted (and their initial HTML structure is in the DOM)
onMounted(() => {
  // Use a short delay (e.g., 500ms) to ensure everything has rendered and 
  // to avoid flashing the loader on fast connections.
  setTimeout(() => {
    isLoading.value = false
  }, 500) 
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
