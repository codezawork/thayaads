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
          <!-- Home Link -->
          <NuxtLink to="/" 
            class="desktop-dot nav-link" 
            :class="{ 'active-link': isActiveLink('/') }">
            Home
          </NuxtLink>
          
          <!-- About Us Anchor -->
          <a href="/#about-us" 
            class="desktop-dot nav-link" 
            :class="{ 'active-link': isActiveLink('/#about-us') }">
            About Us
          </a>
          
          <!-- Our Services Anchor -->
          <a href="/#our-services" 
            class="desktop-dot nav-link" 
            :class="{ 'active-link': isActiveLink('/#our-services') }">
            Our Services
          </a>

          <!-- Categories Dropdown -->
          <div
            class="relative h-full flex items-center"
            @mouseenter="isDropdownOpen = true"
            @mouseleave="isDropdownOpen = false"
          >
            <!-- Categories Link -->
            <a href="/#categories" 
              class="desktop-dot nav-link flex items-center focus:outline-none"
              :class="{ 'active-link': isActiveLink('/#categories') }">
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
                    :class="{ 'active-dropdown-link': isActiveLink(category.link) }"
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
            :class="{ 'active-link': isActiveLink('/#gallery') }">
            Gallery
          </a>
          
          <!-- Contact Us Anchor -->
          <a href="#main-footer" 
            class="desktop-dot nav-link" 
            :class="{ 'active-link': isActiveLink('#main-footer') }">
            Contact Us
          </a>
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
                :class="{ 'mobile-active-link': isActiveLink(item.link) }"
              >
                {{ item.name }}
              </NuxtLink>

              <!-- Categories Dropdown (Mobile) -->
              <div class="border-t border-white/10 mt-2 pt-2">
                <button
                  @click="mobileCategoriesOpen = !mobileCategoriesOpen"
                  class="flex justify-between items-center w-full text-white text-xl font-medium mb-2 p-2 rounded-lg hover:bg-white/10 transition"
                  :class="{ 'mobile-active-link': isActiveLink('/#categories') }"
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
                      :class="{ 'mobile-active-link-item': isActiveLink(category.link) }"
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
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// --- SCROLLSPY STATE ---
const currentActiveId = ref(''); // Stores the ID of the section currently centered in the viewport
let observer = null;
// --- END SCROLLSPY STATE ---

// Function to determine if a navigation link is active
const isActiveLink = (link) => {
    const isAnchor = link.includes('#');
    
    // --- 1. SCROLLSPY/ANCHOR LOGIC ---
    if (isAnchor || link === '/') {
        const targetId = link.split('#').pop() || 'home'; // 'home' for the root '/' link

        // Home Link Logic: Active if we are at the root path AND scrolled to the top/home area.
        if (targetId === 'home') {
            // Check if we are at the top, OR if the router path is exactly the root.
            return currentActiveId.value === '' && route.path === '/';
        }

        // Categories Link Logic: Active if 'categories' section is visible OR we are on a category page.
        if (targetId === 'categories') {
            return currentActiveId.value === 'categories' || route.path.startsWith('/category/');
        }

        // General Anchor Logic: Active if the corresponding section ID is currently in view.
        return currentActiveId.value === targetId;

    } 
    
    // --- 2. ROUTER PATH LOGIC (for direct sub-pages like /category/food) ---
    else {
        const normalizedLink = link.startsWith('/') ? link : '/' + link;
        return route.path === normalizedLink;
    }
}

const categories = ref([
  { name: 'Food', link: '/category/food' },
  { name: 'Education', link: '/category/education' },
  { name: 'Personal Care', link: '/category/personalCare' },
  { name: 'Textile & Apparels', link: '/category/textileApparels' },
  { name: 'Fashion & Lifestyle', link: '/category/fashionLifestyle' },
  { name: 'Album & Documentary', link: '/category/albumDocumentaryFilms' },
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


// --- SCROLLSPY IMPLEMENTATION ---

// Define the IDs of the sections we want to track
const sectionIdsToObserve = [
  'about-us', 
  'our-services', 
  'categories', 
  'gallery', 
  'main-footer'
];

onMounted(() => {
  // Use a negative margin to treat the viewport as a smaller area, 
  // so the link is only active when the section is near the center (40% from top/bottom).
  observer = new IntersectionObserver(
    (entries) => {
      // Find the currently intersecting entry
      const visibleEntry = entries.find(entry => entry.isIntersecting);
      
      if (visibleEntry) {
        currentActiveId.value = visibleEntry.target.id;
      } else if (window.scrollY < 200) {
        // Fallback: If no section is intersecting and we are near the top, activate Home.
        currentActiveId.value = '';
      }
    },
    { 
      rootMargin: '-40% 0px -40% 0px', // Center 20% of the screen is the "active zone"
      threshold: 0 
    }
  );

  // Start observing all relevant sections
  sectionIdsToObserve.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }
  });

  // Manual initial check for when the page loads already scrolled
  if (window.scrollY < 200) {
    currentActiveId.value = ''; // Ensure home is active on load
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

</script>

<style scoped>
/* (The style block remains the same as provided by the user, 
   except for the .active-link styles which were already good 
   for the visual feedback.) */
.nav-link {
  @apply text-white text-lg font-medium transition;
}
.dropdown-item {
  @apply px-5 py-3 text-white text-base font-medium transition;
}
.dropdown-item:hover {
  background-color: #342D75;
}

/* ------------------------------------- */
/* --- NEW ACTIVE LINK STYLES --- */
/* ------------------------------------- */

/* Desktop Active Link Underline */
.active-link {
    /* Set position relative for the pseudo-element */
    @apply relative;
}

.active-link::after {
    content: '';
    position: absolute;
    bottom: 5px; /* Adjust vertical position */
    left: 10%; /* Start the line slightly in */
    width: 80%; /* Don't span the full width of the padded link */
    height: 3px;
    background-color: white; 
    border-radius: 2px;
    /* Remove the dot animation when active */
    animation: none !important; 
    opacity: 1 !important;
    transform: none !important;
    transition: width 0.3s ease;
}

/* Hide the box/dot border effect when the link is active */
.active-link::before {
    display: none !important;
}

/* Mobile Active Links (Highlight the entire box) */
.mobile-active-link {
  @apply bg-white/20 !important; /* Uses a subtle highlight for the active menu item */
}
.mobile-active-link-item {
  @apply text-white font-semibold bg-white/10 !important; /* Highlights active category link */
}

/* Active link for dropdown items (smaller text, less padding) */
.active-dropdown-link {
    background-color: #342D75 !important;
    font-weight: 700;
}

/* Existing Custom Styles Below */

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
  0%   { top: -6px; left: -6px; }
  25%  { top: -6px; left: 100%; transform: translateX(-100%); }
  50%  { top: 100%; left: 100%; transform: translate(-100%, -100%); }
  75%  { top: 100%; left: -6px; transform: translateY(-100%); }
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
