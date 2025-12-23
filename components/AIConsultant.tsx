
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Sparkles, Loader2, Info } from 'lucide-react';
import { getCounselorResponse } from '../services/geminiService';
import { Message } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi there! I'm your EduGlide Student Advisor. Thinking about studying abroad? I'm here to answer your questions about universities, visas, and more. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getCounselorResponse(userMessage, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all flex items-center space-x-2 group scale-110"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-bold text-sm pr-2">Chat with an Advisor</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white w-[380px] h-[550px] rounded-[2rem] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 fade-in duration-300 origin-bottom-right">
          <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Student Success Bot</h4>
                <p className="text-[10px] text-blue-100 opacity-80 uppercase tracking-widest font-bold">Online & Helpful</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] space-x-2 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-blue-100' : 'bg-white'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-blue-600" /> : <Sparkles className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'}`}>
                    {msg.text.split('\n').map((line, idx) => (
                      <p key={idx} className={idx > 0 ? 'mt-2' : ''}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                  <span className="text-[10px] text-slate-400 font-bold">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                type="text" 
                className="w-full bg-slate-50 border border-slate-200 rounded-full px-5 py-3 pr-12 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm outline-none" 
                placeholder="Ask me anything..."
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-1.5 bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 disabled:opacity-30 transition-all shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-center space-x-1 mt-2">
              <Info className="w-3 h-3 text-slate-400" />
              <p className="text-[9px] text-slate-400 font-medium">For complex profiles, book a human advisor!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
