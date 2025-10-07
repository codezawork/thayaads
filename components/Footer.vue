<template>
  <footer id="main-footer" class="w-full bg-[#1D1860] py-10 md:py-16">
    <div class="max-w-7xl mx-auto px-4 md:px-8">

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        
        <!-- Column 1: Categories -->
        <div>
          <!-- Heading color changed to white -->
          <h3 class="text-xl font-bold mb-6 text-white">Category</h3>
          <ul class="space-y-3">
            <li v-for="category in categories" :key="category.name">
              <NuxtLink
                :to="category.url"
                class="block pl-2 -ml-2 text-white transition-all duration-300
                       hover:text-[#FDD835] hover:scale-[1.05] hover:translate-x-1 origin-left"
              >
                {{ category.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 2: Contact Info & Follow Us -->
        <div>
          <!-- Heading color changed to white -->
          <h3 class="text-xl font-bold mb-6 text-white">Contact Us</h3>
          <!-- Text color changed to light gray/white for body copy -->
          <ul class="space-y-4 text-gray-300">
            <li class="flex items-start gap-3">
              <!-- Icon color changed to white -->
              <font-awesome-icon :icon="['fas', 'mobile-screen']" class="w-5 h-5 mt-0.5 text-white shrink-0" />
              <span>+91 9841115673</span>
            </li>

            <li class="flex items-start gap-3">
              <!-- Icon color changed to white -->
              <font-awesome-icon :icon="['fas', 'envelope']" class="w-5 h-5 mt-0.5 text-white shrink-0" />
              <span>thayaads@gmail.com</span>
            </li>

            <li class="flex items-start gap-3">
              <!-- Icon color changed to white -->
              <font-awesome-icon :icon="['fas', 'location-dot']" class="w-5 h-5 mt-0.5 text-white shrink-0" />
              <address class="not-italic">
                S1-Himalaya Homes No.17<br>
                Alagiri Nagar, 6th Cross Street,<br>
                Vadapalani, Chennai-26
              </address>
            </li>
          </ul>

          <!-- Follow Us -->
          <div class="mt-8 pt-4 border-t border-gray-600">
            <!-- Heading color changed to white -->
            <h3 class="text-xl font-bold mb-4 uppercase tracking-wider text-white">Follow Us</h3>
            <div class="flex flex-wrap gap-3 text-xl">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="link.ariaLabel"
                :class="[
                  'w-10 h-10 flex items-center justify-center rounded-full',
                  'border border-gray-400 transition-all duration-300',
                  link.hoverColorClass,
                  // Base color changed from text-gray-800 to text-white
                  'text-white hover:bg-white hover:border-transparent'
                ]"
              >
                <font-awesome-icon :icon="['fab', link.icon]" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Column 3: Location Map -->
        <div>
          <!-- Heading color changed to white -->
          <h3 class="text-xl font-bold mb-6 text-white tracking-wide">Location</h3>
          <a
            href="https://www.google.com/maps/search/S1-Himalaya+Homes+No.17+Alagiri+Nagar,+6th+Cross+Street,+Vadapalani,+Chennai-26/@13.0577438,80.1950851,15z"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Click to view our location"
            class="block w-full h-[200px] cursor-pointer transition-opacity duration-200 hover:opacity-90"
          >
            <!-- Border color changed to dark gray for contrast against the dark background -->
            <div class="w-full h-full bg-gray-200 rounded-lg overflow-hidden border border-gray-600">
              <img src="/images/location.png" alt="Map showing our location in Chennai" class="w-full h-full object-cover">
            </div>
          </a>
        </div>
      </div>

      <!-- Bottom Footer Bar -->
      <!-- Border color changed to dark gray -->
      <div class="border-t border-gray-600 mt-12 pt-6 flex justify-between items-center text-sm flex-wrap gap-4">
        <div class="flex items-center space-x-4 md:space-x-6">
          <!-- Link colors changed to white, hover color remains accent yellow -->
          <a href="#about-us" class="text-white hover:text-[#FDD835] transition-colors">About us</a>
          <a href="#our-services" class="text-white hover:text-[#FDD835] transition-colors">Our Services</a>
          <a href="#gallery" class="text-white hover:text-[#FDD835] transition-colors">Gallery</a>
          <a href="#clients" class="text-white hover:text-[#FDD835] transition-colors">Clients</a>
        </div>

        <!-- Copyright text color changed to light gray -->
        <span class="text-gray-400 hidden sm:block">
          © {{ new Date().getFullYear() }} Thaya Ads. All rights reserved.
        </span>

        <!-- Scroll to Top -->
        <div class="relative group">
          <button
            @click="scrollToTop"
            aria-label="Scroll to top"
            class="text-3xl text-white hover:text-[#FDD835] transition-colors focus:outline-none relative z-10"
          >
            <font-awesome-icon :icon="['fas', 'arrow-up']" />
          </button>
          <span
            class="absolute right-full top-1/2 transform -translate-y-1/2
                   mr-2 px-3 py-1 bg-gray-700 text-white text-sm rounded-md
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap
                   hidden md:block"
          >
            Click to Top
          </span>
        </div>
      </div>

      <!-- Mobile Copyright -->
      <div class="text-center sm:hidden mt-4">
        <!-- Copyright text color changed to light gray -->
        <span class="text-gray-400 text-xs">
          © {{ new Date().getFullYear() }} Thaya Ads. All rights reserved.
        </span>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// Categories
const categories = [
  { name: 'Food', url: '/category/food' },
  { name: 'Education', url: '/category/education' },
  { name: 'Personal Care', url: '/category/personal-care' },
  { name: 'Textile & Apparels', url: '/category/textile-apparels' },
  { name: 'Fashion & Lifestyle', url: '/category/fashion-lifestyle' },
  { name: 'Financial Service', url: '/category/financial-service' }
]

// Social Links
const socialLinks = ref([
  { name: 'Facebook', url: 'https://www.facebook.com/thayaads/', icon: 'facebook-f', hoverColorClass: 'hover:text-[#1877F2]', ariaLabel: 'Facebook' },
  { name: 'Instagram', url: 'https://www.instagram.com/thayaads/', icon: 'instagram', hoverColorClass: 'hover:text-[#E1306C]', ariaLabel: 'Instagram' },
  { name: 'X', url: 'https://x.com/Thayaads?t=vThOBu08KE3jZagZBxt4Gw&s=09', icon: 'x-twitter', hoverColorClass: 'hover:text-black', ariaLabel: 'X (Twitter)' },
  { name: 'YouTube', url: 'https://www.youtube.com/@thayaads', icon: 'youtube', hoverColorClass: 'hover:text-[#FF0000]', ariaLabel: 'YouTube' },
  { name: 'Whatsapp', url: 'https://wa.me/919841115673?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.', icon: 'whatsapp', hoverColorClass: 'hover:text-[#25D366]', ariaLabel: 'Whatsapp' }
])

// Scroll to top
const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>
