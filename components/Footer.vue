<template>
  <footer id="main-footer"
    class="w-full bg-[#0f172a] py-12 md:py-20 text-gray-100 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 md:px-8">

      <!-- Main Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">

        <!-- Column 1: Company -->
        <div>
          <h3 class="text-xl md:text-2xl font-bold mb-6 tracking-wide uppercase">Company</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/" class="footer-link hover-box">Home</NuxtLink>
            </li>
            <li><a href="#about-us" class="footer-link hover-box">About Us</a></li>
            <li><a href="#our-services" class="footer-link hover-box">Our Services</a></li>
            <li><a href="#gallery" class="footer-link hover-box">Gallery</a></li>
          </ul>
          <br>
          <div class="mt-2 flex items-center gap-2">
            <div class="flex gap-1">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                class="w-5 h-5 text-yellow-400 fill-current star glow-star">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.21l8.2-1.192z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Column 2: Categories -->
        <div>
          <h3 class="text-xl md:text-2xl font-bold mb-6 tracking-wide uppercase">Categories</h3>
          <ul class="space-y-3">
            <li v-for="category in categories" :key="category.name">
              <NuxtLink :to="category.url" class="footer-link hover-box">{{ category.name }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Contact Info -->
        <div>
          <h3 class="text-xl md:text-2xl font-bold mb-6 tracking-wide uppercase">Contact Us</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <font-awesome-icon :icon="['fas', 'location-dot']" class="w-5 h-5 mt-0.5 shrink-0" />
              <address class="not-italic">
                S1-Himalaya Homes No.17<br>
                Alagiri Nagar,<br> 6th Cross Street,<br>
                Vadapalani, Chennai-26
              </address>
            </li>
            <li class="flex items-start gap-3">
              <font-awesome-icon :icon="['fas', 'mobile-screen']" class="w-5 h-5 mt-0.5 shrink-0" />
              <span>+91 9841115673</span>
            </li>
            <li class="flex items-start gap-3">
              <font-awesome-icon :icon="['fas', 'envelope']" class="w-5 h-5 mt-0.5 shrink-0" />
              <span>thayaads@gmail.com</span>
            </li>
          </ul>
        </div>

        <!-- Column 4: Social Media -->
        <div>
          <h3 class="text-xl md:text-2xl font-bold mb-6 tracking-wide uppercase">Follow Us</h3>
          <ul class="space-y-3">
            <li v-for="link in socialLinks" :key="link.name">
              <a :href="link.url" target="_blank" rel="noopener noreferrer" :aria-label="link.ariaLabel"
                class="flex items-center justify-center gap-2 w-36 h-10 rounded-lg text-white bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 text-sm md:text-base font-medium"
                :class="link.hoverBgClass">
                <font-awesome-icon :icon="['fab', link.icon]" class="w-5 h-5" />
                <span>{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <span class="text-gray-200 text-sm md:text-base">© {{ new Date().getFullYear() }} Thaya Ads. All rights reserved.</span>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const categories = [
  { name: 'Food', url: '/category/food' },
  { name: 'Education', url: '/category/education' },
  { name: 'Personal Care', url: '/category/personalCare' },
  { name: 'Textile & Apparels', url: '/category/textileApparels' },
  { name: 'Fashion & Lifestyle', url: '/category/fashionLifestyle' },
  { name: 'Album & Documentaries', url: '/category/albumDocumentaryFilms' },
  { name: 'Corporate Films', url: '/category/corporateFilms' }
]

const socialLinks = ref([
  { name: 'Facebook', url: 'https://www.facebook.com/thayaads/', icon: 'facebook-f', ariaLabel: 'Facebook', hoverBgClass: 'hover:bg-[#1877F2] hover:text-white' },
  { name: 'Instagram', url: 'https://www.instagram.com/thayaads/', icon: 'instagram', ariaLabel: 'Instagram', hoverBgClass: 'hover:bg-[#E1306C] hover:text-white' },
  { name: 'X', url: 'https://x.com/Thayaads', icon: 'x-twitter', ariaLabel: 'X', hoverBgClass: 'hover:bg-black hover:text-white' },
  { name: 'YouTube', url: 'https://www.youtube.com/@thayaads', icon: 'youtube', ariaLabel: 'YouTube', hoverBgClass: 'hover:bg-[#FF0000] hover:text-white' },
  { name: 'WhatsApp', url: 'https://wa.me/919841115673', icon: 'whatsapp', ariaLabel: 'WhatsApp', hoverBgClass: 'hover:bg-[#25D366] hover:text-white' }
])
</script>

<style scoped>
.footer-link {
  @apply block text-gray-100 text-base md:text-lg transition-all duration-300;
}

/* Hover box effect */
.hover-box {
  @apply relative px-3 py-1 rounded-md cursor-pointer transition-all duration-300;
}

.hover-box::before {
  content: '';
  @apply absolute inset-0 rounded-md border-2 border-transparent transition-all duration-300;
}

.hover-box:hover::before {
  @apply border-[#FFD700]; /* Gold border for hover */
  transform: scale(1.05);
}

.hover-box:hover {
  @apply scale-105 text-white;
}

/* Star glow animation */
@keyframes starGlow {
  0%, 20% { filter: brightness(1); }
  50% { filter: brightness(2.5); }
  100% { filter: brightness(1); }
}

.star {
  animation: starGlow 2.5s infinite;
}

.star:nth-child(1) { animation-delay: 0s; }
.star:nth-child(2) { animation-delay: 0.5s; }
.star:nth-child(3) { animation-delay: 1s; }
.star:nth-child(4) { animation-delay: 1.5s; }
.star:nth-child(5) { animation-delay: 2s; }
</style>
