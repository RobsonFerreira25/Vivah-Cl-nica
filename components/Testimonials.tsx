
import React from 'react';
import { IMAGES, ICONS } from '../constants';

const Testimonials: React.FC = () => {
  // Use a local variable for the component to resolve TS issues with the 'key' prop in loops
  const StarIcon = ICONS.Star;

  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'Paciente Premium',
      text: '"Atendimento impecável e ambiente extremamente sofisticado. O cuidado do médico superou todas as minhas expectativas."',
      image: IMAGES.TESTIMONIALS[0]
    },
    {
      name: 'Carlos Oliveira',
      role: 'Paciente Fidelizado',
      text: '"A modernidade da clínica aliada à pontualidade britânica me impressionou. Recomendo para quem busca o melhor."',
      image: IMAGES.TESTIMONIALS[1]
    },
    {
      name: 'Marina Souza',
      role: 'Check-up Preventivo',
      text: '"Fiz meu check-up completo e o detalhismo da equipe é louvável. Sem dúvida a melhor clínica da região."',
      image: IMAGES.TESTIMONIALS[2]
    }
  ];

  return (
    <section id="depoimentos" className="py-32 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-[0.5em] mb-6 block">Experiências</span>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Vozes de Nossos Pacientes</h2>
          </div>
          <div className="flex items-center gap-4 bg-white px-8 py-4 border border-primary/10 shadow-sm">
            <StarIcon />
            <span className="text-xs font-black uppercase tracking-[0.2em]">4.9/5 Google Reviews</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-12 border border-clinical-border relative hover:shadow-2xl transition-all duration-500">
              <span className="text-primary/10 text-8xl font-serif absolute top-4 right-10">"</span>
              <div className="flex gap-1 mb-8">
                {[1,2,3,4,5].map(s => <StarIcon key={s} />)}
              </div>
              <p className="text-brand-black text-sm leading-relaxed mb-10 font-medium italic">
                {t.text}
              </p>
              <div className="flex items-center gap-5">
                <img src={t.image} alt={t.name} className="w-14 h-14 object-cover grayscale border border-clinical-border" />
                <div>
                  <p className="font-black text-xs uppercase tracking-widest">{t.name}</p>
                  <p className="text-[10px] text-primary font-black uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
