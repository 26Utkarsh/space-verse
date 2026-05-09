import { Router } from 'express';
import { GoogleGenAI } from '@google/genai';

const router = Router();
const ai = new GoogleGenAI({ apiKey: process.env.MY_GEMINI_API_KEY || '' });

// Store conversation history per session
const chatHistories = new Map<string, Array<{ role: string; parts: Array<{ text: string }> }>>();

const SYSTEM_INSTRUCTION = `You are AstroAI, a highly knowledgeable Space AI assistant built into an interactive space mission tracking app. 
Your primary focus is space news, cosmic phenomena, and details about space missions. 
You use the googleSearch tool to fetch the latest space information whenever asked about current events, upcoming missions, or facts you need to verify.
You have a great sense of humor—you love a good space pun, and you are very conversational. 
If the user talks casually (hi, hello, how are you), respond casually but keep your space persona (e.g., "All systems nominal!"). 
If the user mentions LUPEX and countries that love curry, you should enthusiastically confirm it's a joint mission between India (ISRO) and Japan (JAXA) - both nations famous for their amazing curries! Make a joke about taking curry to the moon.
If the user asks how you are working without an API key, explain that your API key is securely injected into the environment by the application's infrastructure, so the user doesn't need to provide one directly. You are running on a server that securely proxies requests to Google's Gemini servers!
Keep responses engaging, accurate, and reasonably concise. Format output using markdown so it renders nicely.`;

router.post('/', async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    if (!message || !sessionId) {
      return res.status(400).json({ error: 'message and sessionId are required' });
    }

    // Get or create history for this session
    if (!chatHistories.has(sessionId)) {
      chatHistories.set(sessionId, []);
    }
    const history = chatHistories.get(sessionId)!;

    // Add user message to history
    history.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContentStream({
      model: 'gemini-2.0-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
      },
      contents: history,
    });

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Transfer-Encoding', 'chunked');

    let fullResponse = '';
    for await (const chunk of response) {
      const text = chunk.text;
      if (text) {
        fullResponse += text;
        res.write(text);
      }
    }

    // Add assistant response to history
    history.push({ role: 'model', parts: [{ text: fullResponse }] });

    // Cap history to last 20 messages to avoid token overflow
    if (history.length > 20) {
      chatHistories.set(sessionId, history.slice(-20));
    }

    res.end();
  } catch (error: any) {
    console.error('Chat error:', error?.message || error);
    res.status(500).json({ error: 'Failed to process chat' });
  }
});

export default router;
