<template>
    <section id="clients" class="py-12 md:py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 md:px-8">

            <!-- Title Area -->
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-3xl md:text-4xl font-extrabold text-[#1D1860] mb-3">
                    Our Valued Clients
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    We've had the privilege of partnering with top brands across various industries.
                </p>
            </div>

            <!-- Responsive Logo Grid -->
            <div
                class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center border-t border-b py-8 border-gray-200">

                <div v-for="(client, index) in clientLogos" :key="index"
                    class="w-full max-w-[280px] h-[140px] flex items-center justify-center p-3 rounded-lg 
                           transition-all duration-500 cursor-pointer">

                    <a :href="client.url" target="_blank" rel="noopener noreferrer"
                        class="w-full h-full flex items-center justify-center">
                        <img 
                            :src="client.logoUrl" 
                            :alt="client.name + ' logo'"
                            class="max-w-full max-h-full object-contain 
                                   transition-all duration-500 
                                   hover:scale-[1.05]" 
                            />
                    </a>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define the type for a client object
interface ClientLogo {
    name: string;
    logoUrl: string; // The URL path relative to the site root (starting with /)
    url: string; // Placeholder for the client website/case study link
}

const clientLogos = ref<ClientLogo[]>([
    { name: 'ajj', logoUrl: '/images/clients/ajj.png', url: '#' },
    { name: 'bro', logoUrl: '/images/clients/bro.png', url: '#' },
    { name: 'ds', logoUrl: '/images/clients/ds.png', url: '#' },
    { name: 'kvp', logoUrl: '/images/clients/kvp.png', url: '#' },
    { name: 'madha', logoUrl: '/images/clients/madha.png', url: '#' },
    { name: 'paati', logoUrl: '/images/clients/paati.png', url: '#' },
    { name: 'pristi', logoUrl: '/images/clients/pristi.png', url: '#' },
    { name: 'saravana', logoUrl: '/images/clients/saravana.png', url: '#' }
]);

</script>

<style scoped>
/* No additional styles needed as Tailwind handles the grid and responsiveness */
</style>
