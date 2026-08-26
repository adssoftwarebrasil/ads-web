import { Shield, Lock, Camera, Star, Clock, CheckCircle, MessageCircle, ArrowDown } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

const WHATSAPP_ATENDIMENTO = 'https://wa.me/556198449664?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A1B] via-[#1A1A2E] to-[#16213E]"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#FFD700]/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#E63946]/15 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-[#0F3460]/30 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(255, 215, 0, 0.1) 80px, rgba(255, 215, 0, 0.1) 82px)' }}></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(230,57,70,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(10,10,27,0.8)_100%)]"></div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <Shield className="lucide lucide-shield absolute top-20 left-10 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#FFD700]/5 animate-float" style={{ animationDelay: '0s' }} />
        <Lock className="lucide lucide-lock absolute top-40 right-20 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-[#FFD700]/5 animate-float" style={{ animationDelay: '1s' }} />
        <Camera className="lucide lucide-camera absolute bottom-32 left-20 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#FFD700]/5 animate-float" style={{ animationDelay: '2s' }} />
        <Shield className="lucide lucide-shield absolute bottom-20 right-10 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#FFD700]/5 animate-float" style={{ animationDelay: '1.5s' }} />
        <Star className="lucide lucide-star absolute top-1/3 left-1/4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#FFD700]/5 animate-float" style={{ animationDelay: '0.5s' }} />
        <Lock className="lucide lucide-lock absolute bottom-1/3 right-1/4 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-[#FFD700]/5 animate-float" style={{ animationDelay: '2.5s' }} />
      </div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 215, 0, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center flex flex-col justify-center min-h-screen">
        <div className="inline-flex items-center bg-gradient-to-r from-[#1A1A2E] to-[#16213E] text-white px-3 py-1.5 sm:px-6 sm:py-3 rounded-full font-bold text-[10px] sm:text-sm mb-6 sm:mb-8 shadow-[0_0_30px_rgba(255,215,0,0.3)] border border-[#FFD700]/30 mx-auto">
          <span className="relative flex h-2 w-2 sm:h-3 sm:w-3 mr-1.5 sm:mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-[#FFD700]"></span>
          </span>
          <span className="hidden sm:inline">ATENDIMENTO: 24 HORAS </span>
          <span className="sm:hidden whitespace-nowrap">24 HORAS</span>
        </div>
        <h1 className="mb-6 sm:mb-8 leading-tight px-2">
          <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">CHAVEIRO</span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-[#FFD700] via-[#FFC700] to-[#FFD700] bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_40px_rgba(255,215,0,0.5)]">PROFISSIONAL</span>
          <span className="block text-sm sm:text-lg md:text-xl lg:text-2xl font-bold mt-4 sm:mt-6 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Vicente Pires e Região</span>
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 mb-8 sm:mb-10">
          <div className="group flex items-center bg-white/5 backdrop-blur-sm px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full border border-[#FFD700]/20 hover:border-[#FFD700]/50 transition-all duration-300">
            <Clock className="lucide lucide-clock w-3 h-3 sm:w-4 sm:h-4 text-[#FFD700] mr-1.5 sm:mr-2 group-hover:rotate-12 transition-transform flex-shrink-0" />
            <span className="text-white font-semibold text-[10px] sm:text-sm whitespace-nowrap">27 Anos de Confiança</span>
          </div>
          <div className="group flex items-center bg-white/5 backdrop-blur-sm px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full border border-[#FFD700]/20 hover:border-[#FFD700]/50 transition-all duration-300">
            <CheckCircle className="lucide lucide-check-circle w-3 h-3 sm:w-4 sm:h-4 text-[#FFD700] mr-1.5 sm:mr-2 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="text-white font-semibold text-[10px] sm:text-sm whitespace-nowrap">Resposta Rápida</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12">
          <a href={WHATSAPP_ATENDIMENTO} target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-r from-[#FFD700] to-[#FFC700] text-[#1A1A2E] px-5 py-2.5 sm:px-8 sm:py-4 rounded-xl font-black text-xs sm:text-base hover:from-[#FFC700] hover:to-[#FFB700] transition-all duration-300 flex items-center shadow-[0_10px_40px_rgba(255,215,0,0.4)] hover:shadow-[0_15px_50px_rgba(255,215,0,0.6)] hover:scale-105 w-full sm:w-auto justify-center overflow-hidden max-w-[280px] sm:max-w-none">
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <MessageCircle className="lucide lucide-message-circle mr-1.5 sm:mr-2 group-hover:rotate-12 transition-transform relative z-10 flex-shrink-0" width={16} height={16} />
            <span className="relative z-10 whitespace-nowrap">SOLICITAR ATENDIMENTO</span>
          </a>
          <button onClick={() => scrollToId('servicos')} className="group relative border-2 border-[#FFD700] text-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-xl font-bold text-xs sm:text-base hover:bg-[#FFD700] hover:text-[#1A1A2E] transition-all duration-300 flex items-center w-full sm:w-auto justify-center backdrop-blur-sm bg-white/5 hover:scale-105 shadow-[0_0_30px_rgba(255,215,0,0.2)] max-w-[280px] sm:max-w-none">
            <span className="whitespace-nowrap">NOSSOS SERVIÇOS</span>
            <ArrowDown className="lucide lucide-arrow-down ml-1.5 sm:ml-2 group-hover:translate-y-1 transition-transform flex-shrink-0" width={14} height={14} />
          </button>
        </div>
      </div>
      <div className="hidden sm:block absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#FFD700] text-[10px] font-semibold tracking-wider opacity-70">ROLE PARA BAIXO</span>
          <ArrowDown className="lucide lucide-arrow-down text-[#FFD700] w-5 h-5 opacity-70" />
        </div>
      </div>
    </section>
  );
}
