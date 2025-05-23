import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
      status: 204,
    });
  }

  try {
    // Parse request body
    const requestData = await req.json();
    
    // Call the Zapier webhook
    const response = await fetch("https://hooks.zapier.com/hooks/catch/23001667/270bmm4/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    // Get the response text
    const responseText = await response.text();
    
    // Return the response from Zapier
    return new Response(responseText, {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
      status: response.status,
    });
  } catch (error) {
    console.error("Error proxying to Zapier:", error);
    
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
});