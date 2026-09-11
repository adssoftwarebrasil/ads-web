import { Calendar, Users, Building2, Award, type LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Calendar, value: '12+', label: 'Anos de experiência' },
  { icon: Users, value: '5.000+', label: 'Clientes atendidos' },
  { icon: Building2, value: '100+', label: 'Contratos ativos' },
  { icon: Award, value: '4', label: 'Marcas autorizadas' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
              Quem somos
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 mb-6 leading-tight">
              Mais de uma década cuidando do seu conforto
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              A BTU Ar Condicionado atua desde 2013 com foco em qualidade, agilidade e compromisso
              com o cliente. Somos especializados em soluções de climatização para residências,
              empresas e grandes contratos corporativos.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Nosso diferencial está no atendimento personalizado e na capacidade de atender tanto o
              cliente residencial quanto grandes empresas com contratos de manutenção preventiva e
              corretiva, sempre com profissionais certificados e equipamentos de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">CNPJ Ativo</p>
                <p className="text-sm font-bold text-gray-800">18.414.827/0001-07</p>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Horário de Atendimento</p>
                <p className="text-sm font-bold text-gray-800">Seg–Sex: 08h–12h / 14h–18h</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/BTU/carros-ptu-ar-condicionado-estacionados-predio_899x1599.webp"
                  alt="Frota BTU Ar Condicionado"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://storage.lucasmendes.dev/site-sp/BTU/tecnico-ar-condicionado-camiseta-azul-instalacao_900x1600.webp"
                  alt="Técnico BTU Ar Condicionado"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-2xl px-6 py-4 shadow-xl">
                <p className="text-3xl font-black">12+</p>
                <p className="text-xs text-white/80">Anos de mercado</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
                <p className="text-gray-500 text-xs md:text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
