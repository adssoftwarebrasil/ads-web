import { Ship, Anchor, Waves } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/scroll';

const stats = [
  {
    icon: Ship,
    gradient: 'from-[rgb(6,172,50)] to-[rgb(5,150,43)]',
    value: '2',
    label: 'Navios Regionais',
    extraClass: '',
  },
  {
    icon: Anchor,
    gradient: 'from-[rgb(253,133,17)] to-[rgb(220,115,15)]',
    value: '2',
    label: 'Ferry Boats',
    extraClass: '',
  },
  {
    icon: Waves,
    gradient: 'from-[rgb(41,41,41)] to-[rgb(30,30,30)]',
    value: '+20',
    label: 'Anos de Experiência',
    extraClass: 'sm:col-span-2 lg:col-span-1',
  },
];

const gallery = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/coimbra%20navegacoes%2Fimg%2Fbarco-branco-verde.webp',
    title: 'Embarcação de Passageiros',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/coimbra%20navegacoes%2Fimg%2Fbalsa-branca-rio.webp',
    title: 'Ferry Boat de Cargas',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/coimbra%20navegacoes%2Fimg%2Fbarco-verde-rio.webp',
    title: 'Navegação Regional',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/coimbra%20navegacoes%2Fimg%2Fbarco-rio-agua.webp',
    title: 'Transporte Fluvial',
  },
];

export default function Fleet() {
  return (
    <section id="frota" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(41,41,41)] mb-4">
            Nossa Frota
          </h2>
          <div className="w-24 h-1 bg-[rgb(253,133,17)] mx-auto mb-6"></div>
          <p className="text-xl text-[rgb(160,180,187)] max-w-3xl mx-auto">
            Embarcações modernas e seguras para atender todas as suas
            necessidades
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`bg-gradient-to-br ${stat.gradient} rounded-2xl p-8 text-white ${stat.extraClass}`}
              >
                <Icon size={48} className="mb-4" />
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            );
          })}
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {gallery.map((item) => (
            <div
              key={item.title}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(6,172,50)] to-[rgb(253,133,17)] rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para navegar conosco?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ajudar você a alcançar seu
            destino com segurança e conforto.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[rgb(6,172,50)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105"
          >
            Fale Conosco Agora
          </a>
        </div>
      </div>
    </section>
  );
}
