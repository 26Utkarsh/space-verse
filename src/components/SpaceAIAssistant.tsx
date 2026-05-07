import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, User, Loader2, Maximize2, Minimize2 } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { finalBaseUrl } from '../services/api';

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
};

export default function SpaceAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-msg",
      role: 'model',
      text: "Initiating comms link... 🚀 Welcome aboard, commander! I'm AstroAI, your personal AI for all things cosmic. From the latest Mars rovers and deep space telemetry, to upcoming missions like LUPEX—systems are nominal and ready for your command. What's on your radar today?",
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<string | null>(null); // To store the sessionId

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle sending message
  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userText }]);
    setIsTyping(true);

    try {
      // Initialize the chat if it hasn't been already
      if (!chatRef.current) {
         chatRef.current = Date.now().toString();
      }

      const response = await fetch(`${finalBaseUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userText, sessionId: chatRef.current })
      });

      if (!response.ok || !response.body) {
         throw new Error('Chat API returned an error');
      }
      
      let fullText = "";
      const modelMessageId = Date.now().toString() + "_model";
      
      // Initialize the empty model message
      setMessages(prev => [...prev, { id: modelMessageId, role: 'model', text: "" }]);
      
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');

      // We will parse the stream and update the message
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        fullText += decoder.decode(value, { stream: true });
        setMessages(prev => 
          prev.map(msg => 
            msg.id === modelMessageId ? { ...msg, text: fullText } : msg
          )
        );
      }

    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: "Houston, we have a problem... My quantum relay to the Gemini servers failed. Let's try that again later!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.5)] flex items-center justify-center border border-[#00f0ff]/30 overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-[#00f0ff]/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md rounded-full"></div>
            <Sparkles className="absolute top-2 right-2 w-3 h-3 text-[#00f0ff] animate-pulse" />
            <Bot className="w-6 h-6 relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed z-50 flex flex-col bg-[#050508]/95 backdrop-blur-xl border border-slate-800 shadow-2xl overflow-hidden transition-all duration-300 ${
              isExpanded 
                ? 'inset-4 rounded-3xl' 
                : 'bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] rounded-2xl'
            }`}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/10 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-[#00f0ff]/50 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-[#00f0ff]" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#050508]"></span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-2">
                    Astro<span className="text-[#00f0ff]">AI</span>
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Online & Operational</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-1.5 rounded-lg"
                  title={isExpanded ? "Minimize" : "Expand"}
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-1.5 rounded-lg"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-blue-500/20 border border-[#00f0ff]/30 text-[#00f0ff]'}`}>
                    {msg.role === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                  </div>
                  
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                      msg.role === 'user' 
                        ? 'bg-indigo-600 text-white rounded-br-sm' 
                        : 'bg-[#12121a] border border-slate-800 text-slate-200 rounded-bl-sm [&_a]:text-[#00f0ff] [&_a]:underline'
                    }`}
                  >
                    <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-[#0a0a0f] prose-pre:border prose-pre:border-slate-800 text-sm">
                      <Markdown remarkPlugins={[remarkGfm]}>{msg.text}</Markdown>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-end gap-2 flex-row">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-[#00f0ff]/30 flex items-center justify-center flex-shrink-0">
                    <Loader2 className="w-3 h-3 text-[#00f0ff] animate-spin" />
                  </div>
                  <div className="bg-[#12121a] border border-slate-800 text-slate-400 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                     <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                     <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                     <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-[#0a0a0f] border-t border-slate-800">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about missions, space news..."
                  className="w-full bg-[#12121a] border border-slate-800 focus:border-indigo-500/50 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors font-mono"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 p-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white rounded-lg transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
