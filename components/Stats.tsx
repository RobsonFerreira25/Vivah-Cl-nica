
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '5000+', label: 'Pacientes Atendidos' },
    { value: '10+', label: 'Anos de Tradição' },
    { value: '15+', label: 'Especialidades' },
    { value: '100%', label: 'Comprometimento' },
  ];

  return (
    <section className="bg-brand-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center ${i !== stats.length - 1 ? 'md:border-r md:border-white/10' : ''}`}>
              <p className="text-primary text-5xl font-light mb-3">{stat.value}</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-black">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
