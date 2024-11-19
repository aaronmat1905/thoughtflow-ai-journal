const router = express.Router();

router.post('/chat', async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await generateResponse(prompt);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

export default router;