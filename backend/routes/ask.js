import express from 'express';
import { OpenAI } from 'openai';

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1"
});


console.log(process.env.OPENAI_API_KEY)

router.post('/', async (req, res) => {
  try {
    const { question, language } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Question is required.' });
    }

    const systemPrompt = `You are SetuBot, a helpful legal assistant for Indian citizens. Answer in clear, simple, helpful tone. Answer in ${language || 'Hindi'} if possible.`;

    const completion = await openai.chat.completions.create({
      model: "openrouter/auto",
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: question }
      ],
      temperature: 0.7,
      max_tokens: 512
    });

    const answer = completion.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';
    res.status(200).json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while generating the response.' });
  }
});

export default router;