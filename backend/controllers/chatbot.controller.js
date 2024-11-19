import express from 'express';
import { generateResponse } from '../chat';

const router = express.Router();

// Function to handle chat requests
async function handleChatRequest(req, res) {
  const { prompt } = req.body;
  try {
    const response = await generateResponse(prompt);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate response' });
  }
}

// Route to handle chat requests
router.post('/chat', handleChatRequest);

export default router;