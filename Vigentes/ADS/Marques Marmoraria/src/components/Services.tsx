import { Home, Bath, TrendingUp, ChefHat, Building2, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  img: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Home,
    iconClass: 'lucide lucide-home',
    img: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/pia-branca-torneira-inox-reforma-cozinha_960x1280.webp',
    title: 'Bancadas de Cozinha',
    description:
      'Bancadas em mármore, granito e quartzo para cozinhas residenciais e comerciais. Acabamento impecável e durabilidade incomparável.',
  },
  {
    icon: Bath,
    iconClass: 'lucide lucide-bath',
    img: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/lavabo-marmore-cinza-pia-artesanal-banheiro_1200x1600.webp',
    title: 'Pias & Lavatórios',
    description:
      'Pias e lavatórios artesanais em pedra natural. Design exclusivo para banheiros e lavabos que impressionam.',
  },
  {
    icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up',
    img: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/escada-marmore-branco-cinza-inacabada-interior_1200x1600.webp',
    title: 'Escadas',
    description:
      'Escadas em mármore branco, granito e ardósia. Elegância e resistência para projetos residenciais e comerciais.',
  },
  {
    icon: ChefHat,
    iconClass: 'lucide lucide-chef-hat',
    img: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/ilha-granito-branco-luz-led-docol_1600x1197.webp',
    title: 'Ilhas Gourmet',
    description:
      'Ilhas de cozinha em pedras naturais que combinam funcionalidade com sofisticação. O centro do seu espaço gourmet.',
  },
  {
    icon: Building2,
    iconClass: 'lucide lucide-building2',
    img: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/placa-de-marmore-guindaste-dentro-do-galpao_1600x900.webp',
    title: 'Fachadas & Pisos',
    description:
      'Revestimentos externos e pisos em pedra natural para projetos arquitetônicos de alto padrão.',
  },
  {
    icon: Layers,
    iconClass: 'lucide lucide-layers',
    img: 'https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/armario-embutido-granito-preto-e-branco_1600x1200.webp',
    title: 'Pedras Importadas',
    description:
      'Catálogo completo de mármores, quartzos e quartzitos nacionais e importados. As melhores pedras do mundo.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#f9f7f4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">O que fazemos</p>
          <h2 className="section-title text-stone-950 mb-5">Serviços em Pedras Naturais</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Da matéria-prima ao acabamento final, cuidamos de cada detalhe para entregar obras que duram gerações.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white overflow-hidden hover:shadow-xl hover:shadow-black/8 transition-all duration-400"
              >
                <div className="gallery-item h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gold-100">
                      <Icon className={`${service.iconClass} text-gold-600`} width={18} height={18} />
                    </div>
                    <h3 className="font-serif font-semibold text-lg text-stone-950">{service.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5562992861117?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm"
          >
            Consultar Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
