import React from "react";

const AImodel = async ({ destination, days, budget, passengers }) => {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const prompt = `
  Generate a JSON object ONLY in the following exact format, without extra text or explanation:

  {
    "famous_locations": [
      { "name": "Location Name", "description": "Short description", "best_time_to_visit": "Month or season" }
    ],
    "trips": [
      { "name": "Trip Name", "activities": ["Activity1", "Activity2"], "time_needed_hours": "Number" }
    ],
    "hotels": [
      { "name": "Hotel Name", "rating": "4.5", "price_per_night": "$100", "location": "City or Area" }
    ]
  }

  The trip is to ${destination} for ${days} days, budget: ${budget}, passengers: ${passengers}.
  `;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_GOOGLE_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await res.json();
    const modelResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

    return JSON.parse(modelResponse);
  } catch (error) {
    console.error("Error fetching from Gemini:", error);
    return {};
  }
};

export default AImodel;
