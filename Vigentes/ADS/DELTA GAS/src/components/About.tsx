import { Award, Truck, Users, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { StarSolid } from '../icons';

interface Highlight {
  icon: LucideIcon;
  title: string;
  sub: string;
}

const highlights: Highlight[] = [
  { icon: Award, title: 'Fundada em 2018', sub: 'Mais de 6 anos servindo Sinop' },
  { icon: Truck, title: 'Entrega no dia', sub: 'Velocidade que você precisa' },
  { icon: Users, title: 'Nova direção', sub: 'Gestão renovada e comprometida' },
  { icon: ShieldCheck, title: 'Confiança', sub: 'Avaliação 5 estrelas no Google' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-gray-50/60">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="section-observe">
            <p className="section-subtitle">Sobre a Delta Gás</p>
            <h2 className="section-title mb-6">
              Tradição e confiança
              <br />
              <span className="text-brand-secondary">em Sinop-MT</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A <strong className="text-brand-dark">Delta Gás</strong> nasceu em 2018 com uma
                missão clara: ser a distribuidora de gás e água mais confiável de Sinop-MT.
                Localizada estrategicamente no{' '}
                <strong className="text-brand-dark">Residencial Delta</strong>, próxima à Avenida
                André Maggi e à Faculdade FASIPE, estamos sempre a poucos minutos da sua casa ou
                comércio.
              </p>
              <p>
                Agora sob nova direção, a Delta Gás reafirma o compromisso com a excelência no
                atendimento, entrega ágil e preços honestos. Nosso objetivo é simples: quando você
                precisar de gás ou água, a Delta chega primeiro.
              </p>
              <p>
                Atendemos residências, comércios, restaurantes e empresas de toda Sinop, todos os
                dias da semana, das <strong className="text-brand-dark">7h às 22h</strong>.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.title}
                    className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                  >
                    <div className="bg-brand-light/15 text-brand-secondary p-2 rounded-xl flex-shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark text-sm">{h.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{h.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="section-observe relative" style={{ transitionDelay: '200ms' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/delta%20gas/img/logo.webp"
                alt="Entrega de gás"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-[200px]">
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarSolid key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-brand-dark font-bold text-sm">Nota 5/5</p>
              <p className="text-gray-500 text-xs">Google Avaliações</p>
            </div>
            <div className="absolute -top-5 -right-5 bg-brand-dark rounded-2xl shadow-xl p-5 max-w-[170px]">
              <p className="text-brand-light font-extrabold text-3xl">6+</p>
              <p className="text-white/70 text-xs mt-1">Anos servindo Sinop com qualidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
