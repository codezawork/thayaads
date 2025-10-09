<template>
  <section id="categories" class="py-12 md:py-16 bg-white">
    <div class="max-w-screen-2xl mx-auto px-4 lg:px-12">

      <div class="flex items-center justify-center gap-4 mb-10 md:mb-12">
        <h2
          class="text-4xl md:text-5xl font-extrabold text-gray-800 relative inline-block after:block after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-indigo-600 after:rounded-full">
          Categories
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <NuxtLink 
          v-for="(category, index) in categories" 
          :key="category.name" 
          :to="category.link"
          class="block group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 relative"
        >
          <div 
            class="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden"
            :ref="el => categoryRefs[index] = el"
          >
            <img 
              :src="category.image" 
              :alt="category.name + ' category image'"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
            />

            <!-- Desktop Hover Overlay -->
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:flex hidden">
              <span class="text-white text-lg md:text-xl font-semibold bg-black/50 px-4 py-2 rounded-lg shadow-lg">
                👉 Click to see our projects
              </span>
            </div>

            <!-- Mobile Repeating Hint -->
            <div 
              v-if="mobileVisibleIndices.includes(index)"
              class="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm font-medium px-3 py-1 rounded-full md:hidden animate-fade-in"
            >
              👆 Tap to see our projects
            </div>
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
import { ref, onMounted, onBeforeUnmount } from 'vue'

const categories = ref([
  { name: 'Food', image: 'https://assets.thayaads.com/public/assets/images/categories/food.webp', link: '/category/food' },
  { name: 'Education', image: 'https://assets.thayaads.com/public/assets/images/categories/education.webp', link: '/category/education' },
  { name: 'Personal Care', image: 'https://assets.thayaads.com/public/assets/images/categories/personal-care.webp', link: '/category/personalCare' },
  { name: 'Textile & Apparels', image: 'https://assets.thayaads.com/public/assets/images/categories/textile-apparels.webp', link: '/category/textileApparels' },
  { name: 'Fashion & Lifestyle', image: 'https://assets.thayaads.com/public/assets/images/categories/fashion-lifestyle.webp', link: '/category/fashionLifestyle' },
  { name: 'Financial Service', image: 'https://assets.thayaads.com/public/assets/images/categories/financial-service.webp', link: '/category/financialService' }
])

const categoryRefs = ref([])
const mobileVisibleIndices = ref([])
let observer
let intervalIds = []

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = categoryRefs.value.indexOf(entry.target)
      if (index === -1) return

      if (entry.isIntersecting) {
        // Start repeating hint for this category
        if (!intervalIds[index]) {
          mobileVisibleIndices.value.push(index)
          intervalIds[index] = setInterval(() => {
            if (mobileVisibleIndices.value.includes(index)) {
              mobileVisibleIndices.value = mobileVisibleIndices.value.filter(i => i !== index)
            } else {
              mobileVisibleIndices.value.push(index)
            }
          }, 2000)
        }
      } else {
        // Stop interval and remove hint when out of view
        if (intervalIds[index]) {
          clearInterval(intervalIds[index])
          intervalIds[index] = null
          mobileVisibleIndices.value = mobileVisibleIndices.value.filter(i => i !== index)
        }
      }
    })
  }, { threshold: 0.3 })

  categoryRefs.value.forEach(el => {
    if (el instanceof Element) observer.observe(el)
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  intervalIds.forEach(id => id && clearInterval(id))
})
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}
</style>
