import { Scale, FileText, Gavel } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Servico {
  icon: LucideIcon;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
}

const servicos: Servico[] = [
  {
    icon: Scale,
    image: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/Consultivo%20Judicial.webp',
    alt: 'Consultivo Judicial',
    title: 'Consultivo Judicial',
    subtitle: 'Consultoria extrajudicial',
    description:
      'Decisões jurídicas podem ser difíceis e complicadas, por isso é importante ter uma abordagem fundamentada em informações corretas. Ao contratar nossos serviços, você terá a certeza de que estaremos à sua disposição para apoiá-lo em todas as etapas do processo de tomada de decisões.',
  },
  {
    icon: FileText,
    image: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/Ana%CC%81lise%20complexa.webp',
    alt: 'Análise Complexa',
    title: 'Análise Complexa',
    subtitle: 'Parecer Jurídico a Caso Concreto',
    description:
      'Este é um dos nossos serviços mais populares em nossa agenda. Nos temas relacionados a nossas áreas de expertise, independentemente da sua necessidade jurídica, não se preocupe pois oferecemos todos os recursos e as orientações para que você tenha o menor risco tolerado.',
  },
  {
    icon: Gavel,
    image: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/Contencioso%20Judicial.webp',
    alt: 'Contencioso Judicial',
    title: 'Contencioso Judicial',
    subtitle: 'Ações judicializadas e em curso',
    description:
      'Ao longo dos anos, nossa equipe adquiriu a experiência e conhecimentos necessários para tornar o processo judicial menos traumático. Conscientes da inseguranças jurídicas do ordenamento brasileiro, muitos são os caminhos que um processo pode seguir, para isso, estamos preparados para orientar e conduzir o processo judicial pelas veredas mais seguras e menos onerosas em defesa dos seus interesses.',
  },
];

export default function Servicos() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(47,44,34)] mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Dedicação garantida em cada atendimento</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(47,44,34)]/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Icon size={32} className="text-[#d9b33c] mb-2" />
                    <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                    <p className="text-[#d9b33c] text-sm font-medium">{s.subtitle}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
