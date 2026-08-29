import { Shield, Layers, Wrench, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
  features: string[];
  waLink: string;
  delay: number;
}

const services: Service[] = [
  {
    icon: Shield,
    image:
      'https://storage.lucasmendes.dev/site-sp/cm%20glass/img/Troca%20de%20Vidros%20Automotivos.webp',
    title: 'Troca de Vidros Automotivos',
    description:
      'Substituímos parabrisa, vidros laterais e traseiros com peças originais e certificadas, nacionais e importadas. Garantimos encaixe perfeito e vedação hermética para total segurança.',
    features: ['Parabrisa', 'Vidros Laterais', 'Vidro Traseiro', 'Vidros de Porta'],
    waLink:
      'http://wa.me/559284131569?text=Olá! Tenho interesse em: Troca%20de%20Vidros%20Automotivos',
    delay: 0,
  },
  {
    icon: Layers,
    image:
      'https://storage.lucasmendes.dev/site-sp/cm%20glass/img/Aplica%C3%A7%C3%A3o%20de%20Insulfilm.webp',
    title: 'Aplicação de Insulfilm',
    description:
      'Reduz calor, raios UV e aumenta a privacidade do seu veículo. Trabalhamos com películas de alta performance que proporcionam conforto térmico real e preservam a clareza visual.',
    features: ['Proteção UV 99%', 'Redução de Calor', 'Privacidade', 'Estética Premium'],
    waLink:
      'http://wa.me/559284131569?text=Olá! Tenho interesse em: Aplica%C3%A7%C3%A3o%20de%20Insulfilm',
    delay: 120,
  },
  {
    icon: Wrench,
    image:
      'https://storage.lucasmendes.dev/site-sp/cm%20glass/img/Recupera%C3%A7%C3%A3o%20de%20Trincados.webp',
    title: 'Recuperação de Trincados',
    description:
      'Trinca pequena? Não precisa trocar o vidro inteiro! Nossa técnica de recuperação interrompe a propagação e restaura a integridade estrutural do parabrisa, economizando tempo e dinheiro.',
    features: ['Trincas e Impactos', 'Sem Troca Total', 'Rápido e Econômico', 'Resultado Imediato'],
    waLink:
      'http://wa.me/559284131569?text=Olá! Tenho interesse em: Recupera%C3%A7%C3%A3o%20de%20Trincados',
    delay: 240,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-[#034087] text-sm font-bold uppercase tracking-widest mb-3">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Do parabrisa ao insulfilm, oferecemos soluções completas para vidros automotivos com
            qualidade de fábrica e atendimento especializado.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 opacity-100 translate-y-0"
                style={{ transitionDelay: `${service.delay}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#034087]/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-2.5">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#034087] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-1.5 text-xs font-medium text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#034087] flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-[#034087] text-white text-sm font-semibold py-3 rounded-xl hover:bg-[#022d5e] transition-colors duration-200"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
