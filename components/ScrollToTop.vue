<template>
  <transition name="fade-slide">
    <!-- Fixed position on the bottom left (CHANGED) -->
    <div 
      v-if="isVisible" 
      class="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[100]"
    >
      <button 
        @click="scrollToTop" 
        aria-label="Scroll to top"
        class="group relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center 
               rounded-full shadow-2xl transition-all duration-300 ease-in-out
               bg-[#1D1860] hover:bg-[#342D75] text-[#FDD835] hover:text-white 
               transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#FDD835]/50"
      >
        <!-- Arrow Icon -->
        <!-- Note: You need to ensure you have Font Awesome imported and configured in your main Vue app -->
        <font-awesome-icon :icon="['fas', 'arrow-up']" class="w-6 h-6" />
        
        <!-- Tooltip Text (Appears on hover) -->
        <span
          class="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 
                 bg-white/95 text-gray-800 text-sm font-medium rounded-lg 
                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                 whitespace-nowrap shadow-md pointer-events-none"
        >
          Scroll to Top
        </span>
      </button>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

// Function to smoothly scroll the window to the top
const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Function to determine if the button should be visible
const handleScroll = () => {
  if (typeof window !== 'undefined') {
    // Show button if scrolled past 300 pixels
    isVisible.value = window.scrollY > 300
  }
}

// Add scroll listener when component is mounted
onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll)
    // Initial check in case the user loads the page already scrolled
    handleScroll() 
  }
})

// Remove scroll listener when component is unmounted to prevent memory leaks
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
/* Transition for fading in and sliding up */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px); /* Slides up from bottom */
}
</style>
