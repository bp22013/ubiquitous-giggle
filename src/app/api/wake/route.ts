"use server";

export async function POST() {
    const esp32Url = process.env.WOLPass as string;
  
    try {
      const res = await fetch(esp32Url, {
        method: "POST",
      });
  
      const text = await res.text();
      return new Response(JSON.stringify({ message: text }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("ESP32 request failed", err);
      return new Response(JSON.stringify({ error: "Failed to reach ESP32" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  