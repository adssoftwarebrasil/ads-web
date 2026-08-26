import { Cloud, Phone, RefreshCw, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { scrollToSection } from '../lib/nav';

type Service = {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  items: string[];
  cta: string;
};

const services: Service[] = [
  {
    Icon: Cloud,
    iconClass: 'lucide-cloud',
    title: 'PABX IP em Nuvem',
    items: [
      'Central Omnichannel',
      'Integração WhatsApp, E-mail, Redes Sociais',
      'Gravação de chamadas',
      'Videoconferências',
      'Chat integrado',
      '0800 com número único nacional',
    ],
    cta: 'Conhecer Solução',
  },
  {
    Icon: Phone,
    iconClass: 'lucide-phone',
    title: 'Telefonia Fixa e Móvel',
    items: [
      'Ligações ilimitadas',
      'Planos fixos corporativos',
      'Cobertura nacional',
      'Ramal telefônico em nuvem',
      'Mensagens ilimitadas',
    ],
    cta: 'Ver Planos',
  },
  {
    Icon: RefreshCw,
    iconClass: 'lucide-refresh-cw',
    title: 'Portabilidade Express',
    items: [
      'Portabilidade linhas fixas e móveis',
      'Processo rápido e descomplicado',
      'Mantenha seu número',
      'Sem interrupção do serviço',
      'Acompanhamento em tempo real',
    ],
    cta: 'Agilizar Portabilidade',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Soluções Completas em Telefonia Corporativa
          </h2>
          <p className="text-xl text-gray-600">Tecnologia avançada para conectar sua empresa</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-[#3d009e] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#3d009e] to-[#5a1abd] rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <s.Icon className={`lucide ${s.iconClass} w-8 h-8 text-white`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{s.title}</h3>
              <ul className="space-y-3 mb-8">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <Check className="lucide lucide-check w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-[#bc0000] text-white py-3 rounded-lg font-semibold hover:bg-[#9a0000] transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                {s.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
