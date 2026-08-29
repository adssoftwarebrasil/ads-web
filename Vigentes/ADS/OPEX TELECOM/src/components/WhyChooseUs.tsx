import React from 'react';
import { CheckCircle2, Clock, Headphones, Shield, Wrench, Zap, ArrowRight, MessageCircle, Phone } from 'lucide-react';

const WhyChooseUs = () => {
  const differentials = [
    {
      icon: Clock,
      title: 'Atendimento 24 Horas',
      description: 'Suporte técnico disponível todos os dias, a qualquer hora. Sua empresa nunca fica desassistida.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Headphones,
      title: 'Atendimento Personalizado',
      description: 'Contato direto do início ao fim do projeto. Você sempre sabe com quem está falando e quem está cuidando do seu negócio.',
      color: 'from-[#FF5500] to-[#FF6600]'
    },
    {
      icon: Wrench,
      title: 'Soluções Sob Medida',
      description: 'Cada cliente é único. Desenvolvemos projetos personalizados que atendem exatamente suas necessidades específicas.',
      color: 'from-[#FF6600] to-[#FF7700]'
    },
    {
      icon: Zap,
      title: 'Agilidade na Execução',
      description: 'Processos otimizados e equipe qualificada para entregar seus projetos com rapidez sem comprometer a qualidade.',
      color: 'from-[#FF5500] to-[#FF6600]'
    },
    {
      icon: Shield,
      title: 'Tecnologia de Ponta',
      description: 'Equipamentos e soluções das melhores marcas do mercado, garantindo performance e durabilidade superiores.',
      color: 'from-[#FF5500] to-[#FF6600]'
    },
    {
      icon: CheckCircle2,
      title: 'Compromisso com Qualidade',
      description: 'Garantia em todos os serviços executados. Nosso trabalho é entregar excelência e satisfação total.',
      color: 'from-[#FF6600] to-[#FF5500]'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5500]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF6600]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header (Mantido original conforme solicitado, foco na alteração do CTA abaixo) */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FF5500] to-[#FF6600] rounded-full mb-6 shadow-lg shadow-orange-500/25">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider">
              Nossos Diferenciais
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#393939] leading-tight mb-4 sm:mb-6 px-4">
            Por Que Escolher a{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#FF5500] to-[#FF6600] bg-clip-text text-transparent">
                OPEX TELECOM?
              </span>
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Mais do que fornecedores, somos <strong className="text-[#FF5500] font-semibold">parceiros estratégicos</strong> no crescimento e segurança do seu negócio.
          </p>
        </div>

        {/* Differentials Grid (Mantido original) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-24">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 sm:p-7 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100/50 hover:border-[#FF5500]/30 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="relative mb-5">
                <div className={`bg-gradient-to-br ${item.color} w-14 h-14 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-lg shadow-orange-500/20`}>
                  <item.icon className="text-white" size={24} strokeWidth={2.5} />
                </div>
              </div>

              <div className="relative">
                <h3 className="text-lg font-bold text-[#393939] mb-2 group-hover:text-[#FF5500] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- NOVO CTA ULTRA PROFISSIONAL --- */}
        <div className="relative bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-900/20">
          
          {/* Efeitos de Fundo Sutis (Glows) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5500] opacity-[0.08] blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF6600] opacity-[0.05] blur-[80px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

          {/* Textura de Grid bem leve no fundo */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

            {/* Bloco de Texto (Esquerda no Desktop) */}
            <div className="text-center lg:text-left max-w-2xl">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Pronto para Transformar Sua <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] to-[#FF6600]">
                  Conectividade e Segurança?
                </span>
              </h3>

              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Entre em contato agora e descubra como podemos ajudar seu negócio a crescer com soluções de tecnologia de ponta.
              </p>
            </div>

            {/* Bloco de Botões (Direita no Desktop) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto min-w-fit">
              <a
                href="https://wa.me/5562993741022"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF5500] text-white font-bold text-base rounded-full hover:bg-[#FF6600] transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1"
              >
                <MessageCircle size={20} className="fill-white/20" />
                <span>Falar no WhatsApp</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold text-base rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;