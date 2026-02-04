<template>
  <section
    id="featured-projects"
    class="py-16 md:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white relative overflow-hidden"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="w-full relative z-10">
      
      <!-- Section Title -->
      <div class="text-center mb-10 md:mb-14">
        <h2
          class="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider px-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent inline-block"
        >
          Featured Projects
        </h2>
        <!-- Gradient underline -->
        <div class="h-1.5 w-32 mx-auto mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
      </div>
      
      <!-- Swiper Carousel -->
      <Swiper
        :modules="modules"
        :loop="true"
        :centered-slides="true"
        :grab-cursor="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :speed="900"
        :slides-per-view="1.3"
        :space-between="15"
        :breakpoints="{
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 1.7, spaceBetween: 25 },
          1024: { slidesPerView: 1.8, spaceBetween: 30 },
          1280: { slidesPerView: 2, spaceBetween: 35 },
          1536: { slidesPerView: 2.2, spaceBetween: 40 }
        }"
        class="featured-swiper"
        @slideChange="onSlideChange"
        @swiper="onSwiper"
      >
        <SwiperSlide
          v-for="(video, index) in videos"
          :key="index"
          class="swiper-slide-custom"
          @click="openVideo(video)"
        >
          <!-- Taller video card -->
          <div
            class="relative w-full rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer transition-all duration-700 video-card"
            style="padding-top: 60%;"
          >
            <img
              :data-src="`https://img.youtube.com/vi/${getYoutubeId(video)}/maxresdefault.jpg`"
              :alt="'Video thumbnail ' + (index + 1)"
              class="absolute inset-0 w-full h-full object-cover lazy-image transition-transform duration-700"
            />

            <!-- Play Icon Overlay -->
            <div
              class="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center play-overlay"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 text-white drop-shadow-2xl"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Overlay Player -->
    <transition name="fade">
      <div
        v-if="activeVideo"
        class="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        @click.self="closeVideo"
      >
        <button
          @click="closeVideo"
          class="absolute top-6 right-6 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-200 z-10 text-xl font-bold"
        >
          ✕
        </button>

        <div class="w-[90%] md:w-[80%] lg:w-[70%] aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            :src="`https://www.youtube.com/embed/${getYoutubeId(activeVideo)}?autoplay=1`"
            frameborder="0"
            allowfullscreen
            allow="autoplay; encrypted-media"
            class="w-full h-full"
          ></iframe>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

import { useSeoMeta,useHead } from '#imports'

//SEO META Tags
useSeoMeta({
  title: 'Featured Projects | Thaya Ads',
  description: 'Explore our most impactful ad films and creative campaigns across industries. எங்கள் சிறந்த விளம்பர படங்கள் மற்றும் படைப்பாற்றல் பிரச்சாரங்களை பார்வையிடுங்கள்.',
  keywords: 'Featured ad films, Tamil Nadu campaigns, Thaya Ads projects, சிறந்த விளம்பரங்கள்',
  ogTitle: 'Featured Projects | Thaya Ads',
  ogImage: '/images/featured-banner.jpg',
  ogUrl: 'https://thayaads.com/FeaturedProjects',
  twitterCard: 'summary_large_image'
})



const modules = [Autoplay]
const activeIndex = ref(0)
const swiperInstance = ref(null)

const videos = ref([
  'https://www.youtube.com/watch?v=pW8DE4BCm-g',
  'https://www.youtube.com/watch?v=4itMOT_eXVw',
  'https://www.youtube.com/watch?v=OAJd37f20Do',
  'https://www.youtube.com/watch?v=3MVhxNTuiJQ',
  'https://www.youtube.com/watch?v=ks8mI14kcC8',
  'https://www.youtube.com/watch?v=vLfIr3IwDig'
])

const activeVideo = ref(null)

const getYoutubeId = (url) => {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : ''
}

const openVideo = (url) => activeVideo.value = url
const closeVideo = () => activeVideo.value = null

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
  updateSlideStyles(swiper)
}

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex
  updateSlideStyles(swiper)
}

const updateSlideStyles = (swiper) => {
  const slides = swiper.slides
  const activeIdx = swiper.activeIndex
  
  slides.forEach((slide, idx) => {
    const card = slide.querySelector('.video-card')
    if (!card) return
    
    if (idx === activeIdx) {
      slide.style.transform = 'scale(1)'
      slide.style.opacity = '1'
      card.style.border = '4px solid white'
      card.style.boxShadow = '0 0 80px rgba(255, 255, 255, 0.7)'
    } else {
      slide.style.transform = 'scale(0.88)'
      slide.style.opacity = '0.6'
      card.style.border = 'none'
      card.style.boxShadow = 'none'
    }
  })
}

// Lazy loading
let imageObserver
onMounted(() => {
  nextTick(() => {
    imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) img.src = img.dataset.src
          observer.unobserve(img)
        }
      })
    }, { threshold: 0.1 })
    const images = document.querySelectorAll('.lazy-image')
    images.forEach(img => imageObserver.observe(img))
  })
})

onUnmounted(() => {
  if (imageObserver) imageObserver.disconnect()
})
</script>

<style scoped>
.featured-swiper {
  overflow: visible;
  padding: 30px 0 80px 0;
}

.swiper-slide-custom {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.video-card {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Smooth fade for player overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animated background pulse from About Us section */
@keyframes pulse {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.15;
    transform: scale(1.05);
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>
