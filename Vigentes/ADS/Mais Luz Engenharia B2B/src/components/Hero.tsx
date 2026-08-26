import React from 'react';
import { ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappNumber = '5562999851162';
  const whatsappMessage = 'Olá! Vim pelo site e gostaria de conhecer os serviços da Mais Luz Engenharia.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gray-900">
      
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Fsubestacao-eletrica-ceu.webp"
          alt="Subestação Elétrica"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          loading="eager"
          decoding="async" // Otimização
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(8,14,92)] via-[rgb(8,14,92)]/90 to-[rgb(8,14,92)]/40 md:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(8,14,92)] via-transparent to-transparent md:hidden"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></span>
              <span className="text-yellow-400 text-sm font-semibold tracking-wide uppercase">Líder em Alta Tensão</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Soluções Elétricas <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Completas e Seguras
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed">
              Há mais de 5 anos entregando infraestrutura elétrica de alta complexidade para indústrias, grandes construções e redes de distribuição em todo o Brasil.
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>Normas NR10/SEP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>Equipe Certificada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>Atendimento Nacional</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-yellow-400 text-[rgb(8,14,92)] hover:bg-yellow-300 px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:-translate-y-1"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button
                onClick={scrollToServices}
                className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Nossos Serviços
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 lg:hidden">
                <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">500+</div>
                    <div className="text-xs text-gray-300">Projetos</div>
                </div>
                <div className="text-center border-l border-white/10">
                    <div className="text-2xl font-bold text-yellow-400">24h</div>
                    <div className="text-xs text-gray-300">Suporte</div>
                </div>
                <div className="text-center border-l border-white/10">
                    <div className="text-2xl font-bold text-yellow-400">100%</div>
                    <div className="text-xs text-gray-300">Segurança</div>
                </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-5 flex-col gap-6 items-end relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>

            <FloatingCard 
              icon={<Zap className="w-8 h-8 text-yellow-400" />}
              number="500+" 
              label="Projetos Concluídos"
              delay="0"
            />
            
            <FloatingCard 
              icon={<Shield className="w-8 h-8 text-yellow-400" />}
              number="100%" 
              label="Conformidade NR10"
              className="mr-12"
              delay="100"
            />

            <FloatingCard 
              icon={<CheckCircle className="w-8 h-8 text-yellow-400" />}
              number="24h" 
              label="Suporte Técnico"
              delay="200"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full bg-white/5 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm font-medium uppercase tracking-widest mb-0">
            Confiança de empresas líderes em Goiás e todo Brasil
          </p>
        </div>
      </div>
    </section>
  );
};

const FloatingCard = ({ icon, number, label, className = "", delay }: any) => (
  <div 
    className={`bg-[rgb(8,14,92)]/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-64 transform hover:-translate-y-2 transition-all duration-300 shadow-xl ${className}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-4 mb-2">
      <div className="p-2 bg-yellow-400/10 rounded-lg">
        {icon}
      </div>
      <span className="text-3xl font-bold text-white">{number}</span>
    </div>
    <p className="text-gray-300 font-medium">{label}</p>
  </div>
);

export default Hero;