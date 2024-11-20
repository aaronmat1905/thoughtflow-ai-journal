import { GoogleGenerativeAI } from "@google/generative-ai";

// Chat history
let chatHistory = [];

// Function to generate a response using Google Gemini
async function generateResponse(prompt) {
  if (!process.env.GeminiAPI) {
    throw new Error("API key not found. Please set the GeminiAPI environment variable.");
  }
  const googleAI = new GoogleGenerativeAI(process.env.GeminiAPI);

  // Create a simple prompt template
  const promptTemplate = `You are a helpful assistant. 
  User: ${prompt}
  Assistant:`;

  try {
    // Generate the response
    const response = await googleAI.call({
      prompt: promptTemplate,
      maxTokens: 2048,
      stopSequences: ["\n\n"],
      temperature: 0.7,
    });

    // Ensure candidates exist
    if (response?.candidates?.length > 0) {
      const responseText = response.candidates[0]?.text || "No text available in response.";

      // Update chat history
      addHistory("User", prompt);
      addHistory("Bot", responseText);

      return responseText; // Return the generated text
    } else {
      console.error("No candidates found in API response.");
      return "The AI could not generate a response. Please try again.";
    }
  } catch (error) {
    console.error("Error in generateResponse:", error);
    return "An error occurred while generating a response. Please try again.";
  }
}

// Function to add messages to chat history
function addHistory(sender, content) {
  chatHistory.push({ sender, content });
}

export { generateResponse, chatHistory };