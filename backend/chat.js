import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

// Load environment variables
// dotenv.config();

// Retrieve API key securely
const API_KEY = "XXXXXXX";
if (!API_KEY) {
  throw new Error("API key not found. Please set the GeminiAPI environment variable.");
}

// Initialize Google Generative AI
const googleAI = new GoogleGenerativeAI(API_KEY);

// Configuration for the model
const geminiConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 4096,
};

// Get the generative model
const geminiModel = googleAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  ...geminiConfig, // Spread the config into the model configuration
});

// Chat history
let chatHistory = [];

// Add a message to the chat history
const addHistory = (sender, content) => {
  chatHistory.push({ sender, content });
};

// Generate a response using the generative model
const generateResponse = async (prompt) => {
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

// Export the response generator and chat history
export { generateResponse, chatHistory };
