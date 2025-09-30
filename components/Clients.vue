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
            <!-- Columns: 2 on mobile, 3 on tablet, 4 on desktop -->
            <!-- Added border-t/b to visually separate this section -->
            <div
                class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center border-t border-b py-8 border-gray-200">

                <div v-for="(client, index) in clientLogos" :key="index"
                    class="w-full max-w-[200px] h-[100px] flex items-center justify-center p-3 rounded-lg 
                           transition-all duration-500 cursor-pointer">

                    <a :href="client.url" target="_blank" rel="noopener noreferrer"
                        class="w-full h-full flex items-center justify-center">
                        <img 
                            :src="getPlaceholderImage(client.name)" 
                            :alt="client.name + ' logo'"
                            class="max-w-full max-h-full object-contain 
                                   grayscale opacity-50 
                                   transition-all duration-500 
                                   hover:grayscale-0 hover:opacity-100 hover:scale-[1.05]"
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
    logoUrl: string; // Placeholder for the real image path
    url: string; // Placeholder for the client website/case study link
}

const clientLogos = ref<ClientLogo[]>([
    { name: 'Pothys', logoUrl: '/logos/pothys.svg', url: '#' },
    { name: 'Chennai Silks', logoUrl: '/logos/chennai_silks.svg', url: '#' },
    { name: 'Saravana Stores', logoUrl: '/logos/saravana_stores.svg', url: '#' },
    { name: 'SKTM', logoUrl: '/logos/sktm.svg', url: '#' },
    { name: 'Aachi Masala', logoUrl: '/logos/aachi.svg', url: '#' },
    { name: 'Balar Murugan', logoUrl: '/logos/balar_murugan.svg', url: '#' },
    { name: 'Kalyan Jewellers', logoUrl: '/logos/kalyan.svg', url: '#' },
    { name: 'Tanishq', logoUrl: '/logos/tanishq.svg', url: '#' },
    { name: 'Tata Motors', logoUrl: '/logos/tata_motors.svg', url: '#' },
    { name: 'Apollo Hospitals', logoUrl: '/logos/apollo.svg', url: '#' },
]);

// Helper function to provide placeholders until you add real URLs
const getPlaceholderImage = (name: string): string => {
    // Generates a placeholder image using placehold.co
    return `https://placehold.co/200x100/E5E7EB/1D1860?text=${encodeURIComponent(name.split(' ')[0])}`;
};

</script>

<style scoped>
/* No additional styles needed as Tailwind handles the grid and responsiveness */
</style>
