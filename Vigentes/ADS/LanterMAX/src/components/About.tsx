import { CheckCircle, Award, Users, Star } from 'lucide-react';

const features = [
  '15 anos de experiência no mercado automotivo',
  'Credenciados pelas principais seguradoras do Brasil',
  'Equipamentos modernos e tecnologia de ponta',
  'Profissionais altamente qualificados e treinados',
  'Orçamento transparente e preço justo',
  'Garantia em todos os serviços realizados',
];

const stats = [
  { icon: Award, iconClass: 'lucide lucide-award', value: '15+', label: 'Anos de Experiência' },
  { icon: Users, iconClass: 'lucide lucide-users', value: '5.000+', label: 'Clientes Atendidos' },
  { icon: Star, iconClass: 'lucide lucide-star', value: '4.9', label: 'Avaliação Google' },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-[#c0392b] font-bold text-sm uppercase tracking-widest">
              Sobre a empresa
            </span>
            <h2 className="mt-2 text-3xl md:text-5xl font-black text-[#0d1f3c] leading-tight">
              15 Anos Cuidando do Seu Veículo
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              A <strong className="text-[#0d1f3c]">LanterMAX</strong> é uma oficina especializada que se destaca no mercado pela excelência e rigor na entrega de seus serviços. Com uma sólida trajetória de <strong>15 anos de experiência</strong> no setor de reparação e manutenção automotiva, a empresa consolidou sua reputação oferecendo soluções de alta qualidade a um preço justo e competitivo.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Nossa dedicação é assegurar que cada veículo receba um cuidado meticuloso e profissional, garantindo a total satisfação dos nossos clientes. Honramos a confiança depositada em nossa equipe com compromisso e integridade em cada serviço.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="lucide lucide-check-circle w-5 h-5 text-[#c0392b] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5581996457782"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-[#0d1f3c] hover:bg-[#1a2f5a] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              Falar com um Especialista
            </a>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100"
                  >
                    <Icon className={`${stat.iconClass} w-8 h-8 text-[#c0392b] mx-auto mb-3`} />
                    <p className="text-3xl font-black text-[#0d1f3c]">{stat.value}</p>
                    <p className="text-gray-500 text-xs mt-1 leading-snug">{stat.label}</p>
                  </div>
                );
              })}
            </div>
            <div className="bg-[#0d1f3c] rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-[#c0392b] rounded-xl p-3 flex-shrink-0">
                  <Award className="lucide lucide-award w-7 h-7 text-[#f39c12]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Credenciados pelas Seguradoras</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Somos parceiros oficiais das maiores seguradoras do Brasil: Porto Seguro, Itaú, Azul e Suhai. Seu seguro aceito aqui.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#f39c12]/10 border border-[#f39c12]/30 rounded-2xl p-6">
              <p className="text-[#0d1f3c] font-semibold text-lg leading-relaxed italic">
                "Nosso compromisso é com a integridade e o bom funcionamento do seu automóvel, honrando a confiança depositada em nossa equipe."
              </p>
              <p className="mt-3 text-gray-500 text-sm">— Equipe LanterMAX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
