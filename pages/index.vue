<template>
  <div>
    <!-- 1. Page Loader -->
    <PageLoader v-if="isLoading" />

    <!-- 2. Main Content (v-else ensures it only shows when loading is done) -->
    <div v-else class="transition-opacity duration-500 ease-in-out">
      <Header />
      <ScrollToTop />
      <Intro />
      <AboutUs />
      <OurServices />
      <Categories />
      <Gallery />
      <Footer />
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// State to control the loader visibility
const isLoading = ref(true)

import AboutUs from './AboutUs.vue'
import Categories from './Categories.vue'
import OurServices from './OurServices.vue'
import Gallery from './Gallery.vue'

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