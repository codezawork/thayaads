<template>
  <div class="bg-white min-h-screen text-gray-900">
    <!-- Common Header -->
    <Header />

    <!-- Hero Section -->
<section class="relative w-full h-[30vh] md:h-[50vh] overflow-hidden">
      <img
        :src="categoryData?.image"
        :alt="categoryData?.name"
        class="absolute inset-0 w-full h-full object-cover object-center opacity-100"
      />
      <!-- This overlay ensures text is visible -->
      <div class="absolute inset-0 bg-black/20"></div>
      
      <!-- ADDED 'text-white' here to make the text contrast with the dark image/overlay -->
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
        <div
          v-for="video in categoryData?.videos"
          :key="video.id"
          class="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all"
        >
          <div class="relative aspect-video">
            <iframe
              :src="`https://www.youtube.com/embed/${video.id}`"
              title="YouTube video"
              frameborder="0"
              allowfullscreen
              class="w-full h-full"
            ></iframe>
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

// Demo category data with 10 videos each
const categories = {
  food: {
    name: 'Foods',
    image: 'https://thayaads.com/public/assets/images/categories/food.webp',
    videos: [
      { id: 'dQw4w9WgXcQ', title: 'SKM PORNA RICE BRAN OIL' },
      { id: 'xvFZjo5PgG0', title: 'Darling Chicken 65 Mix' },
      { id: 'ScMzIvxBSi4', title: 'Darling Asafoetida' },
      { id: 'kXYiU_JCYtU', title: 'Darling Pickle TVC' },
      { id: '9bZkp7q19f0', title: 'Food Promo Video 1' },
      { id: '3JZ_D3ELwOQ', title: 'Food Promo Video 2' },
      { id: 'L_jWHffIx5E', title: 'Food Promo Video 3' },
      { id: 'tVj0ZTS4WF4', title: 'Food Promo Video 4' },
      { id: 'fJ9rUzIMcZQ', title: 'Food Promo Video 5' },
      { id: 'eVTXPUF4Oz4', title: 'Food Promo Video 6' }
    ] 
  },
  education: {
    name: 'Education',
    image: 'https://thayaads.com/public/assets/images/categories/education.webp',
    videos: [
      { id: 'hY7m5jjJ9mM', title: 'EduTech Promo' },
      { id: '2vjPBrBU-TM', title: 'Online Learning Ad' },
      { id: 'Zi_XLOBDo_Y', title: 'Education Video 1' },
      { id: 'kffacxfA7G4', title: 'Education Video 2' },
      { id: 'CevxZvSJLk8', title: 'Education Video 3' },
      { id: 'uelHwf8o7_U', title: 'Education Video 4' },
      { id: 'YQHsXMglC9A', title: 'Education Video 5' },
      { id: 'hT_nvWreIhg', title: 'Education Video 6' },
      { id: '09R8_2nJtjg', title: 'Education Video 7' },
      { id: 'RBumgq5yVrA', title: 'Education Video 8' }
    ]
  },
  personalCare: {
    name: 'Personal Care',
    image: 'https://thayaads.com/public/assets/images/categories/personal-care.webp',
    videos: [
      { id: '3AtDnEC4zak', title: 'Personal Care Video 1' },
      { id: 'LsoLEjrDogU', title: 'Personal Care Video 2' },
      { id: 'kJQP7kiw5Fk', title: 'Personal Care Video 3' },
      { id: 'RgKAFK5djSk', title: 'Personal Care Video 4' },
      { id: 'uelHwf8o7_U', title: 'Personal Care Video 5' },
      { id: 'fLexgOxsZu0', title: 'Personal Care Video 6' },
      { id: 'dMH0bHeiRNg', title: 'Personal Care Video 7' },
      { id: 'YQHsXMglC9A', title: 'Personal Care Video 8' },
      { id: 'OPf0YbXqDm0', title: 'Personal Care Video 9' },
      { id: 'kffacxfA7G4', title: 'Personal Care Video 10' }
    ]
  },
  textileApparels: {
    name: 'Textile & Apparels',
    image: 'https://thayaads.com/public/assets/images/categories/textile-apparels.webp',
    videos: [
      { id: 'hT_nvWreIhg', title: 'Textile Video 1' },
      { id: 'RBumgq5yVrA', title: 'Textile Video 2' },
      { id: 'CevxZvSJLk8', title: 'Textile Video 3' },
      { id: 'fJ9rUzIMcZQ', title: 'Textile Video 4' },
      { id: '09R8_2nJtjg', title: 'Textile Video 5' },
      { id: 'YQHsXMglC9A', title: 'Textile Video 6' },
      { id: 'uelHwf8o7_U', title: 'Textile Video 7' },
      { id: 'kJQP7kiw5Fk', title: 'Textile Video 8' },
      { id: '3JZ_D3ELwOQ', title: 'Textile Video 9' },
      { id: 'L_jWHffIx5E', title: 'Textile Video 10' }
    ]
  },
  fashionLifestyle: {
    name: 'Fashion & Lifestyle',
    image: 'https://thayaads.com/public/assets/images/categories/fashion-lifestyle.webp',
    videos: [
      { id: 'dQw4w9WgXcQ', title: 'Fashion Video 1' },
      { id: 'xvFZjo5PgG0', title: 'Fashion Video 2' },
      { id: 'ScMzIvxBSi4', title: 'Fashion Video 3' },
      { id: 'kXYiU_JCYtU', title: 'Fashion Video 4' },
      { id: '9bZkp7q19f0', title: 'Fashion Video 5' },
      { id: '3JZ_D3ELwOQ', title: 'Fashion Video 6' },
      { id: 'L_jWHffIx5E', title: 'Fashion Video 7' },
      { id: 'tVj0ZTS4WF4', title: 'Fashion Video 8' },
      { id: 'fJ9rUzIMcZQ', title: 'Fashion Video 9' },
      { id: 'eVTXPUF4Oz4', title: 'Fashion Video 10' }
    ]
  },
  financialService: {
    name: 'Financial Service',
    image: 'https://thayaads.com/public/assets/images/categories/financial-service.webp',
    videos: [
      { id: 'Zi_XLOBDo_Y', title: 'Finance Video 1' },
      { id: 'kffacxfA7G4', title: 'Finance Video 2' },
      { id: 'RBumgq5yVrA', title: 'Finance Video 3' },
      { id: 'hT_nvWreIhg', title: 'Finance Video 4' },
      { id: '09R8_2nJtjg', title: 'Finance Video 5' },
      { id: 'CevxZvSJLk8', title: 'Finance Video 6' },
      { id: 'fJ9rUzIMcZQ', title: 'Finance Video 7' },
      { id: 'YQHsXMglC9A', title: 'Finance Video 8' },
      { id: 'uelHwf8o7_U', title: 'Finance Video 9' },
      { id: 'kJQP7kiw5Fk', title: 'Finance Video 10' }
    ]
  }
}

// Retrieve the current category using slug with fallback
const categoryData = categories[route.params.slug] || { name: '', image: '', videos: [] }
</script>
