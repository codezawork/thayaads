// We import the specific types (KVNamespace, ExecutionContext) from the 
// installed Cloudflare types package so TypeScript recognizes them.
import type { KVNamespace, ExecutionContext } from "@cloudflare/workers-types";

// This code assumes you have a KV Namespace Binding named 'THAYA_ADS_KV'.

export interface Env {
    // This variable name MUST match the binding in your Worker settings.
    THAYA_ADS_KV: KVNamespace; 
}

export default {
    async fetch(
        request: Request,
        // The KVNamespace type is now correctly identified via the import
        env: Env, 
        // The ExecutionContext type is now correctly identified via the import
        ctx: ExecutionContext 
    ): Promise<Response> {
        
        if (request.method !== 'GET') {
            return new Response('Method Not Allowed', { status: 405 });
        }

        const GALLERY_KEY = 'gallery';
        
        try {
            // 1. ONE REQUEST TO KV: Get the value (which is a JSON string of all URLs).
            // We use { type: "text" } explicitly, although it's often the default.
            const galleryJson = await env.THAYA_ADS_KV.get(GALLERY_KEY, { cacheTtl: 60 }); 

            if (!galleryJson) {
                console.warn(`[KV] Key '${GALLERY_KEY}' not found in KV.`);
                return new Response(JSON.stringify([]), { status: 200, headers: { 'Content-Type': 'application/json' } });
            }

            // 2. Parse the JSON string into a list of strings (the full URL list).
            const imageUrls: string[] = JSON.parse(galleryJson);

            // 3. Return the FULL list of strings to the client.
            return new Response(JSON.stringify(imageUrls), {
                status: 200,
                headers: { 
                    'Content-Type': 'application/json',
                    // Note: In production, always replace '*' with your client domain (e.g., 'https://your-app.com')
                    'Access-Control-Allow-Origin': '*', 
                },
            });

        } catch (error) {
            console.error('[KV ERROR] Failed to fetch or parse gallery data:', error);
            return new Response(JSON.stringify({ error: 'Internal Server Error.' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    }
}
