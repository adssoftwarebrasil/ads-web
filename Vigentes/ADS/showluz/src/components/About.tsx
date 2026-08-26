import React from 'react';
import { Award, Lightbulb, Shield, Clock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Especialistas',
      description: 'Profundo conhecimento em lâmpadas especiais para hospitais, clínicas odontológicas e aplicações industriais.'
    },
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Trabalhamos apenas com marcas reconhecidas e produtos certificados para garantir a melhor performance.'
    },
    {
      icon: Clock,
      title: 'Atendimento Ágil',
      description: 'Estoque completo e equipe preparada para atender suas necessidades com rapidez e eficiência.'
    }
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#010510] border-t border-[#00a6ff]/10 relative overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#00a6ff]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho com o Texto Histórico Original */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#fff457] text-[#010510] px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide mb-8 shadow-[0_0_15px_rgba(255,244,87,0.3)]">
            <Award className="w-5 h-5" />
            <span>Desde 1996</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Nossa História
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed text-justify md:text-center">
            <p>
              Em 1996, na cidade de Goiânia, nasceu a Show Luz Goiânia, uma empresa criada para preencher uma lacuna no mercado de lâmpadas e iluminação. Percebendo a falta de lojas especializadas que atendessem às diversas demandas do público, decidimos criar uma solução que fosse sinônimo de qualidade e confiança.
            </p>
            <p>
              Desde o início, oferecemos uma vasta linha de produtos que atende aos mais variados segmentos, incluindo lâmpadas médico-hospitalares, de projeção, iluminação comum e LED. Nosso compromisso sempre foi claro: vender produtos de alta qualidade com garantia, assegurando a satisfação de nossos clientes.
            </p>
            <p className="font-medium text-white">
              A missão da Show Luz Goiânia é iluminar vidas e negócios, mantendo o foco na excelência e na dedicação que nos tornaram referência no setor.
            </p>
          </div>
        </div>

        {/* Grid de Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-[#1a1a2e] p-8 rounded-2xl shadow-lg border border-[#00a6ff]/10 hover:border-[#00a6ff]/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-[#00a6ff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#fff457] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#00a6ff] group-hover:text-[#010510] transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}