import { Truck, Settings, PaintBucket, Droplet, Zap, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Service {
  Icon: LucideIcon;
  bg: string;
  color: string;
  title: string;
  text: string;
}

const services: Service[] = [
  {
    Icon: Truck,
    bg: 'rgba(215, 40, 42, 0.082)',
    color: 'rgb(215, 40, 42)',
    title: 'Guincho e Reboque 24h',
    text: 'Serviço de assistência e reboque com frota própria para total segurança.',
  },
  {
    Icon: Settings,
    bg: 'rgba(43, 162, 204, 0.082)',
    color: 'rgb(43, 162, 204)',
    title: 'Alinhamento e Balanceamento',
    text: 'Equipamentos de alta precisão para garantir a estabilidade do seu veículo.',
  },
  {
    Icon: PaintBucket,
    bg: 'rgba(215, 40, 42, 0.082)',
    color: 'rgb(215, 40, 42)',
    title: 'Funilaria e Pintura',
    text: 'Reparos estéticos e estruturais com acabamento de alto padrão original.',
  },
  {
    Icon: Droplet,
    bg: 'rgba(43, 162, 204, 0.082)',
    color: 'rgb(43, 162, 204)',
    title: 'Troca de Óleo e Filtros',
    text: 'Manutenção preventiva essencial para a vida útil do motor e componentes.',
  },
  {
    Icon: Zap,
    bg: 'rgba(215, 40, 42, 0.082)',
    color: 'rgb(215, 40, 42)',
    title: 'Injeção e Rastreamento',
    text: 'Diagnóstico computadorizado de falhas e limpeza de bicos injetores.',
  },
  {
    Icon: ShieldCheck,
    bg: 'rgba(43, 162, 204, 0.082)',
    color: 'rgb(43, 162, 204)',
    title: 'Revisão Geral e Preventiva',
    text: 'Checklist completo: freios, suspensão, amortecedores e faróis.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#D7282A] font-bold text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00335F] mt-4 mb-6">
            Soluções completas para seu veículo
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Desde a mecânica pesada ao reboque 24 horas, a Guiauto oferece excelência em cada detalhe para manter você
            sempre em movimento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: s.bg }}
              >
                <s.Icon className="w-8 h-8" style={{ color: s.color }} />
              </div>
              <h3 className="text-xl font-bold text-[#00335F] mb-4">{s.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{s.text}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#D7282A] font-semibold hover:gap-2 transition-all duration-300"
              >
                Solicitar Orçamento
                <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-16 p-6 bg-[#00335F] rounded-2xl text-center">
          <p className="text-white text-sm md:text-base font-medium">
            Também realizamos: Montagem de Pneus • Regulagem de Faróis • Troca de Amortecedores • Manutenção de Freios
          </p>
        </div>
      </div>
    </section>
  );
}
