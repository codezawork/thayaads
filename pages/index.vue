<template>
  <div>
    <!-- 1. Page Loader -->
    <PageLoader v-if="isLoading" />

    <!-- 2. Main Content -->
    <div v-else class="transition-opacity duration-500 ease-in-out">
      <Header />
      <ScrollToTop />
      <ChatBot />
      <Intro />
      <AboutUs />
      <FeaturedProjects />
      <OurServices />
      <Categories />
      <Gallery />
      <Clients />
      <MakingVideo />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useSeoMeta } from '#imports' 

const isLoading = ref(true)
//test
// Components
import ChatBot from '~/components/ChatBot.vue'
import AboutUs from './AboutUs.vue'
import Categories from './Categories.vue'
import OurServices from './OurServices.vue'
import Gallery from './Gallery.vue'
import FeaturedProjects from './FeaturedProjects.vue'
import Clients from './Clients.vue'
import MakingVideo from './MakingVideo.vue'


//  SEO Meta Tags (Nuxt 4 way)
useSeoMeta({
  title: 'Thaya Ads | Ad Film Director Tamil Nadu',
  description: 'Thaya Ads is led by Vijay, a renowned ad film director with 100+ projects across Tamil Nadu. தாயா Ads - விஜய் இயக்கிய 100+ விளம்பர படங்கள். தமிழ்நாட்டின் முன்னணி விளம்பர இயக்குநர்.',
  keywords: 'Ad film director Tamil Nadu, commercial ads, branding films, Thaya Ads, விளம்பர இயக்குநர் தமிழ்நாடு, விளம்பர படம்',
  ogTitle: 'Thaya Ads | Ad Film Director Tamil Nadu',
  ogDescription: 'Explore our portfolio of 100+ ad films directed by Vijay.',
  ogImage: '/images/og-home.jpg',
  ogUrl: 'https://thayaads.com',
  twitterCard: 'summary_large_image'
})



// Utility function to wait until all images are loaded
function waitForImagesToLoad() {
  return new Promise<void>((resolve) => {
    const images = Array.from(document.images)
    const total = images.length

    if (total === 0) {
      // No images — resolve immediately
      resolve()
      return
    }

    let loadedCount = 0

    const checkDone = () => {
      loadedCount++
      if (loadedCount >= total) {
        resolve()
      }
    }

    images.forEach((img) => {
      if (img.complete) {
        checkDone()
      } else {
        img.addEventListener('load', checkDone, { once: true })
        img.addEventListener('error', checkDone, { once: true }) // count failed ones too
      }
    })
  })
}

onMounted(async () => {
  // Wait until DOM renders first
  await nextTick()

  // Wait for all images to fully load
  await waitForImagesToLoad()

  // Add a tiny delay for smoother transition
  setTimeout(() => {
    isLoading.value = false
  }, 200)
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
