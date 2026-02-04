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
import { useSeoMeta,useHead } from '#imports' 

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
  title: 'Thaya Ads (thayaads) | Creative Advertising & Media Solutions',
  description: 'Thaya Ads, also known as thayaads, is a leading advertising agency in Thoothukudi, Tamil Nadu offering commercial ads, corporate films, documentaries, and creative video production services.',
  keywords: 'thayaads, thaya ads, Ad film director Tamil Nadu, commercial ads, branding films, Thaya Ads, விளம்பர இயக்குநர் தமிழ்நாடு, விளம்பர படம்',

  ogTitle: 'Thaya Ads (thayaads) | Creative Advertising & Media Solutions',
  ogDescription: 'Thaya Ads (thayaads) is a creative advertising agency in Thoothukudi providing ads, corporate films, documentaries and branding services.',
  ogImage: 'https://thayaads.com/images/og-home.jpg',
  ogUrl: 'https://thayaads.com/',
  ogType: 'website',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Thaya Ads (thayaads) | Creative Advertising & Media Solutions',
  twitterDescription: 'Official website of Thaya Ads (thayaads) – Creative advertising agency in Thoothukudi, Tamil Nadu.',
  twitterImage: 'https://thayaads.com/images/og-home.jpg'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://thayaads.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AdvertisingAgency",
        "name": "Thaya Ads",
        "alternateName": "thayaads",
        "url": "https://thayaads.com/",
        "logo": "https://thayaads.com/images/og-home.jpg",
        "image": "https://thayaads.com/images/og-home.jpg",
        "description": "Thaya Ads, also known as thayaads, is a creative advertising agency in Thoothukudi, Tamil Nadu offering commercial ads, corporate films, documentaries, and video production services.",

        "address": {
          "@type": "PostalAddress",
          "streetAddress": "School of MIRI PIRI, Puyula Nagar, Korampallam",
          "addressLocality": "Thoothukudi",
          "addressRegion": "Tamil Nadu",
          "postalCode": "628101",
          "addressCountry": "IN"
        },

        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-9841115673",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["Tamil", "English"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+91-9444305673",
            "contactType": "sales",
            "areaServed": "IN",
            "availableLanguage": ["Tamil", "English"]
          }
        ],

        "sameAs": [
          "https://www.facebook.com/thayaads",
          "https://www.instagram.com/thayaads",
          "https://www.linkedin.com/company/thayaads",
          "https://x.com/Thayaads"
        ]
      })
    }
  ]
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
