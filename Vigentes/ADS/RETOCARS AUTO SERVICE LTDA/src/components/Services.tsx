import { Wrench, Paintbrush, Sparkles, Shield, Car, Droplet } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Lanternagem Profissional',
      description: 'Recuperação completa de lataria com técnicas avançadas e equipamentos de precisão.'
    },
    {
      icon: Paintbrush,
      title: 'Pintura Automotiva',
      description: 'Pintura de alta qualidade com sistema tintométrico, garantindo cor original e acabamento impecável.'
    },
    {
      icon: Sparkles,
      title: 'Polimento e Vitrificação',
      description: 'Proteção e brilho duradouros com produtos premium e técnicas profissionais.'
    },
    {
      icon: Shield,
      title: 'Martelinho de Ouro',
      description: 'Remoção de amassados sem danificar a pintura original, preservando o valor do veículo.'
    },
    {
      icon: Car,
      title: 'Pintura de Rodas',
      description: 'Renovação e customização de rodas com preparação adequada e tintas de alta resistência.'
    },
    {
      icon: Droplet,
      title: 'Higienização Interna',
      description: 'Limpeza profunda do interior, eliminando sujeira, odores e manchas difíceis.'
    }
  ];

  return (
    <section id="servicos" className="bg-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#fafe05]/10 border border-[#fafe05] px-3 py-1.5 md:px-4 md:py-2 rounded-full">
            <span className="text-[#fafe05] font-semibold text-sm md:text-base">Nossos Serviços</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
            Soluções Completas para Seu Veículo
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            Da lanternagem à estética automotiva, oferecemos tudo que seu carro precisa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 hover:border-[#fafe05] transition-all duration-300 hover:scale-105"
              >
                <div className="bg-[#fafe05]/10 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-5 lg:mb-6 group-hover:bg-[#fafe05]/20 transition-colors duration-300">
                  <Icon className="text-[#fafe05] w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}