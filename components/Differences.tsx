
import React from 'react';
import { ICONS } from '../constants';

const Differences: React.FC = () => {
  const cards = [
    {
      icon: <ICONS.Heart />,
      title: 'Atendimento Humanizado',
      description: 'O acolhimento é o pilar central da nossa clínica. Tratamos cada paciente com a exclusividade e o respeito que a vida exige.'
    },
    {
      icon: <ICONS.Calendar />,
      title: 'Agendamento Ágil',
      description: 'Respeitamos o seu tempo. Nosso sistema de agendamento é otimizado para oferecer horários que se adaptam à sua rotina.'
    },
    {
      icon: <ICONS.Premium />,
      title: 'Excelência Técnica',
      description: 'Corpo clínico rigorosamente selecionado, formado pelas melhores instituições e em constante atualização científica.'
    }
  ];

  return (
    <section id="beneficios" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-28">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.5em] mb-6 block">Diferenciais</span>
          <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Por que escolher a Vivah?</h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className={`p-16 border-clinical-border transition-all duration-700 hover:bg-brand-black hover:text-white group border-t md:border-t-0 ${
                i === 1 ? 'md:border-x' : ''
              }`}
            >
              <div className="mb-10 block transform group-hover:-translate-y-2 transition-transform duration-500">
                {card.icon}
              </div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-widest leading-tight">{card.title}</h3>
              <p className="text-clinical-muted group-hover:text-gray-400 leading-relaxed text-sm font-medium">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differences;
