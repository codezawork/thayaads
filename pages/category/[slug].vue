<template>
  <div class="bg-[#0f172a] min-h-screen text-gray-900">
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <section class="relative w-full h-[30vh] md:h-[50vh] overflow-hidden">
      <img v-if="categoryData?.image" :src="categoryData.image" :alt="categoryData.name"
        class="absolute inset-0 w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-black/20"></div>

      <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4">{{ categoryData?.name }}</h1>
        <p class="text-lg md:text-xl max-w-2xl opacity-90">
          Explore our amazing projects in the {{ categoryData?.name }} category
        </p>
      </div>
    </section>

    <!-- Video Grid -->
    <section class="py-12 md:py-16 px-4 lg:px-12 max-w-screen-2xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-white">Projects</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="video in categoryData?.videos" :key="video.id"
          class="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all">

          <div class="relative aspect-video">
            <iframe :src="`https://www.youtube.com/embed/${video.id}`" :title="video.title" frameborder="0"
              allowfullscreen class="w-full h-full">
            </iframe>
          </div>

          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold text-gray-900">{{ video.title }}</h3>
          </div>
        </div>
      </div>
    </section>

    

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { useSeoMeta, useHead } from '#imports'
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import categories from '~/data/categories.js'

const route = useRoute()

const slug = computed(() => String(route.params.slug || ''))

// ✅ Lookup category safely
const categoryData = computed(() => {
  return categories[slug.value] || {
    name: 'Category not found',
    description: 'Creative advertising projects by Thaya Ads.',
    image: 'https://thayaads.com/images/default-banner.jpg',
    videos: []
  }
})

// ✅ Store last visited category (client only)
onMounted(() => {
  if (process.client && slug.value) {
    sessionStorage.setItem('lastCategory', slug.value)
  }
})

// ✅ SEO (Reactive & SSR Friendly)
useSeoMeta(() => {
  const title = `${categoryData.value.name} | Thaya Ads`
  const desc =
    categoryData.value.description ||
    `Explore ${categoryData.value.name} projects from Thaya Ads (Thayaads).`
  const image =
    categoryData.value.image || 'https://thayaads.com/images/default-banner.jpg'
  const url = `https://thayaads.com/category/${slug.value}`

  return {
    title,
    description: desc,
    ogTitle: title,
    ogDescription: desc,
    ogImage: image,
    ogUrl: url,
    twitterCard: 'summary_large_image'
  }
})

// ✅ Canonical + Structured Data
useHead(() => {
  const url = `https://thayaads.com/category/${slug.value}`

  return {
    link: [{ rel: 'canonical', href: url }],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": `${categoryData.value.name} | Thaya Ads`,
          "alternateName": `Thayaads ${categoryData.value.name}`,
          "url": url,
          "description":
            categoryData.value.description ||
            `Explore ${categoryData.value.name} projects from Thaya Ads (Thayaads).`,
          "publisher": {
            "@type": "Organization",
            "name": "Thaya Ads",
            "alternateName": "Thayaads",
            "url": "https://thayaads.com/",
            "logo": "https://thayaads.com/images/og-home.jpg",
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
                "contactType": "customer service"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+91-9444305673",
                "contactType": "sales"
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
  }
})
</script>
