import { GoogleGenerativeAI } from "@google/generative-ai";

// Chat history
let chatHistory = [];


const generateResponse = async (prompt) => {
  const API_KEY = process.env.GeminiAPI;
  const googleAI = new GoogleGenerativeAI(API_KEY);
  if (!API_KEY) {
    throw new Error("API key not found. Please set the GeminiAPI environment variable.");
  }

  const geminiConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 1,
    maxOutputTokens: 4096,
  };


  const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    ...geminiConfig,
  });

  const addHistory = (sender, content) => {
    chatHistory.push({ sender, content });
  };
  try {
    const result = await geminiModel.generateContent(prompt);

    // Debugging raw API response
    console.log("Raw API Response:", result);

    // Ensure candidates exist
    if (result?.candidates?.length > 0) {
      const responseText = result.candidates[0]?.text || "No text available in response.";
      
      console.log("Processed Response Text:", responseText);

      // Update chat history
      addHistory("User", prompt);
      addHistory("Bot", responseText);

      return responseText;
    } else {
      console.error("No candidates found in API response.");
      return "The AI could not generate a response. Please try again.";
    }
  } catch (error) {
    console.error("Error in generateResponse:", error);
    return "An error occurred while generating a response. Please try again.";
  }
};

export { generateResponse, chatHistory };