<template>
  <section id=our-services class="py-16 md:py-24 bg-red-50">
    <div class="max-w-7xl mx-auto px-4 md:px-8">

      <div class="text-center mb-10 md:mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold text-[#1D1860] mb-3">Our Services</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

        <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
          <div class="aspect-w-16 aspect-h-9">
            <img src="/public/images/services/commercial.jpg" alt="Commercial Ads" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-[#1D1860] mb-3">Commercial Ads</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              High-impact advertisements designed to capture attention, drive brand recognition, and deliver measurable results.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
          <div class="aspect-w-16 aspect-h-9">
            <img src="/public/images/services/corporate.jpg" alt="Corporate Films" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-[#1D1860] mb-3">Corporate Films</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Professional films for training, brand identity, or internal communication, crafted with clarity and engagement.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
          <div class="aspect-w-16 aspect-h-9">
            <img src="/public/images/services/documentary.jpg" alt="Documentary Productions" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-[#1D1860] mb-3">Documentary Films</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              In-depth storytelling that explores subjects with emotional depth and journalistic integrity, creating powerful narratives.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
          <div class="aspect-w-16 aspect-h-9">
            <img src="/public/images/services/product-shoot.jpg" alt="Product Shoots" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-[#1D1860] mb-3">Product Shoots & Design</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Visually stunning product photography and videography combined with expert graphic design for market readiness.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
          <div class="aspect-w-16 aspect-h-9">
            <img src="/public/images/services/animation.jpg" alt="Animation Works" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-[#1D1860] mb-3">2D/3D Animation</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Engaging motion graphics and animated videos used to simplify complex ideas or create unique branded content.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
          <div class="aspect-w-16 aspect-h-9">
            <img src="/public/images/services/prewedding.jpg" alt="Pre-wedding shoot" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-[#1D1860] mb-3">Pre-wedding Shoot</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
            Creative and cinematic photography and videography to capture beautiful memories and tell the unique story of the couple before their wedding day.
            </p>
          </div>
        </div>

      </div>
      
    </div>
  </section>
</template>

<script setup>
// No script logic needed for this component
</script>

<style scoped>
/* You may need to ensure these custom aspect ratio classes are defined in your project
   if not using Tailwind's official @tailwindcss/aspect-ratio plugin */
.aspect-w-16 {
  position: relative;
  width: 100%;
}
.aspect-w-16::before {
  content: '';
  display: block;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}
.aspect-w-16 > img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>