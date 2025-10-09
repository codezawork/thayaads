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
        <!-- Main Card Container -->
        <div class="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
          <!-- Image Container -->
          <div class="w-full h-80 sm:h-[400px] bg-gray-200 border-b border-gray-100">
            <!-- Overlay to make the image slightly darker, matching the reference -->
            <div class="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0"></div>
            <img
              :data-src="slide.logoUrl"
              :alt="slide.name + ' campaign image'"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] lazy-image"
              ref="imageRefs"
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
      </SwiperSlide>
    </Swiper>
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
  { name: 'AJJ Halwa', logoUrl: 'https://thayaads.com/public/assets/images/carousel_images/ajj.webp', url: '#' },
  { name: 'Bro', logoUrl: 'https://thayaads.com/public/assets/images/carousel_images/bro.webp', url: '#' },
  { name: 'DS கூட்டுப்பெருங்காயம்', logoUrl: 'https://thayaads.com/public/assets/images/carousel_images/ds.webp', url: '#' },
  { name: 'Kovilpatti Snacks', logoUrl: 'https://thayaads.com/public/assets/images/carousel_images/kvp.webp', url: '#' },
  { name: 'Madha Milk', logoUrl: 'https://thayaads.com/public/assets/images/carousel_images/madha.webp', url: '#' },
  { name: 'Pristiano Madrid', logoUrl: 'https://thayaads.com/public/assets/images/carousel_images/pristi.webp', url: '#' },
  { name: 'Saravana Salt', logoUrl: 'https://thayaads.com/public/assets/images/carousel_images/saravana.webp', url: '#' }
]);
const imageRefs = ref([]);

const showSocial = ref(true);
let observer;

onMounted(() => {
  nextTick(() => {
    const elementsToObserve = ['#intro', '#main-footer'];
    const nodes = elementsToObserve
      .map(id => document.querySelector(id))
      .filter(Boolean);

    // Create observer for lazy loading images
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          imgObserver.unobserve(img); // Stop observing once loaded
        }
      });
    }, { threshold: 0.1 });

    imageRefs.value = document.querySelectorAll('.lazy-image');
    imageRefs.value.forEach(img => imageObserver.observe(img));

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
  if (imageObserver) imageObserver.disconnect(); // Clean up image observer
});
</script>

<style scoped>
.intro-swiper {
  /* Ensure the swiper itself is not imposing extra vertical padding */
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>