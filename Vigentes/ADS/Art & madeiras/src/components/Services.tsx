import { Home, Sun, Square, Shield, Smile, Layers, Check, type LucideIcon } from 'lucide-react';

type Service = {
  title: string;
  description: string;
  image: string;
  Icon: LucideIcon;
  iconClass: string;
  features: string[];
};

const services: Service[] = [
  {
    title: 'Decks de Madeira',
    description:
      'Crie ambientes externos acolhedores e sofisticados. Decks duráveis com acabamento premium para áreas de lazer, piscinas e jardins.',
    image:
      'https://storage.lucasmendes.dev/site-sp/art%20e%20madeiras%2Fimg%2Fhomem-deques-ferramentas-construindo.webp',
    Icon: Home,
    iconClass: 'lucide lucide-home w-6 h-6',
    features: ['Madeira tratada e resistente', 'Acabamento impecável', 'Projeto personalizado', 'Instalação profissional'],
  },
  {
    title: 'Pergolados',
    description:
      'Transforme sua área externa em um refúgio de conforto. Pergolados que combinam proteção solar com design elegante.',
    image:
      'https://storage.lucasmendes.dev/site-sp/art%20e%20madeiras%2Fimg%2Fpergolado-madeira-jardim.webp',
    Icon: Sun,
    iconClass: 'lucide lucide-sun w-6 h-6',
    features: ['Design arquitetônico', 'Sombra controlada', 'Estrutura robusta', 'Integração com paisagismo'],
  },
  {
    title: 'Pisos de Madeira',
    description:
      'Sofisticação e aconchego para ambientes internos e externos. Pisos que valorizam cada espaço com beleza natural.',
    image:
      'https://storage.lucasmendes.dev/site-sp/art%20e%20madeiras%2Fimg%2Fpiso-deck-madeira.webp',
    Icon: Square,
    iconClass: 'lucide lucide-square w-6 h-6',
    features: ['Madeira nobre selecionada', 'Nivelamento preciso', 'Tratamento anti-umidade', 'Manutenção facilitada'],
  },
  {
    title: 'Cercas em Madeira',
    description:
      'Segurança e privacidade com charme natural. Cercas projetadas para proteger sem perder a estética.',
    image:
      'https://storage.lucasmendes.dev/site-sp/art%20e%20madeiras%2Fimg%2Fcerca-madeira-gramado.webp',
    Icon: Shield,
    iconClass: 'lucide lucide-shield w-6 h-6',
    features: ['Privacidade garantida', 'Estrutura reforçada', 'Diversos modelos', 'Integração paisagística'],
  },
  {
    title: 'Parques Infantis',
    description:
      'Diversão segura para as crianças. Playgrounds em madeira ecológica com design criativo e estruturas certificadas.',
    image:
      'https://storage.lucasmendes.dev/site-sp/art%20e%20madeiras%2Fimg%2Fparque-infantil-madeira.webp',
    Icon: Smile,
    iconClass: 'lucide lucide-smile w-6 h-6',
    features: ['Segurança certificada', 'Madeira tratada', 'Design lúdico', 'Manutenção reduzida'],
  },
  {
    title: 'Forros de Madeira',
    description:
      'Elegância vista de baixo para cima. Forros que agregam valor estético e conforto térmico aos ambientes.',
    image:
      'https://storage.lucasmendes.dev/site-sp/art%20e%20madeiras%2Fimg%2Fteto-madeira-plantas.webp',
    Icon: Layers,
    iconClass: 'lucide lucide-layers w-6 h-6',
    features: ['Isolamento térmico', 'Acabamento refinado', 'Diversos padrões', 'Instalação especializada'],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-stone-100 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-amber-600 font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
            NOSSOS SERVIÇOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900">Soluções Completas em Madeira</h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">
            Do planejamento à execução, entregamos projetos que combinam funcionalidade, durabilidade e
            beleza natural.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const { Icon } = service;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-stone-200 hover:border-amber-600"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-amber-600 text-white p-3 rounded-full shadow-lg">
                    <Icon className={service.iconClass} />
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mt-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm text-stone-700">
                        <Check className="lucide lucide-check text-emerald-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
