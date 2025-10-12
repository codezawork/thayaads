<template>
  <section id="categories" class="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="max-w-screen-2xl mx-auto px-4 lg:px-12 relative z-10">

      <!-- Section Title -->
      <div class="text-center mb-16 md:mb-20">
        <div class="inline-block">
          <h2 class="text-5xl md:text-7xl font-black mb-3 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Categories
          </h2>
          <div class="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
        </div>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <NuxtLink 
          v-for="(category, index) in categories" 
          :key="category.name" 
          :to="category.link"
          class="block group bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
        >
          <div 
            class="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden"
            :ref="el => categoryRefs[index] = el"
          >
            <!-- Gradient Overlay on Hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <img 
              :src="category.image" 
              :alt="category.name + ' category image'"
              class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
            />
          </div>

          <div class="p-6">
            <h3 class="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
              {{ category.name }}
            </h3>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const categories = ref([
  { name: 'Food', image: 'https://assets.thayaads.com/public/assets/images/categories/food.webp', link: '/category/food' },
  { name: 'Education', image: 'https://assets.thayaads.com/public/assets/images/categories/education.webp', link: '/category/education' },
  { name: 'Personal Care', image: 'https://assets.thayaads.com/public/assets/images/categories/personal-care.webp', link: '/category/personalCare' },
  { name: 'Textile & Apparels', image: 'https://assets.thayaads.com/public/assets/images/categories/textile-apparels.webp', link: '/category/textileApparels' },
  { name: 'Fashion & Lifestyle', image: 'https://assets.thayaads.com/public/assets/images/categories/fashion-lifestyle.webp', link: '/category/fashionLifestyle' },
  { name: 'Album & Documentaries', image: 'https://assets.thayaads.com/public/assets/images/categories/financial-service.webp', link: '/category/albumDocumentaryFilms' },
  { name: 'Corporate Films', image: 'https://assets.thayaads.com/public/assets/images/categories/financial-service.webp', link: '/category/corporateFilms' }
])

const categoryRefs = ref([])

onMounted(() => {
  // Scroll to category if returning from slug page
  const lastCategorySlug = sessionStorage.getItem('lastCategory')
  if (lastCategorySlug) {
    const index = categories.value.findIndex(cat => cat.link.includes(lastCategorySlug))
    if (index !== -1 && categoryRefs.value[index]) {
      categoryRefs.value[index].scrollIntoView({ behavior: 'smooth', block: 'center' })
      sessionStorage.removeItem('lastCategory')
    }
  }
})
</script>
