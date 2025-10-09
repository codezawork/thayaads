export default {
  async fetch(request, env, ctx) {


    const value = await env.KV.get('KEY');


    return new Response(
      JSON.stringify({
        value: value,
        allKeys: allKeys,
      }),
    );
  }
}


// i need to fetch values from KV , how to do it ? 