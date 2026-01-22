
import React from 'react';
import { IMAGES, ICONS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-48 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.05),_transparent_40%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary font-bold text-xs uppercase tracking-[0.4em]">Excelência Médica</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-10 text-brand-black">
              Sua saúde cuidada com <br />
              <span className="text-primary italic">humanidade</span> e elegância.
            </h1>

            <p className="text-xl text-clinical-muted mb-12 max-w-lg leading-relaxed font-medium">
              Experiência premium em saúde. Combinamos tecnologia de ponta com um atendimento humanizado para garantir o seu bem-estar e de sua família.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-primary text-white px-12 py-5 font-black text-sm uppercase tracking-[0.2em] hover:bg-primary-dark transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/20">
                Agendar Agora
                <ICONS.Calendar />
              </button>
              <button className="border border-brand-black px-12 py-5 font-black text-sm uppercase tracking-[0.2em] hover:bg-brand-black hover:text-white transition-all">
                Ver Especialidades
              </button>
            </div>

            <div className="mt-16 flex items-center gap-6">
              <div className="flex -space-x-3">
                {IMAGES.DOCTORS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Médico"
                    className="w-12 h-12 rounded-full border-2 border-white object-cover grayscale hover:grayscale-0 transition-all cursor-pointer"
                  />
                ))}
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-clinical-muted">
                +20 Médicos especialistas à disposição
              </span>
            </div>
          </div>

          <div className="relative lg:h-[650px]">
            <div className="absolute inset-0 bg-brand-black/5 -translate-x-4 translate-y-4"></div>
            <div
              className="w-full h-full bg-cover bg-center shadow-2xl relative z-10 border border-clinical-border"
              style={{ backgroundImage: `url(${IMAGES.HERO_LOBBY})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-10 -left-10 bg-white p-10 shadow-2xl border-l-4 border-primary z-20 hidden xl:block animate-float">
              <div className="flex items-center gap-6">
                <ICONS.Verified />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-black text-clinical-muted mb-1.5">Certificação</p>
                  <p className="font-black text-brand-black text-sm uppercase tracking-widest whitespace-nowrap">Padrão Ouro de Atendimento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
