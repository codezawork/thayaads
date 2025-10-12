<template>
  <section id=clients class="py-16 bg-[#0f172a] text-center overflow-hidden">
    <!-- Section Title -->
    <div class="text-center mb-16 md:mb-20">
      <div class="inline-block">
        <h2
          class="text-5xl md:text-7xl font-black mb-3 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
        >
          Our Valuable Clients
        </h2>
        <div
          class="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
        ></div>
      </div>
    </div>

    <!-- Client Rows -->
    <div class="relative max-w-screen-2xl mx-auto px-4 lg:px-12 overflow-hidden">
      <div
        v-for="(row, rowIndex) in visibleRows"
        :key="rowIndex"
        class="logo-row flex items-center justify-around mb-6"
        :class="[
          rowIndex % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'
        ]"
        :style="{
          animationDelay: `${rowIndex * 1.5}s`,
          animationDuration: '40s'
        }"
      >
        <!-- Logos (duplicated for seamless loop) -->
        <div
          v-for="(logo, i) in [...row, ...row]"
          :key="i + '-' + rowIndex"
          class="flex-shrink-0 mx-6 logo-wrapper overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-200"
        >
          <img
            :src="logo"
            alt="Client Logo"
            class="logo-image w-40 md:w-48 lg:w-56 h-24 md:h-32 lg:h-36 object-cover transform scale-110 transition-transform duration-300"
            onerror="this.onerror=null; this.src='https://placehold.co/224x96/ffffff/333333?text=LOGO';"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import clientLogos from "~/data/clients.js";

const logoRows = computed(() => {
  const rows = [];
  const perRow = Math.ceil(clientLogos.length / 4) || 4;  
  for (let i = 0; i < 4; i++) {
    const start = i * perRow;
    rows.push(clientLogos.slice(start, start + perRow));
  }
  return rows;
});

const width = ref(window.innerWidth);
const updateWidth = () => (width.value = window.innerWidth);

onMounted(() => window.addEventListener("resize", updateWidth));
onUnmounted(() => window.removeEventListener("resize", updateWidth));

const visibleRows = computed(() =>
  width.value < 768 ? logoRows.value.slice(0, 2) : logoRows.value
);
</script>

<style scoped>
@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

.animate-scroll-left {
  display: flex;
  animation: scroll-left 40s linear infinite;
}

.animate-scroll-right {
  display: flex;
  animation: scroll-right 40s linear infinite;
}

/* Pause animation when hovering over the row */
.logo-row:hover {
  animation-play-state: paused !important;
}

/* Logo wrapper for hover effects. We removed the padding and added white background and overflow-hidden here. */
.logo-wrapper {
  /* Using Tailwind transition duration, but keeping the class for clarity in CSS */
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
}

/* Zoom effect on individual logo hover on desktop */
.logo-wrapper:hover {
  transform: scale(1.25);
  z-index: 10;
}

/* Logo image styling */
.logo-image {
  cursor: pointer;
  /* object-cover ensures the image fills the container, cropping internal whitespace */
}

/* Enhanced shadow on hover */
.logo-wrapper:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
}

/* Mobile: Touch-friendly zoom (no hover needed) */
@media (max-width: 767px) {
  .logo-wrapper:active {
    transform: scale(1.25);
  }
  
  .logo-wrapper:active {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
  }
}
</style>
