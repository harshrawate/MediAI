import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatPanel({ product, disabled }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I've analyzed this product. Do you have any questions about its ingredients or health impact?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Reset chat when a new product is analyzed
  useEffect(() => {
    if (product?.productName) {
      setMessages([
        { role: 'assistant', content: `Hi! I've analyzed ${product.productName}. Do you have any questions about its ingredients or health impact?` }
      ]);
    }
  }, [product?.productName]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping || disabled) return;

    const userMessage = input.trim();
    console.log('Sending message:', userMessage, 'for product:', product?.productName);
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product, message: userMessage })
      });

      const data = await response.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        throw new Error('No reply');
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] lg:h-full bg-white/80 backdrop-blur-md border border-sky-200/50 rounded-3xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-sky-100 bg-sky-50/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-sky-950">AI Product Assistant</h3>
          <p className="text-[10px] text-sky-500 font-medium uppercase tracking-wider">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-sky-600 text-white rounded-tr-none' 
                  : 'bg-white border border-sky-100 text-sky-900 rounded-tl-none'
              }`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white border border-sky-100 p-3 rounded-2xl rounded-tl-none shadow-sm">
                <Loader2 className="w-4 h-4 text-sky-400 animate-spin" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t border-sky-100">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={disabled || isTyping}
            placeholder={disabled ? "Analyze a product first..." : "Ask me anything..."}
            className="w-full pl-4 pr-12 py-3 bg-sky-50 border border-sky-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-300 transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping || disabled}
            className="absolute right-2 top-1.5 w-9 h-9 flex items-center justify-center bg-sky-600 text-white rounded-xl hover:bg-sky-700 disabled:opacity-40 disabled:hover:bg-sky-600 transition-all shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
