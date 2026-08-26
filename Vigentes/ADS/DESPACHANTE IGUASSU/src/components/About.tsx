import { Zap, Award, Users, Target, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: Zap, title: 'Rapidez', description: 'Transferências em até 24h' },
  { icon: Award, title: 'Qualidade', description: 'Atendimento premium' },
  { icon: Users, title: 'Experiência', description: 'Anos de mercado' },
  { icon: Target, title: 'Transparência', description: 'Processos claros' },
];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#021D46] mb-6">
              Sobre a Despachante Iguassu
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              A <strong>Despachante Iguassu</strong> surgiu com o propósito de oferecer um atendimento
              ágil, seguro e transparente em serviços documentais. Desde sua fundação, a empresa atua há
              anos no mercado, sempre focada em simplificar processos e entregar soluções práticas para
              seus clientes.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              Entre os principais serviços estão documentação veicular, consultoria e transferência de
              veículos, sempre com foco em proporcionar a melhor experiência para nossos clientes em Foz
              do Iguaçu e região.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FA1213] to-[#d10f10] rounded-xl flex items-center justify-center">
                        <Icon className="text-white" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#021D46] mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center sm:text-left">
              <a
                href="http://wa.me/5545999661849"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#FA1213] text-white font-semibold rounded-full hover:bg-[#d10f10] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Fale com Nossos Especialistas
              </a>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/despachante%20iguassu%2Fimg%2Fdespachante-iguassu.webp"
                alt="Atendimento profissional"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021D46]/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 right-4 lg:-right-6 bg-[#B7AF92] rounded-3xl p-6 md:p-8 shadow-xl max-w-[200px] md:max-w-xs">
              <p className="text-2xl md:text-3xl font-bold text-white mb-2">100%</p>
              <p className="text-white/90 text-sm md:text-base font-medium">Satisfação dos Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
