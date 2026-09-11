import { Sparkles, Layers, Building2, Home, ThermometerSnowflake, Box } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { scrollToId } from '../utils/scroll';

interface Service {
  Icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
}

const services: Service[] = [
  {
    Icon: Sparkles,
    title: 'CORTE A LASER',
    desc: 'Precisão computadorizada para cortes complexos em chapas de diversos materiais e espessuras',
    tag: 'ALTA PRECISÃO',
  },
  {
    Icon: Layers,
    title: 'CORTE E DOBRA DE CHAPAS',
    desc: 'Dobra e corte sob medida com equipamentos modernos. Atendemos especificações técnicas exatas',
    tag: 'SOB MEDIDA',
  },
  {
    Icon: Building2,
    title: 'ESTRUTURAS METÁLICAS',
    desc: 'Galpões, coberturas e estruturas robustas projetadas para durar. Cálculo estrutural incluso',
    tag: 'PROJETOS COMPLETOS',
  },
  {
    Icon: Home,
    title: 'TELHAS DE ZINCO',
    desc: 'Bobinas e telhas de zinco para calhas, rufos e coberturas. Durabilidade garantida',
    tag: 'DURABILIDADE',
  },
  {
    Icon: ThermometerSnowflake,
    title: 'TELHAS ISOTÉRMICAS',
    desc: 'Conforto térmico e acústico para sua edificação. Diversas cores e espessuras',
    tag: 'CONFORTO TÉRMICO',
  },
  {
    Icon: Box,
    title: 'PERFIS E METALON',
    desc: "Perfis estruturais, caixas d'água e metalon. Estoque variado para pronta entrega",
    tag: 'PRONTA ENTREGA',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6">
            NOSSOS SERVIÇOS ESPECIALIZADOS
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em metal para sua obra ou indústria
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {services.map(({ Icon, title, desc, tag }) => (
            <div
              key={title}
              className="group bg-white border-2 border-gray-200 hover:border-[rgb(139,0,2)] hover:border-4 rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[rgb(139,0,2)]/20 transform hover:-translate-y-2"
            >
              <div className="text-[rgb(139,0,2)] mb-6 group-hover:scale-110 transition-transform">
                <Icon width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">{desc}</p>
              <div className="inline-block bg-[rgb(139,0,2)] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide">
                {tag}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => scrollToId('contato')}
            className="bg-[rgb(139,0,2)] text-white px-12 py-5 rounded-lg text-base sm:text-lg font-bold hover:bg-[rgb(180,0,3)] transition-all transform hover:scale-105 shadow-lg"
          >
            SOLICITAR ORÇAMENTO PERSONALIZADO
          </button>
        </div>
      </div>
    </section>
  );
}
