<template>
  <section class="py-12 md:py-16 bg-green-50">
    <div class="max-w-7xl mx-auto px-4 md:px-8">

      <div class="flex items-center justify-center gap-4 mb-10 md:mb-12">
        <font-awesome-icon :icon="['fas', 'th-large']" class="text-3xl text-gray-800" />
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Categories</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <NuxtLink 
          v-for="category in categories" 
          :key="category.name" 
          :to="category.link"
          class="block group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div class="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
            <img 
              :src="category.image" 
              :alt="category.name + ' category image'" 
              class="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          <div class="p-4 md:p-5 bg-white">
            <h3 class="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-[#1D1860] transition-colors">
              {{ category.name }}
            </h3>
          </div>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Define your category data
const categories = ref([
  {
    name: 'Food',
    image: '/images/categories/food.jpg', 
    link: '/pages/category/food' 
  },
  {
    name: 'Education',
    image: '/images/categories/education.jpg', 
    link: '/pages/category/education'
  },
  {
    name: 'Personal Care',
    image: '/images/categories/personal-care.jpg',
    link: '/pages/category/personal-care'
  },
  {
    name: 'Textile & Apparels',
    image: '/images/categories/textile-apparels.jpg', 
    link: '/category/textile-apparels'
  },
  {
    name: 'Fashion & Lifestyle',
    image: '/images/categories/fashion-lifestyle.jpg', 
    link: '/category/fashion-lifestyle'
  },
  {
    name: 'Financial Service',
    image: '/images/categories/financial-service.jpg',
    link: '/category/financial-service'
  }
]);
</script>

<style scoped>
/* Scoped styles can be added here if you need custom CSS 
   not covered by Tailwind utility classes. */
</style>