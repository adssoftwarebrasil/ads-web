import { MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/retocars%2Ffachada-imagem-melhorada.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/80"></div>
      
      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 md:space-y-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
          Pronto para Transformar Seu Veículo?
        </h2>
        
        <p className="text-base md:text-xl lg:text-2xl text-gray-300">
          Orçamento rápido e sem compromisso pelo WhatsApp
        </p>
        
        <a 
          href="https://wa.me/5561982160800?text=Olá! Vim pelo site e gostaria de solicitar um orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#fafe05] text-black px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-lg font-bold text-base md:text-lg lg:text-xl hover:bg-[#fafe05]/90 transition-all duration-300 hover:scale-105 shadow-2xl"
        >
          <MessageCircle size={20} className="md:hidden" />
          <MessageCircle size={24} className="hidden md:block lg:hidden" />
          <MessageCircle size={28} className="hidden lg:block" />
          Falar com Especialista
        </a>
        
        <p className="text-xs md:text-sm text-gray-400">
          Resposta em até 30 minutos • Segunda a Sexta 07h-18h
        </p>
      </div>
    </section>
  );
}