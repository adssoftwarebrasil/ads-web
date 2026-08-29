import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  // Configuração do WhatsApp
  const whatsappNumber = '5562999851162';
  const message = 'Olá! Gostaria de receber uma proposta técnica personalizada da Mais Luz Engenharia.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative py-32 md:py-40 overflow-hidden flex items-center justify-center">
      
      {/* PARALLAX BACKGROUND
         - bg-fixed: Cria o efeito de parallax (imagem parada enquanto o site rola)
         - bg-cover/center: Garante enquadramento perfeito
      */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fhomem-transformador-eletricidade.webp')`
        }}
      />

      {/* Overlay Gradiente (Melhor que preto puro) */}
      {/* Mistura o Azul da marca com transparência para dar leitura mas manter a foto visível */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[rgb(8,14,92)]/95 via-[rgb(8,14,92)]/85 to-[rgb(8,14,92)]/60"></div>

      {/* Textura sutil para "quebrar" o gradiente chapado (Opcional, dá um toque premium) */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-400/20 text-yellow-400 text-sm font-bold tracking-wider uppercase backdrop-blur-sm border border-yellow-400/30">
            Atendimento Prioritário
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Sua Empresa Merece uma <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Infraestrutura Confiável
            </span>
          </h2>
        </div>

        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
          Evite paradas não planejadas. Fale agora com nossos engenheiros e receba uma proposta técnica personalizada para sua necessidade.
        </p>

        <div className="pt-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-yellow-400 text-[rgb(8,14,92)] hover:bg-white px-10 py-5 text-lg font-bold rounded-lg transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6 animate-pulse group-hover:animate-none" />
            <span>Falar com Especialista</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          
          <p className="mt-4 text-sm text-gray-400 opacity-80">
            Resposta em até 30 minutos no horário comercial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;