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

      <p
        class="text-center text-gray-300 mb-16 max-w-2xl mx-auto text-lg"
      >
        A glimpse of our latest campaigns and creative work.
      </p>

      <!-- Initial Gallery View -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        <div
          v-for="(image, index) in limitedImages"
          :key="index"
          class="group bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
        >
          <div class="relative overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
            ></div>
            <img
              :src="image.url"
              :alt="'Gallery image ' + (index + 1)"
              class="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
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

    <!-- Modal -->
    <transition name="modal-fade">
      <div
        v-if="isModalOpen"
        @click.self="isModalOpen = false"
        class="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto p-4 md:p-12"
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

          <!-- Full Gallery -->
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            <div
              v-for="(image, index) in galleryImages"
              :key="'full-' + index"
              class="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div class="relative overflow-hidden">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                ></div>
                <img
                  :src="image.url"
                  :alt="'Full gallery image ' + (index + 1)"
                  class="w-full h-48 md:h-64 object-cover cursor-pointer transition-transform duration-700 group-hover:scale-110"
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
            All {{ galleryImages.length }} images loaded.
          </p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// --- Cloudflare Worker URL ---
const API_URL = 'https://YOUR_WORKER_DOMAIN/api/gallery';

// --- State Variables ---
const isModalOpen = ref(false);
const isLoading = ref(false);
const hasFetchedAll = ref(false);

// --- Gallery Image URLs (1.webp → 40.webp) ---
const galleryImages = ref(
  Array.from({ length: 40 }, (_, i) => ({
    url: `https://assets.thayaads.com/public/assets/images/gallery/${i + 1}.webp`,
  }))
);

const limitedImages = computed(() => galleryImages.value.slice(0, 3));

const fetchAndMergeGallery = async () => {
  if (hasFetchedAll.value || isLoading.value) return;
  isLoading.value = true;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
    const fetchedUrls: string[] = await response.json();

    const existingUrlSet = new Set(galleryImages.value.map(img => img.url));
    const newUniqueImages = fetchedUrls
      .filter(url => !existingUrlSet.has(url))
      .map(url => ({ url }));

    if (newUniqueImages.length > 0) {
      galleryImages.value.push(...newUniqueImages);
      console.log(`[Gallery] Added ${newUniqueImages.length} new images.`);
    } else {
      console.log('[Gallery] No new images found.');
    }

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

const handleKeydown = (event: KeyboardEvent) => {
  if (isModalOpen.value && event.key === 'Escape') isModalOpen.value = false;
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
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
