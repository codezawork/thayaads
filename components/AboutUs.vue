<template>
  <section id="about-us" class="py-16 bg-gray-50">
    <div class="max-w-screen-2xl mx-auto px-4 lg:px-12">

      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 relative inline-block after:block after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-indigo-600 after:rounded-full">
          About Us
        </h2>
      </div>

      <!-- Unified Card -->
      <div
        class="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
      >
        <div class="flex flex-col md:flex-row">
          <!-- Image -->
          <div class="md:w-1/2 lg:w-2/5 flex-shrink-0">
            <img
              src="https://assets.thayaads.com/public/assets/images/author/author.webp"
              alt="Vijay Prathapan"
              class="w-full h-96 md:h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          <!-- Text -->
          <div class="md:w-1/2 lg:w-3/5 p-8 md:p-12 text-gray-700">
            <h3 class="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-2">
              Vijay Prathapan
            </h3>
            <p class="text-lg font-semibold text-gray-500 mb-8">Ad Film Director</p>

            <p class="text-lg leading-relaxed mb-4 border-l-4 border-indigo-400 pl-4">
              A creative powerhouse with over <strong class="font-bold text-gray-800">16 years of experience</strong> across the film and advertising industries. This includes
              <strong class="font-bold text-gray-800">4 years at Vijay TV</strong> (Post-Production Director) and key contributions to major films like
              <strong class="font-bold text-gray-800">Karnan</strong> and <strong class="font-bold text-gray-800">Raadan</strong>, ensuring every project is handled with cinematic quality and emotional depth.
            </p>

            <p class="text-lg leading-relaxed border-l-4 border-indigo-400 pl-4">
              With a portfolio exceeding <strong class="font-bold text-gray-800">100+ ad-films</strong>, he transforms imaginative ideas into powerful, clear visual stories that strengthen brand connection and deliver measurable results.
            </p>
          </div>
        </div>

        <!-- Carousel integrated naturally below -->
        <div class="p-6 md:p-10 border-t border-gray-100 bg-gray-50">
          <Swiper
            :modules="modules"
            :loop="true"
            :autoplay="{ delay: 2500, disableOnInteraction: false }"
            :speed="800"
            :breakpoints="{
              0: { slidesPerView: 1.5, spaceBetween: 12 },
              640: { slidesPerView: 3.5, spaceBetween: 16 },
              1024: { slidesPerView: 4.5, spaceBetween: 20 },
              1280: { slidesPerView: 5.5, spaceBetween: 24 }
            }"
            class="work-swiper"
          >
            <SwiperSlide
              v-for="(slide, index) in careerSlides"
              :key="index"
            >
              <div
                class="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              >
                <img
                  :src="slide.imgUrl"
                  :alt="'Work image ' + (index + 1)"
                  class="w-full h-48 object-cover object-center transition-transform duration-500 hover:scale-[1.05]"
                />
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
</style>
