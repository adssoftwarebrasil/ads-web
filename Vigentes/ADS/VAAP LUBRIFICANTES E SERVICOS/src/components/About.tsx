import { CheckCircle2, Award, MapPin, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const FACHADA = 'https://storage.lucasmendes.dev/site-sp/vaap%20lubrificantes/img/fachada-verde-castrol-auto-service-carros_1280x591.webp';
const MOTOR = 'https://storage.lucasmendes.dev/site-sp/vaap%20lubrificantes/img/motor-mercedes-oleo-castrol-magnatec_4284x5712.webp';

const highlights = [
  'Autorizado Castrol Auto Service na região',
  'Atendimento personalizado e transparente',
  'Produtos 100% originais e certificados',
  'Equipe treinada e qualificada',
  'Ambiente limpo e organizado',
  'Atendemos toda a região de Lucas do Rio Verde',
];

const milestones = [
  { icon: Calendar, value: '2014', label: 'Ano de Fundação' },
  { icon: Award, value: '+10', label: 'Anos de Mercado' },
  { icon: MapPin, value: '5+', label: 'Cidades Atendidas' },
];

export default function About() {
  const { ref: leftRef, isInView: leftInView } = useInView();
  const { ref: rightRef, isInView: rightInView } = useInView();

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="inline-block bg-brand-green/10 text-brand-green font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              Nossa História
            </span>
            <h2 className="section-title mb-6">
              10 Anos Cuidando do Seu Veículo com{' '}
              <span className="text-brand-green">Excelência e Confiança</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A Vaap Castrol Lubrificantes surgiu da necessidade de oferecer um atendimento
              especializado aliado a produtos de alta qualidade. Fundada em 2014, atuamos há
              mais de 10 anos no mercado de Lucas do Rio Verde e região.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Somos <strong className="text-brand-green font-semibold">Autorizado Castrol Auto Service</strong> na
              região, oferecendo toda a linha de lubrificantes da marca, além de serviços
              especializados de troca de óleo, câmbio automático, diferencial e fluido de radiador.
              Nosso compromisso é sempre levar excelência no serviço e no relacionamento com nossos clientes.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              {milestones.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-3">
                  <Icon size={20} className="text-brand-green" />
                  <div>
                    <p className="font-bold text-xl text-gray-900 leading-none">{value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={rightRef}
            className={`transition-all duration-700 ${
              rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={FACHADA}
                  alt="Fachada Vaap Castrol Auto Service"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 bg-brand-green text-white text-sm font-bold px-4 py-2 rounded-full">
                    <Award size={16} />
                    Autorizado Castrol Auto Service
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg h-40">
                  <img
                    src={MOTOR}
                    alt="Motor com óleo Castrol Magnatec"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-brand-green rounded-2xl p-6 flex flex-col justify-center">
                  <p className="text-white/80 text-sm font-medium mb-1">Satisfação Garantida</p>
                  <p className="text-white font-black text-4xl">4.9</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-300 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/70 text-xs mt-1.5">Google Reviews</p>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-green/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-green/5 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
