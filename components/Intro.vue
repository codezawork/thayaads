<template>
  <section id="intro" class="py-12 md:py-20 bg-sky-50 overflow-hidden relative">

    <!-- Swiper Carousel -->
    <Swiper
      :modules="modules"
      :loop="true"
      :centered-slides="true"
      :autoplay="{ delay: 3500, disableOnInteraction: false }"
      :speed="800"
      :breakpoints="{
        0: { slidesPerView: 1.2, spaceBetween: 16 },
        640: { slidesPerView: 2.2, spaceBetween: 24 },
        1024: { slidesPerView: 3.2, spaceBetween: 40 },
        1280: { slidesPerView: 4.2, spaceBetween: 40 }
      }"
      navigation
      pagination
      class="intro-swiper"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <div class="w-full h-80 sm:h-[400px] bg-gray-200">
            <img
              :src="`https://placehold.co/500x742/EAEAEA/1D1860?text=${slide.name}`"
              :alt="slide.name + ' campaign image'"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-5 sm:p-8 flex flex-col justify-end">
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#FDD835]">
              {{ slide.name }}
            </h3>
            <span class="text-sm sm:text-base text-gray-300">
              {{ slide.category }}
            </span>
          </div>
        </div>
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

const slides = [
  { name: 'Client1', category: 'Textile & Apparels' },
  { name: 'Client2', category: 'Fashion & Lifestyle' },
  { name: 'Client3', category: 'Retail' },
  { name: 'Client4', category: 'Jewelry' },
  { name: 'Client5', category: 'Automobile' },
  { name: 'Client6', category: 'Healthcare' },
  { name: 'Client7', category: 'Technology' },
  { name: 'Client8', category: 'Education' },
  { name: 'Client9', category: 'Finance' },
  { name: 'Client10', category: 'Hospitality' },
];

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
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
