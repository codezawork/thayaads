// composables/categoryData.ts

// Define the shape of a single video entry for type safety
interface Video {
    client_name: string;
    youtube_url: string;
    id: string | null;
}

// Define the shape of a single category for type safety
interface Category {
    name: string;
    coverImage: string;
    videos: Video[];
}

// Helper function to extract the YouTube Video ID from various URL formats
const getYouTubeId = (url: string): string | null => {
    // This regex extracts the 11-character video ID from various URL formats
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

// --- Main Project Data Dictionary ---
// Key is the 'slug' used in the URL, Value is the Category object
export const projects: Record<string, Category> = {
    
    // 1. FOOD Category Data
    'food': {
        name: 'Food',
        coverImage: '/images/covers/food-cover.jpg', 
        videos: [
            {
                client_name: 'Client: Gourmet Burger Joint - Launch Campaign',
                youtube_url: 'https://www.youtube.com/watch?v=R7D0Xf2kG9c',
                id: getYouTubeId('https://www.youtube.com/watch?v=R7D0Xf2kG9c')
            },
            {
                client_name: 'Client: Top-Tier Restaurant Review',
                youtube_url: 'https://www.youtube.com/watch?v=S27Hk2-Y66E',
                id: getYouTubeId('https://www.youtube.com/watch?v=S27Hk2-Y66E')
            },
            {
                client_name: 'Client: Bakery Brand Story - Short Form Ad',
                youtube_url: 'https://youtu.be/n0U960hN900',
                id: getYouTubeId('https://youtu.be/n0U960hN900')
            },
            {
                client_name: 'Client: Quick Recipe Series - Social Media',
                youtube_url: 'https://www.youtube.com/watch?v=8b26388X9hA',
                id: getYouTubeId('https://www.youtube.com/watch?v=8b26388X9hA')
            },
        ]
    },
    
    // 2. EDUCATION Category Data
    'education': {
        name: 'Education',
        coverImage: '/images/covers/education-cover.jpg',
        videos: [
            {
                client_name: 'Client: University - Student Life Promo',
                youtube_url: 'https://www.youtube.com/watch?v=hA_Y2F8_z8o',
                id: getYouTubeId('https://www.youtube.com/watch?v=hA_Y2F8_z8o')
            },
            {
                client_name: 'Client: Online Course Platform Ad',
                youtube_url: 'https://www.youtube.com/watch?v=rfN2G9iY_4k',
                id: getYouTubeId('https://www.youtube.com/watch?v=rfN2G9iY_4k')
            },
            {
                client_name: 'Client: Science Explainer Series - Animated Short',
                youtube_url: 'https://youtu.be/u88j42_I5xI',
                id: getYouTubeId('https://youtu.be/u88j42_I5xI')
            },
            {
                client_name: 'Client: Historical Documentary Trailer',
                youtube_url: 'https://www.youtube.com/watch?v=0hYyQdJ-BqY',
                id: getYouTubeId('https://www.youtube.com/watch?v=0hYyQdJ-BqY')
            },
        ]
    },
    
    // 3. PERSONAL CARE Category Data
    'personal-care': { 
        name: 'Personal Care',
        coverImage: '/images/covers/personal-care-cover.jpg',
        videos: [
            {
                client_name: 'Client: Luxury Skincare Tutorial Ad',
                youtube_url: 'https://www.youtube.com/watch?v=f9d45e6H0Gk',
                id: getYouTubeId('https://www.youtube.com/watch?v=f9d45e6H0Gk')
            },
            {
                client_name: 'Client: Shampoo Brand - Product Launch',
                youtube_url: 'https://www.youtube.com/watch?v=N8Zz3i9W3A4',
                id: getYouTubeId('https://www.youtube.com/watch?v=N8Zz3i9W3A4')
            },
            {
                client_name: 'Client: Wellness Retreat Promotional Video',
                youtube_url: 'https://youtu.be/z6p8H2E-7-k',
                id: getYouTubeId('https://youtu.be/z6p8H2E-7-k')
            },
            {
                client_name: 'Client: Cosmetic Line - Influencer Collaboration',
                youtube_url: 'https://www.youtube.com/watch?v=LpG1y1c77F8',
                id: getYouTubeId('https://www.youtube.com/watch?v=LpG1y1c77F8')
            },
        ]
    },
    
    // 4. TEXTILE & APPARELS Category Data
    'textile-apparels': { 
        name: 'Textile & Apparels',
        coverImage: '/images/covers/textile-cover.jpg',
        videos: [
            {
                client_name: 'Client: Fabric Manufacturing Process',
                youtube_url: 'https://www.youtube.com/watch?v=j38eR9W1wN0',
                id: getYouTubeId('https://www.youtube.com/watch?v=j38eR9W1wN0')
            },
            {
                client_name: 'Client: Sustainable Clothing Documentary Short',
                youtube_url: 'https://www.youtube.com/watch?v=1b5D3S5l87I',
                id: getYouTubeId('https://www.youtube.com/watch?v=1b5D3S5l87I')
            },
            {
                client_name: 'Client: Apparel Brand - Summer Collection Ad',
                youtube_url: 'https://youtu.be/a-B8F-yG63c',
                id: getYouTubeId('https://youtu.be/a-B8F-yG63c')
            },
            {
                client_name: 'Client: Textile Industry Overview',
                youtube_url: 'https://www.youtube.com/watch?v=L2G3X3P1xP0',
                id: getYouTubeId('https://www.youtube.com/watch?v=L2G3X3P1xP0')
            },
        ]
    },
    
    // 5. FASHION & LIFESTYLE Category Data
    'fashion-lifestyle': { 
        name: 'Fashion & Lifestyle',
        coverImage: '/images/covers/fashion-cover.jpg',
        videos: [
            {
                client_name: 'Client: Seasonal Fashion Lookbook',
                youtube_url: 'https://www.youtube.com/watch?v=gYl7vB74D8g',
                id: getYouTubeId('https://www.youtube.com/watch?v=gYl7vB74D8g')
            },
            {
                client_name: 'Client: Travel and Lifestyle Blog Promo',
                youtube_url: 'https://www.youtube.com/watch?v=Tq_Yc242H3U',
                id: getYouTubeId('https://www.youtube.com/watch?v=Tq_Yc242H3U')
            },
            {
                client_name: 'Client: Exclusive Fashion Show Recap',
                youtube_url: 'https://youtu.be/M_qR-2591_Q',
                id: getYouTubeId('https://youtu.be/M_qR-2591_Q')
            },
            {
                client_name: 'Client: Home Decor Brand Promotional Video',
                youtube_url: 'https://www.youtube.com/watch?v=vVj4u-S_k7U',
                id: getYouTubeId('https://www.youtube.com/watch?v=vVj4u-S_k7U')
            },
        ]
    },
    
    // 6. FINANCIAL SERVICE Category Data
    'financial-service': { 
        name: 'Financial Service',
        coverImage: '/images/covers/financial-cover.jpg',
        videos: [
            {
                client_name: 'Client: Investment Firm Explainer Video',
                youtube_url: 'https://www.youtube.com/watch?v=p233777o09I',
                id: getYouTubeId('https://www.youtube.com/watch?v=p233777o09I')
            },
            {
                client_name: 'Client: Banking App Features Tutorial',
                youtube_url: 'https://www.youtube.com/watch?v=eB8r3n4z-7U',
                id: getYouTubeId('https://www.youtube.com/watch?v=eB8r3n4z-7U')
            },
            {
                client_name: 'Client: Retirement Planning Ad Campaign',
                youtube_url: 'https://youtu.be/LqJp1o8c80A',
                id: getYouTubeId('https://youtu.be/LqJp1o8c80A')
            },
            {
                client_name: 'Client: Fintech Startup Promotional Video',
                youtube_url: 'https://www.youtube.com/watch?v=X-8G0F415xQ',
                id: getYouTubeId('https://www.youtube.com/watch?v=X-8G0F415xQ')
            },
        ]
    },
};

// --- Helper function to retrieve data (Use this in pages/category/[slug].vue) ---
export const getCategoryBySlug = (slug: string): Category | null => {
    return projects[slug] || null;
};