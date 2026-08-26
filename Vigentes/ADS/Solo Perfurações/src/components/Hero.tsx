import { MessageCircle, Droplet, Award, Clock } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/solo-perfuracao%2Fhero-fundo.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-primary opacity-80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32 transition-opacity duration-1000 opacity-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Perfuração de Poços Artesianos em Jataí - GO
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
              Mais de 20 anos de experiência com equipamentos de alta tecnologia e equipe qualificada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => openWhatsApp('Olá! Gostaria de solicitar um orçamento gratuito.')}
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:brightness-110 transform hover:-translate-y-1 transition-all duration-200 shadow-lg"
              >
                Solicitar Orçamento Grátis
              </button>
              <button
                onClick={() => openWhatsApp('Olá! Gostaria de falar sobre os serviços.')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-2xl">
              <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg">
                <Droplet className="w-8 h-8 mb-2 text-accent" />
                <span className="text-2xl font-bold">100+</span>
                <span className="text-sm text-gray-200">Poços Perfurados</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg">
                <Award className="w-8 h-8 mb-2 text-accent-yellow" />
                <span className="text-2xl font-bold">20+</span>
                <span className="text-sm text-gray-200">Anos de Experiência</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg">
                <Clock className="w-8 h-8 mb-2 text-accent" />
                <span className="text-2xl font-bold">24h</span>
                <span className="text-sm text-gray-200">Atendimento Rápido</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <Droplet className="w-64 h-64 text-white opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
