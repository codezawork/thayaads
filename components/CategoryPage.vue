<template>
  <main>
    <div class="relative h-[300px] md:h-[400px] bg-gray-900 mb-12">
      <img :src="data.coverImage" :alt="data.name + ' Cover Photo'" class="w-full h-full object-cover opacity-70" />
      
      <div class="absolute inset-0 flex flex-col justify-end p-4 md:p-8 bg-black/30">
        
        <NuxtLink 
          to="/" 
          class="absolute top-4 left-4 text-white bg-black/40 hover:bg-black/60 rounded-full px-4 py-2 flex items-center gap-2 transition-colors z-10"
        >
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          <span class="hidden sm:inline">Back to Home</span>
        </NuxtLink>

        <h1 class="text-4xl md:text-6xl font-extrabold text-white">
          {{ data.name }}
        </h1>
      </div>
    </div>
    
    <section class="max-w-7xl mx-auto px-4 md:px-8 pb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-10 border-b-4 border-[#FDD835] inline-block pb-2">
        Our Projects
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(video, index) in data.videos" :key="index" class="bg-white rounded-lg shadow-lg overflow-hidden">
          
          <div class="aspect-w-16 aspect-h-9 w-full">
            <iframe 
              :src="`https://www.youtube.com/embed/${video.id}?autoplay=0&rel=0`"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              class="w-full h-full"
            ></iframe>
          </div>
          
          <div class="p-4 bg-gray-50">
            <h3 class="text-lg font-semibold text-gray-800">{{ video.client_name }}</h3>
          </div>
        </div>
      </div>
      
      <p v-if="!data.videos || data.videos.length === 0" class="text-gray-500 italic mt-8">
        No projects available in this category yet.
      </p>
    </section>
  </main>
</template>

<script setup>
// Props are defined to accept the data from the dynamic page ([slug].vue)
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
/* Aspect Ratio utility for responsive videos (requires Tailwind Forms plugin or custom classes) */
.aspect-w-16 { --tw-aspect-w: 16; }
.aspect-h-9 { --tw-aspect-h: 9; }
.aspect-w-16.aspect-h-9 {
    padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);
    position: relative;
    height: 0;
}
.aspect-w-16.aspect-h-9 > iframe {
    position: absolute;
    top: 0;
    left: 0;
}
</style>