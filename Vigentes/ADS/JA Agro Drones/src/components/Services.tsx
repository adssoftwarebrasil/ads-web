import { Droplets, Map, Sprout, Video, Camera, Layers, type LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClass: string;
  link: string;
  image?: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    title: 'Pulverização Aérea',
    description:
      'Aplicação precisa de defensivos agrícolas com drones de última geração. Cobertura uniforme, redução de deriva e economia de insumos de até 30% comparado aos métodos convencionais.',
    icon: Droplets,
    iconClass: 'lucide lucide-droplets text-[#8fd44e]',
    link: 'http://wa.me/556295016058?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20Pulveriza%C3%A7%C3%A3o%20A%C3%A9rea.',
    image:
      'https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/img/drone-agricola-pulverizacao-goiania-seguranca-precisao_1080x1080.webp',
    featured: true,
  },
  {
    title: 'Mapeamento Aéreo',
    description:
      'Mapeamento detalhado de áreas rurais e urbanas com alta resolução. Geração de mapas georreferenciados, modelos 3D e análises NDVI para decisões mais inteligentes na gestão das lavouras.',
    icon: Map,
    iconClass: 'lucide lucide-map text-[#6ab534]',
    link: 'http://wa.me/556295016058?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20Mapeamento%20A%C3%A9reo.',
    image:
      'https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/img/drone-agricola-pulverizando-lavoura-milho-soja_1024x1379.webp',
  },
  {
    title: 'Adubação Aérea',
    description:
      'Aplicação de fertilizantes sólidos e líquidos com máxima precisão e eficiência. Distribuição homogênea em toda a área, respeitando a variabilidade do solo e potencializando a produtividade.',
    icon: Sprout,
    iconClass: 'lucide lucide-sprout text-[#6ab534]',
    link: 'http://wa.me/556295016058?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20Aduba%C3%A7%C3%A3o%20A%C3%A9rea.',
    image:
      'https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/img/agro-drone-pulverizacao-inteligente-aerea-campo_1080x1241.webp',
  },
  {
    title: 'Vídeos Comerciais',
    description:
      'Produções audiovisuais aéreas de alto impacto para sua propriedade, empresa ou evento. Imagens cinematográficas que valorizam seu patrimônio e geram engajamento nas redes sociais.',
    icon: Video,
    iconClass: 'lucide lucide-video text-[#6ab534]',
    link: 'http://wa.me/556295016058?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20V%C3%ADdeos%20Comerciais.',
  },
  {
    title: 'Fotos Aéreas',
    description:
      'Captura de imagens aéreas profissionais para fins comerciais, imobiliários, jornalísticos e pessoais. Perspectivas únicas que mostram o que nenhuma câmera no chão consegue.',
    icon: Camera,
    iconClass: 'lucide lucide-camera text-[#6ab534]',
    link: 'http://wa.me/556295016058?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20Fotos%20A%C3%A9reas.',
  },
  {
    title: 'Chá Revelação',
    description:
      'Transforme um momento especial em uma experiência inesquecível com fotos e vídeos aéreos cinematográficos do seu chá revelação. Registros únicos que ficam para sempre na memória.',
    icon: Layers,
    iconClass: 'lucide lucide-layers text-[#6ab534]',
    link: 'http://wa.me/556295016058?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20Ch%C3%A1%20Revela%C3%A7%C3%A3o.',
  },
];

function Arrow() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
    </svg>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#6ab534] text-sm font-bold tracking-widest uppercase mb-3">
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Soluções Completas em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8427] to-[#8fd44e]">Drones</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Da lavoura ao registro especial, combinamos tecnologia de ponta com experiência para entregar resultados
            excepcionais no campo e além dele.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  service.featured
                    ? 'border-[#4a8427]/60 bg-gradient-to-br from-[#1a3a0a] to-[#0f1f06] hover:shadow-[#4a8427]/20'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:shadow-black/50'
                }`}
              >
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 h-48 bg-gradient-to-b from-transparent to-black/60"></div>
                  </div>
                )}
                <div className="p-6">
                  <div
                    className={`inline-flex p-3 rounded-xl mb-4 ${
                      service.featured ? 'bg-[#4a8427]/30' : 'bg-white/[0.07]'
                    }`}
                  >
                    <Icon className={service.iconClass} width={24} height={24} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{service.description}</p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 mt-5 text-sm font-semibold transition-colors ${
                      service.featured
                        ? 'text-[#8fd44e] hover:text-white'
                        : 'text-[#6ab534] hover:text-[#8fd44e]'
                    }`}
                  >
                    Saiba mais
                    <Arrow />
                  </a>
                </div>
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-[#4a8427] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    Principal
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
