<template>
  <!-- Hidden container just to hold the script -->
  <div aria-hidden="true" class="hidden"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const loadCollectChat = () => {
  if (document.getElementById('collect-chat-script')) return

  const s = document.createElement('script')
  s.id = 'collect-chat-script'
  s.type = 'text/javascript'
  s.async = true
  s.src = 'https://collectcdn.com/launcher.js'

  // Collect.chat bot ID
  ;(window as any).CollectId = '68e8df169bd297f2618b9270'

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
