import { Wrench, Battery, Zap, Shield, type LucideIcon } from 'lucide-react';
import { openWhatsApp } from '../lib/constants';

interface Item {
  Icon: LucideIcon;
  label: string;
}

const items: Item[] = [
  { Icon: Wrench, label: 'Troca de Tela e Display' },
  { Icon: Battery, label: 'Substituição de Bateria' },
  { Icon: Zap, label: 'Reparo de Placa e Circuitos' },
  { Icon: Shield, label: 'Garantia de 90 Dias' },
];

export default function Assistencia() {
  return (
    <section id="assistencia" className="bg-[rgb(254,254,252)] py-16 md:py-24 px-4 md:px-8 lg:px-16 fade-in">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img
            src="/assistencia.webp"
            alt="Interior da loja Órion, com balcão de atendimento e parede de acessórios"
            className="w-full h-auto rounded-2xl shadow-2xl"
            loading="lazy"
          />
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Conserto Especializado para <span className="text-[rgb(231,189,44)]">Todas as Marcas</span>
          </h2>
          <p className="text-lg text-gray-700">Nossa equipe técnica possui experiência em diversas marcas e modelos. Diagnóstico preciso e reparo rápido para você voltar a usar seu aparelho.</p>
          <div className="space-y-4">
            {items.map(({ Icon, label }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="w-6 h-6 flex-shrink-0 stroke-[rgb(231,189,44)]" />
                <span className="text-gray-800 font-medium">{label}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => openWhatsApp('Olá! Gostaria de solicitar um orçamento para assistência técnica.')}
            className="mt-6 bg-[rgb(231,189,44)] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgb(241,199,54)] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
}
