
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Quais convênios são aceitos?',
      a: 'Atendemos os principais planos de saúde premium, incluindo Bradesco Saúde (Nacional), SulAmérica, Unimed, Amil One e Porto Seguro. Para planos específicos, favor consultar nossa recepção.'
    },
    {
      q: 'Como realizar o agendamento?',
      a: 'O agendamento pode ser feito de forma prática através do nosso formulário online ou diretamente via WhatsApp. Nossa equipe de concierge entrará em contato prontamente.'
    },
    {
      q: 'Exames laboratoriais são realizados no local?',
      a: 'Sim, contamos com uma unidade de coleta de alto padrão integrada à clínica, proporcionando total comodidade para que você realize seus exames em um só lugar.'
    },
    {
      q: 'Qual o tempo médio de espera?',
      a: 'Prezamos pela pontualidade rigorosa. Trabalhamos com intervalos de consulta que permitem um atendimento sem pressa e sem espera prolongada em sala.'
    }
  ];

  return (
    <section id="duvidas" className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.5em] mb-6 block">Esclarecimentos</span>
          <h2 className="text-4xl font-black uppercase tracking-tighter">Dúvidas Frequentes</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-clinical-border overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-8 text-left group"
              >
                <span className={`text-sm font-black uppercase tracking-widest transition-colors ${openIndex === i ? 'text-primary' : 'text-brand-black'}`}>
                  {faq.q}
                </span>
                <svg 
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-64 pb-8' : 'max-h-0'}`}>
                <p className="text-clinical-muted text-sm leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
