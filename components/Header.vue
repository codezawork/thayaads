<template>
  <header class="w-full shadow-lg" :style="{ backgroundColor: headerBg }">
    <div class="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 md:pl-4 md:pr-8">

      <!-- Logo -->
      <div class="flex items-center h-full py-2">
        <NuxtLink to="/">
          <img
            class="object-contain w-36 h-16 max-h-full"
            src="https://assets.thayaads.com/public/assets/images/author/thaya.webp"
            alt="Thaya Ads Logo"
          />
        </NuxtLink>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-10">
        <nav class="flex gap-8">
          <!-- EXPLICITLY set to text-white to match the dark headerBg -->
          <NuxtLink to="/" class="text-white text-lg font-medium transition-opacity hover:opacity-80">Home</NuxtLink>
          <a href="#about-us" class="text-white text-lg font-medium transition-opacity hover:opacity-80">About Us</a>
          <a href="#our-services" class="text-white text-lg font-medium transition-opacity hover:opacity-80">Our Services</a>
          <a href="#gallery" class="text-white text-lg font-medium transition-opacity hover:opacity-80">Gallery</a>
          <!-- <a href="#clients" class="text-white text-lg font-medium transition-opacity hover:opacity-80">Clients</a> -->
          <a href="#main-footer" class="text-white text-lg font-medium transition-opacity hover:opacity-80">Contact Us</a>
        </nav>

        <a href="#contact"
          class="bg-[#3DAD37] hover:bg-green-600 text-white px-6 py-2 rounded-full text-lg font-semibold cursor-pointer flex items-center gap-2 transition-colors">
          <span class="text-xl">
            <font-awesome-icon :icon="['fas', 'envelope']" class="w-5 h-5 mt-0.5 text-white shrink-0" />
          </span>
          Request a Quote
        </a>
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        @click="menuOpen = !menuOpen"
        class="lg:hidden p-2 rounded-lg transition-colors hover:bg-white/10 z-50"
        aria-label="Toggle menu"
      >
        <font-awesome-icon
          :icon="menuOpen ? ['fas', 'xmark'] : ['fas', 'bars']"
          class="w-7 h-7 text-white"
        />
      </button>
    </div>

    <!-- Mobile Drawer -->
    <transition name="slide-fade">
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-40 lg:hidden bg-black bg-opacity-70"
        @click.self="menuOpen = false"
      >
        <div class="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-[#1D1860] shadow-xl flex flex-col p-6 pt-20">
          <nav class="flex flex-col gap-4">
            <!-- Mobile drawer links remain white as the drawer background is dark blue -->
            <NuxtLink @click="menuOpen = false" to="/"
              class="text-white text-xl font-medium p-2 hover:bg-white/10 rounded-lg transition-colors">Home</NuxtLink>
            <a @click="menuOpen = false" href="#about-us"
              class="text-white text-xl font-medium p-2 hover:bg-white/10 rounded-lg transition-colors">About Us</a>
            <a @click="menuOpen = false" href="#our-services"
              class="text-white text-xl font-medium p-2 hover:bg-white/10 rounded-lg transition-colors">Our Services</a>
            <a @click="menuOpen = false" href="#gallery"
              class="text-white text-xl font-medium p-2 hover:bg-white/10 rounded-lg transition-colors">Gallery</a>
            <!-- <a @click="menuOpen = false" href="#clients"
              class="text-white text-xl font-medium p-2 hover:bg-white/10 rounded-lg transition-colors">Clients</a> -->
            <a @click="menuOpen = false" href="#main-footer"
              class="text-white text-xl font-medium p-2 hover:bg-white/10 rounded-lg transition-colors">Contact Us</a>
          </nav>

          <a @click="menuOpen = false" href="#contact"
            class="mt-8 bg-[#3DAD37] hover:bg-green-600 text-white px-6 py-2 rounded-full text-lg font-semibold cursor-pointer flex items-center justify-center gap-2 transition-colors">
            <span class="text-xl">
              <font-awesome-icon :icon="['fas', 'envelope']" class="w-5 h-5 mt-0.5 text-white shrink-0" />
            </span>
            Request a Quote
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'

const menuOpen = ref(false)

// Set headerBg to the dark color for consistency, even if the color is applied in the template
const headerBg = '#1D1860'

// Utility function to detect brightness (no longer strictly needed for desktop links, but kept for mobile icon logic)
function isDark(hex) {
  const c = hex.substring(1)
  const rgb = parseInt(c, 16)
  const r = (rgb >> 16) & 0xff
  const g = (rgb >> 8) & 0xff
  const b = (rgb >> 0) & 0xff
  const luma = 0.299 * r + 0.587 * g + 0.114 * b
  return luma < 150
}

const textClass = computed(() => {
  if (isDark(headerBg)) {
    // If background is dark (which it is now: #1D1860), use white text for mobile toggle visibility
    return 'text-white hover:opacity-80';
  } else {
    // If background is light, use dark text
    return 'text-[#1D1860] hover:text-blue-700';
  }
})
</script>

<style scoped>
/* Transition styles for mobile menu */
.slide-fade-enter-active .absolute,
.slide-fade-leave-active .absolute {
  transition: transform 0.3s ease-out;
}

.slide-fade-enter-from .absolute,
.slide-fade-leave-to .absolute {
  transform: translateX(100%);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
