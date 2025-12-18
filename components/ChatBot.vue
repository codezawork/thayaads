<template>
  <div aria-hidden="true" class="hidden"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const loadCollectChat = () => {
  // Check if the script is already loaded to prevent duplicates
  if (document.getElementById('collect-chat-script')) return

  // 1. Set the NEW CollectId
  ;(window as any).CollectId = '694442c212dc66f79dc627bc'

  // 2. Create and configure the script element
  const s = document.createElement('script')
  s.id = 'collect-chat-script' // Adding an ID helps us check if it exists later
  s.setAttribute('type', 'text/javascript')
  s.async = true
  s.setAttribute('src', 'https://collectcdn.com/launcher.js')

  // 3. Append to head
  const h = document.head || document.getElementsByTagName('head')[0]
  h.appendChild(s)
}

onMounted(() => {
  loadCollectChat()
})
</script>

<style scoped>
/* Optional: you can adjust widget position using custom CSS overrides */
</style>