import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

// const API_KEY = process.env.GeminiAPI;
const googleAI = new GoogleGenerativeAI(API_KEY);

// Configuration for the model
const geminiConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 4096,
};

const geminiModel = googleAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  geminiConfig,
});

let chatHistory = [];

const addHistory = (sender, content) => {
  chatHistory.push({ sender, content });
};

const generateResponse = async (prompt) => {
  try {
    const result = await geminiModel.generateContent(prompt);

    console.log("Raw API Response:", result); // Debugging

    // Ensure candidates exist
    if (result.candidates && result.candidates.length > 0) {
      const firstCandidate = result.candidates[0];
      const responseText = firstCandidate?.text || "No text available in response.";
      console.log("Processed Response Text:", responseText);

      addHistory("User", prompt);
      addHistory("Bot", responseText);

      return responseText;
    } else {
      console.error("No candidates found in API response.");
      return "The AI could not generate a response. Please try again.";
    }
  } catch (error) {
    console.error("Error in generateResponse:", error);
    throw error;
  }
};


export { generateResponse, chatHistory };
