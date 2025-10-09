<template>
  <section id="gallery" class="py-12 md:py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-extrabold text-[#1D1860] mb-8 text-center">Our Gallery</h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        A glimpse of our latest campaigns and creative work.
      </p>

      <!-- Initial Gallery View (First 3 Images) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="(image, index) in limitedImages" 
          :key="index" 
          class="relative overflow-hidden rounded-xl shadow-lg group transform hover:scale-[1.02] transition duration-300"
        >
          <img 
            :src="image.url" 
            :alt="'Gallery image ' + (index + 1)" 
            class="w-full h-72 object-cover" 
            loading="lazy"
            onerror="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/333333?text=Image+Error';"
          />
          <!-- Optional Hover Overlay -->
          <div class="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>

      <!-- See More Button -->
      <div class="text-center mt-12">
        <button 
          @click="openModalAndFetch"
          :disabled="isLoading"
          class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isLoading" class="flex items-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading gallery...
          </span>
          <span v-else class="flex items-center">
            Click to see more
            <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
      </div>

    </div>

    <!-- Full Gallery Modal (Page Overlay) -->
    <transition name="modal-fade">
      <div 
        v-if="isModalOpen" 
        @click.self="isModalOpen = false"
        class="fixed inset-0 z-50 bg-gray-900 bg-opacity-95 overflow-y-auto p-4 md:p-12 backdrop-blur-sm"
      >
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-3xl font-extrabold text-white italic">Where Vision Meets the Lens</h3>

            <button 
              @click="isModalOpen = false"
              class="text-white hover:text-red-400 transition-colors p-2 rounded-full bg-gray-700 hover:bg-gray-800"
              aria-label="Close Gallery"
            >
              <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- All Images Grid -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div 
              v-for="(image, index) in galleryImages" 
              :key="'full-' + index"
              class="relative overflow-hidden rounded-lg shadow-xl"
            >
              <img 
                :src="image.url" 
                :alt="'Full gallery image ' + (index + 1)" 
                class="w-full h-48 md:h-64 object-cover cursor-pointer hover:scale-[1.03] transition duration-300"
                loading="lazy"
                onerror="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/333333?text=Image+Error';"
              />
            </div>
          </div>

          <p v-if="hasFetchedAll && galleryImages.length > 0" class="text-center text-white/70 mt-8 text-lg">
            All {{ galleryImages.length }} images loaded.
          </p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// =========================================================================
// !!! IMPORTANT: REPLACE THIS WITH YOUR DEPLOYED CLOUDFLARE WORKER URL !!!
// =========================================================================
const API_URL = 'https://YOUR_WORKER_DOMAIN/api/gallery'; 

// --- State Variables ---
const isModalOpen = ref(false);
const isLoading = ref(false);
const hasFetchedAll = ref(false); // Tracks if the full list has been loaded from KV

// --- Initial Image Data (Local Cache) ---
// This list is what is shown immediately and what we use to compare against the KV data.
const galleryImages = ref([
  { url: 'https://picsum.photos/id/10/500/750' },   // Tall Placeholder
  { url: 'https://picsum.photos/id/100/500/750' },
  { url: 'https://picsum.photos/id/101/500/750' },
  { url: 'https://picsum.photos/id/102/500/750' },
  { url: 'https://picsum.photos/id/103/500/750' },
  { url: 'https://picsum.photos/id/104/500/750' },
  { url: 'https://picsum.photos/id/106/500/750' },
  { url: 'https://picsum.photos/id/107/500/750' },
  { url: 'https://picsum.photos/id/108/500/750' },
  { url: 'https://picsum.photos/id/109/500/750' },
  { url: 'https://picsum.photos/id/111/500/750' },
  { url: 'https://picsum.photos/id/112/500/750' },
  { url: 'https://picsum.photos/id/113/500/750' },
  { url: 'https://picsum.photos/id/114/500/750' },
  { url: 'https://picsum.photos/id/116/500/750' },
  { url: 'https://picsum.photos/id/117/500/750' },
  { url: 'https://picsum.photos/id/118/500/750' },
  { url: 'https://picsum.photos/id/119/500/750' },
  { url: 'https://picsum.photos/id/120/500/750' },
  { url: 'https://picsum.photos/id/121/500/750' },
  { url: 'https://picsum.photos/id/122/500/750' },
  { url: 'https://picsum.photos/id/123/500/750' },
  { url: 'https://picsum.photos/id/124/500/750' },
  { url: 'https://picsum.photos/id/125/500/750' },
  { url: 'https://picsum.photos/id/126/500/750' },
  { url: 'https://picsum.photos/id/127/500/750' },
  { url: 'https://picsum.photos/id/128/500/750' },
  { url: 'https://picsum.photos/id/129/500/750' },
  { url: 'https://picsum.photos/id/130/500/750' },
  { url: 'https://picsum.photos/id/131/500/750' },
  { url: 'https://picsum.photos/id/132/500/750' },
  { url: 'https://picsum.photos/id/133/500/750' },
  { url: 'https://picsum.photos/id/134/500/750' },
  { url: 'https://picsum.photos/id/135/500/750' },
  { url: 'https://picsum.photos/id/136/500/750' },
  { url: 'https://picsum.photos/id/137/500/750' },
  { url: 'https://picsum.photos/id/139/500/750' },
  { url: 'https://picsum.photos/id/140/500/750' },
  { url: 'https://picsum.photos/id/141/500/750' },
  { url: 'https://picsum.photos/id/142/500/750' },
  { url: 'https://picsum.photos/id/143/500/750' },
  { url: 'https://picsum.photos/id/144/500/750' },
  { url: 'https://picsum.photos/id/145/500/750' },
  { url: 'https://picsum.photos/id/146/500/750' },
  { url: 'https://picsum.photos/id/147/500/750' },
  { url: 'https://picsum.photos/id/149/500/750' },
  { url: 'https://picsum.photos/id/150/500/750' },
  { url: 'https://picsum.photos/id/151/500/750' },
  { url: 'https://picsum.photos/id/152/500/750' },
  { url: 'https://picsum.photos/id/153/500/750' },
]);



// Computed property to show only the first 3 images for the preview
const limitedImages = computed(() => galleryImages.value.slice(0, 3));

/**
 * Core Logic: Fetches all URLs from the Worker (KV) and merges only the unique ones.
 */
const fetchAndMergeGallery = async () => {
    // Prevent multiple fetches if the data is already loaded
    if (hasFetchedAll.value || isLoading.value) {
        return;
    }
    
    isLoading.value = true;
    
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // 1. Get the FULL array of URLs from the Worker (KV)
        const fetchedUrls: string[] = await response.json();
        
        // 2. Create a Set of existing URLs for fast O(1) lookup
        const existingUrlSet = new Set(galleryImages.value.map(img => img.url));

        // 3. Filter the fetched URLs to find new, unique ones (The "vomit" step)
        const newUniqueImages = fetchedUrls
            .filter(url => !existingUrlSet.has(url)) // Keep only URLs NOT found locally
            .map(url => ({ url })); // Convert unique strings back to { url: string } objects
        
        // 4. Merge the new, unique images into the main gallery array
        if (newUniqueImages.length > 0) {
            galleryImages.value.push(...newUniqueImages);
            console.log(`[Gallery] Added ${newUniqueImages.length} new unique images from KV.`);
        } else {
             console.log("[Gallery] No new images found in KV. Local cache is complete.");
        }

        // 5. Mark as fetched so subsequent clicks skip the API call
        hasFetchedAll.value = true;

    } catch (error) {
        console.error("[Gallery Error] Failed to fetch or merge gallery images:", error);
    } finally {
        isLoading.value = false;
    }
}

/**
 * Handles the button click: opens the modal and triggers the fetch operation.
 */
const openModalAndFetch = () => {
    isModalOpen.value = true;
    fetchAndMergeGallery();
}


// --- Keyboard Handling Logic ---

/**
 * Handles keyboard events globally. Closes the modal if the Escape key is pressed.
 * @param event The keyboard event
 */
const handleKeydown = (event: KeyboardEvent) => {
  if (isModalOpen.value && event.key === 'Escape') {
    isModalOpen.value = false;
  }
};

onMounted(() => {
  // Attach the keydown listener to the window when the component is mounted
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  // Remove the listener when the component is destroyed to prevent memory leaks
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* * CSS for Modal Transition 
 * Vue transition name is 'modal-fade'
 */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
