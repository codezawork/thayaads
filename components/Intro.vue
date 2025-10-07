<template>
  <section id="intro" class="py-4 md:py-6 overflow-hidden relative">

    <!-- Swiper Carousel -->
    <Swiper
      :modules="modules"
      :loop="true"
      :centered-slides="false"
      :autoplay="{ delay: 1000, disableOnInteraction: false }"
      :speed="800"
      :breakpoints="{
        // Removed centered-slides and adjusted slidesPerView/spaceBetween for a seamless infinite scroll line
        0: { slidesPerView: 1.5, spaceBetween: 16 },
        640: { slidesPerView: 2.5, spaceBetween: 24 },
        1024: { slidesPerView: 3.5, spaceBetween: 30 }, 
        1280: { slidesPerView: 4.5, spaceBetween: 30 } 
      }"
      navigation
      pagination
      class="intro-swiper"
    >
      <SwiperSlide v-for="(slide, index) in clientSlides" :key="index">
        <a :href="slide.url" target="_blank" rel="noopener noreferrer">
          <!-- Main Card Container -->
          <div class="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
            
            <!-- Image Container -->
            <div class="w-full h-80 sm:h-[400px] bg-gray-200 border-b border-gray-100">
              <!-- Overlay to make the image slightly darker, matching the reference -->
              <div class="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0"></div>

              <img
                :src="slide.logoUrl" 
                :alt="slide.name + ' campaign image'"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <!-- Centered Text Block (Outside the image overlay) -->
            <div class="p-4 flex flex-col items-center justify-center text-center">
              <h3 
                class="text-lg sm:text-xl font-extrabold text-[#1D1860] tracking-wider transition-colors duration-300 group-hover:text-blue-600"
                >
                {{ slide.name.toUpperCase() }}
              </h3>
              <!-- Removed the "Client Showcase" span for a cleaner look -->
            </div>

          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const modules = [Autoplay, Navigation, Pagination];

const clientSlides = ref([
    { name: 'AJJ Halwa', logoUrl: 'https://pub-7f0e93d91e804b398f760f06c3ed12d5.r2.dev/carousel/ajj.png', url: '#' },
    { name: 'Bro', logoUrl: 'https://pub-7f0e93d91e804b398f760f06c3ed12d5.r2.dev/carousel/bro.png', url: '#' },
    { name: 'DS கூட்டுப்பெருங்காயம்', logoUrl: 'https://pub-7f0e93d91e804b398f760f06c3ed12d5.r2.dev/carousel/ds.png', url: '#' },
    { name: 'Kovilpatti Snacks', logoUrl: 'https://pub-7f0e93d91e804b398f760f06c3ed12d5.r2.dev/carousel/kvp.png', url: '#' },
    { name: 'Madha Milk', logoUrl: 'https://pub-7f0e93d91e804b398f760f06c3ed12d5.r2.dev/carousel/madha.png', url: '#' },
    { name: 'Pristiano Madrid', logoUrl: 'https://pub-7f0e93d91e804b398f760f06c3ed12d5.r2.dev/carousel/pristi.png', url: '#' },
    { name: 'Saravana Salt', logoUrl: 'https://pub-7f0e93d91e804b398f760f06c3ed12d5.r2.dev/carousel/saravana.png', url: '#' }
]);

// Original component logic below:
const showSocial = ref(true);
let observer;

onMounted(() => {
  nextTick(() => {
    const elementsToObserve = ['#intro', '#main-footer'];

    const nodes = elementsToObserve
      .map(id => document.querySelector(id))
      .filter(Boolean);

    if (nodes.length) {
      observer = new IntersectionObserver(
        (entries) => {
          showSocial.value = !entries.some(entry => entry.isIntersecting && entry.target.id === 'intro');
        },
        { threshold: 0.01 }
      );

      nodes.forEach(node => observer.observe(node));
    }
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.intro-swiper {
  /* Ensure the swiper itself is not imposing extra vertical padding */
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
