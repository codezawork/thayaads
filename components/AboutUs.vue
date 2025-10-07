<template>
  <section id="about-us" class="py-16 bg-white md:py-24">
    <div class="max-w-7xl mx-auto px-4 md:px-8">

      <div class="flex items-center justify-center gap-4 mb-12 md:mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-[#1D1860]">About Us</h2>
      </div>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center mb-16 md:mb-24">

        <div class="md:w-1/2 lg:w-2/5 flex-shrink-0">
          <img src="../public/images/author/vijay.png" alt="Vijay Prathapan - Ad Film Director"
            class="w-full h-96 md:h-full object-cover object-center" />
        </div>

        <div class="md:w-1/2 lg:w-3/5 p-8 md:p-12">
          <h3 class="text-3xl md:text-4xl font-bold text-[#1D1860] mb-4">Vijay Prathapan</h3>
          <p class="text-lg text-gray-700 font-semibold mb-6">Ad Film Director</p>

          <p class="text-gray-600 leading-relaxed mb-4">
            With over 16 years of experience in the film and advertising industry, this creative force has brought
            hundreds of commercials to life—each crafted with emotional depth and cinematic precision. From co-directing
            acclaimed films to scripting compelling narratives, his work blends brand strategy with human connection.
          </p>

          <p class="text-gray-600 leading-relaxed">
            With 4 years at Vijay TV as Post-Production Director and Second Unit Director in fiction, and key
            contributions to films like Karnan and Raadan, his work reflects a strong focus on clarity, emotion, and
            innovation—across both short-form ads and full-length productions.
          </p>
        </div>

      </div>

      <div class="mb-16 md:mb-24">
        <div class="w-full rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-300">
          <img 
            src="../public/images/author/with-all.jpg" 
            alt="Behind the scenes photo collage showing work in progress" 
            class="w-full h-auto object-cover"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// No script logic needed for this static content component
</script>

<style scoped>
/* No specific scoped styles needed */
</style>