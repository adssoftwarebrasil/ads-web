import { useState } from 'react';
import { Shield, Instagram, Mail, Menu } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

const WHATSAPP_FALE = 'https://wa.me/556198449664?text=Olá!%20Gostaria%20de%20falar%20com%20vocês.';

export default function Header() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/95 via-[#1A1A2E]/90 to-[#16213E]/95 backdrop-blur-xl border-b border-[#FFD700]/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer group" onClick={() => go('inicio')}>
            <div className="relative">
              <Shield className="lucide lucide-shield h-9 w-9 text-[#FFD700] fill-[#FFD700] group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
              <div className="absolute inset-0 bg-[#FFD700]/20 blur-xl rounded-full animate-pulse-slow"></div>
            </div>
            <div className="ml-3">
              <div className="text-white font-black text-base leading-tight tracking-wider">GRUPO</div>
              <div className="text-[#FFD700] font-black text-base leading-tight tracking-wider">THECC</div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-1">
            <button onClick={() => go('inicio')} className="text-white hover:text-[#FFD700] font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-300 relative group hover:bg-white/5">Início<span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></button>
            <button onClick={() => go('sobre')} className="text-white hover:text-[#FFD700] font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-300 relative group hover:bg-white/5">Sobre<span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></button>
            <button onClick={() => go('servicos')} className="text-white hover:text-[#FFD700] font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-300 relative group hover:bg-white/5">Serviços<span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></button>
            <button onClick={() => go('como-funciona')} className="text-white hover:text-[#FFD700] font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-300 relative group hover:bg-white/5">Como Funciona<span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></button>
            <a href={WHATSAPP_FALE} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFD700] font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-300 relative group hover:bg-white/5">Fale Conosco<span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span></a>
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-[#FFD700]/20">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFD700] transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/5"><Instagram className="lucide lucide-instagram h-4 w-4" /></a>
              <a href="mailto:contato@grupthecc.com.br" className="text-white hover:text-[#FFD700] transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/5"><Mail className="lucide lucide-mail h-4 w-4" /></a>
            </div>
          </nav>
          <button onClick={() => setOpen((v) => !v)} className="lg:hidden text-white hover:text-[#FFD700] transition-all duration-300 p-2 rounded-lg hover:bg-white/10 relative">
            <div className="relative z-10"><Menu className="lucide lucide-menu h-6 w-6" /></div>
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden fixed inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] backdrop-blur-xl z-40 transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        style={{ top: '64px' }}
      >
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <Shield className="lucide lucide-shield absolute top-20 left-10 w-32 h-32 text-[#FFD700] animate-float" />
          <Shield className="lucide lucide-shield absolute bottom-20 right-10 w-24 h-24 text-[#FFD700] animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <nav className="relative flex flex-col items-center justify-center h-full space-y-6 px-8">
          <button onClick={() => go('inicio')} className="text-white hover:text-[#FFD700] font-bold text-2xl transition-all duration-300 hover:scale-110 w-full text-center py-3 rounded-xl hover:bg-white/5">Início</button>
          <button onClick={() => go('sobre')} className="text-white hover:text-[#FFD700] font-bold text-2xl transition-all duration-300 hover:scale-110 w-full text-center py-3 rounded-xl hover:bg-white/5">Sobre</button>
          <button onClick={() => go('servicos')} className="text-white hover:text-[#FFD700] font-bold text-2xl transition-all duration-300 hover:scale-110 w-full text-center py-3 rounded-xl hover:bg-white/5">Serviços</button>
          <button onClick={() => go('como-funciona')} className="text-white hover:text-[#FFD700] font-bold text-2xl transition-all duration-300 hover:scale-110 w-full text-center py-3 rounded-xl hover:bg-white/5">Como Funciona</button>
          <a href={WHATSAPP_FALE} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFD700] font-bold text-2xl transition-all duration-300 hover:scale-110 w-full text-center py-3 rounded-xl hover:bg-white/5">Fale Conosco</a>
          <div className="flex items-center space-x-8 pt-12">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFD700] transition-all duration-300 hover:scale-125 p-3 rounded-full bg-white/5 hover:bg-white/10 border-2 border-[#FFD700]/20 hover:border-[#FFD700]"><Instagram className="lucide lucide-instagram h-7 w-7" /></a>
            <a href="mailto:contato@grupthecc.com.br" className="text-white hover:text-[#FFD700] transition-all duration-300 hover:scale-125 p-3 rounded-full bg-white/5 hover:bg-white/10 border-2 border-[#FFD700]/20 hover:border-[#FFD700]"><Mail className="lucide lucide-mail h-7 w-7" /></a>
          </div>
        </nav>
      </div>
    </header>
  );
}
