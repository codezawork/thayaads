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
          
          <!-- Image Side -->
          <div class="relative overflow-hidden">
            <img
              src="https://assets.thayaads.com/public/assets/images/author/author.webp"
              alt="Vijay Prathapan"
              class="w-full h-full min-h-[500px] object-cover object-right transition-transform duration-700"
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

              <!-- Stats Grid - Intersection Observer is attached to this container -->
              <div ref="statsRef" class="grid grid-cols-3 gap-4 pt-6">
                <!-- Stat 1: Years -->
                <div class="relative text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <p class="text-3xl font-bold text-purple-400">
                    {{ animatedYears }}<span class="text-2xl">+</span>
                  </p>
                  <p class="text-xs text-gray-400 mt-1">Years</p>
                  <div v-if="showGlitter && animatedYears === targetYears" class="glitter-container purple-glitter"></div>
                </div>
                
                <!-- Stat 2: Ad Films -->
                <div class="relative text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <p class="text-3xl font-bold text-pink-400">
                    {{ animatedFilms }}<span class="text-2xl">+</span>
                  </p>
                  <p class="text-xs text-gray-400 mt-1">Ad Films</p>
                  <div v-if="showGlitter && animatedFilms === targetFilms" class="glitter-container pink-glitter"></div>
                </div>
                
                <!-- Stat 3: TV Years -->
                <div class="relative text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <p class="text-3xl font-bold text-blue-400">
                    {{ animatedTV }}
                  </p>
                  <p class="text-xs text-gray-400 mt-1">Years Vijay TV</p>
                  <div v-if="showGlitter && animatedTV === targetTV" class="glitter-container blue-glitter"></div>
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
                  class="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
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
import { ref, onMounted, onUnmounted } from 'vue'

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

// --- Stat Counting Logic ---
const targetYears = 16;
const targetFilms = 100;
const targetTV = 4;

const animatedYears = ref(0);
const animatedFilms = ref(0);
const animatedTV = ref(0);

const isCounting = ref(false); // New state to prevent concurrent animations
const showGlitter = ref(false); 
const statsRef = ref(null); // Ref to attach the Intersection Observer

const startCounting = () => {
  // Guard to ensure animation only starts once per scroll-in event
  if (isCounting.value) return; 

  isCounting.value = true;
  showGlitter.value = false;

  const duration = 1000; // 1.5 seconds animation
  const startTime = performance.now();

  const animate = (timestamp) => {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Linear progression for simplicity
    animatedYears.value = Math.floor(progress * targetYears);
    animatedFilms.value = Math.floor(progress * targetFilms);
    animatedTV.value = Math.floor(progress * targetTV);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Ensure final values are exactly the targets
      animatedYears.value = targetYears;
      animatedFilms.value = targetFilms;
      animatedTV.value = targetTV;
      
      // Animation finished
      isCounting.value = false; 

      // Trigger glitter effect
      showGlitter.value = true;
      // Hide glitter after 1.5s
      setTimeout(() => { showGlitter.value = false; }, 1500); 
    }
  };

  requestAnimationFrame(animate);
};

// --- Intersection Observer Setup (Updated) ---
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If section comes into view, start the counting animation
          startCounting();
        } else {
          // If section scrolls out of view, reset the values so they can count again 
          // when scrolled back in. Only reset if the animation isn't actively running.
          if (!isCounting.value) {
             animatedYears.value = 0;
             animatedFilms.value = 0;
             animatedTV.value = 0;
             showGlitter.value = false;
          }
        }
      });
    },
    { threshold: 0.7 } // Trigger when 70% of the element is visible
  );

  if (statsRef.value) {
    observer.observe(statsRef.value);
  }
});

onUnmounted(() => {
  if (observer && statsRef.value) {
    observer.unobserve(statsRef.value);
  }
});

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

/* --- GLITTER / SPARKLE EFFECT CSS --- */

.glitter-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  border-radius: 0.75rem; /* Matches parent rounded-xl */
  z-index: 20;
}

/* Base Glitter */
.glitter-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Creates tiny, randomized dots/sparks */
  box-shadow: 
    -50px -50px 0 0 white, 
    50px 50px 0 0 white,
    10px -30px 0 0 white,
    -30px 10px 0 0 white,
    -10px 40px 0 0 white;
  animation: sparkle-burst 1.5s forwards;
  filter: blur(1px); /* Soften the look */
}

@keyframes sparkle-burst {
  0% { 
    transform: scale(0); 
    opacity: 1;
    box-shadow: 
      0 0 0 0; 
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(3) rotate(30deg);
    opacity: 0;
    box-shadow: 
      -50px -50px 0 10px, 
      50px 50px 0 10px,
      10px -30px 0 10px,
      -30px 10px 0 10px,
      -10px 40px 0 10px;
  }
}

/* Color customization for glitter trails */
.purple-glitter::before {
  color: #a78bfa; /* purple-400 */
}
.pink-glitter::before {
  color: #f472b6; /* pink-400 */
}
.blue-glitter::before {
  color: #60a5fa; /* blue-400 */
}
</style>
