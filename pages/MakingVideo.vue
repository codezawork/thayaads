<template>
  <section
    id="video-archive"
    class="py-12 md:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white relative overflow-hidden"
  >
    <!-- Animated Background Elements (Copied from Featured Projects) -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="max-w-screen-2xl mx-auto px-4 lg:px-12 relative z-10">
      <!-- Section Title and Underline -->
      <div class="text-center mb-10 md:mb-14">
        <h2
          class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent inline-block">
          Making Videos
        </h2>
        <!-- Gradient underline -->
        <div class="h-1.5 w-32 mx-auto mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
      </div>

      <!-- YouTube Previews Grid (Initial View) -->
      <!-- Shows 1 video on mobile, 2 on desktop -->
      <div class="grid gap-6 md:grid-cols-2">
        <div v-for="(url, index) in visibleVideos" :key="index" class="w-full aspect-video relative">
          <iframe
            class="w-full h-full rounded-xl border border-white/20 shadow-lg"
            :src="getEmbedUrl(url)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <!-- See More Button -->
      <div v-if="youtubeUrls.length > visibleCount" class="text-center mt-8">
        <button
          @click="openModal"
          class="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
        >
          Click to see all videos
        </button>
      </div>
    </div>

    <!-- Full Video Gallery Modal/Popup -->
    <transition name="modal-fade">
      <div
        v-if="isModalOpen"
        @click.self="closeModal"
        class="fixed inset-0 z-50 bg-black/95 backdrop-blur-md overflow-y-auto p-4 md:p-10 transition-opacity duration-300"
      >
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center mb-8">
            <h3 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
              Full Video Archive
            </h3>
            <button
              @click="closeModal"
              class="text-white hover:text-red-400 p-2 rounded-full transition-all bg-white/10 hover:bg-white/20"
              aria-label="Close Gallery"
            >
              <!-- Close Icon (X) -->
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
          
          <!-- Full Gallery Grid (Shows ALL videos) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div
              v-for="(url, index) in youtubeUrls"
              :key="'modal-' + index"
              class="w-full aspect-video relative"
            >
              <iframe
                class="w-full h-full rounded-xl border border-white/20 shadow-lg"
                :src="getEmbedUrl(url)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
// Removed 'useRouter'

const youtubeUrls = ref([
    'https://www.youtube.com/watch?v=CNGSg2Bzg-Q',
    'https://www.youtube.com/watch?v=2fMm9xZ-6-g',
    'https://www.youtube.com/watch?v=WhH64D6j2d0',
    'https://www.youtube.com/watch?v=ZvGoOr6NgH0',
    'https://www.youtube.com/watch?v=jyBeMSBshwY'
])

const visibleCount = ref(2) // default for desktop
const isModalOpen = ref(false) // State to control the popup visibility

// --- Computed & Methods ---

// Videos shown in the main section
const visibleVideos = computed(() => youtubeUrls.value.slice(0, visibleCount.value))

// Convert YouTube URL to embed URL
const getEmbedUrl = (url) => {
  // Extract video ID from URL
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([^&?]*)/);
  const videoId = match ? match[1] : null;
  
  // Return embed URL with rel=0 (no related videos) and no autoplay
  return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0` : '';
}

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

// --- Lifecycle & Scroll/Key Handling ---

// Detect screen width for mobile vs desktop
const handleResize = () => {
    visibleCount.value = window.innerWidth < 768 ? 1 : 2
}

// ESC key listener to close modal
const handleKeydown = (event) => {
    if (isModalOpen.value && event.key === 'Escape') {
        closeModal()
    }
}

// Watch modal state to add/remove a class on the body to lock scrolling
watch(isModalOpen, (newValue) => {
    if (newValue) {
        document.body.classList.add('modal-active')
    } else {
        document.body.classList.remove('modal-active')
    }
}, { immediate: true })


onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('keydown', handleKeydown)
    document.body.classList.remove('modal-active') // Cleanup scroll lock on unmount
})
</script>

<style scoped>
/* Optional: smooth hover effect */
iframe:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease-in-out;
}

/* Animated background pulse */
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

/* Modal Fade Transition (using standard Vue transition names) */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Global style for disabling background scroll when modal is open */
/* :global() is used to apply style outside of the component's scope (to the body) */
:global(body.modal-active) {
  overflow: hidden !important;
}
</style>
