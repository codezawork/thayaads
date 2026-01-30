<template>
  <section
    id="gallery"
    class="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white relative overflow-hidden"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-10">
        <div class="inline-block">
          <h2
            class="text-5xl md:text-7xl font-black mb-3 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
          >
            Our Gallery
          </h2>
          <div
            class="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
          ></div>
        </div>
      </div>

      <!-- Initial Gallery View (Taller Portrait Images) -->
      <!-- UPDATED: Changed grid-cols-1 to grid-cols-2 for mobile/small screens -->
      <div
        class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
      >
        <!-- The v-for now iterates over 2 images on mobile and 3 on desktop (controlled by initialImages computed property) -->
        <div
          v-for="(image, index) in initialImages"
          :key="index"
          @click="openLightbox(index)"
          class="group bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 cursor-pointer"
        >
          <div class="relative overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
            ></div>
            <img
              :src="image.url"
              :alt="'Gallery image ' + (index + 1)"
              class="w-full h-72 md:h-96 lg:h-[30rem] object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              onerror="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/333333?text=Image+Error';"
            />
          </div>
        </div>
      </div>

      <!-- See More Button -->
      <div class="text-center mt-16">
        <button
          @click="openModalAndFetch"
          :disabled="isLoading"
          class="group inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-full shadow-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20"
        >
          <span v-if="isLoading" class="flex items-center">
            <svg
              class="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading gallery...
          </span>
          <span v-else class="flex items-center">
            Click to see more
            <svg
              class="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>

    <!-- Gallery Grid Modal (Opened by "Click to see more") -->
    <transition name="modal-fade">
      <div
        v-if="isModalOpen"
        @click.self="isModalOpen = false"
        class="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl overflow-y-auto p-4 md:p-12"
      >
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center mb-8">
            <h3
              class="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic"
            >
              Where Vision Meets the Lens
            </h3>

            <button
              @click="isModalOpen = false"
              class="text-white hover:text-red-400 transition-all p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
              aria-label="Close Gallery"
            >
              <svg
                class="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Full Gallery Grid -->
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            <div
              v-for="(image, index) in galleryImages"
              :key="'full-' + index"
              @click="openLightbox(index)"
              class="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
            >
              <div class="relative overflow-hidden">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                ></div>
                <img
                  :src="image.url"
                  :alt="'Full gallery image ' + (index + 1)"
                  class="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onerror="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/333333?text=Image+Error';"
                />
              </div>
            </div>
          </div>

          <p
            v-if="hasFetchedAll && galleryImages.length > 0"
            class="text-center text-white/70 mt-10 text-lg"
          >
            All {{ galleryImages.length }} images loaded. Click any image to view it full-screen.
          </p>
        </div>
      </div>
    </transition>


    <!-- Lightbox Modal (Carousel) - Overlays everything -->
    <transition name="modal-fade">
      <div
        v-if="isLightboxOpen"
        @click.self="isLightboxOpen = false"
        class="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
      >
        <div class="relative w-full max-w-5xl h-full max-h-[80vh] flex flex-col justify-center items-center">
          
          <!-- Close Button -->
          <button
            @click="isLightboxOpen = false"
            class="absolute top-4 right-4 text-white hover:text-red-400 transition-all p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 z-50"
            aria-label="Close Lightbox"
          >
            <svg
              class="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Image Container (Supports Touch/Swipe) -->
          <div
            class="relative w-full h-full rounded-xl overflow-hidden shadow-2xl cursor-grab"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
          >
            <transition name="image-slide" mode="out-in">
              <img
                :src="currentImageUrl"
                :alt="'Zoomed image ' + (currentImageIndex + 1)"
                :key="currentImageUrl"
                class="w-full h-full object-contain object-center transition-opacity duration-300"
                loading="eager"
                onerror="this.onerror=null; this.src='https://placehold.co/1000x800/1e293b/d1d5db?text=Image+Error';"
              />
            </transition>

            <!-- Navigation Buttons (Transparent, but visible/clickable) -->
            <div class="absolute inset-y-0 w-full flex justify-between items-center px-2 md:px-4 z-10">
                <!-- Previous Button (Left) -->
                <button
                @click.stop="prevImage"
                class="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 transition-all duration-300 backdrop-blur-sm focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous image"
                :disabled="galleryImages.length <= 1"
                >
                <svg
                    class="w-6 h-6 md:w-8 md:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="3"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                </button>
                
                <!-- Next Button (Right) -->
                <button
                @click.stop="nextImage"
                class="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 transition-all duration-300 backdrop-blur-sm focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next image"
                :disabled="galleryImages.length <= 1"
                >
                <svg
                    class="w-6 h-6 md:w-8 md:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="3"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                </button>
            </div>
          </div>

          <!-- Counter -->
          <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-sm font-medium">
            {{ currentImageIndex + 1 }} / {{ galleryImages.length }}
          </div>
        </div>
      </div>
    </transition>

  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useSeoMeta } from '#imports'

// --- Cloudflare Worker URL ---
const API_URL = 'https://YOUR_WORKER_DOMAIN/api/gallery';

// --- State Variables ---
const isModalOpen = ref(false); // Controls the full gallery grid pop-up
const isLoading = ref(false);
const hasFetchedAll = ref(false);

const isLightboxOpen = ref(false); // Controls the single image carousel pop-up
const currentImageIndex = ref(0);
let touchStartX = 0; // For swipe detection

// **UPDATED** State to control the number of initial images displayed (2 for mobile, 3 for desktop)
const initialDisplayCount = ref(3);

// --- Gallery Image URLs (1.webp → 40.webp) ---
const galleryImages = ref(
  Array.from({ length: 40 }, (_, i) => ({
    url: `https://assets.thayaads.com/public/assets/images/gallery/${i + 1}.webp`,
  }))
);

// --- Computed Properties ---
// **UPDATED** to use the reactive initialDisplayCount
const initialImages = computed(() => galleryImages.value.slice(0, initialDisplayCount.value));
const currentImageUrl = computed(() => galleryImages.value[currentImageIndex.value]?.url);


// --- Logic ---

// Fetch data and open the full gallery grid modal
const fetchAndMergeGallery = async () => {
  if (hasFetchedAll.value || isLoading.value) return;
  isLoading.value = true;

  try {
    // This API call is simulated since the real endpoint is not provided.
    // Replace this with your actual logic if needed.
    // const response = await fetch(API_URL);
    // if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
    // const fetchedUrls: string[] = await response.json();

    // const existingUrlSet = new Set(galleryImages.value.map(img => img.url));
    // const newUniqueImages = fetchedUrls
    //   .filter(url => !existingUrlSet.has(url))
    //   .map(url => ({ url }));

    // if (newUniqueImages.length > 0) {
    //   galleryImages.value.push(...newUniqueImages);
    //   console.log(`[Gallery] Added ${newUniqueImages.length} new images.`);
    // } else {
      console.log('[Gallery] No new images found from simulated fetch.');
    // }

    hasFetchedAll.value = true;
  } catch (err) {
    console.error('[Gallery Error]', err);
  } finally {
    isLoading.value = false;
  }
};

const openModalAndFetch = () => {
  isModalOpen.value = true;
  fetchAndMergeGallery();
};

// Open the lightbox carousel at a specific index
const openLightbox = (index: number) => {
  currentImageIndex.value = index;
  isLightboxOpen.value = true;
  // Ensure we fetch all images when opening the lightbox if not already done
  fetchAndMergeGallery();
};

const nextImage = () => {
  if (galleryImages.value.length === 0) return;
  if (currentImageIndex.value < galleryImages.value.length - 1) {
    currentImageIndex.value++;
  } else {
    // Wrap around to the first image
    currentImageIndex.value = 0;
  }
};

const prevImage = () => {
  if (galleryImages.value.length === 0) return;
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  } else {
    // Wrap around to the last image
    currentImageIndex.value = galleryImages.value.length - 1;
  }
};

// --- Mobile Touch/Swipe Handlers ---
const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.touches[0].clientX;
};

const handleTouchEnd = (e: TouchEvent) => {
  const touchEndX = e.changedTouches[0].clientX;
  const deltaX = touchEndX - touchStartX;
  const swipeThreshold = 50; // Minimum distance for a swipe

  if (deltaX > swipeThreshold) {
    prevImage(); // Swiped right (to see previous image)
  } else if (deltaX < -swipeThreshold) {
    nextImage(); // Swiped left (to see next image)
  }
};


// --- Header/Footer Visibility Control (Critical for hiding fixed header) ---

/**
 * Updates the 'modal-active' class on the body element.
 * This class is used by global CSS to hide the header/footer and disable background scrolling.
 */
const updateBodyClass = () => {
  if (isModalOpen.value || isLightboxOpen.value) {
    // Add class when any full-screen modal is open
    document.body.classList.add('modal-active');
  } else {
    // Remove class when all full-screen modals are closed
    document.body.classList.remove('modal-active');
  }
};

// Watchers trigger the function whenever the modal or lightbox state changes
watch(isModalOpen, updateBodyClass);
watch(isLightboxOpen, updateBodyClass);


// **UPDATED** Function to check screen size and update the number of initial images
const handleResize = () => {
    // Set to 2 images for screens under 768px (mobile), 3 otherwise (desktop)
    initialDisplayCount.value = window.innerWidth < 768 ? 2 : 3;
}


// --- Global Event Handlers (Keyboard) ---
const handleKeydown = (event: KeyboardEvent) => {
  if (isLightboxOpen.value) {
    if (event.key === 'Escape') {
      isLightboxOpen.value = false;
    } else if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === 'ArrowLeft') {
      prevImage();
    }
  } else if (isModalOpen.value && event.key === 'Escape') {
      isModalOpen.value = false;
  }
};

onMounted(() => {
    handleResize(); // Initial check on mount
    window.addEventListener('resize', handleResize); // Listen for resize events
    window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('keydown', handleKeydown);
  // Clean up body class in case the user navigates away while a modal is open
  document.body.classList.remove('modal-active');
});

//SEO META TAGS
useSeoMeta({
  title: 'Gallery | Thaya Ads',
  description: 'Browse behind-the-scenes photos and visuals from our ad film shoots. எங்கள் விளம்பர படப்பிடிப்புகளின் பின்னணிப் புகைப்படங்கள் மற்றும் காட்சிகளை பார்வையிடுங்கள்.',
  keywords: 'Ad film gallery, behind the scenes, Thaya Ads visuals, விளம்பர புகைப்படங்கள்',
  ogTitle: 'Gallery | Thaya Ads',
  ogImage: '/images/gallery-banner.jpg',
  ogUrl: 'https://thayaads.com/Gallery',
  twitterCard: 'summary_large_image'
})





</script>

<style scoped>
/* Modal Fade Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Image Slide Transition (for a smoother carousel feel) */
.image-slide-enter-active,
.image-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.image-slide-enter-from {
  opacity: 0;
  transform: scale(0.98);
}
.image-slide-leave-to {
  opacity: 0;
  transform: scale(1.02);
}

/* Background Animations */
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
