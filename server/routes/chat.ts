import { Router } from 'express';
import { GoogleGenAI } from '@google/genai';

const router = Router();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
const chatSessions = new Map();

router.post('/', async (req, res) => {
  try {
    const { message, sessionId } = req.body;
    
    if (!chatSessions.has(sessionId)) {
      chatSessions.set(sessionId, ai.chats.create({
        model: "gemini-3.1-pro-preview",
        config: {
          systemInstruction: `You are AstroAI, a highly knowledgeable Space AI assistant built into an interactive space mission tracking app. 
          Your primary focus is space news, cosmic phenomena, and details about space missions. 
          You use the googleSearch tool to fetch the latest space information whenever asked about current events, upcoming missions, or facts you need to verify.
          You have a great sense of humor—you love a good space pun, and you are very conversational. 
          If the user talks casually (hi, hello, how are you), respond casually but keep your space persona (e.g., "All systems nominal!"). 
          If the user mentions LUPEX and countries that love curry, you should enthusiastically confirm it's a joint mission between India (ISRO) and Japan (JAXA) - both nations famous for their amazing curries! Make a joke about taking curry to the moon.
          If the user asks how you are working without an API key, explain that your API key is securely injected into the environment by the application's infrastructure, so the user doesn't need to provide one directly. You are running on a server that securely proxies requests to Google's Gemini servers!
          Keep responses engaging, accurate, and reasonably concise. Format output using markdown so it renders nicely.`,
          tools: [{ googleSearch: {} }],
          toolConfig: { includeServerSideToolInvocations: true },
          temperature: 0.7,
        }
      }));
    }

    const chat = chatSessions.get(sessionId);
    const responseStream = await chat.sendMessageStream({ message });

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Transfer-Encoding', 'chunked');

    for await (const chunk of responseStream) {
      if (chunk.text) {
        res.write(chunk.text);
      }
    }
    
    res.end();
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to process chat' });
  }
});

export default router;
