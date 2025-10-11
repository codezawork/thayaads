<template>
  <header class="w-full shadow-lg sticky top-0 z-50 bg-gradient-to-r from-[#1D1860] via-[#342D75] to-[#1D1860]">
    <div class="max-w-7xl mx-auto flex items-center h-20 px-4 md:px-8">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center h-full">
        <img
          class="object-contain w-36 h-16 max-h-full"
          src="https://assets.thayaads.com/public/assets/images/author/thaya.webp"
          alt="Thaya Ads Logo"
        />
      </NuxtLink>

      <!-- Desktop Navigation & Social Links -->
      <div class="hidden lg:flex items-center h-full ml-auto">

        <!-- Navigation Links -->
        <nav class="flex items-center gap-10 h-full relative">
          <NuxtLink to="/" class="desktop-dot nav-link">Home</NuxtLink>
          <a href="/#about-us" class="desktop-dot nav-link">About Us</a>
          <a href="/#our-services" class="desktop-dot nav-link">Our Services</a>

          <!-- Categories Dropdown -->
          <div
            class="relative h-full flex items-center"
            @mouseenter="isDropdownOpen = true"
            @mouseleave="isDropdownOpen = false"
          >
            <a href="/#categories" class="desktop-dot nav-link flex items-center focus:outline-none">
              Categories
              <font-awesome-icon :icon="['fas', 'angle-down']" class="ml-1 w-3 h-3" />
            </a>

            <transition name="fade-scale">
              <div
                v-if="isDropdownOpen"
                class="absolute left-0 top-full w-72 rounded-b-xl backdrop-blur-md
                       bg-[#1D1860]/85 border border-white/10 shadow-xl
                       transition-all duration-300 ease-out origin-top z-50"
              >
                <div class="flex flex-col divide-y divide-white/10">
                  <NuxtLink
                    v-for="category in categories"
                    :key="category.name"
                    :to="category.link"
                    class="desktop-dot dropdown-item"
                    @click="isDropdownOpen = false"
                  >
                    {{ category.name }}
                  </NuxtLink>
                </div>
              </div>
            </transition>
          </div>

          <a href="/#gallery" class="desktop-dot nav-link">Gallery</a>
          <a href="#main-footer" class="desktop-dot nav-link">Contact Us</a>
        </nav>

        <!-- Social Media Icons -->
        <div class="flex items-center gap-4 ml-8 pl-8 border-l border-white/20">
          <a 
            v-for="social in socialMediaLinks" 
            :key="social.label" 
            :href="social.url" 
            :aria-label="social.label"
            target="_blank" 
            rel="noopener noreferrer"
            :class="['transition-all text-white', socialHoverClass(social.label)]"
          >
            <font-awesome-icon :icon="social.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="lg:hidden p-2 rounded-lg hover:bg-white/10 transition z-50 ml-auto"
        aria-label="Toggle menu"
      >
        <font-awesome-icon
          :icon="menuOpen ? ['fas', 'xmark'] : ['fas', 'bars']"
          class="w-7 h-7 text-white"
        />
      </button>

      <!-- Mobile Drawer -->
      <transition name="slide-fade">
        <div
          v-if="menuOpen"
          class="fixed inset-0 bg-black bg-opacity-70 z-40 lg:hidden"
          @click.self="closeMenu"
        >
          <div
            class="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-gradient-to-b from-[#1D1860] via-[#342D75] to-[#1D1860]
                   shadow-xl flex flex-col p-6 pt-20 mobile-menu overflow-y-auto"
          >
            <nav class="flex flex-col gap-4">
              <NuxtLink
                v-for="item in mainLinks"
                :key="item.name"
                :to="item.link"
                @click="closeMenu"
                class="text-white text-xl font-medium p-2 rounded-lg hover:bg-white/10"
              >
                {{ item.name }}
              </NuxtLink>

              <!-- Categories Dropdown (Mobile) -->
              <div class="border-t border-white/10 mt-2 pt-2">
                <button
                  @click="mobileCategoriesOpen = !mobileCategoriesOpen"
                  class="flex justify-between items-center w-full text-white text-xl font-medium mb-2 p-2 rounded-lg hover:bg-white/10 transition"
                >
                  Categories
                  <font-awesome-icon
                    :icon="['fas', mobileCategoriesOpen ? 'angle-up' : 'angle-down']"
                    class="w-4 h-4 text-white transition-transform duration-200"
                  />
                </button>

                <transition name="dropdown-fade">
                  <div v-if="mobileCategoriesOpen" class="flex flex-col ml-2">
                    <NuxtLink
                      v-for="category in categories"
                      :key="category.name"
                      :to="category.link"
                      @click="closeMenu"
                      class="text-white/80 text-lg py-1.5 px-2 rounded-lg block hover:bg-white/5"
                    >
                      - {{ category.name }}
                    </NuxtLink>
                  </div>
                </transition>
              </div>

              <!-- Social Media Icons (Mobile) -->
              <div class="flex justify-start gap-5 mt-6 pt-4 border-t border-white/10">
                <a 
                  v-for="social in socialMediaLinks" 
                  :key="social.label" 
                  :href="social.url" 
                  :aria-label="social.label"
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-white hover:scale-125 transition"
                >
                  <font-awesome-icon :icon="social.icon" class="w-7 h-7" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'

const categories = ref([
  { name: 'Food', link: '/category/food' },
  { name: 'Education', link: '/category/education' },
  { name: 'Personal Care', link: '/category/personalCare' },
  { name: 'Textile & Apparels', link: '/category/textileApparels' },
  { name: 'Fashion & Lifestyle', link: '/category/fashionLifestyle' },
  { name: 'Album & Documentaries', link: '/category/albumDocumentaryFilms' },
  {name: 'Corporate Films', link: '/category/corporateFilms' }
])

const mainLinks = ref([
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/#about-us' },
  { name: 'Our Services', link: '/#our-services' },
  { name: 'Gallery', link: '/#gallery' },
  { name: 'Contact Us', link: '#main-footer' }
])

const socialMediaLinks = ref([
  { icon: ['fab', 'facebook-f'], url: 'https://www.facebook.com/thayaads/', label: 'Facebook' },
  { icon: ['fab', 'instagram'], url: 'https://www.instagram.com/thayaads/', label: 'Instagram' },
  { icon: ['fab', 'x-twitter'], url: 'https://x.com/Thayaads', label: 'X (Twitter)' },
  { icon: ['fab', 'youtube'], url: 'https://www.youtube.com/@thayaads', label: 'YouTube' },
  { icon: ['fab', 'whatsapp'], url: 'https://wa.me/919841115673', label: 'WhatsApp' }
])

const menuOpen = ref(false)
const isDropdownOpen = ref(false)
const mobileCategoriesOpen = ref(false)

const socialHoverClass = (label) => {
  switch (label) {
    case 'Facebook': return 'hover:text-blue-600 hover:scale-125'
    case 'Instagram': return 'hover:text-pink-500 hover:scale-125'
    case 'X (Twitter)': return 'hover:text-blue-400 hover:scale-125'
    case 'YouTube': return 'hover:text-red-600 hover:scale-125'
    case 'WhatsApp': return 'hover:text-green-500 hover:scale-125'
    default: return ''
  }
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
  mobileCategoriesOpen.value = false
}
</script>

<style scoped>
.nav-link {
  @apply text-white text-lg font-medium transition;
}
.dropdown-item {
  @apply px-5 py-3 text-white text-base font-medium transition;
}
.dropdown-item:hover {
  background-color: #342D75;
}

/* Desktop hover rectangle + animated dot */
.desktop-dot {
  position: relative;
  display: inline-block;
}
.desktop-dot::before {
  content: '';
  position: absolute;
  top: -6px; left: -6px; right: -6px; bottom: -6px;
  border: 2px solid rgba(255,255,255,0.4);
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.desktop-dot:hover::before {
  opacity: 1;
  transform: scale(1.05);
}
.desktop-dot::after {
  content: '';
  position: absolute;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #fff;
  top: -6px; left: -6px;
  opacity: 0;
  pointer-events: none;
}
.desktop-dot:hover::after {
  opacity: 1;
  animation: move-dot 3s linear infinite;
}
@keyframes move-dot {
  0%   { top: -6px; left: -6px; }
  25%  { top: -6px; left: 100%; transform: translateX(-100%); }
  50%  { top: 100%; left: 100%; transform: translate(-100%, -100%); }
  75%  { top: 100%; left: -6px; transform: translateY(-100%); }
  100% { top: -6px; left: -6px; transform: translate(0,0); }
}

/* Transitions */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.3s ease;
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  max-height: 0;
  transform: scaleY(0.8);
}
.dropdown-fade-enter-to,
.dropdown-fade-leave-from {
  opacity: 1;
  max-height: 500px;
  transform: scaleY(1);
}
</style>
