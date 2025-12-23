
import { GoogleGenAI } from "@google/genai";

export const getCounselorResponse = async (userMessage: string, history: {role: 'user' | 'model', parts: {text: string}[]}[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `You are the 'EduGlide Student Success Advisor'. 
        Your goal is to help students navigate their international education journey. 
        Be professional, encouraging, and clear. Avoid overly heavy legal or corporate jargon.
        Focus on:
        1. Simplfying complex university admission steps.
        2. Explaining visa requirements in easy-to-understand terms.
        3. Providing guidance on scholarships and test prep.
        Keep responses structured but warm. 
        Always invite the student to book a free personal session for a deeper profile check.`,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "I'm having a little trouble connecting. Please feel free to reach out to our team directly!";
  } catch (error) {
    console.error("Advisory System Error:", error);
    return "The assistant is temporarily offline. Please use the contact form below to get in touch with our expert advisors.";
  }
};
