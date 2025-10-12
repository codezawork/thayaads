<template>
  <div class="bg-[#0f172a] min-h-screen text-gray-900">
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <section class="relative w-full h-[30vh] md:h-[50vh] overflow-hidden">
      <img v-if="categoryData?.image" :src="categoryData.image" :alt="categoryData.name"
        class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-black/20"></div>

      <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4">{{ categoryData?.name }}</h1>
        <p class="text-lg md:text-xl max-w-2xl opacity-90">
          Explore our amazing projects in the {{ categoryData?.name }} category
        </p>
      </div>
    </section>

    <!-- Video Grid -->
    <section class="py-12 md:py-16 px-4 lg:px-12 max-w-screen-2xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-white">Projects</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="video in categoryData?.videos" :key="video.id"
          class="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all">

          <div class="relative aspect-video">
            <iframe :src="`https://www.youtube.com/embed/${video.id}`" :title="video.title" frameborder="0"
              allowfullscreen class="w-full h-full">
            </iframe>
          </div>

          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold text-gray-900">{{ video.title }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import categories from '~/data/categories.js' // default import

const route = useRoute()

// Save clicked category slug for back navigation
sessionStorage.setItem('lastCategory', route.params.slug)

// Get category data
const categoryData = categories[route.params.slug] || { name: '', image: '', videos: [] }
</script>

