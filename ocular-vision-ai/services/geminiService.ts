
import { GoogleGenAI, Type } from "@google/genai";
import { GeminiAura } from "../types";

export const analyzeAura = async (base64Image: string): Promise<GeminiAura> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          parts: [
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: base64Image,
              },
            },
            {
              text: `Look at the user's eyes and expression in this frame. 
              Based on their gaze intensity and facial micro-expressions, create a mystical "Neural Aura" profile. 
              Return a JSON object with:
              - title: A short cool name for the aura (e.g., "Liquid Shadow", "Starbound Wanderer")
              - color: A hex color code that represents this energy
              - description: A poetic 1-sentence description of what their current gaze reveals about their soul.`,
            },
          ],
        },
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            color: { type: Type.STRING },
            description: { type: Type.STRING },
          },
          required: ["title", "color", "description"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return result as GeminiAura;
  } catch (error) {
    console.error("Gemini analysis failed:", error);
    return {
      title: "Primal Energy",
      color: "#3b82f6",
      description: "A mysterious and uncalculated potential radiates from within the ocular core."
    };
  }
};
