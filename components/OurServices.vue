<template>
  <section id="our-services" class="py-16 md:py-24 bg-white">
    <div class="max-w-screen-2xl mx-auto px-4 lg:px-12">

      <!-- Title -->
      <div class="text-center mb-10 md:mb-16">
        <h2
          class="text-4xl md:text-5xl font-extrabold text-gray-800 relative inline-block after:block after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-indigo-600 after:rounded-full">
          Our Services
        </h2>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

        <!-- Card -->
        <div
          class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col items-start">
          <!-- Image only visible on md and up -->
          <div class="aspect-w-16 aspect-h-9 hidden md:block">
            <img src="/public/images/services/commercial.jpg" alt="Commercial Ads" class="w-full h-full object-cover" />
          </div>
          <!-- Text -->
          <div class="p-6 flex items-center gap-3">
            <span class="text-[#1D1860] text-2xl md:text-3xl">🎬</span>
            <h3 class="text-xl md:text-2xl font-bold text-[#1D1860]">Commercial Ads</h3>
          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col items-start">
          <div class="aspect-w-16 aspect-h-9 hidden md:block">
            <img src="/public/images/services/corporate.jpg" alt="Corporate Films" class="w-full h-full object-cover" />
          </div>
          <div class="p-6 flex items-center gap-3">
            <span class="text-[#1D1860] text-2xl md:text-3xl">🏢</span>
            <h3 class="text-xl md:text-2xl font-bold text-[#1D1860]">Corporate Films</h3>
          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col items-start">
          <div class="aspect-w-16 aspect-h-9 hidden md:block">
            <img src="/public/images/services/documentary.jpg" alt="Documentary Films"
              class="w-full h-full object-cover" />
          </div>
          <div class="p-6 flex items-center gap-3">
            <span class="text-[#1D1860] text-2xl md:text-3xl">🎥</span>
            <h3 class="text-xl md:text-2xl font-bold text-[#1D1860]">Documentary Films</h3>
          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col items-start">
          <div class="aspect-w-16 aspect-h-9 hidden md:block">
            <img src="/public/images/services/product-shoot.jpg" alt="Product Shoots"
              class="w-full h-full object-cover" />
          </div>
          <div class="p-6 flex items-center gap-3">
            <span class="text-[#1D1860] text-2xl md:text-3xl">📸</span>
            <h3 class="text-xl md:text-2xl font-bold text-[#1D1860]">Product Shoots & Design</h3>
          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col items-start">
          <div class="aspect-w-16 aspect-h-9 hidden md:block">
            <img src="/public/images/services/animation.jpg" alt="Animation Works" class="w-full h-full object-cover" />
          </div>
          <div class="p-6 flex items-center gap-3">
            <span class="text-[#1D1860] text-2xl md:text-3xl">✨</span>
            <h3 class="text-xl md:text-2xl font-bold text-[#1D1860]">2D/3D Animation</h3>
          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col items-start">
          <div class="aspect-w-16 aspect-h-9 hidden md:block">
            <img src="/public/images/services/prewedding.jpg" alt="Pre-wedding Shoot"
              class="w-full h-full object-cover" />
          </div>
          <div class="p-6 flex items-center gap-3">
            <span class="text-[#1D1860] text-2xl md:text-3xl">💍</span>
            <h3 class="text-xl md:text-2xl font-bold text-[#1D1860]">Pre-wedding Shoot</h3>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// no logic required
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  width: 100%;
}

.aspect-w-16::before {
  content: '';
  display: block;
  padding-bottom: 56.25%;
}

.aspect-w-16>img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #eee;
}
</style>
