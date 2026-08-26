import { Wind, Armchair, Bath, Wifi, Music, Package, Car, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  label: string;
}

interface Vehicle {
  image: string;
  alt: string;
  badge: string;
  title: string;
  features: Feature[];
  ideal: string;
  waText: string;
}

const vehicles: Vehicle[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/wp%20transportes/atualizacao/onibus-branco-laranja-estacionado-perfil-direito_1280x960.webp',
    alt: 'Ônibus Rodoviário',
    badge: '45-50 Passageiros',
    title: 'Ônibus Rodoviário',
    features: [
      { icon: Wind, label: 'Ar-condicionado' },
      { icon: Armchair, label: 'Poltronas reclináveis' },
      { icon: Bath, label: 'Banheiro' },
      { icon: Wifi, label: 'Wi-Fi' },
      { icon: Music, label: 'Sistema de som' },
    ],
    ideal: 'Viagens longas e turismo',
    waText:
      'https://wa.me/557981183939?text=Olá! Gostaria de solicitar um orçamento para Ônibus Rodoviário.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/wp%20transportes/atualizacao/minibus-branco-volare-wp-transportes-estrada_1258x832.webp',
    alt: 'Micro-ônibus',
    badge: '20-30 Passageiros',
    title: 'Micro-ônibus',
    features: [
      { icon: Wind, label: 'Ar-condicionado' },
      { icon: Armchair, label: 'Poltronas confortáveis' },
      { icon: Package, label: 'Porta-malas amplo' },
      { icon: Music, label: 'Som ambiente' },
    ],
    ideal: 'Grupos médios e eventos',
    waText:
      'https://wa.me/557981183939?text=Olá! Gostaria de solicitar um orçamento para Micro-ônibus.',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/wp%20transportes/atualizacao/carro-branco-toyota-corolla-vs-transportes_1280x690.webp',
    alt: 'Vans e Automóveis',
    badge: '7-15 Passageiros',
    title: 'Vans e Automóveis',
    features: [
      { icon: Wind, label: 'Ar-condicionado' },
      { icon: Car, label: 'Motorista executivo' },
      { icon: Armchair, label: 'Conforto premium' },
      { icon: Users, label: 'Pontualidade' },
    ],
    ideal: 'Executivos e grupos pequenos',
    waText:
      'https://wa.me/557981183939?text=Olá! Gostaria de solicitar um orçamento para Vans e Automóveis.',
  },
];

const gallery = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/wp%20transportes/atualizacao/van-mercedes-sprinter-branca-vs-transportes_1280x803.webp',
    alt: 'Galeria de frota 1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/wp%20transportes/atualizacao/onibus-branco-laranja-wp-transportes-estacionado_1280x960.webp',
    alt: 'Galeria de frota 2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/wp%20transportes/atualizacao/onibus-branco-verde-transportes-estacionado-rua_1280x720.webp',
    alt: 'Galeria de frota 3',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/wp%20transportes/atualizacao/onibus-brancos-estacionados-na-rua-com-pessoas_1280x960.webp',
    alt: 'Galeria de frota 4',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/wp%20transportes/atualizacao/onibus-executivo-branco-estacionado-na-rua_1280x720.webp',
    alt: 'Galeria de frota 5',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/wp%20transportes/atualizacao/onibus-prata-estacionado-dia-ensolarado-avenida_720x1280.webp',
    alt: 'Galeria de frota 6',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/wp%20transportes/atualizacao/onibus-preto-estacionado-bicicleta-dentro-rua_960x1280.webp',
    alt: 'Galeria de frota 7',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/wp%20transportes/atualizacao/onibus-preto-estacionado-na-rua-arvore-ceu_720x1280.webp',
    alt: 'Galeria de frota 8',
  },
];

export default function Fleet() {
  return (
    <section id="frota" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-[rgb(245,131,31)]/10 text-[rgb(245,131,31)] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nossa Frota
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(36,31,33)] mb-4">
            Veículos Modernos e Bem Conservados
          </h2>
          <p className="text-lg text-[rgb(51,51,51)] max-w-2xl mx-auto">
            Escolha o veículo ideal para sua necessidade
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col h-full"
            >
              <div className="relative h-64 shrink-0 overflow-hidden bg-gray-100">
                <img
                  src={vehicle.image}
                  alt={vehicle.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[rgb(245,131,31)] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-20">
                  {vehicle.badge}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[rgb(36,31,33)] mb-4">{vehicle.title}</h3>
                <div className="space-y-3 mb-6">
                  {vehicle.features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.label} className="flex items-center text-[rgb(51,51,51)]">
                        <div className="w-8 h-8 bg-[rgb(245,131,31)]/10 rounded-lg flex items-center justify-center mr-3">
                          <Icon className="w-4 h-4 text-[rgb(245,131,31)]" />
                        </div>
                        <span className="text-sm">{feature.label}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="mb-6 p-4 bg-[rgb(245,245,245)] rounded-lg">
                  <p className="text-sm text-[rgb(51,51,51)]">
                    <span className="font-semibold text-[rgb(36,31,33)]">Ideal para:</span>{' '}
                    {vehicle.ideal}
                  </p>
                </div>
                <a
                  href={vehicle.waText}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block w-full bg-[rgb(245,131,31)] hover:bg-[rgb(220,110,20)] text-white text-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-[rgb(36,31,33)] mb-4">
              Galeria de Imagens
            </h3>
            <p className="text-lg text-[rgb(51,51,51)] max-w-2xl mx-auto">
              Conheça mais detalhes da nossa frota e padrão de qualidade
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {gallery.map((item) => (
              <div
                key={item.alt}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
