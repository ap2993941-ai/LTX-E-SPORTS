import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import { GoogleGenAI, type Chat } from '@google/genai';
import type { ChatMessage } from '../types';
import { systemInstruction } from '../constants';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hello! I'm LTX CHAT BOT. How can I help you with the LTX E-SPORTS app today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<Chat | null>(null);

  useEffect(() => {
    const initializeChat = () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        const chat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction,
          },
        });
        chatRef.current = chat;
      } catch (error) {
        console.error("Failed to initialize chat:", error);
        setMessages(prev => [...prev, { role: 'model', content: "Sorry, I couldn't start our chat session. Please try refreshing the page." }]);
      }
    };
    if (isOpen && !chatRef.current) {
        initializeChat();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading || !chatRef.current) return;

    const userMessage: ChatMessage = { role: 'user', content: inputValue.trim() };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue.trim();
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: currentInput });
      const botMessage: ChatMessage = { role: 'model', content: response.text };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error with Gemini API:', error);
      const errorMessage: ChatMessage = { role: 'model', content: 'Sorry, I am having trouble connecting. Please try again later.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-black btn-glow text-3xl"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50 w-[90vw] max-w-sm h-[60vh] max-h-[500px] bg-slate-900/80 backdrop-blur-md rounded-lg border border-cyan-400/30 flex flex-col shadow-2xl shadow-cyan-500/20">
          {/* Header */}
          <div className="p-4 border-b border-cyan-400/20 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <FaRobot className="text-cyan-400 text-2xl text-glow" />
              <h3 className="font-bold text-lg text-glow">LTX CHAT BOT</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <FaTimes size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 overflow-y-auto">
            <div className="flex flex-col gap-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-end gap-2 max-w-[85%] ${
                    msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'
                  }`}
                >
                  <div
                    className={`p-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-cyan-600/50 rounded-br-none'
                        : 'bg-slate-700/50 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm text-white">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="self-start flex items-end gap-2">
                    <div className="p-3 rounded-2xl bg-slate-700/50 rounded-bl-none">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-75"></span>
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150"></span>
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></span>
                        </div>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-cyan-400/20 flex-shrink-0">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about the app..."
                className="flex-grow bg-slate-800/70 border border-cyan-400/20 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-black btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading || !inputValue.trim()}
                aria-label="Send Message"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;