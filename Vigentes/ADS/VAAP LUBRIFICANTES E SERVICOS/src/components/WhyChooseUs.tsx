import { Heart, Eye, Medal, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const reasons = [
  {
    icon: Heart,
    title: 'Atendimento Personalizado',
    description: 'Cada cliente recebe atenção única. Explicamos o serviço, as necessidades do veículo e os produtos utilizados com total transparência.',
  },
  {
    icon: Eye,
    title: 'Total Transparência',
    description: 'Mostramos tudo que é feito no veículo, desde a drenagem do óleo antigo até a inserção dos novos produtos, sem surpresas.',
  },
  {
    icon: Medal,
    title: 'Qualidade Comprovada',
    description: 'Somos Autorizados Castrol Auto Service. Isso garante que os produtos utilizados são originais e o serviço segue padrões rígidos de qualidade.',
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Nossa equipe é treinada e qualificada, focada em entregar o melhor resultado para o seu veículo com agilidade e cuidado.',
  },
];

const areaLocais = ['Lucas do Rio Verde', 'Nova Mutum', 'Tapurah', 'Ipiranga do Norte', 'Sorriso'];

export default function WhyChooseUs() {
  const { ref: titleRef, isInView: titleInView } = useInView();
  const { ref: cardsRef, isInView: cardsInView } = useInView();

  return (
    <section className="py-20 lg:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-600 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block bg-brand-green/10 text-brand-green font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Por que nos escolher
          </span>
          <h2 className="section-title">Nosso Diferencial</h2>
          <p className="section-subtitle mx-auto">
            Mais do que trocar óleo — oferecemos uma experiência completa de cuidado
            com o seu veículo.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
        >
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover transition-all duration-500 ${
                cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-4">
                <Icon size={24} className="text-brand-green" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-green rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">Área de Atendimento</h3>
            <p className="text-white/80 text-sm mb-4">
              Atendemos clientes de toda a região Centro-Oeste de Mato Grosso.
            </p>
            <div className="flex flex-wrap gap-2">
              {areaLocais.map((local) => (
                <span
                  key={local}
                  className="bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full border border-white/30"
                >
                  📍 {local}
                </span>
              ))}
            </div>
          </div>
          <a
            href="https://wa.me/556584438839?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-brand-green font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Falar com a Equipe
          </a>
        </div>
      </div>
    </section>
  );
}
