<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-50/90 backdrop-blur-sm">
    <div class="flex flex-col items-center">
      <!-- Simple Tailwind CSS Spinner -->
      <div class="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p class="text-lg font-semibold text-gray-700">Welcome to Thaya Ads </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for this component.
</script>

<style scoped>
/* Optional: ensures the spinner is centered and covers everything */
.fixed.inset-0 {
  height: 100vh;
}
</style>
