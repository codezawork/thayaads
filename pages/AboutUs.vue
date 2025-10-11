<template>
  <section
    id="about-us"
    class="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white relative overflow-hidden"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="max-w-screen-2xl mx-auto px-4 lg:px-12 relative z-10">

      <!-- Section Title with Modern Design -->
      <div class="text-center mb-16 md:mb-20">
        <div class="inline-block">
          <h2
            class="text-5xl md:text-7xl font-black mb-3 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
          >
            About Us
          </h2>
          <div class="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
        </div>
      </div>

      <!-- Main Content Card -->
      <div class="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        <div class="grid md:grid-cols-2 gap-0">
          
          <!-- Image Side (Overlay Removed) -->
          <div class="relative overflow-hidden">
            <img
              src="https://assets.thayaads.com/public/assets/images/author/author.webp"
              alt="Vijay Prathapan"
              class="w-full h-full min-h-[500px] object-cover transition-transform duration-700"
            />
            <!-- Floating Badge -->
            <div class="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl z-20">
              <p class="text-gray-900 font-bold text-lg">16+ Years Experience</p>
            </div>
          </div>

          <!-- Text Content -->
          <div class="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div class="space-y-6">
              <div>
                <h3
                  class="text-4xl md:text-5xl lg:text-6xl font-black mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  Vijay Prathapan
                </h3>
                <p class="text-xl md:text-2xl font-light text-purple-300 mb-8">Ad Film Director</p>
              </div>

              <div class="space-y-4 text-gray-300">
                <p class="text-base md:text-lg leading-relaxed">
                  A creative powerhouse with over <span class="text-white font-semibold">16 years of experience</span> across the film and advertising industries. This includes <span class="text-white font-semibold">4 years at Vijay TV</span> (Post-Production Director) and key contributions to major films like <span class="text-white font-semibold">Karnan.</span>
                </p>

                <p class="text-base md:text-lg leading-relaxed">
                  With a portfolio exceeding <span class="text-white font-semibold">100+ ad-films</span>, he transforms imaginative ideas into powerful visual stories that strengthen brand connection and deliver measurable results.
                </p>
              </div>

              <!-- Stats Grid -->
              <div class="grid grid-cols-3 gap-4 pt-6">
                <div class="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <p class="text-3xl font-bold text-purple-400">16+</p>
                  <p class="text-xs text-gray-400 mt-1">Years</p>
                </div>
                <div class="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <p class="text-3xl font-bold text-pink-400">100+</p>
                  <p class="text-xs text-gray-400 mt-1">Ad Films</p>
                </div>
                <div class="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <p class="text-3xl font-bold text-blue-400">4</p>
                  <p class="text-xs text-gray-400 mt-1">Years Vijay TV</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Career Highlights Carousel -->
        <div class="border-t border-white/10 bg-black/20 p-6 md:p-10">
          <h4
            class="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Career Candids
          </h4>
          
          <Swiper
            :modules="modules"
            :loop="true"
            :autoplay="{ delay: 2500, disableOnInteraction: false }"
            :speed="800"
            :breakpoints="{
              0: { slidesPerView: 1.5, spaceBetween: 12 },
              640: { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
              1280: { slidesPerView: 5, spaceBetween: 24 }
            }"
            class="work-swiper"
          >
            <SwiperSlide
              v-for="(slide, index) in careerSlides"
              :key="index"
            >
              <div class="group relative overflow-hidden rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-purple-500/50">
                <img
                  :src="slide.imgUrl"
                  :alt="'Work image ' + (index + 1)"
                  class="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { ref } from 'vue'

const modules = [Autoplay]

const careerSlides = ref([
  { imgUrl: 'https://assets.thayaads.com/public/assets/images/author/author-with/5T0A4135.webp' },
  { imgUrl: 'https://assets.thayaads.com/public/assets/images/author/author-with/5T0A4372.webp' },
  { imgUrl: 'https://assets.thayaads.com/public/assets/images/author/author-with/5T0A5712.webp' },
  { imgUrl: 'https://assets.thayaads.com/public/assets/images/author/author-with/DSC_0040.webp' },
  { imgUrl: 'https://assets.thayaads.com/public/assets/images/author/author-with/DSC_0153.webp' },
  { imgUrl: 'https://assets.thayaads.com/public/assets/images/author/author-with/DSC_0305.webp' },
  { imgUrl: 'https://assets.thayaads.com/public/assets/images/author/author-with/IMG_0085.webp' },
  { imgUrl: 'https://assets.thayaads.com/public/assets/images/author/author-with/IMG_20220222_092439.webp' },
])
</script>

<style scoped>
.work-swiper {
  width: 100%;
}

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
