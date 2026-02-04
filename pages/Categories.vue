<template>
  <section id="categories" class="py-20 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="max-w-screen-2xl mx-auto px-4 lg:px-12 relative z-10">

      <!-- Section Title -->
      <div class="text-center mb-16 md:mb-20">
        <div class="inline-block">
          <h2 class="text-5xl md:text-7xl font-black mb-3 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Categories
          </h2>
          <div class="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
        </div>
      </div>

      <!-- Categories Grid - ADJUSTED FOR MOBILE (grid-cols-2) -->
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <NuxtLink 
          v-for="(category, index) in categories" 
          :key="category.name" 
          :to="category.link"
          class="block group bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
        >
          <div 
            class="relative w-full h-40 sm:h-56 md:h-72 overflow-hidden" 
            :ref="el => categoryRefs[index] = el"
          >
            <!-- Gradient Overlay on Hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <!-- Image -->
            <img 
              :src="category.image" 
              :alt="category.name + ' category image'"
              class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
              onerror="this.onerror=null; this.src='https://placehold.co/400x400/CCCCCC/333333?text=Image+Error';"
            />

            <!-- Play Button -->
            <div class="absolute inset-0 flex items-center justify-center z-20">
              <div
                class="play-button w-14 h-14 sm:w-16 sm:h-16 bg-white/80 rounded-full flex items-center justify-center transition-opacity duration-300
                       opacity-100 md:opacity-0 group-hover:md:opacity-100"
              >
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 2v20l18-10L4 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div class="p-4 sm:p-6 text-center">
            <h3 class="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
              {{ category.name }}
            </h3>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSeoMeta, useHead } from '#imports'

const categories = ref([
  { name: 'Food', image: 'https://assets.thayaads.com/public/assets/images/categories/food.webp', link: '/category/food' },
  { name: 'Education', image: 'https://assets.thayaads.com/public/assets/images/categories/education.webp', link: '/category/education' },
  { name: 'Personal Care', image: 'https://assets.thayaads.com/public/assets/images/categories/personal-care.webp', link: '/category/personalCare' },
  { name: 'Textile & Apparels', image: 'https://assets.thayaads.com/public/assets/images/categories/textile-apparels.webp', link: '/category/textileApparels' },
  { name: 'Fashion & Lifestyle', image: 'https://assets.thayaads.com/public/assets/images/categories/fashion-lifestyle.webp', link: '/category/fashionLifestyle' },
  { name: 'Album & Documentaries', image: 'https://assets.thayaads.com/public/assets/images/categories/documentry.webp', link: '/category/albumDocumentaryFilms' },
  { name: 'Corporate Films', image: 'https://assets.thayaads.com/public/assets/images/categories/Corporate%20film.webp', link: '/category/corporateFilms' }
])

const categoryRefs = ref([])

onMounted(() => {
  if (process.client && typeof window !== 'undefined') {
    const lastCategorySlug = sessionStorage.getItem('lastCategory')

    if (lastCategorySlug) {
      const index = categories.value.findIndex(cat =>
        cat.link.includes(lastCategorySlug)
      )

      if (index !== -1 && categoryRefs.value[index]) {
        categoryRefs.value[index].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })

        sessionStorage.removeItem('lastCategory')
      }
    }
  }
})

//SEO META


useSeoMeta({
  title: 'Thaya Ads Categories (thayaads) | Advertising & Media Services',
  description: 'Explore service categories at Thaya Ads (also known as thayaads) including commercials, corporate films, documentaries, animation, and branding projects in Tamil Nadu.',
  keywords: 'thayaads, thaya ads categories, advertising services Tamil Nadu, commercials, corporate films, documentaries, animation, branding',

  ogTitle: 'Thaya Ads Categories (thayaads) | Advertising & Media Services',
  ogDescription: 'Explore service categories at Thaya Ads (thayaads) including commercials, corporate films, documentaries, animation, and branding projects.',
  ogImage: 'https://thayaads.com/images/categories-banner.jpg',
  ogUrl: 'https://thayaads.com/Categories',
  ogType: 'website',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Thaya Ads Categories (thayaads) | Advertising & Media Services',
  twitterDescription: 'Browse advertising and media service categories offered by Thaya Ads (thayaads) in Tamil Nadu.',
  twitterImage: 'https://thayaads.com/images/categories-banner.jpg'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://thayaads.com/Categories' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Thaya Ads Categories (thayaads) | Advertising & Media Services",
        "alternateName": "Thayaads Categories",
        "url": "https://thayaads.com/Categories",
        "description": "Explore service categories at Thaya Ads (thayaads) including commercials, corporate films, documentaries, animation, and branding projects.",

        "publisher": {
          "@type": "Organization",
          "name": "Thaya Ads",
          "alternateName": "thayaads",
          "url": "https://thayaads.com/",
          "logo": "https://thayaads.com/images/og-home.jpg",
          "image": "https://thayaads.com/images/og-home.jpg",

          "address": {
            "@type": "PostalAddress",
            "streetAddress": "School of MIRI PIRI, Puyula Nagar, Korampallam",
            "addressLocality": "Thoothukudi",
            "addressRegion": "Tamil Nadu",
            "postalCode": "628101",
            "addressCountry": "IN"
          },

          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-9841115673",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["Tamil", "English"]
            },
            {
              "@type": "ContactPoint",
              "telephone": "+91-9444305673",
              "contactType": "sales",
              "areaServed": "IN",
              "availableLanguage": ["Tamil", "English"]
            }
          ],

          "sameAs": [
            "https://www.facebook.com/thayaads",
            "https://www.instagram.com/thayaads",
            "https://www.linkedin.com/company/thayaads",
            "https://x.com/Thayaads"
          ]
        }
      })
    }
  ]
})




</script>

<style scoped>
/*
  The `play-button` styles remain, ensuring it is always visible on mobile/tablet 
  (screens less than 1024px) for easy tapping.
*/
.play-button {
  @apply cursor-pointer;
}
@media (max-width: 1023px) {
  /* Mobile: always show */
  .play-button {
    opacity: 1 !important;
  }
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
