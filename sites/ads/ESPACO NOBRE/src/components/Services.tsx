import { Utensils, Palette, Building2, Music } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  image: string;
  title: string;
  text: string;
}

const services: Service[] = [
  {
    icon: Utensils,
    image: 'https://storage.lucasmendes.dev/site-sp/espaconobre%2FBufe1.jpeg',
    title: 'Buffet Completo',
    text: 'Sabores que encantam. Oferecemos diversos cardápios, da culinária tradicional à contemporânea, preparados com ingredientes de alta qualidade para surpreender seus convidados.',
  },
  {
    icon: Palette,
    image:
      'https://storage.lucasmendes.dev/site-sp/espaconobre%2Fdecoracao.jpeg',
    title: 'Decoração Personalizada',
    text: 'Criamos cenários únicos que refletem sua personalidade. Do clássico ao temático, nossa equipe de decoração transforma o salão para dar vida à sua visão.',
  },
  {
    icon: Building2,
    image:
      'https://storage.lucasmendes.dev/site-sp/espaconobre%2Fcasamento1.jpeg',
    title: 'Estrutura e Locação',
    text: 'Um espaço nobre e totalmente equipado para receber seu evento com o máximo de conforto e elegância. Pista de dança, climatização e toda a infraestrutura que você precisa.',
  },
  {
    icon: Music,
    image:
      'https://storage.lucasmendes.dev/site-sp/espaconobre%2Ffesta15anos.jpeg',
    title: 'Som, Iluminação e DJ',
    text: 'A trilha sonora e a iluminação perfeitas para cada momento da sua festa. Contamos com DJs experientes e equipamentos de ponta para garantir a animação.',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24 bg-gradient-to-b from-white to-[#cba26c]/5"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Soluções Completas Para
          </h2>
          <h3
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: 'rgb(203, 162, 108)' }}
          >
            Uma Festa Perfeita
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos tudo que você precisa para tornar seu evento
            inesquecível, com excelência em cada detalhe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-[#cba26c]/20 hover:border-[#cba26c]/40 hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#cba26c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute top-6 right-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{ backgroundColor: 'rgba(203, 162, 108, 0.95)' }}
                    >
                      <Icon size={30} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8 relative">
                  <div
                    className="absolute top-0 left-8 right-8 h-1 rounded-full"
                    style={{ backgroundColor: 'rgb(203, 162, 108)' }}
                  ></div>
                  <p className="text-gray-700 leading-relaxed mt-2">{s.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
