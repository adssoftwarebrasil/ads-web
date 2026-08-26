import { Truck, Car, Wrench, Zap, LifeBuoy, Package } from 'lucide-react';

const SERVICES = [
  {
    icon: Truck,
    title: 'Linha Pesada',
    description: 'Peças e serviços especializados para caminhões e ônibus de todas as marcas e modelos.',
    tags: ['Caminhão', 'Ônibus', 'Diesel'],
  },
  {
    icon: Car,
    title: 'Linha Leve',
    description: 'Peças de qualidade para carros e camionetes. Revisão, manutenção e substituição completa.',
    tags: ['Carro', 'Camionete', 'SUV'],
  },
  {
    icon: Wrench,
    title: 'Oficina Mecânica',
    description: 'Serviços mecânicos completos com mão de obra qualificada e equipamentos modernos.',
    tags: ['Manutenção', 'Revisão', 'Reparo'],
  },
  {
    icon: Zap,
    title: 'Auto Elétrica',
    description: 'Diagnóstico e reparo de sistemas elétricos, alternadores, motor de partida e muito mais.',
    tags: ['Elétrica', 'Diagnóstico', 'Bateria'],
  },
  {
    icon: LifeBuoy,
    title: 'Socorro 24h',
    description: 'Atendimento de emergência para pane seca, pneu furado e falhas mecânicas na estrada.',
    tags: ['Emergência', 'Pane', 'Reboque'],
  },
  {
    icon: Package,
    title: 'Venda de Peças',
    description: 'Amplo estoque de peças originais e alternativas com qualidade garantida e melhor preço.',
    tags: ['Estoque', 'Original', 'Reposição'],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
            O que fazemos
          </span>
          <h2 className="font-['Barlow_Condensed'] font-black text-white text-4xl sm:text-5xl md:text-6xl mb-5">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Da venda de peças ao serviço completo, atendemos toda a sua necessidade veicular com
            agilidade, qualidade e o melhor atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#111111] border border-[#2a2a2a] rounded-2xl p-7 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-600/15 border border-red-600/20 group-hover:bg-red-600/25 transition-colors duration-300 mb-5">
                    <Icon size={26} className="text-red-500" />
                  </div>

                  <h3 className="font-['Barlow_Condensed'] font-bold text-white text-2xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href={`https://wa.me/5564999743169?text=Olá! Preciso de um orçamento.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-base px-10 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-red-600/30 hover:scale-105"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
