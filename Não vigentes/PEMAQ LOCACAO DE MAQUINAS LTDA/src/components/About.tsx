import { CheckCircle2 } from 'lucide-react';

const FEATURES = [
  'Frota diversificada e moderna de equipamentos',
  'Equipe de profissionais qualificados',
  'Suporte técnico para demandas urgentes',
  'Manutenção e assistência técnica especializada',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/pemaqlocacao-oficial%2FQuem%20somos.png"
              alt="PEMAQ Locação de Máquinas"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <p className="text-[#FFA500] font-semibold text-sm uppercase tracking-wider">
                Quem Somos
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                PEMAQ Locação de <span className="text-[#B87333]">Máquinas</span>
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              A PEMAQ Locação de Máquinas é uma empresa que surgiu em 17/12/2021, com a missão de
              oferecer a locação de máquinas e equipamentos para construção civil e também o serviço
              de manutenção e conserto geral.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Com uma frota diversificada e moderna de equipamentos, atuamos na área de construção
              civil, sempre buscando a excelência no atendimento e a satisfação dos nossos clientes.
            </p>
            <div className="space-y-4 pt-4">
              {FEATURES.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    size={24}
                    className="text-[#FFA500] flex-shrink-0 mt-1"
                  />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
