import {
  Activity,
  Dumbbell,
  HandHelping,
  Droplets,
  Zap,
  Wind,
  Syringe,
  StretchHorizontal,
  type LucideIcon,
} from 'lucide-react';
import { WHATSAPP_LINK } from '../lib/constants';
import WhatsAppIcon from './WhatsAppIcon';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Activity,
    iconClass: 'lucide-activity',
    title: 'Fisioterapia Ortopédica',
    description:
      'Tratamento especializado para lesões musculoesqueléticas, pós-operatório, dores articulares e reabilitação de atletas com protocolos individualizados.',
  },
  {
    icon: Dumbbell,
    iconClass: 'lucide-dumbbell',
    title: 'Pilates Clínico',
    description:
      'Modalidade terapêutica que une exercícios do Pilates clássico com princípios fisioterapêuticos para reabilitação, controle da dor e fortalecimento.',
  },
  {
    icon: HandHelping,
    iconClass: 'lucide-hand-helping',
    title: 'Terapia Manual',
    description:
      'Técnicas manuais avançadas para mobilização articular, liberação miofascial e tratamento de disfunções neuromusculares com resultados imediatos.',
  },
  {
    icon: Droplets,
    iconClass: 'lucide-droplets',
    title: 'Drenagem Linfática',
    description:
      'Técnica especializada que estimula o sistema linfático, reduz inchaços, melhora a circulação e acelera a recuperação pós-cirúrgica.',
  },
  {
    icon: Zap,
    iconClass: 'lucide-zap',
    title: 'Treino Gestual de Corrida',
    description:
      'Análise e correção da biomecânica da corrida para aumentar a performance, prevenir lesões e otimizar o movimento de atletas e corredores.',
  },
  {
    icon: Wind,
    iconClass: 'lucide-wind',
    title: 'Neo Pilates',
    description:
      'Evolução do Pilates tradicional com movimentos modernos e integrados ao treinamento funcional. Ideal para quem busca desafio e performance.',
  },
  {
    icon: Syringe,
    iconClass: 'lucide-syringe',
    title: 'Dry Needling',
    description:
      'Técnica de agulhamento a seco para alívio de pontos-gatilho miofasciais, tratamento de dores crônicas e disfunções musculares complexas.',
  },
  {
    icon: StretchHorizontal,
    iconClass: 'lucide-stretch-horizontal',
    title: 'Pilates Avançado',
    description:
      'Programa de alta intensidade para praticantes experientes que desejam elevar sua capacidade física, consciência corporal e desempenho.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-clinic-gold font-semibold text-sm tracking-widest uppercase mb-3">
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-clinic-teal leading-tight">
            Tratamentos Especializados
            <br />
            <span className="text-clinic-gold">para Cada Necessidade</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada paciente recebe uma avaliação completa e um protocolo exclusivo, desenvolvido por
            especialistas para garantir os melhores resultados.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const featured = i === 0;
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative rounded-2xl p-6 border transition-all duration-500 cursor-default opacity-100 translate-y-0 ${
                  featured
                    ? 'bg-clinic-teal text-white border-clinic-teal shadow-xl shadow-clinic-teal/20'
                    : 'bg-white text-gray-800 border-gray-100 hover:border-clinic-teal/30 hover:shadow-xl hover:shadow-clinic-teal/10 hover:-translate-y-1'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    featured ? 'bg-clinic-gold' : 'bg-clinic-teal-50 group-hover:bg-clinic-teal'
                  }`}
                >
                  <Icon
                    className={`lucide ${service.iconClass} transition-colors ${
                      featured ? 'text-white' : 'text-clinic-teal group-hover:text-white'
                    }`}
                    width={22}
                    height={22}
                  />
                </div>
                <h3
                  className={`font-bold text-base mb-2 ${featured ? 'text-white' : 'text-clinic-teal'}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${featured ? 'text-white/80' : 'text-gray-500'}`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-clinic-teal hover:bg-clinic-teal-light text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-clinic-teal/30 hover:scale-105"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Quero agendar minha avaliação
          </a>
        </div>
      </div>
    </section>
  );
}
