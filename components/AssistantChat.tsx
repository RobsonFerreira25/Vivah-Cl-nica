
import React, { useState, useRef, useEffect } from 'react';
import { askAssistant } from '../services/gemini';

const AssistantChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
        { role: 'assistant', content: 'Olá! Sou o assistente virtual da Vivah Clínica. Como posso ajudar com suas dúvidas iniciais de saúde hoje?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setInput('');
        setIsLoading(true);

        const response = await askAssistant(userMessage);
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        setIsLoading(false);
    };

    return (
        <div className="fixed bottom-10 right-10 z-[200]">
            {/* WhatsApp Button Clone Style */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-primary text-white p-5 shadow-2xl hover:scale-110 transition-transform rounded-none border border-white/20 flex items-center justify-center animate-bounce"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white w-96 max-w-[90vw] h-[500px] shadow-2xl border border-clinical-border flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-500">
                    <div className="bg-brand-black p-6 flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span className="text-xs font-black uppercase tracking-[0.4em]">Vivah Assistente</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-4 text-xs font-medium leading-relaxed ${m.role === 'user'
                                        ? 'bg-primary text-white rounded-none'
                                        : 'bg-white border border-clinical-border text-brand-black rounded-none shadow-sm'
                                    }`}>
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-clinical-border p-4 shadow-sm">
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-75"></div>
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-150"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="p-4 border-t border-clinical-border bg-white flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Sua dúvida..."
                            className="flex-1 bg-gray-50 border border-clinical-border px-4 py-3 text-xs font-medium focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-brand-black text-white px-5 hover:bg-primary transition-colors flex items-center justify-center"
                            disabled={isLoading}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AssistantChat;
