
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-clinical-border py-4' : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="flex flex-col group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-2xl font-light tracking-[0.2em] uppercase leading-none text-brand-black">Vivah</span>
          <div className="flex items-center gap-2 mt-0.5">
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Clínica</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-12">
          {['Benefícios', 'Depoimentos', 'Dúvidas'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="text-xs font-bold uppercase tracking-widest text-brand-black hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="#agendamento">
          <button className="bg-brand-black text-white px-8 py-3.5 text-xs font-black uppercase tracking-[0.2em] border border-primary/20 hover:bg-brand-gray transition-all">
            Agendar Consulta
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
