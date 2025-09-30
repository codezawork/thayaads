<template>
    <!-- Desktop Social Sidebar -->
    <div v-show="showSocial" class="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div class="flex flex-col space-y-3 p-2 bg-transparent">
            <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer"
                :aria-label="link.ariaLabel" :class="[
                    'text-3xl',
                    link.colorClass,
                    'transition-transform duration-300 hover:scale-[1.8] hover:text-4xl transform origin-left'
                ]">
                <font-awesome-icon :icon="['fab', link.icon]" />
            </a>
        </div>
    </div>

    <!-- Mobile Bottom Bar -->
    <div v-show="showSocial"
        class="fixed bottom-0 left-0 right-0 z-50 md:hidden shadow-2xl bg-white/95 backdrop-blur-sm border-t border-gray-200">
        <div class="flex justify-around items-center py-3">
            <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer"
                :aria-label="link.ariaLabel" :class="[
                    'text-3xl',
                    link.colorClass,
                    'transition-transform duration-300 hover:scale-[1.5]'
                ]">
                <font-awesome-icon :icon="['fab', link.icon]" />
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const socialLinks = ref([
    { name: 'Facebook', url: 'https://www.facebook.com/thayaads/', icon: 'facebook-f', colorClass: 'text-[#1877F2]', ariaLabel: 'Follow us on Facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com/thayaads/', icon: 'instagram', colorClass: 'text-[#E1306C]', ariaLabel: 'Follow us on Instagram' },
    { name: 'X', url: '#', icon: 'x-twitter', colorClass: 'text-gray-900', ariaLabel: 'Follow us on X' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin-in', colorClass: 'text-[#0A66C2]', ariaLabel: 'Connect with us on LinkedIn' },
    { name: 'YouTube', url: '#', icon: 'youtube', colorClass: 'text-[#FF0000]', ariaLabel: 'Subscribe to our YouTube channel' },
    { name: 'Whatsapp', url: 'https://wa.me/918056305232', icon: 'square-whatsapp', colorClass: 'text-[#25D366]', ariaLabel: 'Chat with us on WhatsApp' },
]);

const showSocial = ref(true);
let observer;

onMounted(() => {
    const elementsToObserve = ['#intro', '#main-footer'];

    const nodes = elementsToObserve
        .map(id => document.querySelector(id))
        .filter(Boolean);

    if (nodes.length) {
        observer = new IntersectionObserver(
            (entries) => {
                // Hide Social if ANY observed element is visible
                showSocial.value = !entries.some(entry => entry.isIntersecting);
            },
            { threshold: 0.01 }
        );

        nodes.forEach(node => observer.observe(node));
    }
});

onUnmounted(() => {
    if (observer) observer.disconnect();
});
</script>
