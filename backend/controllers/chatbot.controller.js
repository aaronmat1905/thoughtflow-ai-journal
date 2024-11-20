import { generateResponse } from '../chat.js';

// In-memory chat history
const chatHistory = [];

export const handleChatRequest = async (req, res) => {
  const { userInput } = req.body; // Expecting user input from request body

  if (!userInput || typeof userInput !== 'string') {
    return res.status(400).json({ error: 'Invalid input. Please provide a valid string.' });
  }

  try {
    const apiKey = process.env.API_KEY; // Get the API key from environment variables
    const responseText = await generateResponse(userInput, apiKey);
    
    // Add user input and bot response to chat history
    chatHistory.push({ sender: 'User ', content: userInput });
    chatHistory.push({ sender: 'Bot', content: responseText });

    // Return chat history along with the latest response
    res.json({ response: responseText, chatHistory });
  } catch (error) {
    console.error("Error in handleChatRequest:", error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
};