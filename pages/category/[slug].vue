<template>
  <div class="bg-white min-h-screen text-gray-900">
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <section class="relative w-full h-[30vh] md:h-[50vh] overflow-hidden">
      <img 
        v-if="categoryData?.image" 
        :src="categoryData.image" 
        :alt="categoryData.name"
        class="absolute inset-0 w-full h-full object-cover object-center" 
      />
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
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-black">Projects</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="video in categoryData?.videos" :key="video.id"
          class="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all">
          
          <div class="relative aspect-video">
            <iframe 
              :src="`https://www.youtube.com/embed/${video.id}`" 
              :title="video.title" 
              frameborder="0"
              allowfullscreen
              class="w-full h-full">
            </iframe>
          </div>

          <div class="p-4">
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

const route = useRoute()

// Save clicked category slug for back navigation
sessionStorage.setItem('lastCategory', route.params.slug)

const categories = {
  food: {
    name: 'Foods',
    image: 'https://assets.thayaads.com/public/assets/images/categories/food.webp',
    videos: [
      { id: 'cILkLk90rGw', title: 'AJJ' },
      { id: 'zE67dykGvsQ', title: 'Saravana Salt' },
      { id: 'yis-PaIU1k4', title: 'Madha Milk' }
    ]
  },
  education: {
    name: 'Education',
    image: 'https://assets.thayaads.com/public/assets/images/categories/education.webp',
    videos: [
      { id: 'q2yXWVQ3F9U', title: 'ASPI Life' },
      { id: 'cTuDT5ScZHo', title: 'ebek Project Power-I' }
    ]
  },
  personalCare: {
    name: 'Personal Care',
    image: 'https://assets.thayaads.com/public/assets/images/categories/personal-care.webp',
    videos: [
      { id: 'FdQ0LPosA9o', title: 'Sakthi Soaps' },
      { id: '8GBgGf0LloI', title: 'Merets Soaps' }
    ]
  },
  textileApparels: {
    name: 'Textile & Apparels',
    image: 'https://assets.thayaads.com/public/assets/images/categories/textile-apparels.webp',
    videos: [
      { id: 'pW8DE4BCm-g', title: 'Co Optecs - Keerthi Suresh' }
    ]
  },
  fashionLifestyle: {
    name: 'Fashion & Lifestyle',
    image: 'https://assets.thayaads.com/public/assets/images/categories/fashion-lifestyle.webp',
    videos: [
      { id: '6FF9pv3m_Ww', title: 'Dew Jwells' }
    ]
  },
  albumDocumentaryFilms: {
    name: 'Album & Documentaries',
    image: 'https://assets.thayaads.com/public/assets/images/categories/financial-service.webp',
    videos: [
      { id: 'iOi65sOIhaI', title: 'Motor Song Making' }
    ]
  },
  corporateFilms: {
    name: 'Corporate Films',
    image: 'https://assets.thayaads.com/public/assets/images/categories/financial-service.webp',
    videos: [
      { id: 'DtOQngTmzYQ', title: 'Sabari Corporate Ad' }
    ]
  }
}

const categoryData = categories[route.params.slug] || { name: '', image: '', videos: [] }
</script>
