import { Clock, Calendar, CreditCard, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const features: { icon: LucideIcon; label: string }[] = [
  { icon: Clock, label: 'Atendimento 24 horas' },
  { icon: Calendar, label: 'Agendamento rápido' },
  { icon: CreditCard, label: 'Formas de pagamento flexíveis' },
  { icon: Users, label: 'Equipe especializada' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 opacity-100 translate-y-0">
          <div className="order-2 lg:order-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/ms%20climatizadores%2Fimg%2Fa-solucao-perfeita.jpg"
              alt="MS Climatizadores - A solução perfeita"
              className="rounded-2xl shadow-2xl shadow-gray-900/10 w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              15 Anos de Experiência
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sua Parceira em Conforto Térmico
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Fundada em 2010, a MS Climatizadores nasceu com a missão de levar conforto térmico aos
              lares e empresas de Campo Grande MS. Desde o surgimento dos primeiros climatizadores no
              mercado, estamos presentes, evoluindo e nos especializando.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Atendemos desde residências até grandes empresas, sempre com um compromisso: oferecer
              soluções personalizadas com atendimento diferenciado, agendamento rápido e as melhores
              condições de pagamento.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-yellow-500 transition-colors"
                  >
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon width={20} height={20} className="text-gray-900" />
                    </div>
                    <span className="text-gray-900 font-medium">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
