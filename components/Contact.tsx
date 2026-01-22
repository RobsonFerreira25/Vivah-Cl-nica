
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="agendamento" className="py-24 bg-brand-black relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white overflow-hidden flex flex-col lg:grid lg:grid-cols-12 shadow-2xl">
          <div className="lg:col-span-5 bg-brand-black p-16 md:p-24 text-white flex flex-col justify-center relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.6em] mb-10 block">Inicie seu Cuidado</span>
            <h2 className="text-4xl md:text-6xl font-light mb-10 uppercase tracking-tighter leading-[0.9]">
              Agende sua <br />
              <span className="font-black italic text-primary">Experiência</span>
            </h2>
            
            <p className="text-gray-400 text-sm mb-16 leading-relaxed max-w-sm font-medium">
              Deixe seus dados e um de nossos especialistas entrará em contato para agendar o melhor horário para você.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 border border-primary/20 flex items-center justify-center">
                   <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <span className="text-sm font-black tracking-[0.2em]">(17) 3422-0000</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 border border-primary/20 flex items-center justify-center">
                   <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <span className="text-sm font-black tracking-[0.2em]">Votuporanga, SP</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 p-16 md:p-24 bg-white">
            <form className="space-y-12">
              <div className="relative group">
                <label className="block text-[10px] font-black mb-4 uppercase tracking-[0.3em] text-brand-black">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Seu nome"
                  className="w-full bg-transparent border-0 border-b border-clinical-border p-0 pb-4 focus:ring-0 focus:border-primary transition-all text-sm font-medium placeholder:text-gray-300"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="relative">
                  <label className="block text-[10px] font-black mb-4 uppercase tracking-[0.3em] text-brand-black">WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="(00) 00000-0000"
                    className="w-full bg-transparent border-0 border-b border-clinical-border p-0 pb-4 focus:ring-0 focus:border-primary transition-all text-sm font-medium placeholder:text-gray-300"
                  />
                </div>
                <div className="relative">
                  <label className="block text-[10px] font-black mb-4 uppercase tracking-[0.3em] text-brand-black">Especialidade</label>
                  <select className="w-full bg-transparent border-0 border-b border-clinical-border p-0 pb-4 focus:ring-0 focus:border-primary transition-all text-sm font-black appearance-none cursor-pointer">
                    <option>Clínico Geral</option>
                    <option>Cardiologia</option>
                    <option>Dermatologia</option>
                    <option>Ginecologia</option>
                  </select>
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-brand-black text-white py-6 font-black text-xs uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-xl hover:shadow-primary/20"
              >
                Solicitar Atendimento
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
