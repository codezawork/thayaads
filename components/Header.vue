<template>
  <header class="w-full shadow-lg sticky top-0 z-50 bg-[#0f172a]">
    <!-- UPDATED: Changed max-w-7xl to max-w-screen-2xl for wider container -->
    <div class="max-w-screen-2xl mx-auto flex items-center h-20 px-4 md:px-8 lg:px-12">

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
        <!-- UPDATED: Reduced gap from gap-10 to gap-8 for better spacing -->
        <nav class="flex items-center gap-8 h-full relative">
          <!-- Home Link -->
          <NuxtLink to="/" 
            class="desktop-dot nav-link" 
            :class="{ 'active-link': activeSection === 'home' }">
            Home
          </NuxtLink>
          
          <!-- About Us Anchor -->
          <a href="/#about-us" 
            class="desktop-dot nav-link" 
            :class="{ 'active-link': activeSection === 'about-us' }">
            About Us
          </a>
          
          <!-- Our Services Anchor -->
          <a href="/#our-services" 
            class="desktop-dot nav-link" 
            :class="{ 'active-link': activeSection === 'our-services' }">
            Our Services
          </a>

          <!-- Categories Dropdown -->
          <div
            class="relative h-full flex items-center"
            @mouseenter="isDropdownOpen = true"
            @mouseleave="isDropdownOpen = false"
          >
            <a href="/#categories" 
              class="desktop-dot nav-link flex items-center focus:outline-none"
              :class="{ 'active-link': activeSection === 'categories' || route.path.startsWith('/category/') }">
              Categories
              <font-awesome-icon :icon="['fas', 'angle-down']" class="ml-1 w-3 h-3" />
            </a>

            <transition name="fade-scale">
              <div
                v-if="isDropdownOpen"
                class="absolute left-0 top-full w-72 rounded-b-xl backdrop-blur-md
                      bg-[#0f172a]/85 border border-white/10 shadow-xl
                      transition-all duration-300 ease-out origin-top z-50"
              >
                <div class="flex flex-col divide-y divide-white/10">
                  <NuxtLink
                    v-for="category in categories"
                    :key="category.name"
                    :to="category.link"
                    class="desktop-dot dropdown-item"
                    @click="isDropdownOpen = false"
                    :class="{ 'active-dropdown-link': route.path === category.link }"
                  >
                    {{ category.name }}
                  </NuxtLink>
                </div>
              </div>
            </transition>
          </div>

          <!-- Gallery Anchor -->
          <a href="/#gallery" 
            class="desktop-dot nav-link" 
            :class="{ 'active-link': activeSection === 'gallery' }">
            Gallery
          </a>

          <!-- FIXED: Clients Anchor - Changed from #clients to /#clients -->
          <a href="/#clients"
             class="desktop-dot nav-link"
             :class="{'active-link': activeSection === 'clients'}">
            Clients  
          </a>
          
          <!-- Contact Us Anchor -->
          <a href="#main-footer" 
            class="desktop-dot nav-link" 
            :class="{ 'active-link': activeSection === 'main-footer' }">
            Contact Us
          </a>
        </nav>

        <!-- Social Media Icons (Desktop) -->
        <div class="flex items-center gap-4 ml-8 pl-8 border-l border-white/20">
          <a 
            v-for="social in socialMediaLinks" 
            :key="social.label" 
            :href="social.url" 
            :aria-label="social.label"
            target="_blank" 
            rel="noopener noreferrer"
            class="social-desktop-link"
          >
            <div class="w-10 h-10 bg-white rounded-lg shadow-xl transition-all duration-300 social-icon-box flex items-center justify-center"> 
              <font-awesome-icon 
                :icon="social.icon" 
                class="w-5 h-5" 
                :class="social.colorClass"
              />
            </div>
          </a>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="lg:hidden p-2 rounded-lg hover:bg-white/10 transition z-50 ml-auto mr-4"
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
            class="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-[#0f172a]
                   shadow-xl flex flex-col p-6 pt-20 mobile-menu overflow-y-auto"
          >
            <nav class="flex flex-col gap-4">
              
              <!-- Social Media Icons (Mobile) -->
              <div class="flex justify-start gap-5 p-3 mb-4 border border-white rounded-lg bg-slate-800">
                <a 
                  v-for="social in socialMediaLinks" 
                  :key="social.label" 
                  :href="social.url" 
                  :aria-label="social.label"
                  target="_blank" 
                  rel="noopener noreferrer"
                  :class="[
                      'hover:scale-125 transition',
                      social.label === 'X (Twitter)' ? 'text-white' : social.colorClass 
                  ]"
                >
                  <font-awesome-icon :icon="social.icon" class="w-7 h-7" />
                </a>
              </div>
              
              <NuxtLink
                v-for="item in mainLinks"
                :key="item.name"
                :to="item.link"
                @click="closeMenu"
                class="text-white text-xl font-medium p-2 rounded-lg hover:bg-white/10"
                :class="{ 'mobile-active-link': isActiveMobileLink(item.link) }"
              >
                {{ item.name }}
              </NuxtLink>

              <!-- Categories Dropdown (Mobile) -->
              <div class="border-t border-white/10 mt-2 pt-2">
                <button
                  @click="mobileCategoriesOpen = !mobileCategoriesOpen"
                  class="flex justify-between items-center w-full text-white text-xl font-medium mb-2 p-2 rounded-lg hover:bg-white/10 transition"
                  :class="{ 'mobile-active-link': activeSection === 'categories' || route.path.startsWith('/category/') }"
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
                      :class="{ 'mobile-active-link-item': route.path === category.link }"
                    >
                      - {{ category.name }}
                    </NuxtLink>
                  </div>
                </transition>
              </div>

            </nav>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Active section tracking for scroll spy
const activeSection = ref('home')

// Scroll spy logic
const handleScroll = () => {
  if (route.path !== '/') {
    return
  }

  const sections = [
    { id: 'about-us', name: 'about-us' },
    { id: 'our-services', name: 'our-services' },
    { id: 'categories', name: 'categories' },
    { id: 'gallery', name: 'gallery' },
    { id: 'clients', name: 'clients' },
    { id: 'main-footer', name: 'main-footer' }
  ]

  const scrollPosition = window.scrollY + 100

  if (window.scrollY < 100) {
    activeSection.value = 'home'
    return
  }

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i].id)
    if (section) {
      const sectionTop = section.offsetTop
      if (scrollPosition >= sectionTop - 50) {
        activeSection.value = sections[i].name
        return
      }
    }
  }
}

// Mobile link active state
const isActiveMobileLink = (link) => {
  if (link === '/') {
    return activeSection.value === 'home' && route.path === '/'
  }
  const sectionId = link.replace('/#', '').replace('#', '')
  return activeSection.value === sectionId
}

const categories = ref([
  { name: 'Food', link: '/category/food' },
  { name: 'Education', link: '/category/education' },
  { name: 'Personal Care', link: '/category/personalCare' },
  { name: 'Textile & Apparels', link: '/category/textileApparels' },
  { name: 'Fashion & Lifestyle', link: '/category/fashionLifestyle' },
  { name: 'Album & Documentary', link: '/category/albumDocumentaryFilms' },
  { name: 'Corporate Films', link: '/category/corporateFilms' }
])

const mainLinks = ref([
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/#about-us' },
  { name: 'Our Services', link: '/#our-services' },
  { name: 'Gallery', link: '/#gallery' },
  { name: 'Clients', link: '/#clients' },
  { name: 'Contact Us', link: '#main-footer' }
])

const socialMediaLinks = ref([
  { icon: ['fab', 'facebook-f'], url: 'https://www.facebook.com/thayaads/', label: 'Facebook', colorClass: 'text-blue-600' },
  { icon: ['fab', 'instagram'], url: 'https://www.instagram.com/thayaads/', label: 'Instagram', colorClass: 'text-pink-600' },
  { icon: ['fab', 'x-twitter'], url: 'https://x.com/Thayaads', label: 'X (Twitter)', colorClass: 'text-gray-900' },
  { icon: ['fab', 'youtube'], url: 'https://www.youtube.com/@thayaads', label: 'YouTube', colorClass: 'text-red-600' },
  { icon: ['fab', 'whatsapp'], url: 'https://wa.me/919841115673', label: 'WhatsApp', colorClass: 'text-emerald-500' }
])

const menuOpen = ref(false)
const isDropdownOpen = ref(false)
const mobileCategoriesOpen = ref(false)

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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(() => route.path, () => {
  if (route.path !== '/') {
    activeSection.value = ''
  } else {
    handleScroll()
  }
})
</script>

<style scoped>
.nav-link {
  @apply text-white text-lg font-medium transition;
}
.dropdown-item {
  @apply px-5 py-3 text-white text-base font-medium transition;
}

.dropdown-item:hover {
  background: linear-gradient(to right, #c084fc, #f472b6);
  color: #000000;
  font-weight: 600;
}

.active-dropdown-link {
  background: linear-gradient(to right, #c084fc, #f472b6) !important;
  color: #000000 !important;
  font-weight: 700;
}

.social-desktop-link {
  @apply relative transform transition-transform duration-300;
}

.social-desktop-link:hover {
  transform: scale(1.6);
}

.social-icon-box {
  @apply transition-all duration-300 ease-in-out;
}

.active-link {
  @apply border-b-2 border-white pb-1 relative;
}

.active-link::before {
  display: none !important;
}

.active-link::after {
  display: none !important;
}

.mobile-active-link {
  @apply bg-white/20 !important;
}

.mobile-active-link-item {
  @apply text-white font-semibold bg-white/10 !important;
}

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