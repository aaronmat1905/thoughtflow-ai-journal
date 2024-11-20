import { GoogleGenerativeAI } from "@google/generative-ai";

const generateResponse = async (userInput) => {
  const googleAI = new GoogleGenerativeAI(process.env.GeminiAPI);
  const geminiConfig = {
    temperature: 0.7,
    maxOutputTokens: 2048,
  };

  const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-pro",
    geminiConfig,
  });
//gemini-1.5-flash
  try {
    const promptTemplate = `You are a mental health assistant. 
  :User  ${userInput}
  Assistant:`;

    const result = await geminiModel.generateContent({
      contents: [{ role: "user", parts: [{ text: promptTemplate }] }],
    });

    const response = await result.response;
    return response.text(); // Return the generated text response
  } catch (error) {
    console.error("Error generating response:", error);
    throw new Error("Failed to generate response.");
  }
};

export { generateResponse };