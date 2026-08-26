import {
  Wrench,
  Gauge,
  Car,
  CircleDot,
  Battery,
  Zap,
  Settings,
  ShieldCheck,
  Cog,
  Package,
  Truck,
  type LucideIcon,
} from 'lucide-react';
import { scrollToSection } from '../utils';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: Wrench, title: 'Mecânica Geral', description: 'Serviços completos de manutenção e reparo mecânico para seu veículo.' },
  { icon: Gauge, title: 'Alinhamento e Balanceamento', description: 'Equipamentos de precisão para garantir estabilidade e economia de combustível.' },
  { icon: Car, title: 'Suspensão', description: 'Diagnóstico e reparo completo do sistema de suspensão do seu veículo.' },
  { icon: CircleDot, title: 'Sistema de Freios', description: 'Manutenção preventiva e corretiva para garantir sua segurança.' },
  { icon: Battery, title: 'Troca de Óleo', description: 'Troca de óleo e filtros com produtos de qualidade para prolongar a vida do motor.' },
  { icon: Zap, title: 'Injeção Eletrônica', description: 'Diagnóstico e reparo de sistemas eletrônicos e injeção.' },
  { icon: Settings, title: 'Diagnóstico com Scanner', description: 'Análise completa com equipamentos de última geração e osciloscópio.' },
  { icon: ShieldCheck, title: 'Revisão Periódica', description: 'Manutenções programadas para manter seu veículo sempre em dia.' },
  { icon: Cog, title: 'Retífica de Motor', description: 'Serviço especializado de retífica e recuperação de motores.' },
  { icon: Package, title: 'Venda de Peças', description: 'Peças originais e de qualidade para seu veículo.' },
  { icon: Truck, title: 'Serviço de Guincho', description: 'Atendimento rápido em caso de emergências e panes.' },
  { icon: Wrench, title: 'Borracharia', description: 'Serviços de reparo e troca de pneus com qualidade.' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Nossos <span className="text-[rgb(207,30,37)]">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para manutenção automotiva com tecnologia, qualidade e
            atendimento profissional.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-[rgb(207,30,37)] to-[rgb(167,10,17)] w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[rgb(207,30,37)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[rgb(207,30,37)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(187,20,27)] transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Solicite um Orçamento
          </button>
        </div>
      </div>
    </section>
  );
}
