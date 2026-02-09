import React, { useState, useRef, useEffect } from 'react';
import { getWebsiteAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Bienvenido a VentaFlow IA! Soy tu asesor virtual. Te ofrecemos 10 días de prueba gratis. ¿En qué nicho te gustaría destacar hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [firstResponseDone, setFirstResponseDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const aiLogoUrl = "https://files.oaiusercontent.com/file-h5Wst2uCAnFByOqf6Sj6kL?se=2025-02-21T16%3A58%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0355f30e-562a-442a-9289-5360c7f39441.webp&sig=6Y4v8r5/N7R1W8p03K5y%2BT7O1zD0O1K8qL0P8m1o%3D";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const renderTextWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 font-bold underline hover:text-indigo-100 transition-colors break-all"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      let advice = await getWebsiteAdvice(input);
      
      if (!firstResponseDone) {
        advice = (advice || '') + "\n\nPara activar tus 10 días de prueba gratis o consultar por la Web Integral, pulsa aquí 👇\nhttps://wa.link/k90a0j";
        setFirstResponseDone(true);
      }

      setMessages(prev => [...prev, { role: 'model', text: advice || 'Error al obtener respuesta.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, tuve un problema al procesar tu consulta.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-[60] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'w-[calc(100vw-3rem)] sm:w-[380px] h-[75vh] max-h-[600px]' : 'w-14 h-14'}`}>
      {isOpen ? (
        <div className="glass-panel border-white/10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col h-full overflow-hidden">
          <div className="bg-[#0047AB]/20 backdrop-blur-xl p-4 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shadow-lg border border-white/5 overflow-hidden">
                <img 
                  src={aiLogoUrl} 
                  alt="VentaFlow IA" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-[13px] text-white tracking-tight">Asesor VentaFlow IA</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1.5 text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950/30 scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-3.5 rounded-2xl text-[12px] leading-relaxed whitespace-pre-wrap ${m.role === 'user' ? 'bg-[#0047AB] text-white rounded-br-none shadow-lg' : 'bg-slate-800/90 text-slate-200 border border-white/5 rounded-bl-none shadow-md'}`}>
                  {renderTextWithLinks(m.text)}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/90 p-3 rounded-2xl rounded-bl-none border border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-white/5 flex gap-2 bg-slate-900/60">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu consulta..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[12px] focus:ring-1 focus:ring-[#0047AB]/50 outline-none text-white placeholder:text-slate-500"
            />
            <button onClick={handleSend} className="bg-[#0047AB] text-white p-2.5 rounded-xl hover:bg-blue-700 shadow-lg shadow-[#0047AB]/20 transition-all active:scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/40 hover:bg-blue-400 hover:scale-110 active:scale-90 transition-all duration-300 group relative"
          aria-label="Abrir Chat de Asistencia"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-950 animate-pulse"></div>
        </button>
      )}
    </div>
  );
};

export default AIConsultant;