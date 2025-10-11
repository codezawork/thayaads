<template>
  <div class="bg-white min-h-screen text-gray-900">
    <!-- Common Header -->
    <Header />

    <!-- Hero Section -->
    <section class="relative w-full h-[30vh] md:h-[50vh] overflow-hidden">
      <img 
        v-if="categoryData?.image" 
        :src="categoryData.image" 
        :alt="categoryData.name"
        class="absolute inset-0 w-full h-full object-cover object-center opacity-100" 
      />
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/20"></div>

      <!-- Hero Text -->
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

    <!-- Common Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

// Dynamic route
const route = useRoute()

// All category data in one place
const categories = {
  food: {
    name: 'Foods',
    image: 'https://assets.thayaads.com/public/assets/images/categories/food.webp',
    videos: [
      { id: 'cILkLk90rGw', title: 'AJJ' },
      { id: 'zE67dykGvsQ', title: 'Saravana Salt' },
      { id: 'yis-PaIU1k4', title: 'Madha Milk' },
      { id: '6hW8BoYQ7TE', title: 'AJJ Maskoth Halwa' },
      { id: 'yn3e1M8OAU8', title: 'Madha Milk' },
      { id: 'bKX3YsZUFcs', title: 'Angel Food' },
      { id: 'Xu-TPdwQ2oo', title: 'Saravana Salt' },
      { id: 'fSM9KpcEJEU', title: 'Bro' },
      { id: 'XYjMZXun7Dg', title: 'AJJ' },
      { id: 'zEJ0FBzmwkY', title: 'Thangaya Maskoth Halwa' },
      { id: 'H1ZcVj1hk54', title: 'Olive Oil' },
      { id: 'ptxsyXiRg7U', title: 'Saravana Salt' },
      { id: 'zE67dykGvsQ', title: 'Arasan Murukku' },
      { id: 'fkU_ec5EQhM', title: 'RPM Snacks' },
      { id: 'ap46OGHPoI0', title: 'DS Perungayam Animation' },
      { id: 'IKN0L4YdDLw', title: 'AJJ' }
    ]
  },
  education: {
    name: 'Education',
    image: 'https://assets.thayaads.com/public/assets/images/categories/education.webp',
    videos: [
      { id: 'q2yXWVQ3F9U', title: 'ASPI Life' },
      { id: 'cTuDT5ScZHo', title: 'ebek Project Power-I' },
      { id: 'Z6Xb-cK8X80', title: 'ebek Project Power-II' },
      { id: '_AHAzu23b9Q', title: 'Kerala Neet Academy' },
      { id: 'zMFT2MZhfpA', title: 'Kerala Neet Academy PROMO' },
      { id: 'Lj13gz60G4E', title: 'Kerala Neet Academy' },
      { id: 'boppqbA_UQE', title: 'Fence Education Academy' },
      { id: 'AZdbYHsqaqI', title: 'Nims Academy' },
      { id: 'GULF-ftW4ec', title: 'Fence Education-II' },
      { id: 'RtPEoXOo9I0', title: 'Fence Academy-III' },
      { id: 'GBnexwY1D_U', title: 'Fence Academy-IV' },
      { id: '09DzrMSKQo4', title: 'Fence Academy-V Malayalam' },
      { id: 'EH3FTKVEeuI', title: 'Fence Education-Malayalam' },
      { id: 'Ns-yIfTyFGs', title: 'Kerala Neet Malayalam' }
    ]
  },
  personalCare: {
    name: 'Personal Care',
    image: 'https://assets.thayaads.com/public/assets/images/categories/personal-care.webp',
    videos: [
      { id: 'FdQ0LPosA9o', title: 'Sakthi Soaps' },
      { id: '8GBgGf0LloI', title: 'Merets Soaps' },
      { id: 'XXn_t7ko_UU', title: 'Merits Soap - II' },
      { id: 'AdtoqMzKosg', title: 'Solace Oil - Malayalam' },
      { id: '_iWPGLy3OzQ', title: 'ESOPE' },
      { id: '2EbTR9U_j2o', title: 'Duka Herbals - I' },
      { id: 'Ovli-AqGQHk', title: 'Durka Herbals - II' },
      { id: 'AhFjwuyQB7A', title: 'Durka Herbals - III' },
      { id: 'iXn7RDKy6PQ', title: 'Safe Excel' }
    ]
  },
  textileApparels: {
    name: 'Textile & Apparels',
    image: 'https://assets.thayaads.com/public/assets/images/categories/textile-apparels.webp',
    videos: [
      { id: 'pW8DE4BCm-g', title: 'Co Optecs - Keerthi Suresh' },
      { id: 'OAJd37f20Do', title: 'EMK Silks' },
      { id: 'QT4djGYKU_k', title: 'Dream Leafs' },
      { id: '0hCGjkNazFU', title: 'D.A Silks - I' },
      { id: '5ZJEOXXKj6U', title: 'K. Chinnadurai - I' },
      { id: 'ks8mI14kcC8', title: 'K. Chinnadurai - II' },
      { id: 'NgPe4AmekO4', title: 'D.A Silks - II' }
    ]
  },
  fashionLifestyle: {
    name: 'Fashion & Lifestyle',
    image: 'https://assets.thayaads.com/public/assets/images/categories/fashion-lifestyle.webp',
    videos: [
      { id: '6FF9pv3m_Ww', title: 'Dew Jwells' },
      { id: '3MVhxNTuiJQ', title: 'Arakkal Jwellery' },
      { id: '4itMOT_eXVw', title: 'Best Jwellers' },
      { id: 'vLfIr3IwDig', title: 'Sri Banu Jwellery' }
    ]
  },
  albumDocumentaryFilms: {
    name: 'Album & Documentaries',
    image: 'https://assets.thayaads.com/public/assets/images/categories/financial-service.webp',
    videos: [
      { id: 'iOi65sOIhaI', title: 'Motor Song Making' },
      { id: 'RSloggwy1Ew', title: 'Motor Song Video' },
      { id: 'TPQZ_tnsvS0', title: 'Motor Song Singing' },
      { id: 'dyuPJimzXsQ', title: 'Ariyamuthu' },
      { id: 'Ihyhtb5UStU', title: 'Ariyamuthu-II' }
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

// Get category by slug from route
const categoryData = categories[route.params.slug] || { name: '', image: '', videos: [] }
</script>
