import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_GOOGLE_API_KEY
});

const generateItinerary = async (prompt) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
    }
  });
  return response.candidates[0]?.content?.parts[0]?.text || "No response";
}
export default generateItinerary;
