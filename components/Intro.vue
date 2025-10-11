<template>
  <section id="intro" class="py-12 md:py-20 overflow-hidden relative bg-gradient-to-br from-slate-950 via-slate-900 to-black">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="relative z-10">
      <!-- Swiper Carousel -->
      <Swiper
        :modules="modules"
        :loop="true"
        :centered-slides="false"
        :autoplay="{ delay: 1000, disableOnInteraction: false }"
        :speed="800"
        :breakpoints="{
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
          <!-- Main Card Container -->
          <div class="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 hover:-translate-y-2">
            <!-- Image Container -->
            <div class="relative w-full h-80 sm:h-[400px] overflow-hidden">
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                :data-src="slide.logoUrl"
                :alt="slide.name + ' campaign image'"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 lazy-image"
                ref="imageRefs"
              />
            </div>
            
            <!-- Centered Text Block -->
            <div class="p-5 flex flex-col items-center justify-center text-center border-t border-white/10">
              <h3
                class="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wider transition-all duration-300 group-hover:from-purple-300 group-hover:to-pink-300"
              >
                {{ slide.name.toUpperCase() }}
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const modules = [Autoplay, Navigation, Pagination];

const clientSlides = ref([
  { name: 'AJJ Halwa', logoUrl: 'https://assets.thayaads.com/public/assets/images/carousel_images/ajj.webp', url: '#' },
  { name: 'Bro', logoUrl: 'https://assets.thayaads.com/public/assets/images/carousel_images/bro.webp', url: '#' },
  { name: 'DS கூட்டுப்பெருங்காயம்', logoUrl: 'https://assets.thayaads.com/public/assets/images/carousel_images/ds.webp', url: '#' },
  { name: 'Kovilpatti Snacks', logoUrl: 'https://assets.thayaads.com/public/assets/images/carousel_images/kvp.webp', url: '#' },
  { name: 'Madha Milk', logoUrl: 'https://assets.thayaads.com/public/assets/images/carousel_images/madha.webp', url: '#' },
  { name: 'Pristiano Madrid', logoUrl: 'https://assets.thayaads.com/public/assets/images/carousel_images/pristi.webp', url: '#' },
  { name: 'Saravana Salt', logoUrl: 'https://assets.thayaads.com/public/assets/images/carousel_images/saravana.webp', url: '#' }
]);
const imageRefs = ref([]);

let imageObserver;

onMounted(() => {
  nextTick(() => {
    imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
              img.src = img.dataset.src;
          }
          imgObserver.unobserve(img);
        }
      });
    }, { threshold: 0.1 });

    const images = document.querySelectorAll('.lazy-image');
    images.forEach(img => imageObserver.observe(img));
  });
});

onUnmounted(() => {
  if (imageObserver) imageObserver.disconnect();
});
</script>

<style scoped>
.intro-swiper {
  padding-top: 10px;
  padding-bottom: 10px;
}

/* Custom Swiper Navigation Styles */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: white;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(168, 85, 247, 0.3);
  border-color: rgba(168, 85, 247, 0.5);
  transform: scale(1.1);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 20px;
}

/* Custom Pagination Styles */
:deep(.swiper-pagination-bullet) {
  background: rgba(255, 255, 255, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background: linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153));
  width: 30px;
  border-radius: 5px;
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