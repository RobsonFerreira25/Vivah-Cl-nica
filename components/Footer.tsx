
import React from 'react';
import { IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-clinical-border pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-28">
          <div className="lg:col-span-1">
            <div className="mb-10">
              <span className="text-2xl font-light tracking-[0.2em] uppercase leading-none block text-brand-black">Vivah</span>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-[1px] w-8 bg-primary"></div>
                <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Clínica</span>
              </div>
            </div>
            <p className="text-clinical-muted text-sm leading-relaxed mb-10 font-medium">
              Referência em saúde humanizada em Votuporanga. Cuidando de gerações com dedicação e excelência técnica.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 border border-clinical-border flex items-center justify-center hover:bg-primary hover:text-white transition-all group">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
              <a href="#" className="w-12 h-12 border border-clinical-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black mb-10 uppercase tracking-[0.4em] text-primary">Links de Acesso</h4>
            <ul className="space-y-6 text-xs font-black uppercase tracking-[0.2em]">
              <li><a href="#" className="hover:text-primary transition-colors">Agendamento</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nossos Médicos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Convênios</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black mb-10 uppercase tracking-[0.4em] text-primary">Informações Legais</h4>
            <ul className="space-y-6 text-xs font-black uppercase tracking-[0.2em]">
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ouvidoria</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black mb-10 uppercase tracking-[0.4em] text-primary">Localização</h4>
            <div className="w-full h-40 bg-gray-100 mb-8 overflow-hidden group">
              <div 
                className="w-full h-full bg-cover bg-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                style={{ backgroundImage: `url(${IMAGES.MAP_PREVIEW})` }}
              ></div>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-clinical-muted leading-relaxed">
              Votuporanga, SP<br />Rua Exemplo, 1234 - Centro
            </p>
          </div>
        </div>
        
        <div className="pt-16 border-t border-clinical-border text-center">
          <p className="text-[10px] text-clinical-muted font-black uppercase tracking-[0.6em]">
            © 2024 Vivah Clínica. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
