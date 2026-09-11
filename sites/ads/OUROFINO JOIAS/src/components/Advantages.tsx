import { Palette, Shield, Clock, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ADVANTAGES: Advantage[] = [
  { icon: Palette, title: 'Design Exclusivo e Personalizado', description: 'Criamos peças únicas que refletem sua personalidade e contam sua história de forma autêntica.' },
  { icon: Shield, title: 'Qualidade Garantida', description: 'Trabalhamos com materiais de alta qualidade e excelência na execução, sem terceirização.' },
  { icon: Clock, title: 'Prazo de Entrega Rápido', description: 'Produção própria que garante agilidade sem comprometer a qualidade do acabamento.' },
  { icon: Headphones, title: 'Atendimento Diferenciado', description: 'Acompanhamento personalizado em cada etapa do processo, do projeto à entrega final.' },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-24 bg-[rgb(29,29,27)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(186,176,97)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(126,102,42)] rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[rgb(186,176,97)] font-semibold text-sm uppercase tracking-wider">Nossas Vantagens</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Por Que Escolher Ouro Fino Joias</h2>
          <div className="h-1 w-24 bg-[rgb(186,176,97)] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">Conheça as vantagens que oferecemos para você!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ADVANTAGES.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="bg-gradient-to-br from-[rgb(29,29,27)] to-[rgb(20,20,18)] border border-[rgb(186,176,97)]/20 rounded-lg p-8 hover:border-[rgb(186,176,97)] transition-all duration-300 hover:shadow-xl hover:shadow-[rgb(186,176,97)]/10 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-[rgb(186,176,97)]/10 min-w-[64px] h-16 rounded-lg flex items-center justify-center group-hover:bg-[rgb(186,176,97)]/20 transition-colors duration-300">
                    <Icon size={32} className="text-[rgb(186,176,97)]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3">{adv.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(186,176,97)] to-[rgb(126,102,42)] rounded-2xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[rgb(29,29,27)] mb-6">Visite Nossa Loja</h3>
          <p className="text-[rgb(29,29,27)]/80 text-lg mb-8 max-w-2xl mx-auto">Venha conhecer nosso espaço e deslumbrar-se com nossas criações. Nossa equipe está pronta para atendê-lo!</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(29,29,27)] text-[rgb(186,176,97)] px-8 py-4 rounded-md hover:bg-[rgb(20,20,18)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            Agendar Visita
          </a>
        </div>
      </div>
    </section>
  );
}
