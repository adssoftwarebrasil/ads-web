import {
  Award,
  Smile,
  Sparkles,
  Shield,
  Clock,
  LucideIcon,
} from 'lucide-react';

interface Benefit {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const benefits: Benefit[] = [
  {
    Icon: Sparkles,
    iconClass: 'lucide lucide-sparkles',
    title: 'Totalmente Invisível',
    text: 'Ninguém vai perceber que você está fazendo tratamento ortodôntico',
  },
  {
    Icon: Smile,
    iconClass: 'lucide lucide-smile',
    title: 'Conforto Superior',
    text: 'Sem fios ou braquetes que machucam, muito mais confortável',
  },
  {
    Icon: Shield,
    iconClass: 'lucide lucide-shield',
    title: 'Removível',
    text: 'Retire para comer, beber e fazer sua higiene bucal normalmente',
  },
  {
    Icon: Award,
    iconClass: 'lucide lucide-award',
    title: 'Resultados Previsíveis',
    text: 'Tecnologia 3D mostra como será seu sorriso antes de começar',
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock',
    title: 'Menos Consultas',
    text: 'Economia de tempo com menos idas ao consultório',
  },
];

interface Step {
  num: string;
  title: string;
  text: string;
  connector: boolean;
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Avaliação Digital',
    text: 'Escaneamento 3D da sua boca sem moldes desconfortáveis',
    connector: true,
  },
  {
    num: '02',
    title: 'Plano Personalizado',
    text: 'Criamos seu tratamento único com simulação do resultado final',
    connector: true,
  },
  {
    num: '03',
    title: 'Alinhadores Sob Medida',
    text: 'Você recebe seus alinhadores transparentes personalizados',
    connector: true,
  },
  {
    num: '04',
    title: 'Sorriso Perfeito',
    text: 'Acompanhamento até alcançar o sorriso dos seus sonhos',
    connector: false,
  },
];

export default function Invisalign() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgb(100,149,237)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[rgb(212,175,55)]/5 rounded-full blur-3xl"></div>
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="absolute -top-3 -left-3 bg-[rgb(212,175,55)] text-white p-2.5 rounded-lg shadow-2xl flex items-center space-x-2 z-10 animate-pulse">
                <Award className="lucide lucide-award w-4 h-4" />
                <span className="font-bold text-xs">
                  Especialista Certificado
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mt-8 ml-8">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2FInvisalign.webp"
                  alt="Tratamento Invisalign"
                  className="w-full h-auto max-h-[400px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(13,51,98)]/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-2xl p-4 max-w-[200px] hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="bg-[rgb(100,149,237)]/10 p-2 rounded-lg">
                    <Smile className="lucide lucide-smile w-6 h-6 text-[rgb(100,149,237)]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[rgb(13,51,98)]">
                      98%
                    </p>
                    <p className="text-xs text-gray-600">Satisfação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(100,149,237)] to-[rgb(13,51,98)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="lucide lucide-sparkles w-4 h-4" />
              Tecnologia de Ponta
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(13,51,98)] mb-6 leading-tight">
              Invisalign: O Futuro da Ortodontia Está Aqui
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Transforme seu sorriso com a tecnologia mais avançada do mercado. O{' '}
              <strong>Invisalign</strong> utiliza alinhadores transparentes
              personalizados que corrigem seus dentes de forma discreta,
              confortável e eficaz.
            </p>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              Ideal para quem busca resultados profissionais sem abrir mão da
              estética e da praticidade no dia a dia. Você continua sua rotina
              normalmente enquanto seu sorriso se transforma!
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-[rgb(100,149,237)]/10 p-2 rounded-lg flex-shrink-0">
                    <b.Icon
                      className={`${b.iconClass} w-5 h-5 text-[rgb(100,149,237)]`}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[rgb(13,51,98)] text-sm mb-1">
                      {b.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5599982501000?text=Olá! Gostaria de saber mais sobre o tratamento Invisalign."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(212,175,55)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
            >
              Quero Transformar Meu Sorriso
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[rgb(13,51,98)] to-[rgb(100,149,237)] rounded-3xl p-8 sm:p-12 lg:p-16 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Como Funciona o Invisalign?
            </h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Um processo simples e tecnológico para o seu sorriso perfeito
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 h-full border border-white/20">
                  <div className="text-6xl font-bold text-white/20 mb-4">
                    {step.num}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
                {step.connector && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/30"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-2xl">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Tecnologia 3D de Última Geração:</strong> Veja como será
                seu sorriso antes mesmo de começar o tratamento. Cada alinhador é
                fabricado sob medida para você!
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  ✓ Sem Moldes
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  ✓ Indolor
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full">
                  ✓ Resultados Garantidos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
